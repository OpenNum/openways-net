# Task: OpenWays 留學移民服務 AI 行動包

- **Notion 项目**: Openways
- **Notion URL**: https://www.notion.so/33381522205a80deb306d291e608f900
- **派发时间**: 2026-04-25 (UTC+11)
- **Wiki Refs**: `wiki/business-operations/`, `wiki/content-creation/`
- **执行方**: 好汉（Mac Pro 本机；OpenWays 是好汉项目）
- **截止**: 待 Vince 批准 4 个决策点后排期
- **产出物**:
  - `production/industries/留學移民服務.py`（澳洲版）
  - `production/industries/留學移民服務_intl.py`（国际版，**待决策 #4**）
  - 跑通 `gen_pack.py` 产出 5 份 PDF × 3 语言 × 1~2 版本 = 15~30 份
  - 网站新增 `pack-immigration.html` 落地页
  - `industry-professional-services.html` 加入移民索引
  - `sitemap.xml` + `packs.html` 更新

---

## 执行依据（已读 wiki）

- ✅ `wiki/business-operations/INDEX.md` — OpenWays 产品架构（5 文件 × 3 语言、A$49/A$29 订阅）
- ✅ `wiki/business-operations/industry-taxonomy-practical-method.md` — **移民已在 ANZSIC 9 主线骨架的"专业服务"线**（会计/律师/房贷/保险/移民/bookkeeping）
- ✅ `wiki/content-creation/INDEX.md` — 品牌克制原则、4 主线视觉哲学

## 已有素材（不需要重头研究）

| 素材 | 路径 | 用途 |
|---|---|---|
| 行业研究 | `reference/research/留学移民服务/00-行业研究.md` | PDF 内容资料源 |
| 本地样本 | `reference/research/留学移民服务/01-本地样本.md` | 场景案例素材 |
| 内容表达与广告话术 | `reference/research/留学移民服务/02-内容表达与广告话术.md` | 提示词模板素材 |
| 五文件映射建议 | `reference/research/留学移民服务/03-五文件映射建议.md` | ⚠️ 见下方"防混淆" |
| 同类范本 | `production/industries/會計稅務.py` | 专业服务的 .py 结构标准 |
| 落地页范本 | `pack-accounting.html` / `pack-clinic.html` | HTML 复用 |

---

## ⚠️ 防混淆 — 两个"5 文件"概念不一样

| | OpenWays Production 的 5 PDF | 研究文档讨论的"5 文件" |
|---|---|---|
| 含义 | 工具包**文件类型** | 网站的**网页页面**结构 |
| 内容 | 快速启动/工具说明/提示词模板/SOP/7天计划 | 综合首页/学签页/485 页/技术移民页/配偶页 |
| 用途 | 客户买的 PDF 套装 | 网站获客落地页 |

**本任务用的是左列**（PDF 5 件套，跟其他 9 行业一致）。研究 03 文档讨论的是右列（落地页拆分），**不是本任务的产出物**。

---

## 待 Vince 批准的 4 个决策点

不要凭空假设，**这 4 点必须 Vince 拍板**：

| # | 决策点 | 选项 | 推荐 |
|---|---|---|---|
| 1 | 行业命名 | A) `留學移民服務`（贴合研究文档）<br>B) `移民代理服務`（窄）<br>C) `留學與移民` | **A** |
| 2 | 5 PDF 内容场景聚焦哪 1-2 个签证阶段（避免每份 PDF 试图覆盖全签证） | A) 学签 + 485（流量最大）<br>B) 技术移民 + 配偶（高客单价）<br>C) 学签 + 485 + 技术移民（覆盖广但内容稀） | **A** |
| 3 | 是否每份 PDF 加合规免责声明（"本 AI 工具仅辅助代理人工作流，不构成移民法律建议..."） | A) 加<br>B) 不加 | **A**（合规红线） |
| 4 | 是否做国际版（`_intl.py`） | A) 做<br>B) 跳过（移民强本地化，国际版意义低） | **B**（节省 50% 工作量） |

---

## 产出顺序（Vince 批准后执行）

1. 写 `production/industries/留學移民服務.py`（按 會計稅務.py 范本，5 个 PDF dict + 20 个 prompt 模板）
2. `cd production && python3 gen_pack.py --industry 留學移民服務`
3. 改 `pack-immigration.html` 落地页（参考 `pack-accounting.html`）
4. `industry-professional-services.html` 加入移民 pack 索引
5. 更新 `sitemap.xml` + `packs.html` + `zh-packs.html`
6. git commit + push → Vercel 自动部署

---

## 验收标准

- [ ] `留學移民服務.py` 通过 `gen_pack.py` 输出 5 PDF × 3 语言 = 15 份（如做 _intl 则 30 份）
- [ ] PDF 中无简体字混入繁体版（feedback_tc_sc_mixing 规则）
- [ ] PDF 价格全 A$（feedback_au_aud_only 规则）
- [ ] PDF 排版无中文标点出现在行首（feedback_punctuation_rules 规则）
- [ ] 英文 PDF 不出现中文标点（feedback_en_pdf_chinese_punctuation 规则）
- [ ] `pack-immigration.html` 渲染无误，三语切换正常
- [ ] `industry-professional-services.html` 已加入移民
- [ ] `sitemap.xml` 已更新
- [ ] Vercel 部署成功，公网访问 OK

---

## 注意

- **范本**：`會計稅務.py` 最贴近（同属专业服务、合规要求类似）
- **字体依赖**：`/tmp/NotoSansTC-Regular.ttf` 和 `Bold`（gen_pack.py 需要）
- **价格**：参考其他行业 A$49 首购 + A$29 续订
- **合规要点**：移民法律意见非合规移民代理（OMARA/MARN）不能给。本工具包是**给代理人/留学顾问用的工作流加速器**，不是给消费者的法律建议。所有 PDF 文案必须贯彻这一定位。

---

## 派发协议跑通报告（给 Vince）

按 `~/Desktop/claude-projects/_dispatch-protocol.md` 跑：

- ✅ **Step 1 — 拿 Wiki Refs**：从 Notion `OpenWays` 卡片读到 `wiki/business-operations/, wiki/content-creation/`
- ✅ **Step 2 — 读 wiki**：实读两份 INDEX + industry-taxonomy-practical-method.md
- ✅ **Step 3a — 好汉自己执行的任务包**：本文件
- ⚠️ **协议补漏**：Step 3 (a) 没规定好汉自己任务文件存哪，本次落到 `~/Desktop/claude-projects/OpenWays/_tasks/`。建议派发协议加一段："好汉自己任务存项目目录下的 `_tasks/`，命名 `task-YYYYMMDD-描述.md`"
