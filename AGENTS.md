# OpenWays — 中小企業 AI 行動包平台

## 項目概要
OpenWays.net 是面向澳洲華人中小企業的 AI 工具包平台。包含兩大部分：
1. **網站**（靜態 HTML）— 展示、銷售行業 AI 行動包
2. **PDF 生成系統**（production/）— 批量生成各行業 5 份 PDF 行動包

## 部署
- 託管：Vercel（自動部署，根目錄即文檔根）
- 域名：openways.net
- GitHub：OpenNum/openways-net
- 分支：main

## 目錄結構
```
OpenWays/                              ← Vercel 部署根目錄
│
│  ── 網站（留在根目錄）─────────────
├── *.html (31 頁面)                   ← 英文 + 中文 + 行業分類 + 行業包詳情
├── style.css, i18n.js                 ← 樣式與三語切換
├── robots.txt, sitemap.xml            ← SEO
├── logo*.svg/png                      ← Logo 資源
├── aoo_cover_en.png                   ← 電子書封面（首頁引用）
├── book-preview/                      ← 電子書預覽圖（book.html 引用）
│
│  ── 子目錄 ────────────────────────
├── products/                          ← 成品 PDF，直接上架 Gumroad
│   ├── 美業/au/{en,sc,tc}/ + intl/
│   ├── 餐飲/...
│   ├── 房產/...
│   └── 會計稅務/...
│
├── production/                        ← PDF 生產系統
│   ├── gen_pack.py                    ← 主生成腳本
│   ├── shared_lib.py, sanitize.py     ← 排版 + 清洗
│   ├── industry_taxonomy.py           ← ANZSIC 行業分類體系
│   ├── industries/                    ← 各行業 .py 數據文件
│   ├── output -> ../products          ← 符號鏈接
│   └── docs/                          ← 英雄操作手冊
│
├── book/                              ← 電子書源檔 + Gumroad 封面素材
│   ├── 简体中文版/, 繁体中文版/, 英文版/
│   └── aoo_gumroad_cover*.jpg 等
│
└── reference/                         ← 參考資料
    ├── strategy/                      ← 網站策略文檔
    ├── taxonomy/                      ← ANZSIC 行業分類標準
    ├── research/                      ← 行業原始研究（34 個行業）
    ├── legacy-packs/                  ← 舊版手工行業包（6 個）
    └── design/                        ← 設計規範
```

## PDF 生成
```bash
cd production
python3 gen_pack.py --industry 行業名
```
- 每個行業生成 5 份 PDF（快速啟動、工具說明、提示詞模板、SOP、7天計劃）
- 雙版本：`XXX.py`（澳洲版）+ `XXX_intl.py`（國際版）
- 三語：en / sc / tc
- 輸出通過符號鏈接自動寫入 products/
- 字體依賴：/tmp/NotoSansTC-Regular.ttf 和 Bold

## 已完成行業
- PDF 已生成：美業、餐飲、房產、會計稅務（各含澳洲版+國際版 × 繁中+簡中+英文 = 120 份 PDF）
- 研究資料待轉：中医诊所、太阳能安装、家政清洁、房屋装修、教培培训 等

## 網站已有的 Pack 頁面
beauty, restaurant, accounting, realestate, cleaning, education, renovation, solar, tcm

## 英雄端操作
production/docs/ 下有操作手冊，指導 Mac Mini（英雄）執行批量任務

---

## 知识沉淀到第二大脑（2026-04-24 起）

本项目产生的**跨项目经验**应同步写一份到 Obsidian vault：

路径：`~/Library/Mobile Documents/iCloud~md~obsidian/Documents/Vincent Second Brain/raw/Codex-outputs/`

命名格式：`{debug|method|decision}-YYYY-MM-DD-主题.md`

**适用场景**：
- 关键调试心得（例：PDF 中文标点禁则、繁简混用乱码修复）
- 新掌握的方法论（例：行业包分步制作法）
- 跨项目可复用的设计（例：ANZSIC 分类骨架、品牌气质规范）

**不适用**：
- 仅限 OpenWays 的业务数据（行业研究、价格、地址）→ 留在 `reference/research/`
- 代码修改本身 → 走 git commit

