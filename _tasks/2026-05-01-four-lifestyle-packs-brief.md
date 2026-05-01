# 4 个 Lifestyle-Services Pack Brief
**日期**：2026-05-01
**任务**：从 0 生成 4 个新行业 .py + AU 版 PDFs
**Cluster**：lifestyle-services（补足 cleaning 之外的子行业）

---

## 行业列表（4 个）

| TC name | slug | 中文研究路径 | has_intl |
|---------|------|------------|---------|
| 商業清潔 | commercial-cleaning | `reference/research/已完成/商业清洁-退租清洁/` | True |
| 家政服務 | domestic-help | `reference/research/已完成/家政服务/` | True |
| 搬運服務 | removalist | `reference/research/搬运服务/` | True |
| 地毯清洗 | carpet-cleaning | `reference/research/地毯清洗/` | True |

**本任务只生 AU 版 PDFs**（has_intl=True 保留扩展，但跑 `--edition au` 单独）。

---

## 10 条 Hard Rules（不容协商，自检每条）

1. **三语段结构**：TC → SC → EN，每段 ~430 行，不能一次写 1300 行（用 Write + 2 次 Edit append）
2. **AU 版 .py 不能有 `US$`**：`grep -n 'US\$' file.py` → 必须 0
3. **TC 段不能有简体字**：NotoSansTC 字体不支持，渲染方框。常见陷阱字：
   - 国 (TC: 國)、这 (TC: 這)、个 (TC: 個)、来 (TC: 來)、时 (TC: 時)、与 (TC: 與)、后 (TC: 後)、内 (TC: 內)、应 (TC: 應)、学 (TC: 學)、风 (TC: 風)、业 (TC: 業)、复 (TC: 複)、转 (TC: 轉)、级 (TC: 級)、项 (TC: 項)、护 (TC: 護)、务 (TC: 務)、电 (TC: 電)、网 (TC: 網)、户 (TC: 戶)、检 (TC: 檢)、验 (TC: 驗)、签 (TC: 簽)、议 (TC: 議)、让 (TC: 讓)、报 (TC: 報)
4. **EN 段不能有中文字符 / 中文标点**：用 ASCII `,` `.` `:` `;` `"` `--`（不要 `，。：；「」—`）
5. **PDF03_TEMPLATES 必须 7-tuple**：`(title, subtitle, persona, scenario, prompt_text, expected_output, notes)` 三段都遵守
6. **中文标点不能起首**
7. **段长 cap（防 PDF box 溢出）**：
   - PDF01 `ai_uses` 字符串：EN ≤ 400 chars / TC,SC ≤ 180 chars
   - 三段间 max-min 必须 ≤ ±50 chars（参考律師 EN: 389/376/367）
   - PDF01 `scenarios` description / `steps` description：同 cap
   - PDF02 tools description：EN ≤ 100 chars / TC,SC ≤ 50 chars
8. **EN 段必须 native English**（最大教训）：
   - ❌ 中翻英直译（fragment / parallel structure 错乱 / run-on）
   - ✅ 律師.py EN 笔触：短句紧凑 / parallel 严格 / verb-driven / "you" 直接
   - 写完 EN 段抽查 PDF01 ai_uses，确认无 fragment + parallel structure 正确
9. **Description 结尾用 standard template**："华人老板看中文，员工看英文，一个包全搞定"（每个行业的中文 description 都用这个结尾，不要自创变体）— 这条是给 product_descriptions.md 文档用，但 .py 内的中文描述不强制
10. **不删任何文件**

---

## 律師 Baseline 笔触（PDF01_EN ai_uses 三段，inline 给 agent 抄笔触）

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
- 用 quotation marks 真实 customer语句切场景，不是描述
- "-- dozens of these every week" inline qualifier 创造数量感
- "Your professional judgment still applies, but drafting time drops from X to Y" — 收尾固定模板，强调 boundary + 数字 ROI
- 每段 3 句 + 数字结尾。**严格按这个结构**写 4 个新行业的 EN ai_uses。

---

## 4 个行业 Phase 0 答案（agent 直接用，不要再想）

### 行业 1 · 商業清潔 (Commercial Cleaning)

