# 3 个 Trades-Technical Pack Gumroad 立即上架包
**日期**：2026-05-01
**用途**：Patrick 一站式参考，按这份直接上 Gumroad
**SOP 来源**：Carpet Cleaning 验收流程

---

# 通用流程（每个 pack 都一样，跟之前 4 个 lifestyle pack 同模式）

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
| **Description** | 从 `gumroad-covers/product_descriptions.md` #32/33/34 复制 |
| **Category** | Business & Money |
| **Tags** | 见下方 5 个 |
| **Star rating** | ON |
| **Adult content** | OFF |

## Additional details（4 条，3 个 pack 都一样）
1. `Languages: English, 简体中文, 繁體中文`
2. `5 structured guides + 8 bonus videos`
3. `Works with ChatGPT & Claude (free tiers)`
4. `Instant download · Yours forever`

---

# 1️⃣ Plumbing & Painting AI Pack — Australia Edition (AU only)

## 文件路径
```
Cover (1280×720) :  gumroad-covers/Plumbing_&_Painting_Australia_cover.jpg  ← 待 gen_covers.py 生成
Thumb (600×600)  :  gumroad-covers/Plumbing_&_Painting_Australia_thumb.jpg  ← 待生成

PDFs (15 个) :
  EN : products/水暖油漆/au/en/Plumbing & Painting_AI_*.pdf  (5 个)
  SC : products/水暖油漆/au/sc/水暖油漆AI*.pdf            (5 个)
  TC : products/水暖油漆/au/tc/水暖油漆AI*.pdf            (5 个)
```

## Title
```
Plumbing & Painting AI Pack — Australia Edition
```

## Tags（5 个）
```
ai, plumbing, painting, trades, end of lease
```

## Description
直接从 `gumroad-covers/product_descriptions.md` #32 复制（含 standard 结尾"华人老板看中文，员工看英文，一个包全搞定"）。

---

# 2️⃣ HVAC AI Pack — Australia Edition (AU only)

## 文件路径
```
Cover (1280×720) :  gumroad-covers/HVAC_Australia_cover.jpg
Thumb (600×600)  :  gumroad-covers/HVAC_Australia_thumb.jpg

PDFs (15 个) :
  EN : products/空調暖通/au/en/HVAC_AI_*.pdf       (5 个)
  SC : products/空調暖通/au/sc/空调暖通AI*.pdf     (5 个)
  TC : products/空調暖通/au/tc/空調暖通AI*.pdf     (5 个)
```

## Title
```
HVAC AI Pack — Australia Edition
```

## Tags（5 个）
```
ai, hvac, air conditioning, arc license, ducted
```

## Description
从 `product_descriptions.md` #33 复制。

---

# 3️⃣ Waterproofing & Roofing AI Pack — Australia Edition (AU only)

## 文件路径
```
Cover (1280×720) :  gumroad-covers/Waterproofing_&_Roofing_Australia_cover.jpg
Thumb (600×600)  :  gumroad-covers/Waterproofing_&_Roofing_Australia_thumb.jpg

PDFs (15 个) :
  EN : products/防水屋頂/au/en/Waterproofing & Roofing_AI_*.pdf  (5 个)
  SC : products/防水屋頂/au/sc/防水屋顶AI*.pdf                  (5 个)
  TC : products/防水屋頂/au/tc/防水屋頂AI*.pdf                  (5 个)
```

## Title
```
Waterproofing & Roofing AI Pack — Australia Edition
```

## Tags（5 个）
```
ai, waterproofing, roofing, bca, statutory warranty
```

## Description
从 `product_descriptions.md` #34 复制。

---

# 上架顺序建议

按合规复杂度升序：
1. **Plumbing & Painting**（先上，组合服务最直接）
2. **HVAC**（中等合规，ARC license 强制）
3. **Waterproofing & Roofing**（最复杂，含 7 年 statutory warranty）

每个上架完发我 URL，我做完整 finalize（landing 页 + 索引同步 + Gumroad URL 替换，按 Carpet Cleaning SOP 主对话顺序做）。

---

# 你回来后要做的事

| Step | 谁做 | 内容 |
|------|------|------|
| 1 | Patrick | 跑 3 个 Nano Banana cover prompts（见 `2026-05-01-three-trades-nano-banana-prompts.md`）|
| 2 | Patrick | 3 张 cover 存到 `gumroad-covers/originals/` |
| 3 | 我 | 加 `gen_covers.py` mapping 3 行 |
| 4 | Patrick | 跑 `cd gumroad-covers && python3 gen_covers.py` 出 cover + thumb |
| 5 | Patrick | 上 3 个 Gumroad listing（按本文档 + product_descriptions #32-34）|
| 6 | Patrick | 3 个 Gumroad URL 发我 |
| 7 | 我 | 3 个 landing 页（pack-* + zh-pack-*）+ 3 个 Gumroad URL 替换 + 3 个索引同步（packs.html / zh-packs.html / sitemap.xml / industry-trades-technical.html）|
| 8 | 我 | commit + push 让 Vercel 部署 |

---

# 已就绪的产物清单

| 文件 | 状态 |
|------|------|
| `production/industries/水暖油漆.py` | ✅ 1301 行，自检全过 |
| `production/industries/空調暖通.py` | ✅ 1309 行（EN 段补救后），自检全过 |
| `production/industries/防水屋頂.py` | ✅ 1310 行，自检全过 |
| `products/水暖油漆/au/{tc,sc,en}/*.pdf` | ✅ 15 PDFs |
| `products/空調暖通/au/{tc,sc,en}/*.pdf` | ✅ 15 PDFs |
| `products/防水屋頂/au/{tc,sc,en}/*.pdf` | ✅ 15 PDFs |
| `gumroad-covers/product_descriptions.md` #32-34 | ✅ 3 段完整 description（含 standard 结尾）|
| `_tasks/2026-05-01-three-trades-nano-banana-prompts.md` | ✅ 3 个 cover prompt |
| `_tasks/2026-05-01-three-trades-packs-brief.md` | ✅ 共享 brief |

总计：**45 PDFs + 3 .py + 3 description + 3 Nano Banana prompts**，全部就绪。

---

# 自检报告（每个 .py）

| 行业 | 行数 | US$ | TC 简体陷阱 | EN 中文 | EN ai_uses 段长 |
|------|------|-----|------------|---------|----------------|
| 水暖油漆 | 1301 | 0 ✓ | 0 ✓ | 0 ✓ | 366/371/355 (Δ16) |
| 空調暖通 | 1309 | 0 ✓ | 0 ✓ | 0 ✓ | 395/398/380 (Δ18) |
| 防水屋頂 | 1310 | 0 ✓ | 0 ✓ | 0 ✓ | 397/379/351 (Δ46) |
| 律師(baseline) | 1308 | 0 | 0 | 0 | 389/376/367 (Δ22) |

全部跟律師 baseline 对齐，段长 cap 全过（≤ 400 chars，三段 max-min ≤ ±50）。

---

# 注意事项

- **空調暖通 .py** 经历过 EN 段补救（前一次 agent API 中断，主对话发现后 spawn 新 agent 单一职责 append EN 段）— 最终质量与其他两包一致
- **3 个包都是 has_intl=False**（强 AU 本地化 license 体系，跟律師 / 牙医 / 电工 / 驾校 / Carpet Cleaning 同模式）
