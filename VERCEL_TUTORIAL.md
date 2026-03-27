# 🎯 Vercel 部署超详细教程（新手专用）

## 💡 方案选择

由于环境限制无法使用命令行登录，我为你准备了**两个方案**：

### 方案A：GitHub 集成自动部署（推荐⭐⭐⭐⭐⭐）
✅ 一次配置，永久生效
✅ 推送代码自动部署
✅ 无需每次手动操作

### 方案B：Vercel 网页手动部署
✅ 操作简单直观
✅ 5分钟完成
✅ 适合一次性部署

---

## 🚀 方案A：GitHub 集成自动部署（强烈推荐）

### 第1步：在 Vercel 注册并创建项目（3分钟）

#### 1.1 注册 Vercel 账号
1. 打开浏览器，访问：https://vercel.com/signup
2. 点击 **"Continue with GitHub"**
3. 授权 Vercel 访问你的 GitHub 账号
4. 填写用户名和邮箱
5. 点击 **"Continue"**
6. 完成注册

#### 1.2 导入项目
1. 登录后会看到仪表板，点击 **"Add New"** 按钮
2. 选择 **"Project"**
3. 在 **"Import Git Repository"** 区域
4. 找到你的仓库：**`haotianze-website-guanwang`**
5. 点击右侧的 **"Import"** 按钮

#### 1.3 配置项目（Vercel 会自动填充）

**Framework Preset**: Next.js ✅（自动识别）
**Root Directory**: `./` ✅（默认）
**Build Command**: `pnpm run build` ✅（自动检测）
**Output Directory**: `.next` ✅（自动检测）

#### 1.4 添加环境变量（可选）

向下滚动，找到 **"Environment Variables"** 区域：
1. 点击 **"Add New"**
2. 添加以下变量：

| Key | Value | Environment |
|-----|-------|-------------|
| `ADMIN_USERNAME` | `admin` | Production, Preview, Development |
| `ADMIN_PASSWORD` | `admin123` | Production, Preview, Development |

> 💡 提示：`admin123` 是默认密码，建议修改为更强的密码

#### 1.5 部署
1. 滚动到页面底部
2. 点击 **"Deploy"** 按钮
3. 等待 2-3 分钟，看到绿色的 "Congratulations!"

🎉 **恭喜！你的网站已经部署成功了！**
- 访问：https://haotianze-website-guanwang.vercel.app

### 第2步：获取 Vercel 配置信息（2分钟）

#### 2.1 获取 Vercel Token
1. 在 Vercel 页面，点击右上角的头像
2. 选择 **"Settings"**
3. 在左侧菜单选择 **"Tokens"**
4. 点击 **"Create"** 按钮
5. 填写信息：
   - Token name: `github-actions`（任意名称）
   - Expiration: `90 days`（选择 90 天或 No expiration）
   - Scope: 选择 **"Full Account"**
6. 点击 **"Create"**
7. ⚠️ **重要**：复制生成的 token（只显示一次！）

#### 2.2 更新 GitHub Token（重要！⚠️）

由于 GitHub 需要特殊权限才能推送 GitHub Actions 文件，你需要重新生成 GitHub Token：

1. 访问：https://github.com/settings/tokens
2. 找到之前创建的 token
3. 点击 **"Delete"** 删除它
4. 点击 **"Generate new token (classic)"**
5. 填写：
   - Note: `haotianze-website deployment`
   - Expiration: `90 days`
   - **勾选权限**：
     - ✅ `repo`（完整的仓库访问权限）
     - ✅ `workflow`（GitHub Actions 权限）⭐ **重要！**
6. 点击 **"Generate token"**
7. ⚠️ **重要**：复制新的 token（只显示一次！）
8. 保存到安全的地方

#### 2.3 获取 Project ID
1. 回到项目页面（点击右上角返回）
2. 进入你的项目：`haotianze-website-guanwang`
3. 点击顶部的 **"Settings"** 标签
4. 在左侧菜单选择 **"General"**
5. 找到 **"Project ID"** 字段
6. 点击右侧的眼睛图标查看
7. 复制 Project ID（类似：`prj_xxxxxxxxxxxxxx`）

#### 2.3 获取 Organization ID
1. 在同一个 **"General"** 页面
2. 找到 **"Organization ID"** 字段
3. 点击右侧的眼睛图标查看
4. 复制 Organization ID（类似：`team_xxxxxxxxxxxxxx`）
   > 如果你是个人账号，可能没有此字段，可以跳过

### 第3步：配置 GitHub Secrets（3分钟）

#### 3.1 打开 GitHub 仓库设置
1. 访问：https://github.com/hades1989/haotianze-website-guanwang
2. 点击顶部的 **"Settings"** 标签
3. 在左侧菜单找到 **"Secrets and variables"** → **"Actions"**

