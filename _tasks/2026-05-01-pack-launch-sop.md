# OpenWays 新行业上架 SOP（标准模板）
**日期**：2026-05-01
**触发场景**：新行业 pack 上架（从 0 到 Vercel 部署）
**最佳实践来源**：Carpet Cleaning（2026-05-01）— Patrick 验收"最满意 + 无 bug"
**完整 plan**：[`/Users/by/.claude/plans/57-openways-ancient-pelican.md`](file:///Users/by/.claude/plans/57-openways-ancient-pelican.md) 第三部分

---

## 失败教训（避坑清单）— 全部源自 1 个根因：赌 sub-agent 做不该做的事

| 失败 | 正确做法 |
|------|---------|
| EN 段中翻英直译（fragment / parallel error） | 主对话写或律師 baseline 笔触 inline 在 prompt |
| EN 段过长溢出 PDF box | 段长 cap：EN ≤ 400 / TC,SC ≤ 180，三段 max-min ≤ ±50 |
| Sub-agent sandbox 间歇拒读 SKILL.md | **Landing 页主对话顺序做，绝不用 sub-agent** |
| Description "家长看中文 / 患者看中文 / 客户看中文" lazy 变体 | Standard：「华人老板看中文，员工看英文，一个包全搞定」 |
| Thumb prompt 多余（gen_covers.py 自动出） | **只给 cover prompt** |
| 7-Day H1 在 ASCII hyphen 处换行 | 用 non-breaking hyphen `&#8209;` |
| Related Packs 没换（指向 lawyer 默认）| 改成同 cluster 真实相关 3 pack |

---

## 7 阶段 SOP

### Phase 0 · Discovery（先定 8 个问题）
1. 行业 TC 名 + slug（e.g. `商業清潔` / `commercial-cleaning`）
2. ANZSIC 大类（lifestyle-services / health-wellness / trades-technical 等 8 选 1）
3. has_intl（lifestyle / health / trades 通常 False）
4. 5 SOPs（PDF04 五个 standard procedures）
5. 5 tags（hero chip）
6. Audience + Not audience（一句话各）
7. AU 特定（license body / regulator / 法规）
8. 研究资料路径（`reference/research/<行业>/00-03.md`，如有）

### Phase 1 · Pack Data .py + PDFs（**Sub-agent 并行 OK**）
- 每个 agent 用 `industry-py` skill + 律師.py baseline + Phase 0 输入
- 段长 cap 在 prompt 里强制：EN ≤ 400 / TC,SC ≤ 180，max-min ≤ ±50
- TC 简体陷阱字清单：國這個來時與後內應學業複轉級項護務電網戶
- PDF03_TEMPLATES 是 **8-tuple**：`(category, title, scenario_desc, output_desc, prompt_text, variables_list, example, note)`
- 跑 `gen_pack.py --industry <TC> --lang {tc,sc,en} --edition au`
- 4 项自检（grep US$ / TC 简体 / EN 中文 / 段长）

### Phase 2 · Cover + Thumb（本地资产，不进 git）
1. 写 1 个 Nano Banana cover prompt（**不写 thumb prompt**）
2. Patrick 跑 Nano Banana → 存 `gumroad-covers/originals/<slug>.png`
3. 主对话加 `gen_covers.py` mapping 1 行
4. Patrick 跑 `cd gumroad-covers && python3 gen_covers.py`

### Phase 3 · Description + 上架
1. 主对话追加 description 到 `gumroad-covers/product_descriptions.md`（英中双段）
2. **结尾必须 standard：「华人老板看中文，员工看英文，一个包全搞定」**
3. 写 Gumroad upload-ready 文档到 `_tasks/`
4. Patrick 上 Gumroad → 拿到 URL（如 `https://yangster720.gumroad.com/l/xxxxx`）

### Phase 4 · Landing 页（**主对话顺序做，绝不用 sub-agent**）

```bash
cp pack-lawyer.html pack-<slug>.html
cp zh-pack-lawyer.html zh-pack-<slug>.html
```

英文版 9 大块 Edit（每块完后 Launch preview 验证）：

| # | 段 | 改什么 |
|---|----|-------|
| 1 | head（line ~14-68）| title / description / keywords / canonical / og / twitter / Product schema（PreOrder→InStock + 正确 category）/ BreadcrumbList。og:image 用 `<Industry>_Australia_cover.jpg` |
| 2 | hero（line ~117-149）| breadcrumb（指向正确 industry hub）/ tag emoji + cluster / H1 含 `7&#8209;Day` / sub / 5 tags / Best for / Not ideal for / 行业 specific compliance note |
| 3 | purchase card（line ~177-188）| AU Edition 描述 + Gumroad URL（btn href）+ Why no INTL 改成行业 specific |
| 4 | pain points 4 cards（line ~209-237）| 4 个真实业主痛点（quotation marks 切场景，律師笔触）|
| 5 | sample prompt（line ~244-265）| 1 个该行业最高频 prompt + Before/After 时间对比 + ROI 数字 |
| 6 | specific tasks 4 grids（line ~341-378）| 4 类任务 × 4 bullet，含合规边界关键词 |
| 7 | how-built + 6 included items + 5 why-buys（line ~389-487）| how-built 一段（合规边界 + AI 加速）+ 6 items 模板 + 5 Q&A 行业版 |
| 8 | 5 FAQ + final CTA + Edge Pass tagline（line ~528-628）| Gumroad URL 替换 + Edge Pass tagline 行业化 |
| 9 | Related Packs 3 cards（line ~640-668）| **改成同 cluster 真实相关 3 pack**，不留 lawyer 默认 |

**2 处隐藏遗漏**（每次必查）：
- `<!-- PDF Preview ... lawyer_sop_preview.jpg -->` 注释块（line ~279-285）改 industry slug
- `20 lawyer-specific templates`（line ~508）改 `20 <industry>-specific templates`

**完成后 grep 残留**：
```bash
grep -nE "Lawyer|lawyer|solicitor|Conduct Rules|case file|opposing|Practising|Cost Disclosure" pack-<slug>.html | head
# 期望：剩余只在 Related Packs 段（如果推荐了 lawyer pack 作为相关）
```

中文版 zh-pack-<slug>.html 同样 9 大块：
- footer/nav 的 `pack-lawyer.html` → `pack-<slug>.html`（用 replace_all）
- final CTA Gumroad URL 替换
- Related Packs 改同 cluster 中文版

### Phase 5 · 索引同步（4 个文件）

| 文件 | 加什么 |
|------|-------|
| `packs.html` | cluster section 加 pack-card + packData 搜索数组加 entry |
| `zh-packs.html` | 中文 cluster section 加 pack-card |
| `sitemap.xml` | EN entry + ZH entry（`<lastmod>` 用今天） |
| `industry-<cluster>.html` | Pack Cards 区加新卡 + 从 Coming Soon 移除 |

### Phase 6 · commit + push

commit message 模板：
```
Launch <industry> pack with Gumroad URL and full index sync

- pack-<slug>.html / zh-pack-<slug>.html: full lawyer-template rewrite
  to <industry> content (10 sections); wire Gumroad URL <code>;
  <key compliance terms> compliance positioning
- packs.html: <industry> card in <cluster> + packData search entry
- zh-packs.html: <中文行业名> card in <中文 cluster>
- sitemap.xml: pack-<slug> + zh-pack-<slug> entries
- industry-<cluster>.html: <industry> card promoted from Coming Soon
  to live Pack Cards
```

git status 期望：~7 files changed（2 new landing + 4 modified index + 可能 gen_covers.py）

---

## 严格红线

1. ❌ 不删任何文件
2. ❌ 不动 `gen_pack.py` / `律師.py` / 其他已上架 .py
3. ❌ **Landing 页绝不用 sub-agent**
4. ❌ Description 结尾不用 lazy 变体
5. ❌ `/products/` `/production/` `/gumroad-covers/` 在 .gitignore（不会上 GitHub，是设计）
6. ✅ 每个 Edit 后看 Launch preview
7. ✅ commit 前 grep 残留检查

---

## Carpet Cleaning 数据点（reference）

- .py：1306 行
- 15 PDFs（10-11 页 / 24-249 KB / PDF v1.4）
- EN ai_uses 段长：388/388/381 (Δ7，最佳平衡)
- Landing 页：英文 +780 行 / 中文 +470 行
- commit 改动：7 files / +1257 / -5
- 总耗时：单行业约 20-30 分钟主对话顺序做（含 grep 验证）

---

## 关联文档

- **Plan 完整版**：`/Users/by/.claude/plans/57-openways-ancient-pelican.md` 第三部分
- **Memory 摘要**：`/Users/by/.claude/projects/-Users-by/memory/feedback_openways_pack_launch_sop.md`
- **Plugin SKILL.md**：
  - `industry-py/SKILL.md`（已加 Hard Rule #8 段长 cap + 8-tuple 修正）
  - `pack-landing/SKILL.md`（已加 Hard Rule #6-9：禁 sub-agent + 9 大块 checklist + standard 结尾）
  - `gumroad-prep/SKILL.md`（已改 thumb 段为"DO NOT generate"）
- **Related memories**：
  - `feedback_openways_cover_workflow.md` — cover-only 流程
  - `reference_openways_nanobanana_template.md` — cover 视觉模板
  - `feedback_openways_evergreen_covers.md` — cover 不写价格
  - `project_openways_founder_persona.md` — Patrick Yang 人设
