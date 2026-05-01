# 3 个 Trades-Technical Pack Brief
**日期**：2026-05-01
**任务**：从 0 生成 3 个新 trades-technical 行业 .py + AU 版 PDFs
**Cluster**：trades-technical（补足 cleaning 和 electrician 之外的 Coming Soon 子行业）
**SOP 来源**：Carpet Cleaning 验证流程（plan 文件第三部分 + memory `feedback_openways_pack_launch_sop.md`）

---

## 行业列表（3 个）

| TC name | slug | 中文研究路径 | has_intl | AU 强本地化关键 |
|---------|------|------------|---------|---------------|
| 水暖油漆 | plumbing-painting | `reference/research/油漆水工-Plumbing & Painting/` | False | NSW Fair Trading plumber license + PCA / AS/NZS 3500 + lead paint regulation pre-1970s |
| 空調暖通 | hvac | `reference/research/空调暖通-HVAC/` | False | ARC license（强制持牌） + Refrigerant Handling License + NSW Specialist License |
| 防水屋頂 | waterproofing-roofing | `reference/research/防水-屋顶维修/` | False | NSW Fair Trading Waterproofer License + BCA Part 3.8.1 + AS 3740 + Home Building Act 7 年 statutory warranty |

**本任务只生 AU 版 PDFs**（has_intl=False，跟律師 / 电工 / 牙医 / 驾校等 AU-only pack 同模式）。

---

## 10 条 Hard Rules（不容协商，自检每条）

1. **三语段结构**：TC → SC → EN，每段 ~430 行，**不能一次写 1300 行**（用 Write + 2 次 Edit append）
2. **AU 版 .py 不能有 `US$`**：`grep -n 'US\$' file.py` → 必须 0
3. **TC 段不能有简体字**。陷阱字（必查）：
   - 国 (TC: 國)、这 (TC: 這)、个 (TC: 個)、来 (TC: 來)、时 (TC: 時)、与 (TC: 與)、后 (TC: 後)、内 (TC: 內)、应 (TC: 應)、学 (TC: 學)、风 (TC: 風)、业 (TC: 業)、复 (TC: 複)、转 (TC: 轉)、级 (TC: 級)、项 (TC: 項)、护 (TC: 護)、务 (TC: 務)、电 (TC: 電)、网 (TC: 網)、户 (TC: 戶)、检 (TC: 檢)、验 (TC: 驗)、签 (TC: 簽)、议 (TC: 議)、让 (TC: 讓)、报 (TC: 報)、装 (TC: 裝)、漏 (OK)、温 (TC: 溫)、暖 (OK)、调 (TC: 調)、维 (TC: 維)、雇 (TC: 僱)、师 (TC: 師)
4. **EN 段不能有中文字符 / 中文标点**：用 ASCII `,` `.` `:` `;` `"` `--`
5. **PDF03_TEMPLATES 必须 8-tuple**：`(category, title, scenario_desc, output_desc, prompt_text, variables_list, example, note)` — **8 元素**（律師 baseline 已验证，brief 之前误写 7-tuple 已修）
6. **中文标点不能起首**
7. **段长 cap（防 PDF box 溢出）**：
   - PDF01 `ai_uses` 字符串：EN ≤ 400 chars / TC,SC ≤ 180 chars
   - 三段间 max-min 必须 ≤ ±50 chars（律師 baseline: 389/376/367）
8. **EN 段必须 native English**：
   - ❌ 中翻英直译（fragment / parallel error / run-on）
   - ✅ 律師笔触：短句 / verb-driven / parallel 严格 / "you" 直接
9. **Description 结尾用 standard**：「华人老板看中文，员工看英文，一个包全搞定」（不要变体）
10. **不删任何文件**

---

## 律師 Baseline 笔触（PDF01_EN ai_uses 三段 inline）

