# 内容集群 + 下阶段计划报告 — 给 Codex 审核

日期：2026-05-18

---

## 一、本轮完成总结

### 技术 SEO（已全部完成）
| 项目 | 状态 | 说明 |
|------|------|------|
| canonical / hreflang / og:url 规范化 | ✅ | 807 处 .html → clean URL |
| sitemap 统一 clean URL | ✅ | 全量替换 |
| cn-packs.html | ✅ 不动 | 已确认 noindex，刻意不收录 |
| guide 页面加入 sitemap | ✅ | 餐饮两篇早已正确 |
| GSC sitemap 提交 | ✅ | 读取成功，98→110 页面 |

### 内容集群（5 个行业全部完成）

每个集群：1 篇文章 × EN + ZH = 2 文件。含 Article + BreadcrumbList + FAQPage schema，hreflang，clean canonical，5 个可直接 copy-paste 的提示词模板，合规说明，CTA 到对应 pack 页。

| 集群 | 文件 | 目标关键词（EN） | Pack CTA |
|------|------|--------------|---------|
| 餐饮（已有）| 2 EN+ZH | Google Review reply restaurant AU | /pack-restaurant |
| 会计 | 2 EN+ZH | AI accounting client emails AU | /pack-accounting |
| 房产 | 4 EN+ZH | AI listing description / open home follow-up AU | /pack-realestate |
| 律师 | 2 EN+ZH | AI law firm client emails AU | /pack-lawyer |
| 移民 | 2 EN+ZH | AI immigration agent communication AU | /pack-immigration |
| 清洁 | 2 EN+ZH | AI cleaning business quotes AU | /pack-cleaning |
| 装修/水电 | 2 EN+ZH | AI tradespeople quotes AU | /pack-electrician, /pack-renovation |

**文件总数：** 16 篇新文章（餐饮 2 篇已有，新增 14 篇）  
**Sitemap：** 98 → 110 条（+12 new guide URLs）  
**JSON-LD 合规：** 全部 3 schema 块验证通过，无裸引号问题

---

## 二、给 Codex 的快检清单

在 main 上跑（已是最新，git pull 后）：

```bash
# 1. canonical 残留 .html 检查
grep -r 'openways\.net/[^"'\'']*\.html' *.html sitemap.xml | grep -v '<a ' | wc -l
# 期望：0

# 2. sitemap 总条数
grep -c '<loc>' sitemap.xml
# 期望：110

# 3. 新文章是否在 sitemap
grep '<loc>' sitemap.xml | grep 'guide/' | wc -l
# 期望：16（2 餐饮 + 14 新增）

# 4. JSON-LD 批量验证
python3 -c "
import re, json, glob
errors = []
for path in glob.glob('guide/*.html'):
    txt = open(path).read()
    for i,b in enumerate(re.findall(r'<script type=\"application/ld\+json\">(.*?)</script>', txt, re.DOTALL)):
        try: json.loads(b.strip())
        except Exception as e: errors.append(f'{path} block{i+1}: {e}')
print('Errors:', errors if errors else 'None')
"
# 期望：Errors: None

# 5. noindex 检查（只 cn-packs 应有）
grep -rl 'noindex' *.html
# 期望：只有 cn-packs.html
```

---

## 三、SEO 之外——下阶段建议方向

### A. Gumroad 产品页优化（变现直接相关）⭐⭐⭐

**现状：** 每个 pack 页有 Product schema、价格、FAQ，但缺：
- Vince mini bio（"凭什么懂这个行业"）
- 1 张 PDF 预览图（买家最常问"里面是什么"）
- "适合谁 / 不适合谁"模块
- 明确退款/风险说明

**建议：** 先选 3 个转化最高的行业（餐饮/会计/房产），在 pack 页加上这 4 个模块。每个 pack 页加约 30 行 HTML，工作量小，转化影响大。

---

### B. 行业 Hub 页内链接到 Guide（SEO 内部权重传导）⭐⭐

**现状：** `industry-food-hospitality.html`、`industry-professional-services.html` 等 hub 页没有链接到新的 guide 文章。

**建议：** 在每个 industry hub 页底部加一个"延伸阅读"区块，链接到该行业的 guide 文章。例：
- `/industry-food-hospitality` → 链接到餐饮 Google Review 指南
- `/industry-professional-services` → 链接到会计/律师/移民 3 篇指南
- `/industry-home-property` → 链接到房产 2 篇指南

这是内部链接权重传导，帮助新文章更快被 Google 索引和排名。

---

