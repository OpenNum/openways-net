# 4 个 Lifestyle-Services 行业 Nano Banana Cover Prompts
**日期**：2026-05-01
**用途**：生成 Gumroad 封面（1280×720, 16:9 横向）
**模板权威**：[`reference_openways_nanobanana_template.md`](file:///Users/by/.claude/projects/-Users-by/memory/reference_openways_nanobanana_template.md)（Patrick 2026-04-27 锁定）

每行业 1 个 cover prompt（**只生成 cover，thumb 由 `gen_covers.py` 自动从 cover 裁切**，不需要单独 prompt）。

---

## Workflow

1. 把下面 prompt 粘到 Nano Banana，每个跑 1-3 张挑最好的
2. 存到 `gumroad-covers/originals/`，命名建议：
   - `commercialcleaning.png`
   - `domestichelp.png`
   - `removalist.png`
   - `carpetcleaning.png`
3. 告诉我 4 张存好了，我加 `gen_covers.py` mapping 4 行 → 你跑脚本自动产 cover + thumb + hero-bg

---

# 1️⃣ 商業清潔 (Commercial Cleaning) — AU 版 Cover (1280×720)

```
3D rendered photorealistic composition on a dark teal studio background (#1c3037 to #0f1a1e gradient). LEFT-CENTER area contains a beautifully arranged cluster of commercial cleaning props with soft cyan and mint-green rim lighting:
- A professional upright commercial vacuum cleaner (slim brushed-metal body) standing prominently
- A wheeled mop bucket with a clean wringer attachment beside it
- A neat stack of folded microfiber cloths in white and grey
- A clipboard labeled "End of Lease Inspection" with a partially ticked checklist
- A folder labeled "Public Liability Insurance + Police Check" lying angled
- A spray bottle of professional-grade cleaning solution
- A small office building micro-silhouette (low-key, like a paperweight) suggesting B2B context
- A floating cluster of small translucent ✓ checkmarks (iridescent, glass-like) drifting near the props, suggesting site signed off and bond returned
- A subtle Sydney Opera House micro-silhouette in the prop arrangement (low-key, like a paperweight)
- Subtle faint outline of the Australia continent behind the props (teal tone, low opacity, like a watermark in the middle-left background)
Small decorative sparkle/stars scattered near the props for a "site signed off, inspection passed" feel.
RIGHT 50% of the image must be COMPLETELY EMPTY with just the dark gradient background — this space will be used for text overlay later.
Bottom-right corner: tiny sparkle icon.
Soft cinematic lighting, clean modern product photography style, fresh elegant composition. 16:9 aspect ratio. No text, no watermarks, no people, no faces, no hands.
```

---

# 2️⃣ 家政服務 (Domestic Help) — AU 版 Cover (1280×720)

```
3D rendered photorealistic composition on a dark teal studio background (#1c3037 to #0f1a1e gradient). LEFT-CENTER area contains a beautifully arranged cluster of domestic housekeeping props with soft cyan and mint-green rim lighting:
- A compact household vacuum (slim modern design) standing prominently
- A neatly folded stack of fresh white towels
- A handheld cleaning caddy with several spray bottles arranged inside
- A small ceramic vase with one or two fresh flowers (warm domestic feel)
- A folded apron in soft neutral colour
- A clipboard labeled "Recurring Weekly Schedule" with ticked weeks visible
- A small ring of house keys with a leather fob
- A floating cluster of small translucent ✓ checkmarks (iridescent, glass-like) drifting near the props, suggesting home refreshed and family cared for
- A subtle Sydney Opera House micro-silhouette in the prop arrangement (low-key, like a paperweight)
- Subtle faint outline of the Australia continent behind the props (teal tone, low opacity, like a watermark in the middle-left background)
Small decorative sparkle/stars scattered near the props for a "home refreshed, family cared for" feel.
RIGHT 50% of the image must be COMPLETELY EMPTY with just the dark gradient background — this space will be used for text overlay later.
Bottom-right corner: tiny sparkle icon.
Soft cinematic lighting, clean modern product photography style, fresh elegant composition. 16:9 aspect ratio. No text, no watermarks, no people, no faces, no hands.
```

---

# 3️⃣ 搬運服務 (Removalist) — AU 版 Cover (1280×720)

```
3D rendered photorealistic composition on a dark teal studio background (#1c3037 to #0f1a1e gradient). LEFT-CENTER area contains a beautifully arranged cluster of removalist props with soft cyan and mint-green rim lighting:
- A small stack of cardboard moving boxes (3-4 boxes), each clearly labeled "Kitchen", "Bedroom", "Fragile" in handwritten marker
- A roll of bubble wrap unspooled slightly
- A heavy-duty packing tape gun in industrial yellow
- A folded furniture protection blanket (quilted moving pad)
- A small sturdy hand truck / dolly (low-profile silhouette)
- A clipboard labeled "Inventory + Lift Booking" with ticked items
- A small ring of house keys with a parking permit slip
- A miniature removal truck silhouette in the back-left, like a paperweight
- A floating cluster of small translucent ✓ checkmarks (iridescent, glass-like) drifting near the props, suggesting safe arrival
- A subtle Sydney Opera House micro-silhouette in the prop arrangement (low-key, like a paperweight)
- Subtle faint outline of the Australia continent behind the props (teal tone, low opacity, like a watermark in the middle-left background)
Small decorative sparkle/stars scattered near the props for a "delivered safely, on time, nothing broken" feel.
RIGHT 50% of the image must be COMPLETELY EMPTY with just the dark gradient background — this space will be used for text overlay later.
Bottom-right corner: tiny sparkle icon.
Soft cinematic lighting, clean modern product photography style, fresh elegant composition. 16:9 aspect ratio. No text, no watermarks, no people, no faces, no hands.
```

---

# 4️⃣ 地毯清洗 (Carpet Cleaning) — AU 版 Cover (1280×720)

```
3D rendered photorealistic composition on a dark teal studio background (#1c3037 to #0f1a1e gradient). LEFT-CENTER area contains a beautifully arranged cluster of carpet cleaning props with soft cyan and mint-green rim lighting:
- A professional carpet steam cleaning machine (brushed metal body with a coiled hose) standing prominently
- A spray bottle of professional stain treatment solution
- A small folded microfiber pad and brush attachment
- A rolled-up section of clean fresh-looking carpet (subtle wool texture)
- A clipboard labeled "End of Lease Carpet — Bond Receipt" with ticked items
- A small bottle of pet odour enzyme treatment with a paw-print icon (subtle)
- A small folded inspection chart showing carpet zones
- A floating cluster of small translucent ✓ checkmarks (iridescent, glass-like) drifting near the props, suggesting carpet refreshed and inspection passed
- A subtle Sydney Opera House micro-silhouette in the prop arrangement (low-key, like a paperweight)
- Subtle faint outline of the Australia continent behind the props (teal tone, low opacity, like a watermark in the middle-left background)
Small decorative sparkle/stars scattered near the props for a "carpet refreshed, stains gone, bond returned" feel.
RIGHT 50% of the image must be COMPLETELY EMPTY with just the dark gradient background — this space will be used for text overlay later.
Bottom-right corner: tiny sparkle icon.
Soft cinematic lighting, clean modern product photography style, fresh elegant composition. 16:9 aspect ratio. No text, no watermarks, no people, no faces, no hands.
```

---

# 上架后我做的事（你存好 4 张 originals 后告诉我）

1. 在 `gumroad-covers/gen_covers.py` 加 mapping 4 行：
```python
"commercialcleaning.png": ("Commercial Cleaning", "Australia", "A$49", "AU", "For Chinese-speaking commercial cleaning sole traders & small contractors"),
"domestichelp.png": ("Domestic Help", "Australia", "A$49", "AU", "For Chinese-speaking house cleaning sole traders & bilingual housekeeping"),
"removalist.png": ("Removalist", "Australia", "A$49", "AU", "For Chinese-speaking removalist sole traders & small moving companies"),
"carpetcleaning.png": ("Carpet Cleaning", "Australia", "A$49", "AU", "For Chinese-speaking carpet cleaning sole traders & residential / commercial"),
```

2. 你跑 `cd gumroad-covers && python3 gen_covers.py` → 自动产出 cover + thumb + hero-bg
3. 上架 4 个 Gumroad listing，发我 URL，我做 finalize（landing 页 + 索引同步）