```python
PDF01_EN['ai_uses'] = [
    ('[1] New Client Intake & Initial Reply',
     'Prospective clients ask "Can I review my refused visa?" "There was family violence at home, what do I do?" "Police want to interview me, should I attend?" -- dozens of these every week. Tell AI the client situation and it drafts a bilingual initial reply, urgency triage, and Cost Disclosure estimate. Your professional judgment still applies, but drafting time drops from 15 minutes to 3.'),
    ('[2] Case File Organisation & Translation',
     'Client WeChat screenshots, Chinese evidence, opposing solicitor English correspondence, court orders -- every case repeats the same organisation. AI helps you turn Chinese evidence into court-ready English statements, summarise opposing letters into Chinese client briefings, and generate document checklists, ensuring critical files for hearings or settlement are not missed.'),
    ('[3] Client Progress & Social Media Content',
     'Explaining case progress to clients is time-consuming, and writing month-end case studies for Xiaohongshu adds more. AI helps you turn court movements and opposing responses into client-readable Chinese weekly reports, and converts closed cases (de-identified) into Xiaohongshu / WeChat content, building professional authority while reducing repeat client questions.'),
]
```

字符数：[1] = 389 / [2] = 376 / [3] = 367（三段平衡 ±50 内 ✓）

笔触特点：
- "Prospective clients ask..." 不是 "There are clients who ask..."（verb-driven 开头）
- 用 quotation marks 真实 customer 语句切场景，不是描述
- "-- dozens of these every week" inline qualifier 创造数量感
- "Your professional judgment still applies, but drafting time drops from X to Y" — 收尾固定模板，强调 boundary + 数字 ROI
- 每段 3 句 + 数字结尾。**严格按这个结构**写新 trades 行业的 EN ai_uses。

---

## 3 个行业 Phase 0 答案

### 行业 1 · 水暖油漆 (Plumbing & Painting)

```python
slug = "plumbing-painting"
TC_name = "水暖油漆"
SC_name = "水暖油漆"  # 用同名 OK
EN_name = "Plumbing & Painting"
cluster = "trades-technical"
has_intl = False

# 5 SOPs（PDF04 五个 standard procedures）
SOPs = [
    "緊急水管漏水 / 堵塞 dispatch + safety triage（hipages / Airtasker / 微信半夜询单到 24h response 流程）",
    "計畫型油漆翻新 quote + color consultation + 表面處理範圍說明（surface prep + paint type + coats）",
    "物業 maintenance / 出租房 turnover / End of Lease 組合套餐（plumbing 修補 + painting touch-up 交叉銷售）",
    "NSW Fair Trading 持牌合規 + Compliance Certificate（plumbing）+ lead paint warning（pre-1970s）",
    "Google Reviews + 業主轉介 + 小紅書 case study（before-after 圖文）",
]

# 5 tags
tags = ["緊急水管", "堵塞清通", "室內外油漆", "物業維護", "出租房翻新"]

# 适合 / 不适合
audience = "澳洲華人持牌 plumber + painter sole trader、雙工種小型 trades 公司（1-3 人）、做 residential maintenance + 出租房 turnover + small commercial 業務的雙語業主"
not_audience = "大型 commercial plumbing / painting 公司（已有 IT + roster system）、純 new-build construction 大型專案（不接 maintenance call-out）、只做 specialty 領域如 fire sprinkler / industrial coating"

# AU 特定
au_specific = "依據 AU plumbing + painting 行業實踐：NSW Fair Trading Plumber License（強制）+ Painter License（commercial 必備）+ Plumbing Code of Australia (PCA) + AS/NZS 3500 給排水標準 + Compliance Certificate for Plumbing Work（NSW）+ lead paint warning（pre-1970s 老房強制告知）+ Public Liability Insurance（compulsory）"

# 关键术语保留英文（TC/SC/EN 都保留）
keep_english = ["plumber", "painter", "Compliance Certificate", "PCA", "Plumbing Code of Australia", "AS/NZS 3500", "End of Lease", "Public Liability Insurance", "lead paint", "high pressure clean", "blocked drain", "burst pipe", "hot water system", "gas fitting"]

# Compliance warning（PDF01 desc 必含）
warning = "⚠ 本工具僅輔助持牌 plumber 與 painter 日常工作流，不替代 NSW Fair Trading licensed plumber 在 PCA / AS/NZS 3500 框架下的現場判斷與簽字。所有 plumbing work 必須由 license 持有人完成並出具 Compliance Certificate。pre-1970s 老房油漆作業必須遵守 lead paint 安全規範。"
```

