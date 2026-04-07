/**
 * OpenWays — Trilingual Translation System
 * Languages: zh-s (简体中文, default) | zh-t (繁體中文) | en (English)
 *
 * HOW TO USE:
 *   In HTML:  <span data-i18n="key">默认文字</span>
 *   For HTML content: <h1 data-i18n="key" data-i18n-html>默认标题</h1>
 *   Lang buttons: <button data-lang-btn="zh-s">简</button>
 *
 * HOW TO ADD TRANSLATIONS:
 *   Add the same key to all three language objects below.
 *   Then add data-i18n="your_key" to the HTML element.
 */

const OW_TRANSLATIONS = {

  /* ═══════════════════════════════════════════════════════
     简体中文 — Primary Language (Default)
  ═══════════════════════════════════════════════════════ */
  'zh-s': {
    /* Meta */
    page_title_home:    'OpenWays | 悉尼AI培训 · 中小企业AI赋能 · 中老年AI课程',
    page_title_about:   '关于我们 — OpenWays',
    page_title_services:'服务课程 — OpenWays',
    page_title_who:     '适合谁 — OpenWays',
    page_title_faq:     '常见问题 — OpenWays',
    page_title_contact: '联系我们 — OpenWays',
    meta_desc_home:     'OpenWays 是悉尼专业AI培训机构。提供中小企业AI赋能培训和中老年AI生活课程。中英双语，一对一支持，悉尼本地团队。免费咨询。',

    /* Navigation */
    nav_home:     '首页',
    nav_about:    '关于我们',
    nav_services: '培训课程',
    nav_who:      '适合谁',
    nav_faq:      '常见问题',
    nav_contact:  '联系我们',
    nav_cta:      '免费咨询',

    /* Footer */
    footer_tagline:        '为悉尼中小企业和中老年学员提供实用AI培训。清晰、实用、值得信赖。',
    footer_nav_title:      '导航',
    footer_services_title: '培训课程',
    footer_contact_title:  '联系方式',
    footer_copyright:      '© 2026 OpenWays. 版权所有。',
    footer_privacy:        '隐私政策',
    footer_terms:          '使用条款',

    /* ── HOMEPAGE ── */

    /* Hero */
    hero_badge:    '悉尼 · AI培训专家',
    hero_title:    '让AI真正<br>帮到您的<br><span class="highlight">生意和生活</span>',
    hero_subtitle: 'OpenWays 提供面向中小企业和中老年学员的AI实战培训。<br>清晰易懂，学了就能用，不讲废话。',
    hero_cta1:     '查看培训课程',
    hero_cta2:     '免费咨询',
    hero_note:     '✅ &nbsp;不讲技术理论 &nbsp;·&nbsp; 真实场景教学 &nbsp;·&nbsp; 学了就能用',
    hero_stat1_num:   '500+',
    hero_stat1_label: '学员',
    hero_stat2_num:   '98%',
    hero_stat2_label: '满意度',

    /* Trust bar */
    trust1: '真实场景教学',
    trust2: '中英双语授课',
    trust3: '不讲技术理论',
    trust4: '一对一支持',
    trust5: '悉尼本地团队',

    /* Section 2 — Pain Points (英雄资料核心内容) */
    s2_tag:      '我们解决的问题',
    s2_title:    '您是不是也有这些烦恼？',
    s2_subtitle: '以下是我们最常帮助悉尼中小企业和个体经营者解决的真实问题。',
    pain1_title: '不知道AI能帮我做什么',
    pain1_desc:  '每天看到AI的新闻，但不知道哪些跟我的生意有关，更不知道从哪里开始。',
    pain2_title: '内容和推广太费时间',
    pain2_desc:  '写帖子、回评论、做宣传材料……这些工作把时间都占完了，主营业务反而顾不过来。',
    pain3_title: '英文沟通让人头疼',
    pain3_desc:  '和供应商、客户、官方机构打交道，英文不够流利总是卡住，错过不少机会。',
    pain4_title: '重复工作太多，效率太低',
    pain4_desc:  '很多事情都在手动重复做，感觉可以自动化，但不知道怎么做、从哪里入手。',
    pain_cta:    '了解我们怎么帮到您',

    /* Section 3 — Services */
    s3_tag:      '我们的培训课程',
    s3_title:    '两条清晰的路径，帮助不同的您',
    s3_subtitle: '每条路径都配有小组培训和一对一咨询。不推销不适合的课程。',

    svc1_tag:      '中小企业',
    svc1_title:    'AI企业赋能培训',
    svc1_subtitle: '让您的团队真正把AI用起来',
    svc1_desc:     '帮助中小企业把AI工具融入真实经营场景。不讲空洞的技术理论，专注解决您在内容制作、客户沟通、英文表达和日常效率方面的实际问题。',
    svc1_i1:       '内容制作与社媒运营',
    svc1_i2:       '客户沟通与AI写作',
    svc1_i3:       '英文表达与翻译辅助',
    svc1_i4:       '门店效率与流程整理',
    svc1_i5:       '一对一企业主深度咨询',
    svc1_badge1:   '小组培训',
    svc1_badge2:   '一对一咨询',
    svc1_badge3:   '线上 & 线下',
    svc1_cta:      '了解企业培训',

    svc2_tag:      '中老年学员',
    svc2_title:    '中老年AI生活课',
    svc2_subtitle: '从零开始，慢慢学，学了就会用',
    svc2_desc:     '专为50岁以上学员设计。不怕没基础，不担心跟不上。我们用最简单的方式，帮您在日常生活中用上AI，更方便、更安全、更有信心。',
    svc2_i1:       'AI助手入门（ChatGPT等）',
    svc2_i2:       '手机与平板智能使用',
    svc2_i3:       '网络安全与防诈骗',
    svc2_i4:       '日常AI工具应用',
    svc2_i5:       '一对一耐心辅导',
    svc2_badge1:   '小组课程',
    svc2_badge2:   '一对一辅导',
    svc2_badge3:   '零基础友好',
    svc2_cta:      '了解中老年课程',

    svc_soon_tag:   '即将推出',
    svc_soon_title: '更多课程正在开发中',
    svc_soon_desc:  '数字货币基础、NFT与数字资产等实用课程，即将陆续推出。',
    svc_soon_item1: '数字货币基础入门',
    svc_soon_item2: 'NFT 与数字资产',
    svc_soon_item3: '更多课程敬请期待…',
    svc_soon_notify:'提前告知我',

    /* Section 4 — Industries */
    s4_tag:      '服务行业',
    s4_title:    '我们理解不同行业的真实需求',
    s4_subtitle: '不同行业的经营场景不同，我们的培训会结合您的实际情况，讲的是您能直接用上的内容。',
    ind1_title:  '服务业',
    ind1_desc:   '咨询、专业服务、代理中介',
    ind2_title:  '美业',
    ind2_desc:   '美容、美甲、造型、SPA',
    ind3_title:  '餐饮与零售',
    ind3_desc:   '餐厅、外卖、零售门店',
    ind4_title:  '其他中小企业',
    ind4_desc:   '只要是中小企业，我们都来聊聊',
    ind_note:    '您的行业不在上面？<a href="contact.html" data-i18n="ind_contact_link">联系我们了解</a>',
    ind_contact_link: '联系我们了解',

    /* Section 5 — Why Us */
    s5_tag:       '为什么选择我们',
    s5_title:     '我们做什么不一样',
    why1_title:   '讲真实场景，不讲AI理论',
    why1_desc:    '我们的培训围绕您生意里的真实问题展开，不会花时间讲您用不上的技术概念。',
    why2_title:   '中英双语，无语言门槛',
    why2_desc:    '普通话、粤语、英文均可，您用最顺手的语言学习，我们来适配。',
    why3_title:   '专为中老年设计，不焦虑',
    why3_desc:    '不催进度，不做比较，慢慢来才是真正学会。我们专门积累了与中老年学员合作的经验。',
    why4_title:   '悉尼本地团队',
    why4_desc:    '我们在悉尼，了解本地华人社区和中小企业面临的实际处境，不是远程的通用课程。',
    why5_title:   '一对一咨询跟进',
    why5_desc:    '学完不是终点。一对一咨询帮您把学到的东西真正用到生意和生活里。',
    why6_title:   '不过度承诺，讲实话',
    why6_desc:    'AI不是万能的，我们会告诉您什么能做到、什么还做不到，帮您做出实际的判断。',

    /* Section 6 — How It Works */
    s6_tag:       '如何开始',
    s6_title:     '三步开始，没有复杂流程',
    s6_subtitle:  '从联系我们到开始培训，整个过程清晰、简单、没有压力。',
    step1_title:  '联系我们，说说您的情况',
    step1_desc:   '免费预约15分钟通话或发送留言。不用准备，直接说您想解决什么问题，想学什么。',
    step2_title:  '我们推荐合适的方案',
    step2_desc:   '我们根据您的实际情况，给出真实可行的建议。不适合的课程，我们不会推销。',
    step3_title:  '开始学习，真正用起来',
    step3_desc:   '按照适合您的节奏开始培训。学完有持续支持，帮您把所学落地到实际场景中。',
    s6_cta:       '立即免费咨询',
    s6_note:      '免费15分钟通话 · 无需承诺 · 24小时内回复',

    /* Section 7 — Reviews */
    s7_tag:       '学员评价',
    s7_title:     '真实学员的反馈',
    s7_subtitle:  '这些是真实合作过的学员和客户的评价，不是编造的。',
    rev1_quote:   '以前觉得AI离我很远，和我的生意没关系。上完课后，我现在用ChatGPT帮我写小红书帖子、回复客户，节省了很多时间。老师讲得很清楚，不催人，很耐心。',
    rev1_name:    '陈女士',
    rev1_role:    '悉尼美容院老板',
    rev2_quote:   '给我们团队安排了一天的培训，讲的都是实际能用的内容——怎么用AI回复Google评论、写菜单描述、和供应商用英文沟通。员工都说学到了东西。',
    rev2_name:    '张先生',
    rev2_role:    '悉尼餐厅经理',
    rev3_quote:   '我之前对手机和网络很不放心，怕被骗。老师一步一步教我，不嫌我问的问题简单。现在我会用AI帮我翻译英文信件，感觉方便多了。',
    rev3_name:    '王女士',
    rev3_role:    '悉尼学员 · 62岁',

    /* Section 8 — FAQ Preview */
    s8_tag:    '常见问题',
    s8_title:  '您可能想问的',
    faq1_q:    '我没有任何AI基础，可以参加吗？',
    faq1_a:    '完全可以。我们的课程专门为零基础学员设计。从最基础的地方开始，不会因为您问了"简单"的问题而催促或嫌弃您。',
    faq2_q:    '培训是线上还是线下？',
    faq2_a:    '两种都有。可以通过视频通话（Zoom等）在线上课，也可以在悉尼部分区域安排线下见面培训。您选择最方便的方式。',
    faq3_q:    '可以用中文学习吗？',
    faq3_a:    '可以。我们提供普通话和粤语授课，也可以中英混合。报名时说明您的语言偏好，我们来安排合适的老师。',
    faq4_q:    '一对一咨询是什么？和培训课有什么区别？',
    faq4_a:    '培训课是围绕某个主题系统讲解，一对一咨询则是针对您具体的生意情况或学习问题，单独深入地帮您分析和解答。两者都有，可以组合使用。',
    s8_cta:    '查看所有常见问题',

    /* Section 9 — CTA */
    s9_title:  '准备好了解一下吗？',
    s9_desc:   '预约一次免费的15分钟通话，我们来听您说说情况，然后给您真实可行的建议。',
    s9_cta1:   '立即免费咨询',
    s9_cta2:   '了解培训课程',

    /* ── ABOUT PAGE ── */
    about_hero_tag:   '关于我们',
    about_hero_title: '我们相信，学习应该是一件让人有信心的事',
    about_hero_sub:   'OpenWays 成立于悉尼，专为中小企业和中老年学员提供实用、清晰、有人陪伴的AI培训。',
    about_story_tag:  '我们的故事',
    about_story_h2:   '为什么要做OpenWays？',
    about_story_p1:   '我们看到太多人被"AI"这个词吓到了——要么觉得太复杂，要么觉得跟自己没关系。实际上，AI工具已经可以帮很多人解决日常里真实的问题：节省时间、减少语言障碍、做出更好的内容。',
    about_story_p2:   '我们在悉尼，了解本地华人中小企业主和中老年学员面临的实际处境。我们不做泛泛的在线课程，我们做的是结合您真实情况、有人陪伴讲清楚、学完真正用得上的培训。',
    about_story_cta:  '联系我们',

    /* ── WHO WE HELP PAGE ── */
    who_hero_tag:   '适合谁',
    who_hero_title: '我们帮助的是具体的人，不是泛泛的"学员"',
    who_hero_sub:   '找到您自己的情况，看看我们能帮什么。',

    /* ── FAQ PAGE ── */
    faq_hero_tag:   '常见问题',
    faq_hero_title: '您想问的，这里都有答案',
    faq_hero_sub:   '我们整理了最常被问到的问题，尽量用清楚、直接的方式回答。没找到您的问题？直接联系我们。',

    /* ── CONTACT PAGE ── */
    contact_hero_tag:   '联系我们',
    contact_hero_title: '我们很乐意听您说说',
    contact_hero_sub:   '不管是准备报名、还是只是想了解一下，我们都欢迎。真人回复，通常在一个工作日内。',
    contact_method1_title: '预约免费通话',
    contact_method1_desc:  '15分钟，不收费，不强迫。我们来听您说，给您真实的建议。',
    contact_method1_cta:   '选择时间',
    contact_method2_title: '发送留言',
    contact_method2_desc:  '更喜欢用文字？填写下面的表单，我们24小时内回复。',
    contact_method2_cta:   '发留言',
    contact_method3_title: '直接发邮件',
    contact_method3_desc:  '每封邮件都由真人阅读回复。',
    contact_method3_cta:   'hello@openways.net',
    contact_form_title:    '给我们留言',
    contact_form_sub:      '填写表单，我们一个工作日内回复。',
    form_fname:     '名字',
    form_lname:     '姓氏',
    form_email:     '邮箱地址',
    form_phone:     '电话（选填）',
    form_topic:     '您想咨询什么？',
    form_lang_pref: '希望用什么语言回复您？',
    form_message:   '您的留言',
    form_submit:    '发送留言',
    form_note:      '一个工作日内回复 · 不发垃圾邮件',
    form_consent:   '我同意 OpenWays 保存我的联系信息以便回复此咨询。',
    form_success_title: '留言已发送！',
    form_success_desc:  '感谢您的联系。我们会在一个工作日内回复您。',

    /* ── SERVICES PAGE ── */
    svcs_hero_tag:   '培训课程',
    svcs_hero_title: '两种培训路径<br>找到适合您的那一条',
    svcs_hero_sub:   '中小企业AI赋能，或中老年AI生活课。都有小组培训和一对一支持，不强推，不讲废话。',
    svc1_for_title:  '适合哪些人',
    svc1_for_1:      '正在经营中小企业的老板和团队',
    svc1_for_2:      '想用AI提升内容制作、客户沟通和日常效率的个体经营者',
    svc1_for_3:      '想搞清楚AI能帮到自己生意的任何人',
    svc2_for_title:  '适合哪些人',
    svc2_for_1:      '50岁以上，想学AI但不知道从哪里开始',
    svc2_for_2:      '对手机、网络不太自信，想更安全使用',
    svc2_for_3:      '家人介绍来了解，自己也想试试',
  },


  /* ═══════════════════════════════════════════════════════
     繁體中文
  ═══════════════════════════════════════════════════════ */
  'zh-t': {
    page_title_home:    'OpenWays | 悉尼AI培訓 · 中小企業AI賦能 · 中老年AI課程',
    page_title_about:   '關於我們 — OpenWays',
    page_title_services:'服務課程 — OpenWays',
    page_title_who:     '適合誰 — OpenWays',
    page_title_faq:     '常見問題 — OpenWays',
    page_title_contact: '聯繫我們 — OpenWays',
    meta_desc_home:     'OpenWays 是悉尼專業AI培訓機構。提供中小企業AI賦能培訓和中老年AI生活課程。中英雙語，一對一支持，悉尼本地團隊。免費諮詢。',

    nav_home:     '首頁',
    nav_about:    '關於我們',
    nav_services: '培訓課程',
    nav_who:      '適合誰',
    nav_faq:      '常見問題',
    nav_contact:  '聯繫我們',
    nav_cta:      '免費諮詢',

    footer_tagline:        '為悉尼中小企業和中老年學員提供實用AI培訓。清晰、實用、值得信賴。',
    footer_nav_title:      '導航',
    footer_services_title: '培訓課程',
    footer_contact_title:  '聯繫方式',
    footer_copyright:      '© 2026 OpenWays. 版權所有。',
    footer_privacy:        '隱私政策',
    footer_terms:          '使用條款',

    hero_badge:    '悉尼 · AI培訓專家',
    hero_title:    '讓AI真正<br>幫到您的<br><span class="highlight">生意和生活</span>',
    hero_subtitle: 'OpenWays 提供面向中小企業和中老年學員的AI實戰培訓。<br>清晰易懂，學了就能用，不講廢話。',
    hero_cta1:     '查看培訓課程',
    hero_cta2:     '免費諮詢',
    hero_note:     '✅ &nbsp;不講技術理論 &nbsp;·&nbsp; 真實場景教學 &nbsp;·&nbsp; 學了就能用',
    hero_stat1_num:   '500+',
    hero_stat1_label: '學員',
    hero_stat2_num:   '98%',
    hero_stat2_label: '滿意度',

    trust1: '真實場景教學',
    trust2: '中英雙語授課',
    trust3: '不講技術理論',
    trust4: '一對一支持',
    trust5: '悉尼本地團隊',

    s2_tag:      '我們解決的問題',
    s2_title:    '您是不是也有這些煩惱？',
    s2_subtitle: '以下是我們最常幫助悉尼中小企業和個體經營者解決的真實問題。',
    pain1_title: '不知道AI能幫我做什麼',
    pain1_desc:  '每天看到AI的新聞，但不知道哪些跟我的生意有關，更不知道從哪裡開始。',
    pain2_title: '內容和推廣太費時間',
    pain2_desc:  '寫帖子、回評論、做宣傳材料……這些工作把時間都佔完了，主營業務反而顧不過來。',
    pain3_title: '英文溝通讓人頭疼',
    pain3_desc:  '和供應商、客戶、官方機構打交道，英文不夠流利總是卡住，錯過不少機會。',
    pain4_title: '重複工作太多，效率太低',
    pain4_desc:  '很多事情都在手動重複做，感覺可以自動化，但不知道怎麼做、從哪裡入手。',
    pain_cta:    '了解我們怎麼幫到您',

    s3_tag:      '我們的培訓課程',
    s3_title:    '兩條清晰的路徑，幫助不同的您',
    s3_subtitle: '每條路徑都配有小組培訓和一對一諮詢。不推銷不適合的課程。',

    svc1_tag:      '中小企業',
    svc1_title:    'AI企業賦能培訓',
    svc1_subtitle: '讓您的團隊真正把AI用起來',
    svc1_desc:     '幫助中小企業把AI工具融入真實經營場景。不講空洞的技術理論，專注解決您在內容製作、客戶溝通、英文表達和日常效率方面的實際問題。',
    svc1_i1:       '內容製作與社媒運營',
    svc1_i2:       '客戶溝通與AI寫作',
    svc1_i3:       '英文表達與翻譯輔助',
    svc1_i4:       '門店效率與流程整理',
    svc1_i5:       '一對一企業主深度諮詢',
    svc1_badge1:   '小組培訓',
    svc1_badge2:   '一對一諮詢',
    svc1_badge3:   '線上 & 線下',
    svc1_cta:      '了解企業培訓',

    svc2_tag:      '中老年學員',
    svc2_title:    '中老年AI生活課',
    svc2_subtitle: '從零開始，慢慢學，學了就會用',
    svc2_desc:     '專為50歲以上學員設計。不怕沒基礎，不擔心跟不上。我們用最簡單的方式，幫您在日常生活中用上AI，更方便、更安全、更有信心。',
    svc2_i1:       'AI助手入門（ChatGPT等）',
    svc2_i2:       '手機與平板智能使用',
    svc2_i3:       '網絡安全與防詐騙',
    svc2_i4:       '日常AI工具應用',
    svc2_i5:       '一對一耐心輔導',
    svc2_badge1:   '小組課程',
    svc2_badge2:   '一對一輔導',
    svc2_badge3:   '零基礎友好',
    svc2_cta:      '了解中老年課程',

    svc_soon_tag:   '即將推出',
    svc_soon_title: '更多課程正在開發中',
    svc_soon_desc:  '數字貨幣基礎、NFT與數字資產等實用課程，即將陸續推出。',
    svc_soon_item1: '數字貨幣基礎入門',
    svc_soon_item2: 'NFT 與數字資產',
    svc_soon_item3: '更多課程敬請期待…',
    svc_soon_notify:'提前告知我',

    s4_tag:      '服務行業',
    s4_title:    '我們理解不同行業的真實需求',
    s4_subtitle: '不同行業的經營場景不同，我們的培訓會結合您的實際情況，講的是您能直接用上的內容。',
    ind1_title:  '服務業',
    ind1_desc:   '諮詢、專業服務、代理中介',
    ind2_title:  '美業',
    ind2_desc:   '美容、美甲、造型、SPA',
    ind3_title:  '餐飲與零售',
    ind3_desc:   '餐廳、外賣、零售門店',
    ind4_title:  '其他中小企業',
    ind4_desc:   '只要是中小企業，我們都來聊聊',
    ind_note:    '您的行業不在上面？<a href="contact.html">聯繫我們了解</a>',
    ind_contact_link: '聯繫我們了解',

    s5_tag:       '為什麼選擇我們',
    s5_title:     '我們做什麼不一樣',
    why1_title:   '講真實場景，不講AI理論',
    why1_desc:    '我們的培訓圍繞您生意裡的真實問題展開，不會花時間講您用不上的技術概念。',
    why2_title:   '中英雙語，無語言門檻',
    why2_desc:    '普通話、粵語、英文均可，您用最順手的語言學習，我們來適配。',
    why3_title:   '專為中老年設計，不焦慮',
    why3_desc:    '不催進度，不做比較，慢慢來才是真正學會。我們專門積累了與中老年學員合作的經驗。',
    why4_title:   '悉尼本地團隊',
    why4_desc:    '我們在悉尼，了解本地華人社區和中小企業面臨的實際處境，不是遠程的通用課程。',
    why5_title:   '一對一諮詢跟進',
    why5_desc:    '學完不是終點。一對一諮詢幫您把學到的東西真正用到生意和生活裡。',
    why6_title:   '不過度承諾，講實話',
    why6_desc:    'AI不是萬能的，我們會告訴您什麼能做到、什麼還做不到，幫您做出實際的判斷。',

    s6_tag:       '如何開始',
    s6_title:     '三步開始，沒有複雜流程',
    s6_subtitle:  '從聯繫我們到開始培訓，整個過程清晰、簡單、沒有壓力。',
    step1_title:  '聯繫我們，說說您的情況',
    step1_desc:   '免費預約15分鐘通話或發送留言。不用準備，直接說您想解決什麼問題，想學什麼。',
    step2_title:  '我們推薦合適的方案',
    step2_desc:   '我們根據您的實際情況，給出真實可行的建議。不適合的課程，我們不會推銷。',
    step3_title:  '開始學習，真正用起來',
    step3_desc:   '按照適合您的節奏開始培訓。學完有持續支持，幫您把所學落地到實際場景中。',
    s6_cta:       '立即免費諮詢',
    s6_note:      '免費15分鐘通話 · 無需承諾 · 24小時內回復',

    s7_tag:       '學員評價',
    s7_title:     '真實學員的反饋',
    s7_subtitle:  '這些是真實合作過的學員和客戶的評價。',
    rev1_quote:   '以前覺得AI離我很遠，和我的生意沒關係。上完課後，我現在用ChatGPT幫我寫小紅書帖子、回復客戶，節省了很多時間。老師講得很清楚，不催人，很耐心。',
    rev1_name:    '陳女士',
    rev1_role:    '悉尼美容院老闆',
    rev2_quote:   '給我們團隊安排了一天的培訓，講的都是實際能用的內容——怎麼用AI回復Google評論、寫菜單描述、和供應商用英文溝通。員工都說學到了東西。',
    rev2_name:    '張先生',
    rev2_role:    '悉尼餐廳經理',
    rev3_quote:   '我之前對手機和網絡很不放心，怕被騙。老師一步一步教我，不嫌我問的問題簡單。現在我會用AI幫我翻譯英文信件，感覺方便多了。',
    rev3_name:    '王女士',
    rev3_role:    '悉尼學員 · 62歲',

    s8_tag:    '常見問題',
    s8_title:  '您可能想問的',
    faq1_q:    '我沒有任何AI基礎，可以參加嗎？',
    faq1_a:    '完全可以。我們的課程專門為零基礎學員設計。從最基礎的地方開始，不會因為您問了「簡單」的問題而催促或嫌棄您。',
    faq2_q:    '培訓是線上還是線下？',
    faq2_a:    '兩種都有。可以通過視頻通話（Zoom等）在線上課，也可以在悉尼部分區域安排線下見面培訓。',
    faq3_q:    '可以用中文學習嗎？',
    faq3_a:    '可以。我們提供普通話和粵語授課，也可以中英混合。報名時說明您的語言偏好，我們來安排合適的老師。',
    faq4_q:    '一對一諮詢是什麼？和培訓課有什麼區別？',
    faq4_a:    '培訓課是圍繞某個主題系統講解，一對一諮詢則是針對您具體的生意情況或學習問題，單獨深入地幫您分析和解答。',
    s8_cta:    '查看所有常見問題',

    s9_title:  '準備好了解一下嗎？',
    s9_desc:   '預約一次免費的15分鐘通話，我們來聽您說說情況，然後給您真實可行的建議。',
    s9_cta1:   '立即免費諮詢',
    s9_cta2:   '了解培訓課程',

    about_hero_tag:   '關於我們',
    about_hero_title: '我們相信，學習應該是一件讓人有信心的事',
    about_hero_sub:   'OpenWays 成立於悉尼，專為中小企業和中老年學員提供實用、清晰、有人陪伴的AI培訓。',
    about_story_tag:  '我們的故事',
    about_story_h2:   '為什麼要做OpenWays？',
    about_story_p1:   '我們看到太多人被「AI」這個詞嚇到了——要麼覺得太複雜，要麼覺得跟自己沒關係。實際上，AI工具已經可以幫很多人解決日常裡真實的問題：節省時間、減少語言障礙、做出更好的內容。',
    about_story_p2:   '我們在悉尼，了解本地華人中小企業主和中老年學員面臨的實際處境。我們做的是結合您真實情況、有人陪伴講清楚、學完真正用得上的培訓。',
    about_story_cta:  '聯繫我們',

    who_hero_tag:   '適合誰',
    who_hero_title: '我們幫助的是具體的人，不是泛泛的「學員」',
    who_hero_sub:   '找到您自己的情況，看看我們能幫什麼。',

    faq_hero_tag:   '常見問題',
    faq_hero_title: '您想問的，這裡都有答案',
    faq_hero_sub:   '我們整理了最常被問到的問題，盡量用清楚、直接的方式回答。沒找到您的問題？直接聯繫我們。',

    contact_hero_tag:   '聯繫我們',
    contact_hero_title: '我們很樂意聽您說說',
    contact_hero_sub:   '不管是準備報名、還是只是想了解一下，我們都歡迎。真人回復，通常在一個工作日內。',
    contact_method1_title: '預約免費通話',
    contact_method1_desc:  '15分鐘，不收費，不強迫。我們來聽您說，給您真實的建議。',
    contact_method1_cta:   '選擇時間',
    contact_method2_title: '發送留言',
    contact_method2_desc:  '更喜歡用文字？填寫下面的表單，我們24小時內回復。',
    contact_method2_cta:   '發留言',
    contact_method3_title: '直接發郵件',
    contact_method3_desc:  '每封郵件都由真人閱讀回復。',
    contact_method3_cta:   'hello@openways.net',
    contact_form_title:    '給我們留言',
    contact_form_sub:      '填寫表單，我們一個工作日內回復。',
    form_fname:     '名字',
    form_lname:     '姓氏',
    form_email:     '郵箱地址',
    form_phone:     '電話（選填）',
    form_topic:     '您想諮詢什麼？',
    form_lang_pref: '希望用什麼語言回復您？',
    form_message:   '您的留言',
    form_submit:    '發送留言',
    form_note:      '一個工作日內回復 · 不發垃圾郵件',
    form_consent:   '我同意 OpenWays 保存我的聯繫信息以便回復此諮詢。',
    form_success_title: '留言已發送！',
    form_success_desc:  '感謝您的聯繫。我們會在一個工作日內回復您。',

    /* ── SERVICES PAGE ── */
    svcs_hero_tag:   '培訓課程',
    svcs_hero_title: '兩種培訓路徑<br>找到適合您的那一條',
    svcs_hero_sub:   '中小企業AI賦能，或中老年AI生活課。都有小組培訓和一對一支持，不強推，不講廢話。',
    svc1_for_title:  '適合哪些人',
    svc1_for_1:      '正在經營中小企業的老闆和團隊',
    svc1_for_2:      '想用AI提升內容製作、客戶溝通和日常效率的個體經營者',
    svc1_for_3:      '想搞清楚AI能幫到自己生意的任何人',
    svc2_for_title:  '適合哪些人',
    svc2_for_1:      '50歲以上，想學AI但不知道從哪裡開始',
    svc2_for_2:      '對手機、網絡不太自信，想更安全使用',
    svc2_for_3:      '家人介紹來了解，自己也想試試',
  },


  /* ═══════════════════════════════════════════════════════
     English
  ═══════════════════════════════════════════════════════ */
  'en': {
    page_title_home:    'OpenWays | Sydney AI Training · Business AI · Senior AI Courses',
    page_title_about:   'About Us — OpenWays',
    page_title_services:'Services — OpenWays',
    page_title_who:     'Who We Help — OpenWays',
    page_title_faq:     'FAQ — OpenWays',
    page_title_contact: 'Contact — OpenWays',
    meta_desc_home:     'OpenWays provides practical AI training in Sydney for small businesses and adult learners. Bilingual (English & Chinese), 1-on-1 support, local Sydney team. Book a free consultation.',

    nav_home:     'Home',
    nav_about:    'About',
    nav_services: 'Services',
    nav_who:      'Who We Help',
    nav_faq:      'FAQ',
    nav_contact:  'Contact',
    nav_cta:      'Free Consultation',

    footer_tagline:        'Practical AI training for small businesses and adult learners in Sydney. Clear, useful, trusted.',
    footer_nav_title:      'Navigation',
    footer_services_title: 'Services',
    footer_contact_title:  'Contact',
    footer_copyright:      '© 2026 OpenWays. All rights reserved.',
    footer_privacy:        'Privacy Policy',
    footer_terms:          'Terms of Use',

    hero_badge:    'Sydney · AI Training Specialists',
    hero_title:    'Real AI Skills.<br>Real Business<br><span class="highlight">Results.</span>',
    hero_subtitle: 'Practical AI training for small businesses and adult learners in Sydney.<br>Clear, hands-on, and genuinely useful — no jargon.',
    hero_cta1:     'View Programs',
    hero_cta2:     'Free Consultation',
    hero_note:     '✅ &nbsp;No tech jargon &nbsp;·&nbsp; Real-world scenarios &nbsp;·&nbsp; Immediately useful',
    hero_stat1_num:   '500+',
    hero_stat1_label: 'Learners',
    hero_stat2_num:   '98%',
    hero_stat2_label: 'Satisfaction',

    trust1: 'Real-World Scenarios',
    trust2: 'Bilingual Training (EN/ZH)',
    trust3: 'No Tech Jargon',
    trust4: '1-on-1 Support',
    trust5: 'Sydney-Based Team',

    s2_tag:      'What We Solve',
    s2_title:    'Sound familiar?',
    s2_subtitle: 'These are the real challenges we help Sydney small businesses and sole traders solve every day.',
    pain1_title: 'Not sure what AI can do for your business',
    pain1_desc:  'AI is everywhere in the news, but it\'s not clear what actually applies to your business — or where to even start.',
    pain2_title: 'Content and marketing take too much time',
    pain2_desc:  'Writing posts, replying to comments, making promotional materials — it takes forever and pulls you away from your core work.',
    pain3_title: 'English communication is a struggle',
    pain3_desc:  'Dealing with suppliers, clients, or government — limited English holds you back and costs you opportunities.',
    pain4_title: 'Too much repetitive work, too little efficiency',
    pain4_desc:  'So much work is still done by hand. You know it could be automated, but you don\'t know how or where to start.',
    pain_cta:    'See how we can help',

    s3_tag:      'Our Training Programs',
    s3_title:    'Two clear paths for different needs',
    s3_subtitle: 'Each includes group training and 1-on-1 consulting. We won\'t sell you something that isn\'t right for you.',

    svc1_tag:      'For Businesses',
    svc1_title:    'AI for Small Business',
    svc1_subtitle: 'Get your team genuinely using AI',
    svc1_desc:     'We help small businesses integrate AI tools into real business scenarios. No empty theory — we focus on solving actual problems in content creation, client communication, English expression, and daily efficiency.',
    svc1_i1:       'Content creation & social media',
    svc1_i2:       'Client communication & AI writing',
    svc1_i3:       'English expression & translation',
    svc1_i4:       'Store efficiency & workflow',
    svc1_i5:       '1-on-1 business owner consulting',
    svc1_badge1:   'Group Training',
    svc1_badge2:   '1-on-1 Consulting',
    svc1_badge3:   'Online & In-Person',
    svc1_cta:      'Learn More',

    svc2_tag:      'For Adult Learners',
    svc2_title:    'AI Life Skills for Adults 50+',
    svc2_subtitle: 'Start from scratch, at your own pace',
    svc2_desc:     'Designed for learners aged 50+. No experience needed, no pressure to keep up. We guide you step by step to use AI in daily life — more conveniently, safely, and confidently.',
    svc2_i1:       'AI assistant basics (ChatGPT etc.)',
    svc2_i2:       'Smartphone & tablet smart use',
    svc2_i3:       'Online safety & scam prevention',
    svc2_i4:       'Everyday AI tools',
    svc2_i5:       '1-on-1 patient coaching',
    svc2_badge1:   'Group Courses',
    svc2_badge2:   '1-on-1 Coaching',
    svc2_badge3:   'Beginner Friendly',
    svc2_cta:      'Learn More',

    svc_soon_tag:   'Coming Soon',
    svc_soon_title: 'More programs in development',
    svc_soon_desc:  'Digital currency basics, NFT & digital assets, and more practical programs are coming soon.',
    svc_soon_item1: 'Digital Currency Basics',
    svc_soon_item2: 'NFT & Digital Assets',
    svc_soon_item3: 'More programs coming…',
    svc_soon_notify:'Notify me',

    s4_tag:      'Industries We Serve',
    s4_title:    'We understand your industry',
    s4_subtitle: 'Every industry is different. Our training is adapted to your actual business context — not a one-size-fits-all course.',
    ind1_title:  'Professional Services',
    ind1_desc:   'Consulting, agencies, professional services',
    ind2_title:  'Beauty & Personal Care',
    ind2_desc:   'Beauty, nails, hair, SPA',
    ind3_title:  'Food & Retail',
    ind3_desc:   'Restaurants, takeaway, retail stores',
    ind4_title:  'Other SMEs',
    ind4_desc:   'Whatever your business — let\'s talk',
    ind_note:    'Your industry isn\'t listed? <a href="contact.html">Contact us to find out</a>.',
    ind_contact_link: 'Contact us to find out',

    s5_tag:       'Why Choose OpenWays',
    s5_title:     'What makes us different',
    why1_title:   'Real scenarios, not AI theory',
    why1_desc:    'Our training is built around your real business problems, not abstract tech concepts you\'ll never use.',
    why2_title:   'Bilingual — no language barrier',
    why2_desc:    'Mandarin, Cantonese, or English — learn in the language you\'re most comfortable with. We adapt.',
    why3_title:   'Designed for adult learners',
    why3_desc:    'No rushing, no comparing. We have extensive experience with learners 50+ and know how to make it stick.',
    why4_title:   'Sydney-based local team',
    why4_desc:    'We\'re based in Sydney and understand the real situation of the local community and SMEs — not a remote generic course.',
    why5_title:   '1-on-1 follow-up consulting',
    why5_desc:    'Learning doesn\'t stop at the session. Our 1-on-1 consulting helps you apply what you\'ve learned to your real business.',
    why6_title:   'Honest — no over-promising',
    why6_desc:    'AI isn\'t magic. We\'ll tell you honestly what can be done and what can\'t, helping you make practical decisions.',

    s6_tag:       'How It Works',
    s6_title:     'Three steps. No complications.',
    s6_subtitle:  'From first contact to starting training — the process is clear, simple, and pressure-free.',
    step1_title:  'Tell us your situation',
    step1_desc:   'Book a free 15-min call or send a message. No preparation needed — just tell us what you want to solve or learn.',
    step2_title:  'We recommend the right fit',
    step2_desc:   'We give honest, practical recommendations based on your situation. No hard sell for programs that aren\'t right for you.',
    step3_title:  'Learn and apply it for real',
    step3_desc:   'Train at your own pace with ongoing support to help you apply what you learn to real situations.',
    s6_cta:       'Book Free Consultation',
    s6_note:      'Free 15-min call · No obligation · Reply within 24 hours',

    s7_tag:       'What Our Learners Say',
    s7_title:     'Real feedback from real learners',
    s7_subtitle:  'These are genuine reviews from people we\'ve worked with.',
    rev1_quote:   'I used to think AI had nothing to do with my business. After the training, I now use ChatGPT to write social posts and reply to customers. It saves so much time. The trainer was clear and patient — never rushed me.',
    rev1_name:    'Mrs Chen',
    rev1_role:    'Beauty Salon Owner, Sydney',
    rev2_quote:   'We arranged a team training day and it was all practical — using AI to reply to Google reviews, write menu descriptions, communicate with suppliers in English. The whole team said they learned something useful.',
    rev2_name:    'Mr Zhang',
    rev2_role:    'Restaurant Manager, Sydney',
    rev3_quote:   'I was worried about being scammed online and confused about my phone. The trainer was patient, never made me feel silly for asking basic questions. Now I use AI to translate English letters. Such a relief.',
    rev3_name:    'Mrs Wang',
    rev3_role:    'Adult Learner, Sydney, age 62',

    s8_tag:    'Common Questions',
    s8_title:  'You might be wondering…',
    faq1_q:    'Do I need any AI experience to join?',
    faq1_a:    'Not at all. Our programs are designed specifically for beginners. We start from the very basics and never make you feel rushed for asking simple questions.',
    faq2_q:    'Is training online or in person?',
    faq2_a:    'Both. We offer online sessions via video call (Zoom etc.), and in-person training in selected areas of Sydney. Choose what\'s most convenient for you.',
    faq3_q:    'Can I learn in Chinese?',
    faq3_a:    'Yes. We offer training in Mandarin, Cantonese, or English — or a mix. Just let us know your preference when you enquire.',
    faq4_q:    'What\'s the difference between group training and 1-on-1 consulting?',
    faq4_a:    'Group training covers a topic systematically. 1-on-1 consulting is tailored specifically to your situation — a deep-dive conversation about your actual business or learning challenges.',
    s8_cta:    'See All FAQs',

    s9_title:  'Ready to find out more?',
    s9_desc:   'Book a free 15-minute call. We\'ll listen to your situation and give you honest, practical advice.',
    s9_cta1:   'Book Free Consultation',
    s9_cta2:   'Browse Programs',

    about_hero_tag:   'About Us',
    about_hero_title: 'We believe learning should build confidence',
    about_hero_sub:   'OpenWays is a Sydney-based AI training business for small businesses and adult learners. Practical, clear, and genuinely supportive.',
    about_story_tag:  'Our Story',
    about_story_h2:   'Why OpenWays?',
    about_story_p1:   'Too many people are intimidated by "AI" — either it feels too complex, or it seems irrelevant to their life. In reality, AI tools can already help solve real everyday problems: saving time, overcoming language barriers, creating better content.',
    about_story_p2:   'We\'re based in Sydney and understand the real situation of the local Chinese community and SMEs. We don\'t make generic online courses — we make training that fits your actual situation, explained clearly, by someone who\'s genuinely there with you.',
    about_story_cta:  'Talk to Us',

    who_hero_tag:   'Who We Help',
    who_hero_title: 'We help real people — not abstract "learners"',
    who_hero_sub:   'Find your situation below and see what we can do.',

    faq_hero_tag:   'FAQ',
    faq_hero_title: 'Your questions, answered honestly',
    faq_hero_sub:   'We\'ve answered the questions we get asked most often. Can\'t find yours? Just get in touch.',

    contact_hero_tag:   'Contact',
    contact_hero_title: 'We\'d love to hear from you',
    contact_hero_sub:   'Whether you\'re ready to book or just exploring — you\'re welcome. A real person replies, usually within one business day.',
    contact_method1_title: 'Book a Free Call',
    contact_method1_desc:  '15 minutes, no charge, no pressure. We listen and give you real advice.',
    contact_method1_cta:   'Choose a Time',
    contact_method2_title: 'Send a Message',
    contact_method2_desc:  'Prefer writing? Fill in the form and we\'ll reply within 24 hours.',
    contact_method2_cta:   'Write to Us',
    contact_method3_title: 'Email Directly',
    contact_method3_desc:  'Every email is read and replied to by a real person.',
    contact_method3_cta:   'hello@openways.net',
    contact_form_title:    'Send us a message',
    contact_form_sub:      'Fill in the form and we\'ll get back to you within one business day.',
    form_fname:     'First Name',
    form_lname:     'Last Name',
    form_email:     'Email Address',
    form_phone:     'Phone (optional)',
    form_topic:     'What are you enquiring about?',
    form_lang_pref: 'Preferred reply language',
    form_message:   'Your Message',
    form_submit:    'Send Message',
    form_note:      'Reply within one business day · No spam, ever',
    form_consent:   'I agree to OpenWays storing my contact details to respond to this enquiry.',
    form_success_title: 'Message sent!',
    form_success_desc:  'Thank you for reaching out. We\'ll be in touch within one business day.',

    /* ── SERVICES PAGE ── */
    svcs_hero_tag:   'Our Programs',
    svcs_hero_title: 'Two Clear Paths.<br>Find the Right One for You.',
    svcs_hero_sub:   'AI training for small businesses, or AI life skills for older adults. Both include group sessions and 1-on-1 support.',
    svc1_for_title:  'Who This Is For',
    svc1_for_1:      'Small business owners and their teams',
    svc1_for_2:      'Self-employed individuals looking to use AI for content, communication, and efficiency',
    svc1_for_3:      'Anyone curious about how AI could help their business',
    svc2_for_title:  'Who This Is For',
    svc2_for_1:      'Adults 50+ who want to learn AI but don\'t know where to start',
    svc2_for_2:      'People who feel uncertain about smartphones or online safety',
    svc2_for_3:      'Anyone encouraged by family to give it a try',
  }
};