月底执行 `compile the wiki` 会把 raw/Codex-outputs/ 沉到 vault 对应领域（OpenWays 经验主要进 `wiki/ai-engineering/` 和 `wiki/business-operations/`）。

完整规则见 vault 根 [AGENTS.md](~/Library/Mobile Documents/iCloud~md~obsidian/Documents/Vincent Second Brain/AGENTS.md) 与 plan 第 9 节。


<claude-mem-context>
# Memory Context

# [OpenWays] recent context, 2026-05-16 3:11pm GMT+10

Legend: 🎯session 🔴bugfix 🟣feature 🔄refactor ✅change 🔵discovery ⚖️decision 🚨security_alert 🔐security_note
Format: ID TIME TYPE TITLE
Fetch details: get_observations([IDs]) | Search: mem-search skill

Stats: 33 obs (6,893t read) | 1,452,264t work | 100% savings

### May 14, 2026
466 1:13p 🔵 Schema.org priceCurrency 不一致：EN 包页面错误标注 USD
467 " 🔵 zh-packs.html hero grid 在手机端会溢出
468 " 🔵 OpenWays CSS 响应式断点结构梳理
469 " 🔵 链接检查脚本误报 6 个 broken hrefs（guide/ 绝对路径）
470 " 🔵 Playwright 手机端溢出测试被 sandbox 拒绝无法运行
471 " 🔵 packs.html 搜索功能双重过滤：即时结果 + 卡片网格同步过滤
### May 15, 2026
483 7:25a ✅ OpenWays 内地版 PDF 生成任务派发给 Codex
484 " 🟣 OpenWays CN 版 PDF 生成执行手册正式建档
485 7:26a 🔵 gen_pack.py CN 版支持已内置，餐饮_cn.py 为唯一已完成模板
487 " 🟣 8 个 CN 版行业数据文件通过 Python 脚本批量生成
488 " 🔵 CN 版 _cn.py 质检：Google/claude.ai/chat.openai.com 残留未替换
486 7:27a 🔵 8 个 _intl.py 文件 SC 段验证通过，数据结构一致
489 7:28a 🟣 CN 版二次补丁完成，资源文件验证通过，9 行业 PDF 批量生成启动
490 " 🟣 OpenWays CN 版 9 行业 PDF 包全部生成完毕，质检通过
495 7:29a ⚖️ CN版扩展至全部行业（24-25个）
496 7:56a 🔵 行业库盘点：27个base文件，9个CN完成，18个待处理（含繁简名称不匹配）
497 " 🔵 全部16个新行业的_intl.py均包含完整SC段，可直接提取生成_cn.py
498 7:57a 🟣 批量生成16个新行业_cn.py文件（0.28秒完成）
499 " 🔴 电工_cn.py误匹配"2025"产品型号 — 替换为通用描述修复
500 " 🟣 CN版_cn.py覆盖率达100%：25个行业全部就绪
501 7:58a 🟣 16个新行业CN版PDF全部渲染完成（含说明书+赠品文件）
502 " 🔵 年份扫描发现3处BADYEAR — 均为技术标准/车型年份，非生产日期
503 " 🟣 CN版产品线扩展完成：25行业 × 11文件 = 275个文件全部验证通过
510 7:59a 🟣 CN内地版 distribution bundle assembled and verified at products/CN内地版/
511 " ⚖️ Vince decided to delete individual cn/ subdirs, keep only CN内地版 bundle
512 6:03p 🔵 25 individual products/{行业}/cn/ dirs confirmed as 3.8GB duplicate of CN内地版 bundle
514 " ✅ 25 redundant products/{行业}/cn/ dirs moved to macOS Trash (not permanently deleted)
519 " ✅ 15 empty industry dirs removed after cn/ cleanup; products/ tree fully clean
513 6:04p 🟣 Cleanup manifest generated at products/CN内地版/_重复CN目录清理清单.md
515 6:06p ✅ CN deduplication verified complete: 0 individual cn/ dirs remain, CN内地版 bundle intact
516 " 🟣 OpenWays CN内地版独立目录建立
517 " ✅ CN 重复目录清理清单生成，待垃圾桶操作批准
518 " 🔵 production/output 是 symlink 指向 products/

Access 1452k tokens of past work via get_observations([IDs]) or mem-search skill.
</claude-mem-context>