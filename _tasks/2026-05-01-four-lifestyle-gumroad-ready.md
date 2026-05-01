# 4 个 Lifestyle Pack Gumroad 立即上架包
**日期**：2026-05-01
**用途**：Patrick 一站式参考，按这份直接上 Gumroad
**注意**：这次按之前 driving school / dentist / electrician 同样流程（已验证可行）

---

# 通用流程（每个 pack 都一样）

## Gumroad UI 字段

| 字段 | 内容 |
|------|------|
| **Name** | 见下方 Title |
| **URL** | 默认 |
| **Cover** | 上传 1280×720 jpg（路径见下）|
| **Thumbnail** | 上传 600×600 jpg |
| **Price** | AUD $49 |
| **Call to action** | I want this! |
| **Summary** | `15 PDF guides (3 languages) + 8 videos + bonus ebook + 12-month updates` |
| **Description** | 见下方（直接复制）或从 `gumroad-covers/product_descriptions.md` #28/29/30/31 复制 |
| **Category** | Business & Money |
| **Tags** | 见下方 5 个 |
| **Star rating** | ON |
| **Adult content** | OFF |

## Additional details（4 条，3 个 pack 都一样）
1. `Languages: English, 简体中文, 繁體中文`
2. `5 structured guides + 8 bonus videos`
3. `Works with ChatGPT & Claude (free tiers)`
4. `Instant download · Yours forever`

## Content tab（PDF + 视频 + 赠书）
- **PDF**：从对应目录拖入 15 个文件
- **视频**：`gumroad video/renamed/` → 8 个 mp4
- **赠书**：`book/bonus-book-upload/` → 3 本 PDF

---

# 1️⃣ Commercial Cleaning AI Pack — Australia Edition (AU only)

## 文件路径
```
Cover (1280×720) :  gumroad-covers/Commercial_Cleaning_Australia_cover.jpg  ← 待 gen_covers.py 生成
Thumb (600×600)  :  gumroad-covers/Commercial_Cleaning_Australia_thumb.jpg  ← 待生成

PDFs (15 个) :
  EN : products/商業清潔/au/en/Commercial Cleaning_AI_*.pdf  (5 个)
  SC : products/商業清潔/au/sc/商业清洁AI*.pdf            (5 个)
  TC : products/商業清潔/au/tc/商業清潔AI*.pdf            (5 个)
```

## Title
```
Commercial Cleaning AI Pack — Australia Edition
```

## Tags（5 个）
```
ai, commercial cleaning, b2b, end of lease, strata
```

## Description
直接从 `gumroad-covers/product_descriptions.md` #28 复制（含 standard 结尾"华人老板看中文，员工看英文，一个包全搞定"）。

---

# 2️⃣ Domestic Help AI Pack — Australia Edition (AU only)

## 文件路径
```
Cover (1280×720) :  gumroad-covers/Domestic_Help_Australia_cover.jpg
Thumb (600×600)  :  gumroad-covers/Domestic_Help_Australia_thumb.jpg

PDFs (15 个) :
  EN : products/家政服務/au/en/Domestic Help_AI_*.pdf  (5 个)
  SC : products/家政服務/au/sc/家政服务AI*.pdf       (5 个)
  TC : products/家政服務/au/tc/家政服務AI*.pdf       (5 个)
```

## Title
```
Domestic Help AI Pack — Australia Edition
```

## Tags（5 个）
```
ai, domestic help, house cleaning, ndis, aged care
```

## Description
从 `product_descriptions.md` #29 复制。

---

# 3️⃣ Removalist AI Pack — Australia Edition (AU only)

## 文件路径
```
Cover (1280×720) :  gumroad-covers/Removalist_Australia_cover.jpg
Thumb (600×600)  :  gumroad-covers/Removalist_Australia_thumb.jpg

PDFs (15 个) :
  EN : products/搬運服務/au/en/Removalist_AI_*.pdf      (5 个)
  SC : products/搬運服務/au/sc/搬运服务AI*.pdf         (5 个)
  TC : products/搬運服務/au/tc/搬運服務AI*.pdf         (5 个)
```

## Title
```
Removalist AI Pack — Australia Edition
```

## Tags（5 个）
```
ai, removalist, moving, packing service, interstate
```

## Description
从 `product_descriptions.md` #30 复制。

---

# 4️⃣ Carpet Cleaning AI Pack — Australia Edition (AU only)