---

### 行业 2 · 空調暖通 (HVAC)

```python
slug = "hvac"
TC_name = "空調暖通"
SC_name = "空调暖通"
EN_name = "HVAC"
cluster = "trades-technical"
has_intl = False

SOPs = [
    "新裝 split system 報價 + 現場評估（房型 / 匹數 / 室外機位置 / 品牌推薦）",
    "Ducted air conditioning 大單咨詢（zoning + smart control + 新房 / 翻新場景）",
    "季節性維修保養 emergency triage（不製冷 / 漏水 / 噪音 / 遙控異常 + 24h response）",
    "商業 / Strata HVAC recurring 合同（mechanical services maintenance schedule + ARC compliance）",
    "ARC license + Refrigerant Handling 合規 + Google Reviews + 客戶教育（季節保養提醒）",
]

tags = ["Split System 安裝", "Ducted A/C", "維修保養", "商業 HVAC", "Strata 合作"]

audience = "澳洲華人持牌 HVAC technician sole trader、小型空調公司（1-5 人）、做 residential split / ducted + light commercial 業務的雙語業主"
not_audience = "大型 mechanical services 公司（已有 IT + dispatch system）、純 industrial HVAC 大型工程、未持 ARC license 的（依法不能處理 refrigerant）"

au_specific = "依據 AU HVAC 行業實踐：ARC（Australian Refrigeration Council）license（強制 — 處理任何制冷劑必備）+ Refrigerant Handling License + NSW Fair Trading Specialist License（特定州）+ AS/NZS 5141.1 安裝規範 + Public Liability Insurance + Workers Comp + 制冷劑 reporting 義務"

keep_english = ["HVAC", "Split System", "Multi-Split", "Ducted Air Conditioning", "ARC", "Refrigerant Handling License", "Mechanical Services", "Strata", "Refrigerant", "AS/NZS 5141", "F-Gas equivalent", "Daikin", "Mitsubishi Electric", "Fujitsu", "BTU", "kW"]

warning = "⚠ 本工具僅輔助 ARC-licensed HVAC technician 日常工作流，不替代現場 refrigerant handling 與 installation compliance 判斷。所有制冷劑處理必須由 ARC license 持有人執行並做 reporting。安裝必須符合 AS/NZS 5141.1。"
```

---

### 行业 3 · 防水屋頂 (Waterproofing & Roofing)

```python
slug = "waterproofing-roofing"
TC_name = "防水屋頂"
SC_name = "防水屋顶"
EN_name = "Waterproofing & Roofing"
cluster = "trades-technical"
has_intl = False

SOPs = [
    "屋頂漏水緊急診斷 + 上門 inspection（暴雨後天花滴水 / flashing 漏水 / valley 漏水的快速 triage）",
    "Roof restoration 大單（high pressure clean + broken tile replacement + ridge capping + rebedding + repointing + resealing）",
    "Balcony / bathroom 防水合規（NSW BCA Part 3.8.1 + AS 3740 + 7 年 statutory warranty 申請流程）",
    "Strata / commercial flat roof / podium 防水維護（membrane + box gutter + parapet + 中介報修對接）",
    "NSW Fair Trading Waterproofer License + 7 年保修 + Google Reviews + 業主轉介",
]

tags = ["屋頂漏水", "Roof Restoration", "浴室防水", "Strata 防水", "7 年保修"]

audience = "澳洲華人持牌 waterproofer + roofer sole trader、小型 trades 公司（1-3 人）、做 residential roof leak repair + bathroom waterproofing + Strata maintenance 業務的雙語業主"
not_audience = "大型 roofing replacement 公司（已有 IT + 設備車隊）、純 commercial 大型 podium / industrial 防水專案、未持 Waterproofer License 的（NSW 強制）"

au_specific = "依據 AU 防水 + 屋頂行業實踐：NSW Fair Trading Waterproofer License（強制 wet area 防水）+ Roofer License（部分州）+ Building Code of Australia (BCA) Part 3.8.1 防水規範 + AS 3740 wet area waterproofing 標準 + Home Building Act 1989 規定 7 年 statutory warranty + Public Liability Insurance"

keep_english = ["Waterproofer", "Roofer", "Roof Restoration", "Roof Leak Repair", "Bathroom Waterproofing", "Balcony Waterproofing", "Membrane", "Flashing", "Box Gutter", "Ridge Capping", "Repointing", "Rebedding", "BCA", "AS 3740", "Home Building Act 1989", "Statutory Warranty", "Strata", "podium"]

warning = "⚠ 本工具僅輔助持牌 waterproofer / roofer 日常工作流，不替代 NSW Fair Trading licensed waterproofer 在 BCA Part 3.8.1 / AS 3740 框架下的現場判斷與簽字。所有 wet area 防水必須由 license 持有人完成。Home Building Act 1989 規定的 7 年 statutory warranty 由 license 持有人承擔。"
```

