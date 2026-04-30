# 3 个新行业 Nano Banana 提示词
**日期**：2026-04-30
**用途**：生成 Gumroad 封面（1280×720）+ thumb（600×600）
**模板权威**：[`reference_openways_nanobanana_template.md`](file:///Users/by/.claude/projects/-Users-by/memory/reference_openways_nanobanana_template.md)

每行业 2 个 prompt：
- **Cover** (1280×720, 16:9)：LEFT-CENTER props + RIGHT 50% 留空（脚本后期加文字 overlay）
- **Thumb** (600×600 方形)：CENTERED single hero prop

只生成 **AU 版**（INTL 版暂时不做，Patrick 决定后续再加）。

---

## Workflow（生成→存档→脚本→上架）

1. 把下面的 prompt 粘到 Nano Banana，每个 prompt 跑 1-3 张挑最好的
2. 存到 `gumroad-covers/originals/<行业拼音>.jpg`（建议命名：`driving-school.jpg` / `dentist.jpg` / `electrician.jpg`）
3. 让我在 `gumroad-covers/gen_covers.py` 加 mapping 字典 3 行
4. 你跑 `cd gumroad-covers && python3 gen_covers.py`
5. 自动产出 `Driving_School_Australia_cover.jpg` (1280×720) + `Driving_School_Australia_thumb.jpg` (600×600) + `hero-bg/hero-driving-school.jpg` (1920×600)
6. 上传 Gumroad（cover 用 1280×720，thumb 用 600×600）

---

# 1. 駕校 (Driving School) — AU 版

## Cover prompt (1280×720)

```
3D rendered photorealistic composition on a dark teal studio background
(#1c3037 to #0f1a1e gradient). LEFT-CENTER area contains a beautifully
arranged cluster of driving school props with soft cyan and mint-green
rim lighting:
- A bright yellow L-plate sign (with black L) leaning against a stack
- A small set of car keys with a leather fob and a steering-wheel
  shaped keychain
- A NSW Driver Knowledge Test booklet (open, showing diagrams) lying
  flat with corners worn
- A small leather log book (open page showing handwritten hours like
  "Hour 47/120")
- A miniature roundabout traffic sign on a slim post
- A driver's license card (anonymized, clean design) angled across the
  booklet
- A small steering wheel miniature on the back-left, like a paperweight
- A floating cluster of small translucent ✓ checkmarks (iridescent,
  glass-like) drifting near the props, suggesting completed lessons
- A subtle Sydney Opera House micro-silhouette in the prop arrangement
  (low-key, like a paperweight)
- Subtle faint outline of the Australia continent behind the props
  (teal tone, low opacity, like a watermark in the middle-left
  background)
Small decorative sparkle/stars scattered near the props for a
"journey passed, license earned" feel.
RIGHT 50% of the image must be COMPLETELY EMPTY with just the dark
gradient background — this space will be used for text overlay later.
Bottom-right corner: tiny sparkle icon.
Soft cinematic lighting, clean modern product photography style, fresh
elegant composition. 16:9 aspect ratio. No text, no watermarks,
no people, no faces, no hands.
```

## Thumb prompt (600×600)

```
3D rendered photorealistic composition on a dark teal studio background
(#1c3037 to #0f1a1e gradient), 600×600 square format. CENTERED single
hero prop with slight tilt: a bright yellow L-plate sign (with black L)
prominently displayed, with a small set of car keys with leather fob
resting next to it. Soft cyan and mint-green rim lighting from the
upper right. A floating cluster of small translucent ✓ checkmarks
(iridescent, glass-like) drifting around the L-plate. A subtle faint
outline of the Australia continent in the background at low opacity
(teal tone, like a watermark). Small decorative sparkle/stars
scattered near the prop. Bottom-right corner: tiny sparkle icon.
Soft cinematic lighting, clean modern product photography style.
No text, no watermarks, no people, no faces.
```

---

# 2. 牙醫 (Dentist) — AU 版

## Cover prompt (1280×720)

```
3D rendered photorealistic composition on a dark teal studio background
(#1c3037 to #0f1a1e gradient). LEFT-CENTER area contains a beautifully
arranged cluster of dental practice props with soft cyan and mint-green
rim lighting:
- A polished stainless steel dental mirror leaning against a stack
- A clean ceramic-white tooth model (single molar, anatomically
  correct) sitting upright on a small base
- A pair of dental loupes with brushed-metal frames
- A small clear vial of dental composite resin
- A patient chart folder (closed, off-white, with a clean tab) lying
  flat
- A modern toothbrush head and a small spool of dental floss
- A glass petri dish with a dental impression (subtle blue alginate
  texture)
- A floating cluster of small translucent ✓ checkmarks (iridescent,
  glass-like) drifting near the props, suggesting completed treatment
- A subtle Sydney Opera House micro-silhouette in the prop arrangement
  (low-key, like a paperweight)
- Subtle faint outline of the Australia continent behind the props
  (teal tone, low opacity, like a watermark in the middle-left
  background)
Small decorative sparkle/stars scattered near the props for a
"smile restored, treatment delivered" feel.
RIGHT 50% of the image must be COMPLETELY EMPTY with just the dark
gradient background — this space will be used for text overlay later.
Bottom-right corner: tiny sparkle icon.
Soft cinematic lighting, clean modern product photography style, fresh
elegant composition. 16:9 aspect ratio. No text, no watermarks,
no people, no faces, no mouths.
```

## Thumb prompt (600×600)

```
3D rendered photorealistic composition on a dark teal studio background
(#1c3037 to #0f1a1e gradient), 600×600 square format. CENTERED single
hero prop with slight tilt: a clean ceramic-white tooth model (single
molar, anatomically correct) prominently displayed, with a polished
stainless steel dental mirror resting next to it. Soft cyan and
mint-green rim lighting from the upper right. A floating cluster of
small translucent ✓ checkmarks (iridescent, glass-like) drifting
around the tooth. A subtle faint outline of the Australia continent
in the background at low opacity (teal tone, like a watermark). Small
decorative sparkle/stars scattered near the prop. Bottom-right corner:
tiny sparkle icon. Soft cinematic lighting, clean modern product
photography style. No text, no watermarks, no people, no faces,
no mouths.
```

---

# 3. 電工 (Electrician) — AU 版

## Cover prompt (1280×720)

```
3D rendered photorealistic composition on a dark teal studio background
(#1c3037 to #0f1a1e gradient). LEFT-CENTER area contains a beautifully
arranged cluster of licensed electrician's tools with soft cyan and
mint-green rim lighting:
- A premium yellow digital multimeter with red and black probes coiled
  neatly beside it
- A circuit breaker / RCD safety switch (white, with the trip lever
  visible) standing upright
- A pair of red insulated wire-stripping pliers angled across the
  composition
- A coil of premium electrical cable (showing red, black, green-yellow
  earth wires)
- A modern LED downlight fitting (round, brushed silver bezel)
- A non-contact voltage tester pen (yellow with a black tip)
- A miniature switchboard panel cutout (showing 3-4 labeled circuit
  breaker rows)
- A floating cluster of small translucent ✓ checkmarks (iridescent,
  glass-like) drifting near the props, suggesting CCEW signed off
- A subtle Sydney Opera House micro-silhouette in the prop arrangement
  (low-key, like a paperweight)
- Subtle faint outline of the Australia continent behind the props
  (teal tone, low opacity, like a watermark in the middle-left
  background)
Small decorative sparkle/stars scattered near the props for a
"power flowing safely, compliance signed" feel.
RIGHT 50% of the image must be COMPLETELY EMPTY with just the dark
gradient background — this space will be used for text overlay later.
Bottom-right corner: tiny sparkle icon.
Soft cinematic lighting, clean modern product photography style, fresh
elegant composition. 16:9 aspect ratio. No text, no watermarks,
no people, no faces, no hands.
```

## Thumb prompt (600×600)

```
3D rendered photorealistic composition on a dark teal studio background
(#1c3037 to #0f1a1e gradient), 600×600 square format. CENTERED single
hero prop with slight tilt: a premium yellow digital multimeter with
red and black probes prominently displayed, with a small RCD safety
switch resting next to it. Soft cyan and mint-green rim lighting from
the upper right. A floating cluster of small translucent ✓ checkmarks
(iridescent, glass-like) drifting around the multimeter. A subtle
faint outline of the Australia continent in the background at low
opacity (teal tone, like a watermark). Small decorative sparkle/stars
scattered near the prop. Bottom-right corner: tiny sparkle icon. Soft
cinematic lighting, clean modern product photography style. No text,
no watermarks, no people, no faces, no hands.
```

---

# Gumroad Listing Copy（你直接复制贴到 Gumroad UI）

## 駕校

**Title**：`駕校 AI 行業包 — 澳洲版（Australia Edition）`

**Summary**（一句话，标题下方）：
`用 AI 把試課接待、學員進度、考前輔導全部標準化，每週省下 6 小時行政時間。`

**Long description**（≤300 字 markdown）：
```markdown
**Built for**：accredited Chinese-speaking driving instructors, sole-trader 駕校, and small driving school owners serving Chinese / Vietnamese / Indian / Arabic-speaking students in NSW, VIC, and QLD.

**5 個 SOP 工作流**：
- 試課預約 + 雙語報價標準化（從 WhatsApp / 微信問價到鎖定 booking）
- 學員進度追蹤 + 家長週報（mastered / needs work / next focus）
- DKT / HPT 學員母語拆解 + 弱項定向出題
- 路考前路線分析 + 考試天前 checklist 雙語版
- Google Reviews + 學員轉介小紅書內容（脫敏案例）

**你會拿到**：
- 15 個 PDF（5 份指南 × 繁中 / 简中 / English 三語）
- 8 個短視頻 walkthrough（每個 SOP 一段）
- 12 個月 Edge Pass（內容更新 + 新工具加入）

A$49 一次性買斷，永久使用。
```

---

## 牙醫

**Title**：`牙醫 AI 行業包 — 澳洲版（Australia Edition）`

**Summary**：
`用 AI 把新患接待、X 光講解、Recall 提醒全部雙語標準化，每週省下 5 小時行政時間。`

**Long description**：
```markdown
**Built for**：AHPRA-registered Chinese-speaking GP dentists, bilingual dental clinic owners, and mid-sized private practice partners (NSW / VIC) where 30%+ of patients have Chinese background.

**5 個 SOP 工作流**：
- 新患詢問 + 治療方案預估（含 Medicare CDBS / HICAPS instant claim）
- X-ray / Treatment plan 雙語講解（OPG / RCT / implant 浅显 Chinese 解釋 + visual storyboard）
- Recall 多語提醒 + drop-out 挽回信
- Treatment plan + finance plan 解釋（含 Afterpay / health fund）
- Google Reviews + 案例小紅書 + 微信公眾號內容（合規去識別化）

**你會拿到**：
- 15 個 PDF（5 份指南 × 繁中 / 简中 / English 三語）
- 8 個短視頻 walkthrough
- 12 個月 Edge Pass

⚠ This pack assists daily workflow. All clinical decisions must be made by AHPRA-registered dentists.

A$49 一次性買斷，永久使用。
```

---

## 電工

**Title**：`電工 AI 行業包 — 澳洲版（Australia Edition）`

**Summary**：
`用 AI 把報價、緊急派工、CCEW 合規文檔全部標準化，每週省下 7 小時行政時間。`

**Long description**：
```markdown
**Built for**：licensed Chinese-speaking electricians (NSW Fair Trading / VIC ESV / QLD ESO), sole traders, and small electrical contractors (1-5 人) doing residential + light commercial work in Australia.

**5 個 SOP 工作流**：
- 新客戶報價 + 現場評估（hipages / Airtasker / 微信詢單到 written quote）
- 緊急派工 + 工時材料記錄（power outage / smoke smell / breaker tripping）
- CCEW (NSW) / COES (VIC) / Certificate of Test (QLD) 合規文檔骨架
- 客戶教育 + 維護建議（safety switch test / smoke alarm / EV charger）
- Google Reviews + 鄰里轉介 + 小紅書 case study

**你會拿到**：
- 15 個 PDF（5 份指南 × 繁中 / 简中 / English 三語）
- 8 個短視頻 walkthrough
- 12 個月 Edge Pass

⚠ All electrical work and Certificates of Compliance must be signed by a licensed electrician under AS/NZS 3000.

A$49 一次性買斷，永久使用。
```

---

# 上架后我要做的事

你跑完 Nano Banana 拿到 3 张 originals 存到 `gumroad-covers/originals/` 后，告诉我。我会：

1. 在 `gumroad-covers/gen_covers.py` 加 mapping 3 行（驾校 / 牙医 / 电工）
2. 你跑 `python3 gen_covers.py` 生成 cover + thumb + hero-bg
3. 你拿到 3 个 Gumroad URL 后告诉我，我用 `gumroad-finalize` skill 把 3 个 pack 页（pack-driving-school.html 等）的 contact.html 占位符替换成真实 URL
4. 同步 sitemap.xml + packs.html / zh-packs.html / industry-*.html 加 3 个新 pack 卡片

注：3 个新行业的 pack landing 页（pack-driving-school.html 等）目前还没生成——`pack-landing` skill 那一步我们今天没做。如果你想要 landing 页配合上架，跟我说，我跑那个 skill。
