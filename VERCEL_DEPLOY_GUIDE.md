# 🚀 Vercel 部署指南

## ✅ 第2步已完成！

代码已成功推送到 GitHub：
- 仓库地址：https://github.com/hades1989/haotianze-website-guanwang
- 分支：main

---

## 🎯 第3步：部署到 Vercel（5分钟完成）

### 方法1：通过 Vercel 网页端（推荐新手）

#### 步骤1：注册 Vercel
1. 访问 https://vercel.com/signup
2. 选择 "Continue with GitHub"
3. 授权 Vercel 访问你的 GitHub 账号
4. 完成注册

#### 步骤2：导入项目
1. 登录后，点击 "Add New" → "Project"
2. 在 "Import Git Repository" 列表中找到 `haotianze-website-guanwang`
3. 点击右侧的 "Import" 按钮

#### 步骤3：配置项目

Vercel 会自动识别这是 Next.js 项目，会显示以下配置：

**Framework Preset**: Next.js（自动识别）
**Root Directory**: `./`（默认）
**Build Command**: `pnpm run build`（自动检测）
**Output Directory**: `.next`（自动检测）

**Environment Variables**（可选添加）：

点击 "Environment Variables" 下的 "Add New"，添加：

| Key | Value | Environment |
|-----|-------|-------------|
| `ADMIN_USERNAME` | `admin` | Production |
| `ADMIN_PASSWORD` | `admin123` | Production |

或者使用你自己的强密码。

#### 步骤4：部署
1. 确认配置无误后，点击底部的 "Deploy" 按钮
2. 等待 2-3 分钟，Vercel 会自动构建和部署

#### 步骤5：完成！

部署成功后，你会看到：
- ✅ 绿色的 "Congratulations!" 界面
- 🌐 你的网站地址：`https://haotianze-website-guanwang.vercel.app`
- 📊 实时构建日志

---

### 方法2：使用 Vercel CLI（推荐开发者）

#### 步骤1：安装 Vercel CLI
```bash
npm install -g vercel
```

#### 步骤2：登录
```bash
vercel login
```
会提示选择账号，选择 "Continue with GitHub"

#### 步骤3：部署
```bash
cd /workspace/projects
vercel
```

按提示操作：
1. Link to existing project → Yes
2. What's your project's name? → `haotianze-website-guanwang`
3. In which directory is your code located? → `./`

#### 步骤4：生产环境部署
```bash
vercel --prod
```

---

## 🎉 部署后配置

### 1. 查看网站
访问：https://haotianze-website-guanwang.vercel.app

### 2. 测试功能
- 首页展示是否正常
- 导航菜单是否可用
- 后台登录是否正常（`/admin/login`）
- 文件上传功能是否可用

### 3. 绑定自定义域名（可选）

#### 步骤1：在域名注册商处配置 DNS

**方式A：使用 Vercel 提供的 CNAME（推荐）**

1. 登录 Vercel 控制台
2. 进入项目 → Settings → Domains
3. 输入你的域名（如：`haotianze.com`）
4. 点击 "Add"

Vercel 会显示需要添加的 DNS 记录：
```
Type: CNAME
Name: @ 或你的子域名
Value: cname.vercel-dns.com
```

5. 在域名注册商（如阿里云、腾讯云）添加此记录
6. 等待 DNS 生效（10分钟 - 24小时）

**方式B：使用 A 记录**

如果你有服务器 IP，可以添加 A 记录指向 Vercel 的 IP：
```
Type: A
Name: @
Value: 76.76.21.21
```

#### 步骤2：在 Vercel 中添加域名

1. 在 Vercel 控制台进入项目 → Settings → Domains
2. 点击 "Add Domain"
3. 输入域名，等待 DNS 验证
4. 验证通过后，Vercel 会自动配置 HTTPS

---

## 📊 监控和管理

