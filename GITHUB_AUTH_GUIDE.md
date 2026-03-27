# GitHub Token 凭据配置说明

## 方法1：使用 git credential helper（推荐）

1. 生成 Personal Access Token：
   - 访问：https://github.com/settings/tokens
   - 点击 "Generate new token" → "Generate new token (classic)"
   - 设置过期时间
   - 勾选 `repo` 权限
   - 点击生成并复制 token

2. 在本地配置 git：
   ```bash
   git config --global credential.helper store
   ```

3. 推送时会提示输入用户名和密码：
   - 用户名：你的 GitHub 用户名
   - 密码：刚才生成的 token（不是登录密码！）

4. 推送命令：
   ```bash
   git remote add origin https://github.com/你的用户名/你的仓库.git
   git branch -M main
   git push -u origin main
   ```

## 方法2：使用环境变量（临时方案）

```bash
# 设置环境变量（仅当前会话有效）
export GITHUB_TOKEN=你的token

# 推送时使用 token
git remote add origin https://$GITHUB_TOKEN@github.com/你的用户名/你的仓库.git
git push -u origin main
```

## 方法3：在 URL 中包含 token（简单但不安全）

```bash
git remote add origin https://用户名:token@github.com/用户名/仓库.git
git push -u origin main
```

⚠️ 注意：token 会保存在 git config 中，仅用于个人项目，不要分享给他人。

## 重要提示

- ⚠️ Token 只会显示一次，生成后立即复制保存
- ⚠️ 不要在公共地方分享你的 token
- ⚠️ 定期更新 token（建议90天）
- ⚠️ 如果 token 泄露，立即在 GitHub 设置中撤销

## 常见问题

**Q: 提示 "Authentication failed"**
A: 检查 token 是否正确，是否勾选了 `repo` 权限

**Q: 提示 "Permission denied"**
A: 检查仓库是否有写入权限，确保是你创建的仓库

**Q: Token 失效了怎么办？**
A: 重新生成新 token，并更新 git 配置

**Q: 如何查看已配置的远程仓库？**
A: `git remote -v`

**Q: 如何删除远程仓库配置？**
A: `git remote remove origin`
