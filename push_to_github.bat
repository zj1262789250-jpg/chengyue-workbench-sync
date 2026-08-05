@echo off
REM ============================================================
REM  诚悦工作台 · 一键推送到 GitHub
REM  Usage: 把下面 REPO_URL 改成你的空仓库地址，双击本文件即可
REM  注意：GitHub 上建的仓库必须「空仓库」（不要勾 README/.gitignore/LICENSE）
REM ============================================================
set "REPO_URL=https://github.com/你的用户名/chengyue-workbench-sync.git"

cd /d "%~dp0"

git init
git add -A
git commit -m "诚悦工作台同步后端 - 初始提交"
git branch -M main
git remote remove origin >nul 2>&1
git remote add origin %REPO_URL%
git push -u origin main

echo.
echo ============================================
echo  如果上面报错 "failed to push" 且远程仓库非空，
echo  请到 GitHub 删掉该仓库重建为「空仓库」再双击本文件。
echo  推送中若弹窗，请用 GitHub 账号登录（或粘贴 Token）。
echo ============================================
pause