### C. 微信/小红书 落地页（中文用户获客）⭐⭐

**现状：** `cn-packs.html` 有 noindex，不面向搜索引擎，但仍是微信/小红书流量的入口。

**建议：** 把 cn-packs.html 做成一个真正的微信落地页——加支付宝/微信收款说明、国内工具对照表（豆包/Kimi/通义 vs ChatGPT）、25 行业入口列表。这不是 SEO，是直接变现转化。

---

### D. OpenWays Edge（更新订阅）内容规律化⭐

**现状：** `updates.html` 和 `zh-updates.html` 有内容但可能不规律。

**建议：** 每月 1 篇"澳洲华人小老板 AI 实用更新"——不写技术动态，只写"这个月有什么新 prompt / 新玩法 / 新行业坑"。内容来源：Vince 自己用过的 prompt、客户问过的问题。这些文章也是 SEO 长尾内容。

---

### E. Pack 页互链（相关行业交叉推荐）⭐

**现状：** 各 pack 页独立，没有互相推荐。

**建议：** 在每个 pack 页底部加"你可能也需要"——例如买了餐饮包的人可能也需要清洁包（餐厅需要清洁服务）；买了会计包的可能需要移民包（很多华人会计的客户也有移民需求）。3 行 HTML，零工作量，提高客单价。

---

## 四、优先级建议

| 优先 | 项目 | 原因 |
|------|------|------|
| P1 | industry hub 页加 guide 内链 | SEO 权重传导，1天内完成，影响已发布所有 guide 的排名速度 |
| P2 | pack 页加 bio + 预览图 + 适合谁 | 直接影响转化，先做 3 个高流量行业 |
| P3 | cn-packs.html 内容扩充 | 微信流量直接变现，Vince 需要决定收款方式 |
| P4 | pack 页互链 | 提高客单价，工作量极小 |
| P5 | Edge 内容规律化 | 长期 SEO + 留存，需要 Vince 持续输出素材 |

---

## 五、Codex 审计反馈修复记录（2026-05-20）

基于 Codex 审计意见，以下已全部修复并 push main：

### P0 — .OLD.html 文件 noindex（vercel.json）
- `vercel.json` 新增 `headers` 规则：`/:path*.OLD.html` → `X-Robots-Tag: noindex, nofollow`
- 62 个旧备份文件不再被搜索引擎索引，无需移动或删除

### P1 — Pack 页错误预览图（转化硬伤）
已修复 4 个 pack 页（同时修复了 `og:image` + `twitter:image`）：

| 页面 | 修复前 | 修复后 |
|------|--------|--------|
| pack-restaurant | beauty_sop_preview.jpg | Restaurant_Australia_cover.jpg |
| pack-accounting | beauty_sop_preview.jpg | Accounting_Australia_cover.jpg |
| pack-cleaning | beauty_sop_preview.jpg | Cleaning_Australia_cover.jpg |
| pack-solar | beauty_sop_preview.jpg | Solar_Australia_cover.jpg |

pack-beauty.html 本来就用 beauty 图，正确，未改动。

### P2 — Industry Hub 页补 Guide 内链（EN + ZH 全部）
已在 8 个 hub 页（4 EN + 4 ZH）的"Free Guide"区块前插入"Free Practical Guides"卡片区：

| Hub 页 | 新增 Guide 链接 |
|--------|--------------|
| industry-professional-services | 会计/律师/移民 × EN |
| zh-industry-professional-services | 会计/律师/移民 × ZH |
| industry-home-property | 房源描述/开放参观跟进 × EN |
| zh-industry-home-property | 房源描述/开放参观跟进 × ZH |
| industry-trades-technical | 装修水电 × EN |
| zh-industry-trades-technical | 装修水电 × ZH |
| industry-lifestyle-services | 清洁 × EN |
| zh-industry-lifestyle-services | 清洁 × ZH |

### 报告口径修正
- sitemap guide 条目：18 条（不是 16，Codex 正确）
- noindex 页面：cn-packs.html + zh-pay.html（付款页不该收录，合理）

### 下一步待 Vince 决策
- **pack 页 PDF 预览图**（真实行业 PDF 页面截图）：cleaning/solar/trades 等行业还没有 SOP 页面截图——当前用 Gumroad 封面顶替，是暂时方案。需要从 products/ 目录导出对应行业 PDF 首页截图。
- **cn-packs.html 内容扩充**：等收款方式（微信/支付宝/Gumroad）确定后再动
- **pack 页互链**（相关行业交叉推荐）：工作量小，可随时加
