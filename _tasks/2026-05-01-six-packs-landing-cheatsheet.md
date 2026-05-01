# 6 个 Pack Landing 页 metadata 速查（URL 来了照这个套）
**日期**：2026-05-01
**用途**：每个 URL 来了，按这份秒速做 landing 页 + 索引同步
**Template**：`pack-carpet-cleaning.html` + `zh-pack-carpet-cleaning.html`（已验证 trades-style）

---

## 6 个行业映射表

| # | TC name | EN name | slug | hub | tag emoji + cluster | Schema category | Cover filename |
|---|--------|---------|------|-----|------------|----------------|----------------|
| 1 | 商業清潔 | Commercial Cleaning | commercial-cleaning | industry-lifestyle-services.html | 🧹 Lifestyle Services · 🇦🇺 AU Only | Commercial Cleaning Services AI | Commercial_Cleaning_Australia_cover.jpg |
| 2 | 家政服務 | Domestic Help | domestic-help | industry-lifestyle-services.html | 🏠 Lifestyle Services · 🇦🇺 AU Only | Domestic Services AI | Domestic_Help_Australia_cover.jpg |
| 3 | 搬運服務 | Removalist | removalist | industry-lifestyle-services.html | 📦 Lifestyle Services · 🇦🇺 AU Only | Moving Services AI | Removalist_Australia_cover.jpg |
| 4 | 水暖油漆 | Plumbing & Painting | plumbing-painting | industry-trades-technical.html | 🔧 Trades & Technical · 🇦🇺 AU Only | Plumbing & Painting Services AI | Plumbing_&_Painting_Australia_cover.jpg |
| 5 | 空調暖通 | HVAC | hvac | industry-trades-technical.html | ❄️ Trades & Technical · 🇦🇺 AU Only | HVAC Services AI | HVAC_Australia_cover.jpg |
| 6 | 防水屋頂 | Waterproofing & Roofing | waterproofing-roofing | industry-trades-technical.html | 🛠️ Trades & Technical · 🇦🇺 AU Only | Waterproofing & Roofing Services AI | Waterproofing_&_Roofing_Australia_cover.jpg |

---

## Related Packs 推荐（每个 3 卡）

| 行业 | Related 1 | Related 2 | Related 3 |
|------|----------|-----------|-----------|
| Commercial Cleaning | Carpet Cleaning (🧼) | Domestic Help (🏠) | Removalist (📦) |
| Domestic Help | Commercial Cleaning (🧹) | Carpet Cleaning (🧼) | Removalist (📦) |
| Removalist | Commercial Cleaning (🧹) | Carpet Cleaning (🧼) | Domestic Help (🏠) |
| Plumbing & Painting | Electrician (⚡) | HVAC (❄️) | Waterproofing & Roofing (🛠️) |
| HVAC | Electrician (⚡) | Plumbing & Painting (🔧) | Waterproofing & Roofing (🛠️) |
| Waterproofing & Roofing | Electrician (⚡) | Plumbing & Painting (🔧) | HVAC (❄️) |

---

## Description 索引（直接复制段）

`gumroad-covers/product_descriptions.md`：

| # | 行业 | 行号 |
|---|------|------|
| 28 | Commercial Cleaning | line 1509-1573 |
| 29 | Domestic Help | line 1575-1639 |
| 30 | Removalist | line 1641-1705 |
| 32 | Plumbing & Painting | line 1773-1837 |
| 33 | HVAC | line 1839-1903 |
| 34 | Waterproofing & Roofing | line 1905-end |

---

## Phase 0 复用（compliance + audience + AU specific）

详细 Phase 0 答案：
- 3 trades：`_tasks/2026-05-01-three-trades-packs-brief.md`
- 3 lifestyle：`_tasks/2026-05-01-four-lifestyle-packs-brief.md`

每行业关键 keyword：

### 1. Commercial Cleaning
- license：no specific cleaner license（依 Fair Work + WHS）
- 关键合规：WHS Act + Cleaning Award MA000022 + Public Liability Insurance + casual employee 文件
- 痛点：B2B 比稿、深夜班次 roster、客户报修群组管理、ABN holder vs employee 边界

### 2. Domestic Help
- 强本地化：NDIS Worker Screening + Working with Children Check（如带儿童照护）
- 关键合规：Aged Care Royal Commission 后规则 + insurance + 雇主义务
- 痛点：客户排班冲突、临时取消、深度清洁加价、家事服务 vs 家庭佣工边界

