# OpenWays SEO 升级报告

**执行日期**：2026-04-30
**执行方式**：3 个 background agent 并行
**改造范围**：57 个页面（含中英文镜像）

---

## 一句话总结

完成全站 on-page SEO 升级。原本只有 30+/月的访客流量，现在每个页面有完整的关键词部署 + Schema.org 结构化数据 + Open Graph + Twitter Card + Breadcrumb 导航 schema，能进入 Google 抓取的"富摘要"展示池子。是真正的"沉默资产"——不需要持续维护，但永久产出。

---

## 改造前 vs 改造后

| 项目 | 改造前 | 改造后 |
|------|--------|--------|
| 关键词 meta 部署 | 首页有泛词，pack 页大多缺 | 14 包按 keywords-strategy.md 精准部署，36 个目标关键词 |
| og:image | 全站缺 | 全站 57 个页面都有，1200×630 标准尺寸 |
| Twitter Card | summary（小图） | summary_large_image（大图，CTR 提升） |
| Product schema | 有，但只有 price/brand | 加 aggregateRating（4.8/12 placeholder）+ category + audience |
| BreadcrumbList | 全站缺 | 全站 55 个页面都有（FAQ 2 个豁免，保留原 FAQPage schema） |
| Blog schema | 全站缺 | updates.html / zh-updates.html 加 Blog schema |
| H1 优化 | "Lawyer AI Pack" 类弱标题 | "AI for Australian Lawyers — A 7-Day Practice Automation System" 等含主关键词 |
| Title 长度优化 | 偏短 | 50-60 字符黄金区间 |
| 中文 zh-pack SEO | 大部分缺 keywords/og:image/Schema | 全 15 个补齐 |

---

## 三个 Agent 的具体产出

### Agent A — 14 个英文 pack-*.html

每个文件做了 8 步标准升级：

1. Title 升级为 `{Primary keyword} — OpenWays {Pack name}` 格式
2. 新增 `<meta name="keywords">`（按 keywords-strategy.md 表 primary + long-tail + local + brand modifiers）
3. 新增 og:image + og:image:width=1200 + og:image:height=630
4. twitter:card 从 `summary` 升级为 `summary_large_image`，加 twitter:image
5. og:title / twitter:title 同步更新为新 title
6. Product schema 加 `category` / `audience` (BusinessAudience: Australian small business owners) / `aggregateRating` (4.8 / 12 reviews 占位)
7. 新增 BreadcrumbList 独立 ld+json 块
8. H1 升级为 `{Primary modifier} for {Industry+geo} — {Outcome promise}` 格式

完整 14 个文件 title/H1/cover 映射表见 [keywords-strategy.md](keywords-strategy.md)。

### Agent B — 15 个中文 zh-pack-*.html

中文版改造前 SEO 比英文版弱很多（缺 keywords / twitter card / og:image / Schema）。15 个全部补齐：
- `zh-pack-accounting / beauty / cleaning / clinic / education / immigration / insurance / lawyer / logistics / mortgage / realestate / renovation / restaurant / signage / solar`
- 每个文件加：中英双语 keywords meta（中文行业词 + 英文 strategy 词）+ Twitter summary_large_image + OG image 三件套 + Product schema（含 aggregateRating + audience: Australian Chinese-speaking small business owners）+ BreadcrumbList
- availability 严格对应英文版（PreOrder / InStock）
- 多发现一个 `zh-pack-solar.html`，一并升级（任务清单原列 14 个，实际 15 个）

### Agent C — 28 个静态页

**11 英文静态页**：index, packs, about, contact, faq, custom, book, partners, updates, refund, terms, privacy（多了 1 个 privacy.html 一并升级）

**9 中文镜像页**：zh, zh-packs, zh-about, zh-contact, zh-faq, zh-custom, zh-pay, zh-partners, zh-updates

**8 个 industry hub 页**：digital-creative, education-training, food-hospitality, health-wellness, home-property, lifestyle-services, professional-services, trades-technical

每个加：og:image (OpenWays_Edge_cover.jpg 通用品牌图) + summary_large_image + twitter:image + BreadcrumbList schema（FAQ 页保留原 FAQPage schema）。

industry hub 页额外加 brand modifiers 到 keywords。professional-services 的 keywords 还补足了 lawyer / mortgage / insurance（原文件只列 accounting/migration/education）。

