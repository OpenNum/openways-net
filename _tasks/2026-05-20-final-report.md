# OpenWays 全轮工作总结报告
## 给 Vince + Codex 审核

日期：2026-05-20  
Commit：`bd6fa92`（已 push main，Vercel 自动部署中）

---

## 一、本轮新增工作（今日完成）

### P0 — vercel.json：.OLD.html 批量 noindex
- 新增 headers 规则：`/:path*.OLD.html` → `X-Robots-Tag: noindex, nofollow`
- 62 个旧备份文件不再被收录，零删除风险

### P1 — Pack 页预览图修复

| 页面 | 修复前 | 修复后 |
|------|--------|--------|
| pack-restaurant.html | beauty_sop_preview.jpg（美业图） | previews/pack-restaurant-au.jpg ✓ |
| pack-accounting.html | beauty_sop_preview.jpg（美业图） | previews/pack-accounting-au.jpg ✓ |
| pack-cleaning.html | beauty_sop_preview.jpg（美业图） | 已注释掉，等真实截图 |
| pack-solar.html | beauty_sop_preview.jpg（美业图） | 已注释掉，等真实截图 |
| pack-renovation.html | realestate_sop_preview.jpg（房产图） | 已注释掉，等真实截图 |

另有 8 个页面（carpet-cleaning/dentist/domestic-help/hvac/lawyer/plumbing-painting/removalist/waterproofing-roofing）早已用 HTML 注释正确屏蔽预览图，未动。

### P2 — Industry Hub 页补 Guide 内链（4 EN + 4 ZH）

| Hub 页 | 新增 Guide 链接 |
|--------|--------------|
| industry-professional-services | 会计/律师/移民 × EN |
| zh-industry-professional-services | 会计/律师/移民 × ZH |
| industry-home-property | 房源描述/开放参观跟进 × EN |
| zh-industry-home-property | 房源描述/开放参观跟进 × ZH |
| industry-trades-technical | 水电装修 × EN |
| zh-industry-trades-technical | 水电装修 × ZH |
| industry-lifestyle-services | 清洁 × EN |
| zh-industry-lifestyle-services | 清洁 × ZH |

food-hospitality hub 早已有 guide 链接，未动。

### P3 — 全部 25 个 Pack 页新增「适合/不适合」模块

所有 25 个英文 pack 页（pack-restaurant 到 pack-waterproofing-roofing）已在产品详情区前插入绿/橙双列卡片：

- **✅ This IS for you if you are…**（3 条，行业精准定位）
- **❌ This is NOT for you if…**（3 条，澄清边界，降低退款风险）

每条内容均为行业专属，非通用模板。

---

## 二、快检命令（供 Codex 验证）

```bash
# 1. vercel.json headers 存在
cat vercel.json | grep -A5 'X-Robots-Tag'
# 期望：noindex, nofollow

# 2. 预览图无错误引用
grep -r 'beauty_sop_preview' pack-*.html | grep -v '<!--'
# 期望：0 行（注释中的不算）

# 3. 所有 25 pack 页有适合/不适合模块
grep -l 'fit-heading-' pack-*.html | wc -l
# 期望：25

# 4. hub 页有 guide 内链
grep -c 'guide/' industry-professional-services.html industry-home-property.html industry-trades-technical.html industry-lifestyle-services.html
# 期望：3 / 2 / 1 / 1

# 5. noindex 仍只有 cn-packs 和 zh-pay（HTML meta）
grep -rl 'noindex' *.html
# 期望：cn-packs.html 和 zh-pay.html

# 6. sitemap 条目数
grep -c '<loc>' sitemap.xml
# 期望：110
```

---

## 三、遗留待 Vince 决策的事项

| 优先 | 事项 | 说明 |
|------|------|------|
| ⭐⭐ | SOP 预览截图补全 | cleaning/solar/renovation/13 个新行业 pack 没有真实 SOP 页面截图；需从 products/ 导出 PDF 首页并截图放进 previews/ |
| ⭐⭐ | cn-packs.html 内容扩充 | 等收款方式（微信/支付宝/Gumroad）确定后再动 |
| ⭐ | Pack 页互链（相关行业交叉推荐） | 每个 pack 底部加"你可能也需要"，3 行 HTML，提高客单价。可随时加 |
| ⭐ | Edge 内容规律化 | 每月 1 篇澳洲华人小老板 AI 实用更新，需 Vince 持续提供素材 |

---

## 四、全轮累计统计（2026-05-17 ～ 2026-05-20）

| 项目 | 数量 |
|------|------|
| 新增 guide 文章 | 14 篇（7 行业 × EN+ZH） |
| Sitemap URL | 94 → 110（+16 guide 条目） |
| Pack 页全面更新 | 25 个（预览图 + 适合/不适合模块） |
| Hub 页内链补全 | 8 个（4 EN + 4 ZH） |
| 全站 canonical/hreflang/og:url 规范化 | 807 处 .html → clean URL |
| .OLD.html noindex | 62 个文件（vercel.json 规则） |
| JSON-LD schema 验证 | 全部通过（Article + BreadcrumbList + FAQPage） |