### 3. Removalist
- license：no specific removalist license（但需 AFRA membership for credibility）
- 关键合规：carrier liability insurance + Australian Consumer Law + 损坏赔付流程
- 痛点：报价偏差、跨州 logistics、家具拆装边界、保险申报

### 4. Plumbing & Painting
- license：NSW Fair Trading Plumber License + Painter License
- 关键合规：PCA + AS/NZS 3500 + Compliance Certificate + lead paint pre-1970s
- 痛点：紧急 dispatch、quote 价格战、维护客户群、Compliance Certificate 流程

### 5. HVAC
- license：ARC（强制） + Refrigerant Handling License + NSW Specialist
- 关键合规：AS/NZS 5141.1 + 制冷剂 reporting + 商业 maintenance schedule
- 痛点：split system 报价对比、ducted 大单咨询、紧急维修 24h response、Strata 合约

### 6. Waterproofing & Roofing
- license：NSW Waterproofer License（强制 wet area）+ Roofer License（部分州）
- 关键合规：BCA Part 3.8.1 + AS 3740 + Home Building Act 7 年 statutory warranty
- 痛点：屋顶漏水诊断、Roof restoration 大单、bathroom 防水合规、Strata 维护

---

## Landing 页流程（每个 URL 来了照做，按 SOP）

### Step 1: cp 模板
```bash
cp pack-carpet-cleaning.html pack-<slug>.html
cp zh-pack-carpet-cleaning.html zh-pack-<slug>.html
```

### Step 2: EN 9 大块 Edit（按 SOP）
- 1. head（title / desc / keywords / canonical / og / twitter / schema / breadcrumb / cover filename）
- 2. hero（breadcrumb hub / tag emoji / H1 / sub / 5 tags chip / Best for / Not ideal / compliance note）
- 3. purchase card（AU desc + Gumroad URL + Why no INTL）
- 4. pain points 4 cards
- 5. sample prompt + Before/After
- 6. specific tasks 4 grids
- 7. how-built + 6 included items（标准模板，行业字眼替换）+ 5 why-buys Q&A
- 8. 5 FAQ + final CTA Gumroad URL + Edge Pass tagline
- 9. Related Packs 3 cards（按上表）

**2 处隐藏遗漏**：
- line ~279-285：`<!-- PDF Preview ... carpet_cleaning_sop_preview.jpg -->` 改 industry slug
- line ~508：`20 carpet-cleaning-specific templates` 改 `20 <industry>-specific templates`

### Step 3: ZH 9 大块 Edit
- 同上但中文版
- footer/nav 的 `pack-carpet-cleaning.html` → `pack-<slug>.html` 用 replace_all
- final CTA Gumroad URL 替换

### Step 4: 索引同步（4 文件）
- `packs.html`：cluster section 加 pack-card + packData 数组加 entry
- `zh-packs.html`：中文 cluster section 加 pack-card
- `sitemap.xml`：EN entry + ZH entry（lastmod=2026-05-01）
- 对应 industry hub（lifestyle-services 或 trades-technical）：Pack Cards 区加新卡 + 从 Coming Soon 移除

### Step 5: grep 残留检查
```bash
grep -nE "Carpet|carpet|steam|IICRC|bond-back|pet odour" pack-<slug>.html | head
# 期望：剩余只在 Related Packs（如果 Related Packs 推荐了 carpet cleaning）
```

### Step 6: commit + push
commit message：
```
Launch <industry> pack with Gumroad URL and full index sync

- pack-<slug>.html / zh-pack-<slug>.html: full carpet-cleaning template
  rewrite to <industry> content (10 sections); wire Gumroad URL <code>;
  <key compliance terms> compliance positioning
- packs.html / zh-packs.html: <industry> card in <cluster>
- sitemap.xml: pack-<slug> + zh-pack-<slug> entries
- industry-<cluster>.html: <industry> card promoted from Coming Soon
```

---

## 上架顺序（Patrick 自由选）

**Lifestyle 3 个**（按合规复杂度升序）：
1. Commercial Cleaning（B2B 最直接）
2. Removalist（保险/合规中等）
3. Domestic Help（NDIS / Aged Care 最复杂）

**Trades 3 个**（按合规复杂度升序）：
1. Plumbing & Painting（组合服务最直接）
2. HVAC（中等合规，ARC license）
3. Waterproofing & Roofing（最复杂，含 7 年 statutory warranty）
