# OpenWays Keywords Strategy

每个 pack 定 3 个关键词层级：
- **Primary（主词）**：高搜索量、竞争高，长期排名目标
- **Long-tail（长尾）**：中搜索量、竞争低，3 个月内可上 Top 10
- **Local（本地）**：AU 地理 + 行业，转化率最高的精准流量

写入 HTML 的 `<meta name="keywords">` 顺序：主词, 长尾词, 本地词, brand modifiers。

注意：Google 已经基本不看 `<meta keywords>` 排名，但 Bing / Baidu / 内站搜索还看；且关键词战略本身指导 H1/H2/正文/og 文案的统一性。

---

## 14 个 Pack 关键词战略

| Pack | Primary | Long-tail | Local |
|------|---------|-----------|-------|
| **lawyer** | AI for lawyers | law firm automation tools | Australian Chinese-speaking solicitor AI |
| **accounting** | AI for accountants | bookkeeping AI workflow | Australian accounting AI tools |
| **beauty** | AI for beauty salons | salon booking automation AI | Sydney beauty salon AI |
| **cleaning** | AI for cleaning business | cleaning company automation | Sydney cleaning service AI |
| **clinic** | AI for medical clinic | clinic patient intake AI | Australian medical clinic AI |
| **education** | AI for tutoring business | education centre automation | Sydney tutoring AI tools |
| **immigration** | AI for migration agents | visa consultation AI workflow | Australian migration agent AI |
| **insurance** | AI for insurance brokers | insurance broker automation | Australian insurance broker AI |
| **logistics** | AI for logistics company | freight quote AI automation | Australian logistics AI |
| **mortgage** | AI for mortgage brokers | mortgage broker automation | Sydney mortgage broker AI |
| **realestate** | AI for real estate agents | listing description AI generator | Sydney real estate agent AI |
| **renovation** | AI for renovation business | renovation quote AI workflow | Sydney renovation AI tools |
| **restaurant** | AI for restaurants | restaurant marketing AI tools | Sydney cafe restaurant AI |
| **signage** | AI for signage business | signage shop automation | Australian signage AI tools |

---

## Brand modifiers（每个 pack 都加）

固定 trailing 关键词（每个 pack keywords 末尾都加这些）：
```
OpenWays, AI prompt pack, ChatGPT business workflow, small business AI toolkit
```

---

## 写入 HTML 的格式

每个 pack 页 `<head>` 加：
```html
<meta name="keywords" content="{primary}, {long-tail}, {local}, OpenWays, AI prompt pack, ChatGPT business workflow, small business AI toolkit" />
```

例：pack-lawyer.html
```html
<meta name="keywords" content="AI for lawyers, law firm automation tools, Australian Chinese-speaking solicitor AI, OpenWays, AI prompt pack, ChatGPT business workflow, small business AI toolkit" />
```

---

## H1 / Title 配套调整

Title 公式（< 60 字符）：
```
{Primary keyword} — {Brand} {Pack name}
```
例：
- 旧：`Lawyer AI Pack — OpenWays`
- 新：`AI for Australian Lawyers — OpenWays Lawyer Pack`

H1 公式（页面顶部大标题，含主词 + 长尾词意图）：
```
{Primary modifier} for {Industry+geo} — {Outcome promise}
```
例：
- pack-lawyer：`AI for Australian Lawyers — A 7-Day Practice Automation System`
- pack-realestate：`AI for Sydney Real Estate Agents — Listing & Lead Workflows`
- pack-immigration：`AI for Australian Migration Agents — Client Intake to Visa Lodgement`

---

## og:image 文件名映射（已确认存在 in gumroad-covers/）

每个 pack 用 Australia 版（OpenWays 主市场是 AU）。1200×630 比例，已是 OG 标准。

| pack slug | cover file (URL encoded if needed) |
|-----------|-----------------------------------|
| accounting | `Accounting_Australia_cover.jpg` |
| beauty | `Beauty_Australia_cover.jpg` |
| cleaning | `Cleaning_Australia_cover.jpg` |
| clinic | `Clinic_Australia_cover.jpg` |
| education | `Education_Australia_cover.jpg` |
| immigration | `Education_%26_Migration_Australia_cover.jpg` (& 编码为 %26) |
| insurance | `Insurance_Broker_Australia_cover.jpg` |
| lawyer | `Lawyer_Australia_cover.jpg` |
| logistics | `International_Logistics_Australia_cover.jpg` |
| mortgage | `Mortgage_Broker_Australia_cover.jpg` |
| realestate | `Real_Estate_Australia_cover.jpg` |
| renovation | `Renovation_Australia_cover.jpg` |
| restaurant | `Restaurant_Australia_cover.jpg` |
| signage | `Signage_Australia_cover.jpg` |

写入格式：
```html
<meta property="og:image" content="https://openways.net/gumroad-covers/{cover-filename}" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="https://openways.net/gumroad-covers/{cover-filename}" />
```

静态页面（index/packs/about/contact/faq/custom/book/partners/updates/refund/terms）共用一张品牌图：
- 暂用 `OpenWays_Edge_cover.jpg`（已存在）作为通用品牌 og:image
- 中文镜像 zh-* 用相同图

中文 zh-pack-* 页用相同行业 cover（cover 没有中英文差异）。

---

## 季度迭代

每月在 GSC 看：
- 哪些关键词有 impression 但 CTR < 2% → 改 title / description
- 哪些关键词有 impression 但平均位置 11-20 → 加内链 + 配套博客文章
- 新出现的"零意图但有人搜"的词 → 加到 keywords 表

3 个月后基于真实数据重新平衡这张表。
