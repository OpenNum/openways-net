# Three New Industries — Phase 0 Discovery Brief
日期：2026-04-30
决定人：Patrick
目标：3 个 PDF 行业包同时生产，等 Patrick 回来上架 Gumroad

## 选择理由

- **驾校（Driving School）** — Patrick 指定。Cluster: education-training
- **牙医（Dentist）** — Patrick 指定。Cluster: health-wellness
- **电工（Electrician）** — 自选。Cluster: trades-technical。理由：AU 蓝领服务业大池子（持牌强制，类比 lawyer/migration 合规故事），完全没被 OpenWays 覆盖

3 个 cluster 完全错开，符合"不同大行业"要求。

---

## 行业 1 — 驾校 (Driving School)

| 项 | 值 |
|----|---|
| 行业中文名（TC） | 駕校 |
| 行业中文名（SC） | 驾校 |
| 英文 slug | driving-school |
| 英文名 | Driving School AI Pack |
| ANZSIC 大类 | education-training |
| has_intl | **True** |
| 文件名 | `production/industries/駕校.py` |

### 适合 / 不适合
- **适合**：澳洲多语种 driving instructor / 个体驾校 / 小型 driving school（NSW/VIC/QLD）老板，特别是华人/越南/印度/阿拉伯背景的 instructor
- **不适合**：大型连锁驾校 SaaS 公司、不亲自教学的纯平台

### 5 个 SOP（PDF04 的 5 个 standard procedures）
1. **新学员咨询 + 试课 booking 自动化**：从 WhatsApp/微信/Google form 询单到锁定 booking 的标准化流程，含双语回复模板、价格 quote、cancellation policy 解释
2. **学员进度追踪 + 家长沟通报告**：每周/每两周给学员（或家长）发一份 driving progress report，含已掌握技能 / 待加强项 / 下次重点
3. **DKT/HPT 题库讲解 + 模拟练习**：用 AI 帮你把 NSW Driver Knowledge Test (DKT) 和 Hazard Perception Test (HPT) 题型用学员的母语解释，按学员弱点定向出题
4. **Driving test 路线分析 + 模拟报告**：用 AI 帮你解析常见 test route 的关键点（roundabout, hill start, parallel parking, three-point turn），生成给学员看的"考试天前重点 checklist"
5. **Google Reviews + 学员转介小红书内容**：把成功 pass 的学员故事（脱敏后）写成中英文小红书 / 微信图文，建立"高 pass rate driving school" 信任

### 5 个 tags（hero 用）
試駕預約 / 路考輔導 / 家長進度報告 / 多語駕培 / DKT 題庫

### AU 特定内容
- **持牌体系**：NSW RMS - Driving Instructor License (Class C); VIC VicRoads - Accredited Driving Instructor; QLD Dept of Transport
- **考试体系**：DKT (Driver Knowledge Test, 45 questions) / HPT (Hazard Perception Test) / Driving Test
- **Lic class**：C 普通客车（focus）+ C automatic / C manual 区分
- **Safe Driver Course (SDS)**：NSW 12 hour log book 替代方案
- **Multilingual**：中/越/印地/阿拉伯/韩 — 这是华人驾校最大优势
- **L plate / P plate / full**：3 阶段不同教学重点

### 5 个 scenarios（PDF01 - 用户要见到的具体使用场景）
1. 新学员从微信问"我儿子刚 16 岁拿到 L 牌，想学开车，多少钱？"——AI 起草双语回复 + 价格表 + 试课预约
2. 学员家长问"我儿子学了 20 小时还不会 parallel parking 怎么办"——AI 写一份诊断 + 3 节专项练习计划
3. 学员考试前焦虑——AI 写一份"考前 24 小时 checklist"双语版安抚
4. 给小红书写"我学员一次过 P 牌"案例（脱敏）
5. 给 Google Review 回复模板（5 星 / 3 星 / 1 星各一套）

---

## 行业 2 — 牙医 (Dentist)

| 项 | 值 |
|----|---|
| 行业中文名（TC） | 牙醫 |
| 行业中文名（SC） | 牙医 |
| 英文 slug | dentist |
| 英文名 | Dentist AI Pack |
| ANZSIC 大类 | health-wellness |
| has_intl | **True** |
| 文件名 | `production/industries/牙醫.py` |