## 文件路径
```
Cover (1280×720) :  gumroad-covers/Carpet_Cleaning_Australia_cover.jpg
Thumb (600×600)  :  gumroad-covers/Carpet_Cleaning_Australia_thumb.jpg

PDFs (15 个) :
  EN : products/地毯清洗/au/en/Carpet Cleaning_AI_*.pdf  (5 个)
  SC : products/地毯清洗/au/sc/地毯清洗AI*.pdf         (5 个)
  TC : products/地毯清洗/au/tc/地毯清洗AI*.pdf         (5 个)
```

## Title
```
Carpet Cleaning AI Pack — Australia Edition
```

## Tags（5 个）
```
ai, carpet cleaning, steam cleaning, pet odour, end of lease
```

## Description
从 `product_descriptions.md` #31 复制。

---

# 上架顺序建议

按合规复杂度升序（学之前驾校→电工→牙医的成功经验）：
1. **商業清潔**（先上，B2B 路径最直接）
2. **地毯清洗**（technical service，next）
3. **搬運服務**（保险/合规中等）
4. **家政服務**（NDIS / Aged Care 最复杂，最后）

每个上架完发我 URL，我做完整 finalize（landing 页 + 索引同步 + Gumroad URL 替换）。

---

# 你回来后要做的事（先后顺序）

| Step | 谁做 | 内容 |
|------|------|------|
| 1 | Patrick | 跑 4 个 Nano Banana cover prompts（见 `2026-05-01-four-lifestyle-nano-banana-prompts.md`） |
| 2 | Patrick | 4 张 cover 存到 `gumroad-covers/originals/` |
| 3 | 我 | 加 `gen_covers.py` mapping 4 行（提示词文档已附 mapping 代码）|
| 4 | Patrick | 跑 `cd gumroad-covers && python3 gen_covers.py` 出 cover + thumb |
| 5 | Patrick | 上 4 个 Gumroad listing（按本文档 + product_descriptions #28-31）|
| 6 | Patrick | 4 个 Gumroad URL 发我 |
| 7 | 我 | 4 个 landing 页（pack-* + zh-pack-*）+ 4 个 Gumroad URL 替换 + 4 个索引同步（packs.html / zh-packs.html / sitemap.xml / industry-lifestyle-services.html） |
| 8 | 我 | commit + push 让 Vercel 部署 |

---

# 已就绪的产物清单

| 文件 | 状态 |
|------|------|
| `production/industries/商業清潔.py` | ✅ 1305 行，自检全过 |
| `production/industries/家政服務.py` | ✅ 1306 行，自检全过 |
| `production/industries/搬運服務.py` | ✅ 1308 行，自检全过 |
| `production/industries/地毯清洗.py` | ✅ 1306 行，自检全过 |
| `products/商業清潔/au/{tc,sc,en}/*.pdf` | ✅ 15 PDFs（10-11 页，size 跟 baseline 一致）|
| `products/家政服務/au/{tc,sc,en}/*.pdf` | ✅ 15 PDFs |
| `products/搬運服務/au/{tc,sc,en}/*.pdf` | ✅ 15 PDFs |
| `products/地毯清洗/au/{tc,sc,en}/*.pdf` | ✅ 15 PDFs |
| `gumroad-covers/product_descriptions.md` #28-31 | ✅ 4 段完整 description（含 standard 结尾）|
| `_tasks/2026-05-01-four-lifestyle-nano-banana-prompts.md` | ✅ 4 个 cover prompt |
| `_tasks/2026-05-01-four-lifestyle-packs-brief.md` | ✅ 共享 brief |

总计：**60 PDFs + 4 .py + 4 description + 4 Nano Banana prompts**，全部就绪。

---

# 自检报告（每个 .py）

| 行业 | 行数 | US$ | TC 简体陷阱 | EN 中文 | EN ai_uses 段长 |
|------|------|-----|------------|---------|----------------|
| 商業清潔 | 1305 | 0 ✓ | 0 ✓ | 0 ✓ | 383/368/394 (Δ26) |
| 家政服務 | 1306 | 0 ✓ | 0 ✓ | 0 ✓ | 343/368/362 (Δ25) |
| 搬運服務 | 1308 | 0 ✓ | 0 ✓ | 0 ✓ | 392/349/344 (Δ48) |
| 地毯清洗 | 1306 | 0 ✓ | 0 ✓ | 0 ✓ | 388/388/381 (Δ7) |
| 律師(baseline) | 1308 | 0 | 0 | 0 | 389/376/367 (Δ22) |

全部跟律師 baseline 对齐，段长 cap 全过（≤ 400 chars，三段 max-min ≤ ±50）。

PDF 格式一致性（vs 已合格驾校/牙医 baseline）：
- 同 page count（10-11 页）
- 同 byte size 区间（±5% 内）
- 同 PDF version 1.4
- 同 layout（gen_pack.py 同生成器）
