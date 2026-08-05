# 诚悦新媒体运营工作台 · 云部署包（Render）

把工作台「前端页面 + 实时同步后端」整体部署到 Render，实现 **任意网络访问 + 多设备实时同步**。
部署后，手机用流量（不连 WiFi）也能打开，且一处修改、处处秒级更新。

## 这个包里有什么
- `server.js` —— 零依赖 Node 服务：同一端口既托管 `public/` 静态页面，又提供 `/api/state` 读写共享状态
- `public/index.html` —— 工作台前端（含 8 个模块 + 移动端布局 + 同步引擎）
- `public/data/*.js` —— AI 技巧库 / 剪映教程数据
- `render.yaml` —— Render Blueprint 配置（含 1GB 持久磁盘，避免免费版重启丢数据）
- `package.json` —— 启动脚本 `npm start`

## 部署步骤（5 分钟，需 GitHub 账号 + Render 账号）

### 1. 把本文件夹推到 GitHub
在你的电脑（有 git 和网络的机器）上执行：
```bash
# 在 workbench-render/ 目录里
git init
git add -A
git commit -m "诚悦工作台同步后端"
# 去 github.com 新建一个空仓库，例如 chengyue-workbench-sync，然后：
git remote add origin https://github.com/<你的用户名>/chengyue-workbench-sync.git
git branch -M main
git push -u origin main
```

### 2. 在 Render 一键部署
1. 打开 https://dashboard.render.com  → 注册/登录（可用 GitHub 直接授权）
2. 右上角 **New** → **Blueprint**
3. 连接你的 GitHub，选中 `chengyue-workbench-sync` 仓库
4. Render 会自动读取 `render.yaml`，显示服务 `chengyue-workbench-sync`
5. 点 **Apply** / **Create** 开始部署（首次约 1–2 分钟）
6. 部署完成后，Render 给你一个地址如 `https://chengyue-workbench-sync.onrender.com`

### 3. 打开使用
- 电脑 / 手机浏览器直接打开上面的地址即可
- 顶栏左侧有同步圆点：绿=已连接同步、黄=连接中、红=离线
- **首次使用建议**：在你数据最全的设备上先打开一次，把现有数据上传到云端；之后其他设备再打开就会自动同步到

## 重要说明
- **免费版（free plan）**：服务空闲 15 分钟后会休眠，首次打开需等待约 30 秒冷启动；且文件系统临时——所以本包已挂 **1GB 持久磁盘（约 $0.15/月）** 专门存 `state.json`，重启不丢数据。
- 若想**永不停机、零冷启动**，把 `render.yaml` 里的 `plan: free` 改成 `plan: starter`（约 $7/月）。
- 磁盘挂载点 `/data` 由 `DATA_DIR` 环境变量指定，server.js 已适配；本地测试不挂盘时用默认目录即可。

## 本地测试（可选）
```bash
cd workbench-render
node server.js          # 默认 http://localhost:8787
```