```python
slug = "commercial-cleaning"
cluster = "lifestyle-services"
has_intl = True

# 5 SOPs（PDF04 五个 standard procedures）
SOPs = [
    "新客戶 inquiry → 現場 inspection → written quote（含 scope / insurance / police check 證明）",
    "Recurring Office / Retail / Clinic 排班管理（roster + 客戶偏好 + 替班 protocol + after-hours）",
    "End of Lease / Move-out 一次性深度清潔（bond-back checklist + 中介 / 房東 receipt）",
    "Strata / Body Corporate 公區長期合作（lobby / lift / stairwell / car park / bin room + incident reporting + manager 沟通）",
    "Add-on 升級（Carpet Steam / Window Cleaning / Oven Cleaning / Bin Room Deep Clean）+ Google Reviews + B2B 續約",
]

# 5 tags
tags = ["Office Recurring", "End of Lease", "Strata Common Area", "After-Hours / Insured", "Carpet & Window Add-ons"]

# 适合 / 不适合
audience = "澳洲華人 commercial cleaning sole trader、小型清潔承包商（1-5 人）、做 office / strata / end of lease 的雙語業主，覆蓋 Sydney / Melbourne 商業地產區"
not_audience = "大型 facility management 公司（已有 IT + roster system）、純 residential housekeeping（看家政服務包）、純 carpet-only 商戶（看地毯清洗包）"

# AU 特定
au_specific = "依據 AU 商業清潔行業實踐：public liability insurance（compulsory 對 contractor）+ workers comp + police check（B2B 標配）+ Site-Specific Risk Assessment + Strata 報修流程 + bond-back inspection（NSW Tenancy 標準）"

# 关键术语保留英文（TC/SC/EN 都保留）
keep_english = ["End of Lease", "bond back", "Strata", "Body Corporate", "Common Area", "Police Check", "Public Liability Insurance", "After-Hours", "Risk Assessment", "Commercial Cleaning"]
```

**Sample EN ai_uses 笔触参考**（agent 必须按律師 baseline 写出 native English）：
```
[1] New Quote & Site Inspection
[2] Recurring Roster & Client Communication
[3] End of Lease Bond-Back Delivery
```

---

### 行业 2 · 家政服務 (Domestic Help)

```python
slug = "domestic-help"
cluster = "lifestyle-services"
has_intl = True

SOPs = [
    "新客戶接待 + 雙語報價（家庭情況詢問 + recurring 偏好 + 工時估算 + key handover protocol）",
    "Recurring 家政排班（同 cleaner 客戶偏好 / pet 提醒 / 鎖匙交付 / 客戶不在家服務 protocol）",
    "Deep Clean / Spring Clean / 節前一次性（oven / window / wall spot / mould / 季節性深度）",
    "NDIS / Aged Care 服務協議（plan managed / self managed / agency managed + service agreement + support coordinator 對接）",
    "老客戶保留 + 家庭轉介 + Google Reviews（鄰里推薦 + 微信家庭群 + 服務升級到 NDIS / Aged Care）",
]

tags = ["Recurring Family", "Deep Clean", "Bond Back", "NDIS Cleaning", "Aged Care Domestic"]

audience = "澳洲華人 house cleaning sole trader、小型家政公司（1-3 人）、做 weekly / fortnightly recurring 服務的雙語業主，覆蓋 Sydney / Melbourne 華人聚居區"
not_audience = "大型家政連鎖（已有 booking SaaS + roster system）、純 commercial / office cleaning（看商業清潔包）、僅做 NDIS 大型 provider（不用本地小生意工作流）"

au_specific = "依據 AU 家政實踐：public liability insurance + police check（敏感家庭 + NDIS 必備）+ NDIS 三種 plan management（plan managed / self managed / agency managed）+ Aged Care HCP / CHSP support + Working with Children Check（家有兒童客戶）"

keep_english = ["Bond Back", "End of Lease", "NDIS", "Aged Care", "HCP", "CHSP", "Plan Managed", "Self Managed", "Police Check", "Working with Children Check", "Spring Clean", "Deep Clean"]
```

---

### 行业 3 · 搬運服務 (Removalist)

```python
slug = "removalist"
cluster = "lifestyle-services"
has_intl = True

SOPs = [
    "新客戶報價（視頻估算 / on-site quote + 楼层 / lift / staircase / 距離 / 物品 inventory + packing 加購）",
    "搬運日調度 + 工時材料記錄（lift booking / parking permit / stair fee / fragile item handling + 損壞處理 protocol）",
    "Packing & Unpacking 服務（fragile + label / inventory + 拆裝家具 + rubbish removal after unpacking）",
    "Long-distance / Interstate / Storage 過渡（containerised / temporary storage + interstate freight rate + 海外搬遷）",
    "End-of-move Google Reviews + 二手家具 / 仓储交叉銷售 + 留學生 / 微信社區轉介",
]

tags = ["Local Home Move", "Office Relocation", "Packing Service", "Storage", "Interstate"]

audience = "澳洲華人 removalist sole trader、小型搬運公司（1-3 truck）、做 local + small move + interstate 的雙語業主，覆蓋 Sydney / Melbourne 留學生 + 華人家庭"
not_audience = "大型搬家品牌（Allied / Grace 等已有 dispatch system）、純物流公司（看 international logistics 包）、僅做企業大型 office 搬遷的（本地小生意 packman 工作流不適用）"

au_specific = "依據 AU 搬運實踐：public liability insurance（compulsory）+ goods in transit insurance + AFRA membership 可選 + lift booking（apartment 必備）+ parking permit（市中心 / 雙向街必備）+ NSW / VIC apartment strata 搬遷規則"

keep_english = ["Removalist", "Removal", "Lift Booking", "Parking Permit", "Goods in Transit Insurance", "AFRA", "Interstate", "Containerised", "Storage", "Stair Fee"]
```

