# OpenWays 网站部署指南

> 适合零经验操作。每一步都有截图提示。预计总时间：30–45 分钟。

---

## 第一步：注册 GitHub（如果还没有账号）

1. 打开 https://github.com
2. 点击右上角 **Sign up**，用邮箱注册
3. 验证邮箱后登录

---

## 第二步：把网站文件上传到 GitHub

### 2a. 创建一个新的代码仓库（Repository）

1. 登录 GitHub 后，点击右上角 **+** → **New repository**
2. Repository name 填写：`openways-website`（或其他名字，英文无空格）
3. 设置为 **Private**（私有，只有你能看到）
4. 勾选 **Add a README file**
5. 点击 **Create repository**

### 2b. 上传文件

1. 进入刚创建的仓库页面
2. 点击 **Add file** → **Upload files**
3. 把以下所有文件拖进去：

```
index.html
about.html
services.html
who-we-help.html
faq.html
contact.html
style.css
i18n.js
sitemap.xml
robots.txt
```

4. 在页面底部写一句描述（如：`initial upload`）
5. 点击 **Commit changes**

---

## 第三步：注册 Vercel 并部署

Vercel 是一个免费托管静态网站的平台，支持自定义域名。

1. 打开 https://vercel.com
2. 点击 **Sign Up** → 选择 **Continue with GitHub**（用 GitHub 账号登录，更方便）
3. 登录后点击 **Add New...** → **Project**
4. 在列表里找到你的 `openways-website` 仓库 → 点击 **Import**
5. 设置页面直接点 **Deploy**（默认设置即可，这是纯 HTML 站）
6. 等待约 30 秒，部署完成后会看到一个 `xxx.vercel.app` 的网址

> ✅ 此时你的网站已经上线了，可以用那个网址访问。

---

## 第四步：绑定自己的域名 openways.net

> 前提：你已经在某个域名商（如 GoDaddy、Namecheap、腾讯云等）购买了 openways.net。

1. 在 Vercel 项目页面，点击 **Settings** → **Domains**
2. 输入 `openways.net` → 点击 **Add**
3. Vercel 会给你一组 DNS 记录，类似：
   - **A 记录**：`@` → `76.76.21.21`
   - **CNAME 记录**：`www` → `cname.vercel-dns.com`
4. 登录你的域名商后台，找到 **DNS 管理** 或 **域名解析**
5. 按照 Vercel 提示添加这些记录
6. 等待 5–30 分钟 DNS 生效

> ✅ 生效后访问 https://openways.net 就能看到网站了，Vercel 自动提供 HTTPS 证书。

---

## 第五步：配置 Formspree（联系表单接收邮件）

当访客提交联系表单后，你会收到邮件通知。

### 5a. 注册 Formspree

1. 打开 https://formspree.io
2. 点击 **Get Started** → 用邮箱注册（免费）
3. 验证邮箱后登录

### 5b. 创建表单

1. 登录后点击 **+ New Form**
2. Name 填写：`OpenWays Contact Form`
3. 点击 **Create Form**
4. 你会得到一个 **Form ID**，格式类似：`xabc1234`
5. 把这个 ID 记下来

### 5c. 更新网站代码

打开 `contact.html`，找到这一行：

```html
<form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST" novalidate>
```

把 `YOUR_FORM_ID` 替换成你真实的 Form ID，例如：

```html
<form id="contactForm" action="https://formspree.io/f/xabc1234" method="POST" novalidate>
```

### 5d. 设置通知邮件

1. 在 Formspree 的 **Settings** → **Notifications** 里
2. 添加你的接收邮件地址（如 `hello@openways.net`）
3. 保存设置

### 5e. 重新上传 contact.html 到 GitHub

1. 回到 GitHub 仓库
2. 点击 `contact.html` 文件 → 点击 **✏️ Edit**（铅笔图标）
3. 把修改后的内容粘贴进去（或直接点 **Upload files** 覆盖旧文件）
4. Commit changes

> Vercel 会在 30 秒内自动重新部署。

### 5f. 测试表单

1. 打开你的网站联系页
2. 填写表单并提交
3. 在你的邮箱里确认收到了通知
4. 在 Formspree 后台也能看到提交记录

---

## 第六步：更新网站（日后修改内容）

当你需要修改任何页面内容时：

**方式A（简单）**：直接在 GitHub 里编辑文件
1. 进入 GitHub 仓库
2. 点击你想修改的文件
3. 点击 **✏️** 编辑
4. 修改后 Commit → Vercel 自动重新部署

**方式B（批量更新）**：
1. 在本地修改文件
2. 在 GitHub 点 **Upload files** → 上传修改过的文件（会覆盖旧的）
3. Commit → 自动部署

---

## 常见问题

**Q：访问网站显示 404？**
A：确认文件名是 `index.html`（小写），不是 `Index.html` 或 `INDEX.HTML`

**Q：语言切换没效果？**
A：确认 `i18n.js` 和 HTML 文件在同一个文件夹里，并且每个页面的 `<body>` 标签有 `data-page="xxx"` 属性

**Q：表单提交后没收到邮件？**
A：先检查 Formspree 后台是否有记录，再检查垃圾邮件文件夹；确认 Form ID 填写正确（无多余空格）

**Q：想换 Logo 或颜色？**
A：打开 `style.css`，找顶部的 `:root {}` 区块修改颜色变量；Logo 替换 `.nav-logo-mark` 的 `<div>O</div>` 为 `<img src="logo.svg">` 即可

---

## 文件清单

| 文件 | 用途 |
|------|------|
| `index.html` | 首页 |
| `about.html` | 关于我们 |
| `services.html` | 培训课程 |
| `who-we-help.html` | 适合谁 |
| `faq.html` | 常见问题 |
| `contact.html` | 联系我们（含 Formspree 表单） |
| `style.css` | 全站样式（颜色、字体、布局） |
| `i18n.js` | 三语切换系统（简体/繁体/英文） |
| `sitemap.xml` | SEO 站点地图 |
| `robots.txt` | 搜索引擎爬取规则 |

---

*如有问题，直接告诉好汉即可。*
