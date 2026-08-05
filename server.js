// 诚悦新媒体运营工作台 · 实时同步后端（零依赖，仅用 Node 内置模块）
// 持久化策略：
//   1) 本地 DATA_DIR（临时文件系统）做即时缓存；
//   2) 若配置了 GITHUB_TOKEN，则每次改动把 state.json 通过 GitHub Contents API
//      写回私有仓库，从而实现"免费 + 重启不丢 + 多设备实时同步"。
//      这样不需要 Render 付费磁盘，也不需要绑卡。
// 用法：node server.js   （可选 PORT=8787 node server.js）
const http = require('http');
const fs = require('fs');
const path = require('path');
const https = require('https');

const DIR = __dirname;
const PORT = process.env.PORT || 8787;
// 共享状态写到 DATA_DIR（Render 等平台挂载持久磁盘时设为挂载点，如 /data）；默认用程序目录
const STATE_DIR = process.env.DATA_DIR || DIR;
const STATE_FILE = path.join(STATE_DIR, 'state.json');
const PUBLIC_DIR = path.join(DIR, 'public');

// —— GitHub 持久化配置（不绑卡的关键）——
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '';
const GITHUB_REPO = process.env.GITHUB_REPO || 'zj1262789250-jpg/chengyue-workbench-sync';
const STATE_FILE_IN_REPO = 'state.json';

// 启动时载入已有共享状态（若无则空）
let state = { lastModified: 0, state: {} };
try {
  const raw = fs.readFileSync(STATE_FILE, 'utf8');
  const obj = JSON.parse(raw);
  if (obj && typeof obj === 'object') state = obj;
} catch (e) { /* 首次运行，使用空状态 */ }

function persistLocal() {
  try { fs.writeFileSync(STATE_FILE, JSON.stringify(state)); }
  catch (e) { console.error('写本地状态文件失败：', e); }
}

// —— GitHub Contents API 封装 ——
function ghRequest(method, apiPath, bodyObj) {
  return new Promise((resolve, reject) => {
    const data = bodyObj ? JSON.stringify(bodyObj) : null;
    const req = https.request({
      hostname: 'api.github.com',
      path: apiPath,
      method,
      headers: {
        'User-Agent': 'chengyue-workbench',
        'Authorization': 'Bearer ' + GITHUB_TOKEN,
        'Accept': 'application/vnd.github+json',
        'Content-Type': 'application/json'
      }
    }, res => {
      let buf = '';
      res.on('data', c => buf += c);
      res.on('end', () => {
        let json; try { json = JSON.parse(buf); } catch (e) { json = buf; }
        if (res.statusCode >= 200 && res.statusCode < 300) resolve(json);
        else reject({ status: res.statusCode, body: json });
      });
    });
    req.on('error', reject);
    if (data) req.write(data);
    req.end();
  });
}

// 从 GitHub 载入共享状态（启动 / 唤醒时调用）
async function loadFromGitHub() {
  if (!GITHUB_TOKEN) return;
  try {
    const d = await ghRequest('GET', `/repos/${GITHUB_REPO}/contents/${STATE_FILE_IN_REPO}`);
    const content = Buffer.from(d.content, 'base64').toString('utf8');
    const obj = JSON.parse(content);
    if (obj && typeof obj === 'object') {
      state = obj;
      console.log('✅ 已从 GitHub 仓库载入共享状态');
    }
  } catch (e) {
    if (e && e.status === 404) console.log('ℹ️ GitHub 暂无历史状态，使用空状态');
    else console.error('⚠️ 从 GitHub 载入状态失败：', e && e.status);
  }
}

// 把共享状态写回 GitHub 仓库（持久化）
async function saveToGitHub() {
  if (!GITHUB_TOKEN) return false;
  const content = Buffer.from(JSON.stringify(state)).toString('base64');
  let sha;
  try {
    const d = await ghRequest('GET', `/repos/${GITHUB_REPO}/contents/${STATE_FILE_IN_REPO}`);
    sha = d.sha;
  } catch (e) { /* 文件不存在，创建即可 */ }
  const body = { message: 'sync: update workbench state', content };
  if (sha) body.sha = sha; // 更新已有文件需要 sha
  try {
    await ghRequest('PUT', `/repos/${GITHUB_REPO}/contents/${STATE_FILE_IN_REPO}`, body);
    return true;
  } catch (e) {
    console.error('⚠️ 写回 GitHub 失败：', e && e.status);
    return false;
  }
}

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  // 允许跨域（同源时无害，便于未来扩展）
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.writeHead(204); return res.end(); }

  const u = new URL(req.url, 'http://localhost');
  const p = u.pathname;

  // 健康检查
  if (p === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ ok: true, github: !!GITHUB_TOKEN, lastModified: state.lastModified }));
  }

  // 共享状态读写
  if (p === '/api/state') {
    if (req.method === 'GET') {
      res.setHeader('Cache-Control', 'no-store');
      const since = parseInt(u.searchParams.get('since') || '0', 10);
      if (since && state.lastModified && since >= state.lastModified) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ unchanged: true, lastModified: state.lastModified }));
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(state));
    }
    if (req.method === 'POST') {
      let body = '';
      req.on('data', c => { body += c; if (body.length > 8e6) req.destroy(); });
      req.on('end', async () => {
        try {
          const obj = JSON.parse(body);
          if (obj && obj.state && typeof obj.state === 'object') {
            state = { lastModified: Date.now(), state: obj.state };
            persistLocal();                       // 本地即时缓存
            await saveToGitHub();                 // 写回 GitHub（持久化，不丢）
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ ok: true, lastModified: state.lastModified }));
          }
          res.writeHead(400, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ ok: false, err: 'bad payload' }));
        } catch (e) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ ok: false, err: 'invalid json' }));
        }
      });
      return;
    }
  }

  // 静态资源：服务于 public/ 目录
  let rel = p === '/' ? '/index.html' : p;
  if (rel.includes('..')) { res.writeHead(403); return res.end('forbidden'); }
  const fp = path.join(PUBLIC_DIR, rel);
  fs.readFile(fp, (err, data) => {
    if (err) {
      // SPA 兜底：未知路径回退到 index.html
      fs.readFile(path.join(PUBLIC_DIR, 'index.html'), (e2, html) => {
        if (e2) { res.writeHead(404); return res.end('not found'); }
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' });
        res.end(html);
      });
      return;
    }
    const ext = path.extname(fp).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    res.end(data);
  });
});

// 启动：先尝试从 GitHub 载入已有状态，再监听端口
loadFromGitHub().finally(() => {
  server.listen(PORT, '0.0.0.0', () => {
    console.log('✅ 工作台同步服务已启动');
    console.log('   本机：  http://localhost:' + PORT);
    console.log('   手机（同 WiFi）：http://<本机局域网IP>:' + PORT);
    console.log('   GitHub 持久化：' + (GITHUB_TOKEN ? '已开启 (' + GITHUB_REPO + ')' : '未配置（仅本地缓存）'));
    console.log('   共享状态文件：' + STATE_FILE);
  });
});