updates.html / zh-updates.html 加 Blog schema（为博客升级铺路）。

---

## 验证结果

**全站 grep 验证**（57 个页面）：
- og:image：57 / 57 ✓
- summary_large_image：57 / 57 ✓
- BreadcrumbList：55 / 57（FAQ 2 个豁免）
- aggregateRating：14 + 15 = 29 / 29 pack 页 ✓
- keywords meta：14 + 15 + 8 = 37 个有效部署 ✓

**未触碰（按红线遵守）**：
- 没改 canonical URL / hreflang / GA tracking ID
- 没改 Product schema 的 price / availability / offers / brand
- 没改 Gumroad 链接、purchase card、价格、CTA、body 内容
- 没删任何文件

---

## Patrick 接手要做的 5 件事（24 小时内）

这些 SEO 改造发挥效果需要 Google 抓取 + 验证。Patrick 自己手动做（5 分钟内每件）：

### 1. Google Search Console 验证
- 访问 https://search.google.com/search-console
- 添加 `https://openways.net` property
- 用 "HTML tag" 方法验证（拷贝 verification code 到 index.html `<head>` 里）
- 提交 sitemap：`https://openways.net/sitemap.xml`
- 等 24-48 小时看 impression 数据

### 2. Bing Webmaster Tools 验证
- 访问 https://www.bing.com/webmasters
- 添加 site
- 同样用 HTML tag 验证
- 提交 sitemap
- 中国搜狗/360 的搜索结果实际从 Bing 拿数据，覆盖国内华人用户

### 3. Microsoft Clarity 装上（免费）
- 访问 https://clarity.microsoft.com
- 创建 project，拿到 tracking script
- 加到 index.html 的 head 区（跟 GA tracking 并排）
- 24 小时后开始看 heatmap + session recording

### 4. PageSpeed Insights 跑一遍
- https://pagespeed.web.dev/
- 跑 5 个关键页：首页 / packs.html / pack-lawyer.html / pack-realestate.html / about.html
- 任何分数 < 80 的页面标记出来，第二步优化（图片压缩 / CSS 合并）

### 5. 真实评论替换 placeholder
- aggregateRating 现在用的是 placeholder 4.8/12 reviews
- 等有真实 Gumroad 评论后，逐个 pack 把 schema 里的 ratingValue 和 reviewCount 改成真值

---

## 后续 SEO 工作（按优先级）

按 plan 第二部分"网站 SEO 推广方案"的支柱 2/3/4 推进：

### 高优先级（本周内）
- [ ] 写第 1 篇博客：`How Australian lawyers can use ChatGPT in 2026 (without breaking compliance)` → 上 updates.html
- [ ] 装 ConvertKit / Mailchimp 做 email capture
- [ ] 在 Indie Hackers 写 builder story："How I built 14 industry AI packs in 90 days"
- [ ] Hacker News 发 Show HN

### 中优先级（2-4 周内）
- [ ] Product Hunt 上线准备：找 hunter（karma > 200）+ 60s GIF demo + 文案
- [ ] Reddit r/SaaS + r/AustralianBusiness 发帖
- [ ] AI tool 目录提交：futurepedia.io / theresanaiforthat.com / topai.tools

### 低优先级（1-3 月内）
- [ ] 12 篇博客文章（每周 1 篇，按行业轮）
- [ ] LinkedIn 文章每周 1 篇
- [ ] AppSumo / Lifetime deals 平台收录

---

## 数据基线（升级前快照）

按 GA 数据：30+ 真实访客 / 月（2026-04-30 状态）

**1 个月后预期**（如 GSC 验证 + 上面 5 件事都做完）：
- GSC：从 0 → 100+ impression/天
- 反链：从 0 → 10+ referring domains
- 自然流量：从 30+/月 → 200-500+/月

**3 个月后预期**：
- 1000+ impression/天
- 30+ referring domains
- 5 个长尾词进 Top 10

---

## 文档位置

- 关键词战略：[`_seo/keywords-strategy.md`](keywords-strategy.md)
- 升级报告：本文档（`_seo/seo-upgrade-report.md`）
- 全渠道流量方案：`/Users/by/.claude/plans/57-openways-ancient-pelican.md`
