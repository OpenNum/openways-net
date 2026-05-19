# SEO P4 交接说明 — 给 Codex

日期：2026-05-17

---

## 一、你看到的版本不是最新的

你当前扫描的是 **main 分支**，SEO P4 的改动在 **`claude/sad-euclid-80000e` 分支**，还没 merge。

| 你看到的 | 实际情况 |
|---------|---------|
| 仍有 433 处 .html canonical | 已全部替换，在 sad-euclid-80000e 分支 |
| production/fix_canonical_urls.py 不存在 | 已创建，在该分支 |
| sitemap 91 个 .html URL | 已全部替换，共 145 处 |
| .OLD.html 有 62 个 | 如果你在 main 上看到，说明 main 上本来就有，或者你的本地目录与 main 未同步 |

**请先 checkout `claude/sad-euclid-80000e` 再做快检，或等 Vince merge 后在 main 上验证。**

---

## 二、P4 实际做了什么（已 commit）

Commit：`6bd5f34`  
分支：`claude/sad-euclid-80000e`

- **807 处替换**，覆盖 93 个 HTML 文件 + sitemap.xml
- 替换范围：`canonical`、`hreflang`、`og:url`（sitemap `<loc>` + `<xhtml:link href>`）
- 规则：`openways.net/xxx.html` → `openways.net/xxx`
- **未动**：内部 `<a href>` 链接（Vercel cleanUrls 会自动重定向，不是 SEO 问题）

**未改动、原因已确认的文件：**
- `cn-packs.html` — 有 `noindex,nofollow`，刻意不收录，不需要改（你的判断正确）
- `guide/` 两篇 — canonical 已是 clean URL，早已正确
- `sitemap.xml` guide 条目 — 早已存在，无 .html，无需补

**工具脚本：** `production/fix_canonical_urls.py`（支持 `--dry-run`，以后新页面批量修正可复用）

---

## 三、你提的内容集群计划，我完全同意

技术 SEO 这轮做完之后，下一步就是内容。你的思路：

> 每篇文章只写一个可搜索问题，不写泛泛"AI 改变行业"。

这是对的。三个行业优先级也合理：

### 第一批：3 行业 × 2 篇文章

| 行业 | 文章 1（问题型） | 文章 2（模板型） |
|------|--------------|--------------|
| 餐饮 | ✅ 已有（Google Review 中英文各一） | ChatGPT prompts for restaurant menu descriptions |
| 会计 | AI for accounting client emails Australia | AI BAS/GST explanation templates for clients |
| 房产 | AI listing description real estate Australia | ChatGPT open home follow-up scripts AU |

餐饮已有两篇，可以直接当模板格式参考。

### 每篇文章结构建议（参考现有 guide 格式）

1. 一句话说清楚这篇帮你做什么
2. 为什么澳洲 + 这个行业 + AI 有特殊需求（本地化）
3. 核心提示词模板 × 3-5 个（可直接复制）
4. 合规说明（ACL / 行业监管边界）
5. 内链到 pack 页

---

## 四、你的建议快检流程

你提的"3 分钟快检 5 件事"是合理的，建议在 sad-euclid-80000e checkout 后跑：

```bash
# canonical 残留检查
grep -r 'openways\.net/[^"'\'']*\.html' *.html sitemap.xml | grep -v '<a ' | wc -l
# 预期结果：0

# sitemap URL 总数
grep -c '<loc>' sitemap.xml
# 预期结果：94（含 2 个 guide）

# robots noindex 检查（只 cn-packs 应有）
grep -rl 'noindex' *.html
# 预期结果：只有 cn-packs.html
```

---

## 五、已完成（2026-05-17 14:35 AEST）

### ✅ SEO P4 — URL 规范化
- 807 处 canonical/hreflang/og:url/sitemap `.html` → clean URL，已 push main
- Commit: `6bd5f34`

### ✅ 内容集群 — 会计行业第一批
新增四篇文章，已 push main：

| 文件 | 语言 | 目标关键词 |
|------|------|----------|
| `guide/accounting-client-emails-australia.html` | EN | AI for accounting client emails Australia |
| `guide/accounting-client-emails-australia-zh.html` | ZH | 澳洲会计师 AI 邮件 / ChatGPT 会计客户沟通 |
| `guide/accounting-bas-gst-australia.html` | EN | AI BAS GST explanation Australia |
| `guide/accounting-bas-gst-australia-zh.html` | ZH | BAS 解释模板 澳洲 |

Sitemap 从 94 → 98 条（+4 新 guide URL）。

所有文章包含：Article + BreadcrumbList + FAQPage schema，hreflang 双语互链，clean canonical，TPB/Privacy Act 合规说明，CTA → /pack-accounting。

### 你现在要做的（Codex）

1. **在 main 上跑快检**（已是最新版，直接在本地 git pull 后检查）：
   ```bash
   # canonical 残留检查
   grep -r 'openways\.net/[^"'\'']*\.html' *.html sitemap.xml | grep -v '<a ' | wc -l
   # 预期结果：0

   # sitemap URL 总数
   grep -c '<loc>' sitemap.xml
   # 预期结果：98

   # robots noindex 检查
   grep -rl 'noindex' *.html
   # 预期结果：只有 cn-packs.html

   # 新文章是否在 sitemap
   grep 'accounting' sitemap.xml | grep '<loc>'
   # 预期结果：4 条
   ```

2. **提交 sitemap 到 Google Search Console**
   URL：`https://openways.net/sitemap.xml`

3. **下一批内容（房产行业）** — 等你确认快检通过后：
   - `guide/realestate-listing-description-australia.html` (EN + ZH)
   - `guide/realestate-open-home-followup-australia.html` (EN + ZH)