#### 3.2 添加 Vercel Token
1. 点击 **"New repository secret"** 按钮
2. 填写：
   - Name: `VERCEL_TOKEN`
   - Value: 粘贴刚才复制的 Vercel Token
3. 点击 **"Add secret"**

#### 3.3 添加 Project ID
1. 再次点击 **"New repository secret"** 按钮
2. 填写：
   - Name: `PROJECT_ID`
   - Value: 粘贴刚才复制的 Project ID
3. 点击 **"Add secret"**

#### 3.4 添加 Organization ID（如果有）
1. 再次点击 **"New repository secret"** 按钮
2. 填写：
   - Name: `ORG_ID`
   - Value: 粘贴刚才复制的 Organization ID
3. 点击 **"Add secret"**
   > 如果你是个人账号没有 Organization ID，可以跳过此步

### 第4步：触发自动部署（1分钟）

#### 方法1：修改代码并推送（推荐）
1. 在项目中创建一个小修改（例如修改 README.md）
2. 提交并推送：
```bash
git add README.md
git commit -m "测试自动部署"
git push
```

#### 方法2：在 GitHub 手动触发
1. 访问：https://github.com/hades1989/haotianze-website-guanwang/actions
2. 点击左侧的 **"Deploy to Vercel"** workflow
3. 点击右侧的 **"Run workflow"** 按钮
4. 点击绿色的 **"Run workflow"** 按钮
5. 等待 2-3 分钟，workflow 完成

### 第5步：验证部署

1. 访问：https://haotianze-website-guanwang.vercel.app
2. 检查所有功能是否正常
3. ✅ 完成！

---

## 🎯 方案B：Vercel 网页手动部署（简单快捷）

如果你不想配置自动部署，只用网页端手动部署：

### 步骤1：注册 Vercel（1分钟）
1. 访问：https://vercel.com/signup
2. 使用 GitHub 账号登录

### 步骤2：导入项目（2分钟）
1. 点击 **"Add New"** → **"Project"**
2. 找到 `haotianze-website-guanwang`
3. 点击 **"Import"**

### 步骤3：配置并部署（2分钟）
1. 检查配置（Vercel 会自动填充）
2. 可选：添加环境变量
3. 点击 **"Deploy"**
4. 等待完成

### 步骤4：完成！🎉
访问：https://haotianze-website-guanwang.vercel.app

---

## 🔄 以后更新网站

### 如果使用方案A（自动部署）
```bash
# 修改代码后
git add .
git commit -m "更新内容"
git push

# ✅ 自动部署，无需任何操作！
```

### 如果使用方案B（手动部署）
1. 修改代码并推送到 GitHub
2. 访问 Vercel 项目页面
3. 点击 **"Deployments"**
4. 点击右上角的 **"Redeploy"**
5. 等待完成

---

## 📊 查看部署状态

### Vercel 端
- 访问：https://vercel.com/dashboard
- 点击项目查看部署历史和日志

### GitHub 端（方案A）
- 访问：https://github.com/hades1989/haotianze-website-guanwang/actions
- 查看 workflow 运行状态

---

## 🎁 额外福利

### 自动 HTTPS
Vercel 会自动为你的网站配置 HTTPS 证书，无需任何操作！

### 全球 CDN
你的网站会自动部署到全球多个节点，访问速度更快！

### 自动域名
Vercel 会自动提供免费域名：`https://haotianze-website-guanwang.vercel.app`

---

## ⚠️ 常见问题

### Q1: Vercel Token 在哪里找？
A:
1. Vercel 页面右上角头像
2. Settings → Tokens
3. Create → 复制 token

### Q2: Project ID 在哪里找？
A:
1. 进入你的 Vercel 项目
2. Settings → General
3. 找到 Project ID

### Q3: 我没有 Organization ID 怎么办？
A: 个人账号可能没有，跳过即可。GitHub Actions 会自动处理。

### Q4: 部署失败怎么办？
A:
1. 查看 GitHub Actions 日志
2. 或查看 Vercel Deployments 日志
3. 检查环境变量是否正确

### Q5: 如何取消自动部署？
A: 删除 `.github/workflows/vercel-deploy.yml` 文件

---

## 📞 需要帮助？

如果遇到问题，检查以下内容：

1. ✅ Vercel Token 是否正确
2. ✅ Project ID 是否正确
3. ✅ GitHub Secrets 是否添加
4. ✅ 代码是否成功推送到 main 分支
5. ✅ 查看 workflow 日志了解具体错误

---

## ✨ 总结

**推荐使用方案A（GitHub 集成）**，因为：
- ✅ 一次配置，永久自动部署
- ✅ 无需每次手动操作
- ✅ 更新网站只需 git push
- ✅ 配置简单，5分钟完成

**现在就跟着教程操作吧！** 🚀

有问题随时告诉我！
