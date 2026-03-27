#!/bin/bash

# ========== 部署到 GitHub 的脚本 ==========
# 使用方法：
# 1. 在 GitHub 创建新仓库
# 2. 获取 GitHub Personal Access Token
# 3. 修改下面的变量
# 4. 运行：bash deploy-to-github.sh

# ========== 配置区域 ==========
# 请替换为你的 GitHub 用户名
GITHUB_USERNAME="your-username"

# 请替换为你的仓库名
GITHUB_REPO="haotianze-website"

# 请替换为你的 GitHub Token（从 https://github.com/settings/tokens 获取）
GITHUB_TOKEN="your-token-here"

# ================================

echo "=========================================="
echo "开始推送代码到 GitHub..."
echo "=========================================="

# 1. 检查是否有未提交的更改
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  检测到未提交的更改，正在提交..."
    git add .
    git commit -m "Update project files"
fi

# 2. 添加远程仓库
REMOTE_URL="https://${GITHUB_TOKEN}@github.com/${GITHUB_USERNAME}/${GITHUB_REPO}.git"

if git remote get-url origin >/dev/null 2>&1; then
    echo "📦 已存在远程仓库，更新 URL..."
    git remote set-url origin "$REMOTE_URL"
else
    echo "📦 添加远程仓库..."
    git remote add origin "$REMOTE_URL"
fi

# 3. 推送到 GitHub
echo "🚀 推送代码到 GitHub..."
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo "✅ 推送成功！"
    echo "🌐 访问你的仓库：https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO}"
else
    echo "❌ 推送失败，请检查："
    echo "   1. Token 是否正确"
    echo "   2. 仓库名是否正确"
    echo "   3. 网络连接是否正常"
    exit 1
fi

echo "=========================================="
echo "下一步：访问 Vercel 导入此仓库"
echo "=========================================="
