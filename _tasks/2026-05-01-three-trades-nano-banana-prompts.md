# 3 个 Trades-Technical 行业 Nano Banana Cover Prompts
**日期**：2026-05-01
**用途**：生成 Gumroad 封面（1280×720, 16:9 横向）
**模板权威**：[`reference_openways_nanobanana_template.md`](file:///Users/by/.claude/projects/-Users-by/memory/reference_openways_nanobanana_template.md)（Patrick 2026-04-27 锁定）

每行业 1 个 cover prompt（**只生成 cover，thumb 由 `gen_covers.py` 自动从 cover 裁切**）。

---

## Workflow

1. 把下面 prompt 粘到 Nano Banana，每个跑 1-3 张挑最好的
2. 存到 `gumroad-covers/originals/`，命名建议：
   - `plumbing painting.png`（Plumbing & Painting）
   - `hvac.png`（HVAC）
   - `waterproofing roofing.png`（Waterproofing & Roofing）
3. 告诉我"图存好了"，我加 `gen_covers.py` mapping 3 行 → 你跑脚本自动产 cover + thumb

---

# 1️⃣ 水暖油漆 (Plumbing & Painting) — AU 版 Cover (1280×720)

```
3D rendered photorealistic composition on a dark teal studio background (#1c3037 to #0f1a1e gradient). LEFT-CENTER area contains a beautifully arranged cluster of plumbing and painting trade props with soft cyan and mint-green rim lighting:
- A premium adjustable wrench (chrome finish) leaning against a stack
- A roll of plumber's PTFE tape (white) and a small brass elbow fitting
- A high-quality paint roller with a clean cream-coloured roller cover
- A natural-bristle paint brush (wooden handle, brass ferrule) angled across the composition
- A small can of premium acrylic interior paint with a partially open lid showing crisp colour
- A fan deck of paint colour swatches in muted neutrals (off-whites, soft greys, sage)
- A clipboard labeled "Compliance Certificate + Quote" with a partially ticked checklist
- A floating cluster of small translucent ✓ checkmarks (iridescent, glass-like) drifting near the props, suggesting work signed off
- A subtle Sydney Opera House micro-silhouette in the prop arrangement (low-key, like a paperweight)
- Subtle faint outline of the Australia continent behind the props (teal tone, low opacity, like a watermark in the middle-left background)
Small decorative sparkle/stars scattered near the props for a "leak fixed, paint refreshed, property handed back" feel.
RIGHT 50% of the image must be COMPLETELY EMPTY with just the dark gradient background — this space will be used for text overlay later.
Bottom-right corner: tiny sparkle icon.
Soft cinematic lighting, clean modern product photography style, fresh elegant composition. 16:9 aspect ratio. No text, no watermarks, no people, no faces, no hands.
```

---

# 2️⃣ 空調暖通 (HVAC) — AU 版 Cover (1280×720)

```
3D rendered photorealistic composition on a dark teal studio background (#1c3037 to #0f1a1e gradient). LEFT-CENTER area contains a beautifully arranged cluster of HVAC technician's tools and components with soft cyan and mint-green rim lighting:
- A modern split-system indoor unit (slim white panel) prominently positioned, with a subtle hint of cool air mist
- A digital refrigerant manifold gauge with red and blue gauges and brass fittings
- A pair of insulated copper refrigerant pipes (small section, neatly coiled)
- A wall-mounted thermostat / smart controller (square, modern bezel)
- A ducted air conditioning ceiling diffuser (round, brushed silver)
- A small clipboard labeled "ARC License + Site Assessment" with ticked items
- A roll of insulation tape and a refrigerant recovery cylinder (small, in safety green)
- A floating cluster of small translucent ✓ checkmarks (iridescent, glass-like) drifting near the props, suggesting installation signed off and ARC compliance
- A subtle Sydney Opera House micro-silhouette in the prop arrangement (low-key, like a paperweight)
- Subtle faint outline of the Australia continent behind the props (teal tone, low opacity, like a watermark in the middle-left background)
Small decorative sparkle/stars scattered near the props for a "comfortable home, summer ready, system signed off" feel.
RIGHT 50% of the image must be COMPLETELY EMPTY with just the dark gradient background — this space will be used for text overlay later.
Bottom-right corner: tiny sparkle icon.
Soft cinematic lighting, clean modern product photography style, fresh elegant composition. 16:9 aspect ratio. No text, no watermarks, no people, no faces, no hands.
```

---

# 3️⃣ 防水屋頂 (Waterproofing & Roofing) — AU 版 Cover (1280×720)

```
3D rendered photorealistic composition on a dark teal studio background (#1c3037 to #0f1a1e gradient). LEFT-CENTER area contains a beautifully arranged cluster of waterproofing and roofing trade props with soft cyan and mint-green rim lighting:
- A small clean section of terracotta roof tile (showing a single ridge cap) prominently positioned
- A roll of waterproofing membrane (dark grey rubber-like material, partially unrolled)
- A trowel with a wooden handle and a clean stainless blade (used for membrane application)
- A small bucket of waterproofing primer (matte black, with a clean brush resting on top)
- A spirit level (compact, with bright yellow body) angled across the composition
- A small section of metal flashing (brushed aluminium L-shape)
- A clipboard labeled "BCA Part 3.8.1 + 7-Year Warranty Certificate" with ticked items
- A floating cluster of small translucent ✓ checkmarks (iridescent, glass-like) drifting near the props, suggesting waterproofing certified and warranty signed
- A subtle Sydney Opera House micro-silhouette in the prop arrangement (low-key, like a paperweight)
- Subtle faint outline of the Australia continent behind the props (teal tone, low opacity, like a watermark in the middle-left background)
Small decorative sparkle/stars scattered near the props for a "leak stopped, roof restored, warranty issued" feel.
RIGHT 50% of the image must be COMPLETELY EMPTY with just the dark gradient background — this space will be used for text overlay later.
Bottom-right corner: tiny sparkle icon.
Soft cinematic lighting, clean modern product photography style, fresh elegant composition. 16:9 aspect ratio. No text, no watermarks, no people, no faces, no hands.
```

---

# 上架后我做的事

3 张 originals 存好后告诉我，我做：

1. 在 `gumroad-covers/gen_covers.py` 加 mapping 3 行：
```python
"plumbing painting.png": ("Plumbing & Painting", "Australia", "A$49", "AU", "For Chinese-speaking plumbers & painters / sole traders / small trades businesses"),
"hvac.png": ("HVAC", "Australia", "A$49", "AU", "For Chinese-speaking ARC-licensed HVAC technicians & small AC companies"),
"waterproofing roofing.png": ("Waterproofing & Roofing", "Australia", "A$49", "AU", "For Chinese-speaking licensed waterproofers / roofers / sole traders"),
```

2. 你跑 `cd gumroad-covers && python3 gen_covers.py` → 自动产出 cover + thumb
3. 上架 3 个 Gumroad listing，发我 URL，我做 finalize（landing 页 + 索引同步，按 Carpet Cleaning SOP 主对话顺序做）