### 适合 / 不适合
- **适合**：澳洲华人 GP dentist / 双语 dental clinic 老板（NSW/VIC）/ 中型私人诊所合伙人；患者池子有 30%+ 中文背景
- **不适合**：大型 dental chain（已有 IT）、纯 specialist（OMS / orthodontics）只接 referral 不直接做 marketing

### 5 个 SOP
1. **新患咨询 + 治疗方案预估**：从电话/微信/Google form 询单到 free consultation booking。AI 起草双语 treatment plan summary（结合 patient symptoms + photo），含 Medicare CDBS 资格、health insurance claim 估算
2. **X-ray / 治疗计划患者沟通**：用 AI 把英文 dental terminology（OPG, periapical, periodontal, RCT, crown, implant）翻成患者母语的浅显解释 + visual storyboard（什么时候来、做什么）
3. **Recall 提醒 + 随访自动化**：6 个月 recall / 12 个月 recall 多语种自动消息模板；patient drop-out 触发的"挽回"信
4. **Treatment plan + finance plan 解释**：把 A$5,000 的 implant treatment 用患者能接受的方式介绍，含 finance options（Afterpay / payment plan / health fund cover）
5. **Google Reviews + 案例小红书 + WeChat 公众号**：把成功 case（脱敏后图文）写成多平台内容，建立"华人友善牙医"信任

### 5 个 tags
洁牙預約 / 種植牙 / 兒童牙醫 / 矯正咨詢 / 治療方案

### AU 特定内容
- **持牌体系**：AHPRA - Dental Board of Australia 注册；Continuing Professional Development (CPD) 60 hours/3 years
- **法律**：National Law (Health Practitioner Regulation National Law); AHPRA Advertising Guidelines（关键：不可用 "best", "specialist" 等限制词，testimonial 严格规则）
- **公保**：Medicare CDBS (Child Dental Benefits Schedule) 给 2-17 岁儿童 A$1,095 over 2 years
- **私保**：HCF / Bupa / Medibank 等 health fund 主流；HICAPS swipe 现场 claim
- **Dental Board's social media guidelines**：testimonials 不能放（patient testimonials 在 healthcare 是禁的，但 reviews 不算 testimonial）
- **常见服务**：Check-up & Clean / Filling / Crown / Veneer / Implant / Invisalign / Whitening / Children's dental

### 5 个 scenarios
1. 新患从微信问"我牙痛了一个礼拜，可以马上看吗"——AI 起草 emergency triage 回复 + booking + 痛感分级问题
2. 患者看完 X-ray 不理解为什么要做 RCT——AI 写一份 4 段中文解释 + 图示 + cost breakdown
3. 患者犹豫 implant 价格——AI 写"3 个 finance plan 选项"对比给患者看
4. 给小红书写"7 岁儿童 CDBS 免费洁牙的故事"案例
5. 给 Google 1 星 review 回复模板（合规 + 不暴露 patient 信息）

---

## 行业 3 — 电工 (Electrician)

| 项 | 值 |
|----|---|
| 行业中文名（TC） | 電工 |
| 行业中文名（SC） | 电工 |
| 英文 slug | electrician |
| 英文名 | Electrician AI Pack |
| ANZSIC 大类 | trades-technical |
| has_intl | **True** |
| 文件名 | `production/industries/電工.py` |

### 适合 / 不适合
- **适合**：澳洲华人 licensed electrician（NSW/VIC/QLD）/ sole trader / 小型电工公司（1-5 人）老板；residential + light commercial 业务为主
- **不适合**：大型工程电气公司（infrastructure / industrial）、union 大公司、未持牌（违法）

