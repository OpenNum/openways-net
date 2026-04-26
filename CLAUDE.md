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

路径：`~/Library/Mobile Documents/iCloud~md~obsidian/Documents/Vincent Second Brain/raw/claude-outputs/`

命名格式：`{debug|method|decision}-YYYY-MM-DD-主题.md`

**适用场景**：
- 关键调试心得（例：PDF 中文标点禁则、繁简混用乱码修复）
- 新掌握的方法论（例：行业包分步制作法）
- 跨项目可复用的设计（例：ANZSIC 分类骨架、品牌气质规范）

**不适用**：
- 仅限 OpenWays 的业务数据（行业研究、价格、地址）→ 留在 `reference/research/`
- 代码修改本身 → 走 git commit

月底执行 `compile the wiki` 会把 raw/claude-outputs/ 沉到 vault 对应领域（OpenWays 经验主要进 `wiki/ai-engineering/` 和 `wiki/business-operations/`）。

完整规则见 vault 根 [CLAUDE.md](~/Library/Mobile Documents/iCloud~md~obsidian/Documents/Vincent Second Brain/CLAUDE.md) 与 plan 第 9 节。