/* ═══════════════════════════════════════════════════════════
   Language Switching Engine
   ═══════════════════════════════════════════════════════════ */

/**
 * Apply a language across the entire page.
 * @param {string} lang - 'zh-s' | 'zh-t' | 'en'
 */
function owSetLang(lang) {
  if (!OW_TRANSLATIONS[lang]) lang = 'zh-s';

  const t = OW_TRANSLATIONS[lang];

  // 1. Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t[key];
    if (val === undefined) return;
    if (el.hasAttribute('data-i18n-html')) {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });

  // 2. Update placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = t[key];
    if (val !== undefined) el.setAttribute('placeholder', val);
  });

  // 3. Update page <title>
  const pageTitleKey = document.body.getAttribute('data-page');
  if (pageTitleKey && t['page_title_' + pageTitleKey]) {
    document.title = t['page_title_' + pageTitleKey];
  }

  // 4. Update meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  const metaKey  = document.body.getAttribute('data-page');
  if (metaDesc && metaKey && t['meta_desc_' + metaKey]) {
    metaDesc.setAttribute('content', t['meta_desc_' + metaKey]);
  }

  // 5. Update html[lang] attribute for accessibility & SEO
  const langMap = { 'zh-s': 'zh-Hans', 'zh-t': 'zh-Hant', 'en': 'en' };
  document.documentElement.setAttribute('lang', langMap[lang] || 'zh-Hans');

  // 6. Save preference
  try { localStorage.setItem('ow-lang', lang); } catch(e) {}

  // 7. Update active state on all lang buttons
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === lang);
  });
}

/**
 * Detect the preferred language from localStorage, then browser, then default.
 * @returns {string} language code
 */
function owDetectLang() {
  // 1. User's saved preference
  try {
    const stored = localStorage.getItem('ow-lang');
    if (stored && OW_TRANSLATIONS[stored]) return stored;
  } catch(e) {}

  // 2. Browser language
  const nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
  if (nav.startsWith('zh-tw') || nav.startsWith('zh-hk') || nav.startsWith('zh-mo')) return 'zh-t';
  if (nav.startsWith('zh')) return 'zh-s';
  if (nav.startsWith('en')) return 'en';

  // 3. Default: Simplified Chinese (primary audience)
  return 'zh-s';
}

// Auto-initialize when DOM is ready
(function () {
  function init() {
    const lang = owDetectLang();
    owSetLang(lang);

    // Attach click handlers to all lang buttons (including those added later)
    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      btn.addEventListener('click', () => owSetLang(btn.getAttribute('data-lang-btn')));
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
