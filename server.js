// 诚悦新媒体运营工作台 · 实时同步后端（零依赖，仅用 Node 内置模块）
// 用法：node server.js   （可选 PORT=8787 node server.js）
const http = require('http');
const fs = require('fs');
const path = require('path');

const DIR = __dirname;
const PORT = process.env.PORT || 8787;
// 共享状态写到 DATA_DIR（Render 等平台挂载持久磁盘时设为挂载点，如 /data）；默认用程序目录
const STATE_DIR = process.env.DATA_DIR || DIR;
const STATE_FILE = path.join(STATE_DIR, 'state.json');
const PUBLIC_DIR = path.join(DIR, 'public');

// 启动时载入已有共享状态（若无则空）
let state = { lastModified: 0, state: {} };
try {
  const raw = fs.readFileSync(STATE_FILE, 'utf8');
  const obj = JSON.parse(raw);
  if (obj && typeof obj === 'object') state = obj;
} catch (e) { /* 首次运行，使用空状态 */ }

function persist() {
  try { fs.writeFileSync(STATE_FILE, JSON.stringify(state)); }
  catch (e) { console.error('写状态文件失败：', e); }
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
    return res.end(JSON.stringify({ ok: true, lastModified: state.lastModified }));
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
      req.on('end', () => {
        try {
          const obj = JSON.parse(body);
          if (obj && obj.state && typeof obj.state === 'object') {
            state = { lastModified: Date.now(), state: obj.state };
            persist();
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

server.listen(PORT, '0.0.0.0', () => {
  console.log('✅ 工作台同步服务已启动');
  console.log('   本机：  http://localhost:' + PORT);
  console.log('   手机（同 WiFi）：http://<本机局域网IP>:' + PORT);
  console.log('   共享状态文件：' + STATE_FILE);
});