### 5 个 SOP
1. **新客户报价 + 现场评估自动化**：从客户上门 inspection 到出具 written quote 的标准流程。AI 帮你写 quote 邮件含 scope of work / materials breakdown / safety considerations / payment terms / warranty
2. **紧急服务 dispatch + 工时记录**：客户 emergency call（power outage, smoke smell, breaker tripping）触发的 triage + ETA + 现场到达后的工时/材料记录 + invoice 自动生成
3. **安全合规文档（COC / Certificate of Compliance for Electrical Work）**：每次 electrical work 后必须出具 CCEW（NSW）或对应州合规证书，AI 帮你把 site notes 整理成合规文档骨架
4. **客户教育（保养 + 升级建议）**：用 AI 写多语种客户教育内容（safety switch testing 6 monthly, smoke alarm replacement 10 years, EV charger upgrade 时机），转化为复购
5. **Google Reviews + 小红书 + 邻里转介**：把已完成项目（switchboard upgrade, ceiling fan install, downlight replacement）写成图文 case study，建立"靠谱华人电工"口碑

### 5 个 tags
緊急電工 / 廚房改造佈線 / 開關板升級 / 太陽能整合 / 安全檢查

### AU 特定内容
- **持牌体系**：NSW Fair Trading - Electrical Licence (Contractor / Qualified Supervisor / Tradesperson); VIC Energy Safe Victoria; QLD Electrical Safety Office
- **法律**：Electricity Supply Act / Work Health and Safety Act / Australian Standard AS/NZS 3000 (Wiring Rules) / AS/NZS 3017
- **行业协会**：Master Electricians Australia (MEA), National Electrical and Communications Association (NECA)
- **合规证书**：NSW - Certificate of Compliance for Electrical Work (CCEW); VIC - Certificate of Electrical Safety (COES); QLD - Certificate of Test
- **TAGGING and Testing**：AS/NZS 3760 - workplace portable appliance testing
- **常见服务**：switchboard upgrade / safety switch (RCD) / LED downlight retrofit / ceiling fan / EV charger install / solar integration / 3-phase upgrade
- **保险**：Public liability insurance (compulsory) + workers comp

### 5 个 scenarios
1. 客户半夜微信"我家停电了，breaker 跳闸怎么办"——AI 起草 emergency triage 回复 + ETA + 安全注意事项
2. 客户问"我厨房翻新需要多少电工费"——AI 写 quote breakdown（kitchen renovation electrical scope: 5 GPO + 4 downlight + rangehood + 2 cooker outlet + safety switch upgrade）
3. 给客户写 switchboard upgrade 后的 maintenance reminder（每 6 个月测 RCD，每 10 年换 smoke alarm）
4. 给小红书写"独立电工 sole trader 升级 EV charger 的全流程"案例
5. 给 Google review 回复模板 + handle bad review 的语调

---

## 共同生成规则（3 个行业都遵循）

### 价格
- AU 版：A$49（统一定价）
- INTL 版：US$20
- Bundle 折扣码：BUNDLE 减 A$10

### 文件输出
- `.py` 文件：`production/industries/<TC 行业名>.py`（駕校.py / 牙醫.py / 電工.py）
- PDFs：跑完 `python3 gen_pack.py --industry <TC 名>` 后输出到 `products/<TC 名>/au/{en,sc,tc}/` 各 5 个 PDF
- 不做 INTL 编辑（暂时只做 AU 版，INTL 等 Patrick 决定）

### 严格遵循 industry-py SKILL.md 的 7 条 hard rules
1. 三段（TC/SC/EN）结构
2. 不能一次写 1300 行 — 用三次 Edit append
3. AU 版 .py 不能有 `US$`
4. TC 段不能有简体字（NotoSansTC 不支持）
5. EN 段不能有中文标点 / 中文字符
6. PDF03_TEMPLATES 必须 7-tuple
7. 中文标点不能起首

### 不做的事
- ❌ 不做 landing 页（Phase 2 留给 Patrick 回来再做）
- ❌ 不做 Gumroad cover（Phase 3 留给 Patrick）
- ❌ 不删任何文件
- ❌ 不上架（Patrick 自己上）

### 完成标准
1. 3 个 .py 文件创建完成 + grep 检查全过（无 US$ / 无简体混 TC / 无中文标点混 EN）
2. 跑 gen_pack.py 成功输出 PDFs
3. 每个行业 products/au/{en,sc,tc}/ 下各有 5 个 PDF