---

### 行业 4 · 地毯清洗 (Carpet Cleaning)

```python
slug = "carpet-cleaning"
cluster = "lifestyle-services"
has_intl = True

SOPs = [
    "新客戶報價（地毯類型 / 面積 / 服務方法 steam vs dry + stain 預判 + pet odour 加購）",
    "服務交付（pre-vacuum + steam HWE / dry low-moisture + stain treatment + 干燥時間管理 + post-service inspection）",
    "End of Lease 地毯清洗（與 bond clean 綁定 + receipt 可中介驗收 + inspection-ready timing）",
    "Pet Odour / Urine / Stain 專項治理（多次處理計劃 + enzyme treatment + 嚴重案例 sub-floor 處理）",
    "Commercial Office / Strata Recurring 地毯維護 + Google Reviews + Rug & Upholstery 加購",
]

tags = ["Steam Cleaning", "Stain Removal", "Pet Odour", "End of Lease Carpet", "Commercial Office"]

audience = "澳洲華人 carpet cleaning sole trader、小型地毯清洗公司（1-3 人）、覆蓋 Sydney / Melbourne 住宅 + 商業混合業務的雙語業主"
not_audience = "大型 facility management 公司（已有 IT + 設備車隊）、純 dry cleaning 衣物店（不同行業）、僅做 commercial fitout post-construction 大型地毯團隊"

au_specific = "依據 AU 地毯清洗實踐：public liability insurance + IICRC certification 可選（行業 credential）+ Australian Carpet Cleaners Institute (ACCI) 標準 + manufacturer warranty 保留要求 + bond-back inspection 常被中介要求 receipt"

keep_english = ["Carpet Steam Cleaning", "HWE", "Hot Water Extraction", "Dry Cleaning", "Low Moisture", "Stain Removal", "Pet Odour", "End of Lease", "Bond Back", "IICRC", "ACCI", "Rug Cleaning", "Upholstery"]
```

---

## Workflow（每个 agent 严格遵守）

1. Read 这份 brief（你正在做的行业 section）
2. Read 律師.py 完整段（`production/industries/律師.py`）作为笔触 baseline
3. Read 行业研究 4 文件（`reference/research/.../00 + 01 + 02 + 03`）
4. Write Segment 1 (TC) — 含 NAMES / LABELS 三语 + PDF01-05 全 TC
5. Edit append Segment 2 (SC) — PDF01_SC ~ PDF05_SC + PDF03_TEMPLATES_SC
6. Edit append Segment 3 (EN) — PDF01_EN ~ PDF05_EN + PDF03_TEMPLATES_EN
7. **自检命令**（在 main session 跑 / 或 agent 跑）：
   ```bash
   # 1. US$ 检查（AU 版必须 0）
   grep -n 'US\$' production/industries/<TC name>.py
   
   # 2. TC 段简体字检查（关键陷阱字）
   grep -nE '[国这个来时与后内应学风业复转级项护务电网户检验签议让报]' production/industries/<TC name>.py | grep -v '_SC\|_EN'
   
   # 3. EN 段中文字符检查
   awk '/_EN/,/^$/' production/industries/<TC name>.py | grep -P '[\x{4E00}-\x{9FFF}\x{3000}-\x{303F}\x{FF00}-\x{FFEF}]'
   
   # 4. 段长 cap 检查（PDF01_EN ai_uses）
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

8. 跑 `gen_pack.py`（如果 sandbox 允许，否则报告 main session 跑）：
   ```bash
   cd production
   python3 gen_pack.py --industry <TC name> --lang tc --edition au
   python3 gen_pack.py --industry <TC name> --lang sc --edition au
   python3 gen_pack.py --industry <TC name> --lang en --edition au
   ```

9. 验证 PDFs 存在：
   ```bash
   ls products/<TC name>/au/{tc,sc,en}/*.pdf
   # 每个 lang 目录 5 个 PDF，总 15 个
   ```

## 报告格式（agent 完成后输出）

- .py 路径 + 行数（期望 1100-1500 行）
- gen_pack.py exit code（如果跑了）
- PDFs 路径 + 数量
- 自检结果（4 项 grep 都 0 命中）
- PDF01_EN ai_uses 字符数（期望平衡）
- 抽样 ai_uses 第 [1] 段（让 main session 看 native English 质量）
- 任何 sandbox 阻塞或问题