### 查看部署日志
1. 进入 Vercel 控制台
2. 选择项目
3. 点击 "Deployments"
4. 点击任意部署记录查看详细日志

### 查看访问统计
1. 进入项目 → Analytics
2. 可以查看访问量、带宽使用等

### 环境变量管理
1. 进入项目 → Settings → Environment Variables
2. 可以添加、修改、删除环境变量
3. 修改后需要重新部署

---

## 🔄 更新网站

### 方法1：通过 Git 自动部署（推荐）

```bash
# 在本地修改代码后
git add .
git commit -m "更新内容"
git push
```

推送后，Vercel 会自动检测到更改并重新部署！

### 方法2：通过 Vercel CLI
```bash
vercel --prod
```

### 方法3：通过 GitHub Actions
Vercel 会自动监听 GitHub 的 push 事件并触发部署。

---

## ⚠️ 重要提示

### 1. 文件上传限制

当前项目的文件上传功能（二维码、案例图片）在 Vercel 上有以下限制：

- ✅ 上传到 `public` 目录的图片可以正常显示
- ❌ 运行时上传的文件会在重新部署后丢失
- **解决方案**：使用对象存储服务（如 Cloudflare R2、阿里云 OSS）

### 2. 数据持久化

以下数据是持久化的（不会丢失）：
- ✅ `data/contact-config.json` - 联系信息配置
- ✅ `data/messages.json` - 用户留言
- ✅ `data/about-config.json` - 关于我们配置

以下数据会丢失：
- ❌ 上传的图片文件（重新部署后）
- ❌ `public/upload/` 目录下的文件

### 3. 性能优化

Vercel 自动优化：
- ✅ 全球 CDN 加速
- ✅ 自动压缩
- ✅ 图片优化
- ✅ 边缘缓存

---

## 🛠️ 常见问题

### Q1: 部署失败，提示 "Build failed"
A: 检查：
1. `package.json` 中的 scripts 是否正确
2. 依赖是否完整安装
3. 查看构建日志定位错误

### Q2: 网站可以访问，但功能不正常
A: 检查：
1. API Routes 是否正确配置
2. 环境变量是否设置
3. 查看实时日志

### Q3: 如何回滚到之前的版本？
A:
1. 进入 Vercel 控制台 → Deployments
2. 找到之前的部署记录
3. 点击右侧的 "..." → "Promote to Production"

### Q4: 免费额度用完了怎么办？
A:
- Vercel 免费额度：100GB 带宽/月
- 超出后会自动暂停，下月恢复
- 可以升级到 Pro 计划（$20/月）

### Q5: 如何查看构建日志？
A:
- Vercel 控制台 → Deployments → 选择部署 → 点击 "View Logs"

---

## 📈 性能监控

### 使用 Vercel Analytics（免费）

1. 进入项目 → Analytics
2. 点击 "Enable Analytics"
3. 可以查看：
   - Web Vitals（LCP, FID, CLS）
   - 访问统计
   - 设备和浏览器分布
   - 地理位置

---

## 🎯 快速命令参考

```bash
# 查看部署状态
vercel inspect

# 查看日志
vercel logs

# 删除部署
vercel rm <deployment-url>

# 查看环境变量
vercel env ls

# 添加环境变量
vercel env add KEY

# 拉取生产环境
vercel pull

# 部署到生产环境
vercel deploy --prod
```

---

## ✨ 下一步建议

1. ✅ 部署到 Vercel
2. ✅ 绑定自定义域名
3. ✅ 配置对象存储（如 Cloudflare R2）用于文件上传
4. ✅ 启用 Vercel Analytics 监控性能
5. ✅ 设置 GitHub 自动部署

---

## 📞 需要帮助？

如果遇到问题：
- 查看 [Vercel 官方文档](https://vercel.com/docs)
- 查看 [Next.js 部署指南](https://nextjs.org/docs/deployment)
- 或联系我！

---

**🎉 祝部署成功！**