---

## Workflow（每个 agent 严格遵守）

1. Read 这份 brief（你的行业 section）
2. Read 律師.py 完整段（`production/industries/律師.py`）作为笔触 baseline
3. Read 行业研究 4 文件（`reference/research/<行业>/00 + 01 + 02 + 03`）
4. Write Segment 1 (TC) — 含 NAMES / LABELS 三语 + PDF01-05 全 TC
5. Edit append Segment 2 (SC)
6. Edit append Segment 3 (EN) — **严格按律師.py EN 笔触，不要中翻英**
7. **自检命令**：
   ```bash
   # 1. US$ 检查（AU 版必须 0）
   grep -n 'US\$' production/industries/<TC name>.py
   
   # 2. TC 段简体字检查
   grep -nE '[国这个来时与后内应学风业复转级项护务电网户检验签议让报装温调维师]' production/industries/<TC name>.py | grep -v '_SC\|_EN'
   
   # 3. EN 段中文字符检查
   awk '/_EN/,/^$/' production/industries/<TC name>.py | grep -P '[\x{4E00}-\x{9FFF}\x{3000}-\x{303F}\x{FF00}-\x{FFEF}]'
   
   # 4. 段长 cap 检查
   python3 -c "
   import re
   src = open('production/industries/<TC name>.py').read()
   blocks = list(re.finditer(r\"'ai_uses':\\s*\\[(.*?)\\],\", src, re.DOTALL))
   for i, b in enumerate(blocks):
       tuples = re.findall(r\"\\(\\s*'\\[(\\d+)\\][^']*',\\s*'(.+?)'\\)\", b.group(1), re.DOTALL)
       seg = ['TC','SC','EN'][i] if i < 3 else f'seg{i}'
       print(f'{seg}: ' + ' / '.join(f'[{idx}]={len(s)}c' for idx, s in tuples))
   "
   # 期望：EN 三段 370-410 chars，max-min ±50 内
   ```

8. 跑 `gen_pack.py`：
   ```bash
   cd production
   python3 gen_pack.py --industry <TC name> --lang tc --edition au
   python3 gen_pack.py --industry <TC name> --lang sc --edition au
   python3 gen_pack.py --industry <TC name> --lang en --edition au
   ```

9. 验证 PDFs：
   ```bash
   ls products/<TC name>/au/{tc,sc,en}/*.pdf
   # 每个 lang 目录 5 个 PDF，总 15 个
   ```

## 报告格式

完成后输出：
- .py 路径 + 行数（期望 1100-1500）
- gen_pack.py exit code（期望 3 个 0）
- PDFs 路径 + 数量（期望 15）
- 自检结果（4 项 grep 全过 + 段长平衡）
- PDF01_EN ai_uses [1] 完整内容（让 main session 看 native English 质量）
- 任何 sandbox 阻塞或问题
