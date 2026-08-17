/* 诚悦品牌工作台 · 阅读计划 · 微信读书推荐池（自动抓取）
   每周一由自动化任务从微信读书热门/推荐书单提取实用书籍，追加到此处。
   字段：id / source('weread') / title / author / goal('logic'|'express'|'both') / weread / why / tip
   - weread：直接用 https://weread.qq.com/web/reader/... 精确链接，或留空由前端按书名搜索
   - 前端会在 WB_READING_LIB（精选种子）之后合并本池，并打「📚 微信读书」标签
*/
window.WB_READING_WEREAD = {
  updated: '2026-08-17',
  items: [
    {
      source: 'weread',
      id: 'weread-20260817-1',
      title: 'AI 提效：人人都要用的 WorkBuddy（微信读书特别版）',
      author: '秋叶',
      goal: 'both',
      weread: 'https://weread.qq.com/web/search/books?keyword=' + encodeURIComponent('AI提效 人人都要用的WorkBuddy'),
      why: '微信读书新书榜前列、推荐值 89.7%。面向零基础职场人，讲怎么把周报、会议纪要、多表合并、竞品调研、内容创作交给 AI，还教你把有效指令沉淀成可复用的技能和专家团。',
      tip: '重点看"把个人经验固化为团队标准流程"那部分——正好对应品牌部要建的 Skill 与工作台，一次配置长期受益。'
    },
    {
      source: 'weread',
      id: 'weread-20260817-2',
      title: '认知觉醒：开启自我改变的原动力',
      author: '周岭',
      goal: 'logic',
      weread: 'https://weread.qq.com/web/search/books?keyword=' + encodeURIComponent('认知觉醒'),
      why: '把脑科学、心理学与实操方法结合，讲元认知、专注力与习惯养成，语言通俗，是很多人的"开窍"之作，长期占据成长类口碑榜前列。',
      tip: '"元认知＝审视自己的思考"这条用在选题会上：先问"我为什么觉得这个选题好"，能筛掉一半拍脑袋的方案。'
    },
    {
      source: 'weread',
      id: 'weread-20260817-3',
      title: '关键对话：如何高效能沟通',
      author: '[美]科里·帕特森 / 约瑟夫·格雷尼',
      goal: 'express',
      weread: 'https://weread.qq.com/web/search/books?keyword=' + encodeURIComponent('关键对话'),
      why: '专治"高风险、情绪激烈、观点对立"的场景：怎么在对方上火时还保持逻辑清晰、把对话拉回共同目标，职场沟通书单里几乎必上榜的一本。',
      tip: '客户对物料不满意、跨部门抢资源这类硬仗前翻两页——"先营造安全感再谈事实"比直接讲道理有效得多。'
    },
    {
      source: 'weread',
      id: 'weread-20260817-4',
      title: '好好说话：新鲜有趣的话术精进技巧',
      author: '马薇薇 / 黄执中 等',
      goal: 'express',
      weread: 'https://weread.qq.com/web/search/books?keyword=' + encodeURIComponent('好好说话'),
      why: '《奇葩说》辩手团出的场景化话术书，覆盖沟通、说服、谈判、演讲、辩论五大场景，每篇都短、都能直接抄，实战派指南。',
      tip: '"说服"那一章的钩子写法可以直接迁移到视频号前 3 秒文案，比自己硬憋标题快。'
    },
    {
      source: 'weread',
      id: 'weread-20260817-5',
      title: '演讲的力量：TED 官方指南',
      author: '[美]克里斯·安德森',
      goal: 'express',
      weread: 'https://weread.qq.com/web/search/books?keyword=' + encodeURIComponent('演讲的力量'),
      why: 'TED 掌门人亲授"联系—叙述—说明—说服—揭露"五大技巧，核心观点是演讲要先建立联系再传递观点，不是背稿子。',
      tip: '给项目经理讲工作台、做内部分享会前读第 2、3 章——把"我要讲什么"换成"听众要带走什么"，效果立变。'
    },
    {
      source: 'weread',
      id: 'weread-20260817-6',
      title: '卡片笔记写作法',
      author: '[德]申克·阿伦斯',
      goal: 'both',
      weread: 'https://weread.qq.com/web/search/books?keyword=' + encodeURIComponent('卡片笔记写作法'),
      why: '讲卢曼卡片盒法：不苦等灵感，而是把零散想法拆成一张张可链接的卡片，靠积累自然长出文章和观点，是知识工作者的底层方法论。',
      tip: '正好用来重构选题库——每条洞察写成一张卡片而不是一行标题，三个月后写推文就不用从零想。'
    },
    {
      source: 'weread',
      id: 'weread-20260817-7',
      title: '深度工作：如何有效使用每一点脑力',
      author: '[美]卡尔·纽波特',
      goal: 'logic',
      weread: 'https://weread.qq.com/web/search/books?keyword=' + encodeURIComponent('深度工作'),
      why: '论证"专注是这个时代最稀缺的能力"，给出四条准则把碎片化工作切换成深度工作状态，职场进阶类书单常驻推荐。',
      tip: '对照品牌部"2 天集中设计＋3 天拍视频"的节奏读——把设计日彻底关掉群消息，一天顶三天。'
    },
    {
      source: 'weread',
      id: 'weread-20260810-1',
      title: '金字塔原理',
      author: '[美]芭芭拉·明托',
      goal: 'logic',
      weread: 'https://weread.qq.com/web/search/books?keyword=' + encodeURIComponent('金字塔原理'),
      why: '麦肯锡 40 年经典培训教材，"结论先行、以上统下、归类分组、逻辑递进"四原则＋MECE 法则，是把零散信息变成清晰表达的底层框架。',
      tip: '汇报诚悦项目成果时先给结论再给三条理由——被领导说"抓不住重点"的概率会直线下降。'
    },
    {
      source: 'weread',
      id: 'weread-20260810-2',
      title: '结构思考力',
      author: '李忠秋',
      goal: 'both',
      weread: 'https://weread.qq.com/web/search/books?keyword=' + encodeURIComponent('结构思考力'),
      why: '《金字塔原理》的本土化版本，用"先总后分"讲怎么写邮件、怎么开会发言，案例贴近中国职场，看完就能直接套用。',
      tip: '拿它改造品牌部周会——每人发言先一句话结论再讲三点，会议时长能砍掉三分之一。'
    },
    {
      source: 'weread',
      id: 'weread-20260810-3',
      title: '麦肯锡结构化战略思维：如何想清楚、说明白、做到位',
      author: '周国元',
      goal: 'both',
      weread: 'https://weread.qq.com/web/search/books?keyword=' + encodeURIComponent('麦肯锡结构化战略思维'),
      why: '四大原则（数字说话 / 洞见优于表象 / MECE / 假设为前提）＋新麦肯锡五步法，从思考、交流到实施讲透全流程。',
      tip: '"洞见优于表象"这条提醒品牌部：汇报别拼版式，先把"为什么这条视频能火"的洞见讲出来。'
    },
    {
      source: 'weread',
      id: 'weread-20260810-4',
      title: '非暴力沟通',
      author: '[美]马歇尔·卢森堡',
      goal: 'express',
      weread: 'https://weread.qq.com/web/search/books?keyword=' + encodeURIComponent('非暴力沟通'),
      why: '"观察—感受—需要—请求"四步法，把攻击性语言转化为有效对话，处理客户投诉与跨部门协作都能直接落地。',
      tip: '客户投诉回复话术改成"先陈述观察到的事实、再表达需求"，比一上来就道歉更能稳住关系。'
    },
    {
      source: 'weread',
      id: 'weread-20260810-5',
      title: '学会提问：批判性思维指南',
      author: '[美]尼尔·布朗 / 斯图尔特·基利',
      goal: 'logic',
      weread: 'https://weread.qq.com/web/search/books?keyword=' + encodeURIComponent('学会提问'),
      why: '批判性思维实操指南，用十个关键问题（证据来源？样本量多大？有没有反例？）肢解任何观点，专治信息焦虑与盲从。',
      tip: '引用行业数据前先过一遍这十问，避免品牌稿里写进站不住脚的"行业第一"。'
    },
    {
      source: 'weread',
      id: 'weread-20260810-6',
      title: '沟通的艺术：看入人里，看出人外',
      author: '[美]罗纳德·B·阿德勒',
      goal: 'express',
      weread: 'https://weread.qq.com/web/search/books?keyword=' + encodeURIComponent('沟通的艺术'),
      why: '人际沟通经典教材，从自我认知、知觉与情绪，讲到语言 / 非语言表达、倾听与冲突应对，系统而不空泛。',
      tip: '"少用你、巧用我和我们"这条直接用在对客沟通与视频口播文案里，距离感立刻降下来。'
    },
    {
      source: 'weread',
      id: 'weread-20260810-7',
      title: '思考，快与慢',
      author: '[美]丹尼尔·卡尼曼',
      goal: 'logic',
      weread: 'https://weread.qq.com/web/search/books?keyword=' + encodeURIComponent('思考，快与慢'),
      why: '诺贝尔经济学奖得主讲大脑的"快系统"与"慢系统"，解释人为什么会被直觉误导——理解受众决策机制的必读书。',
      tip: '视频号前 3 秒钩子打的就是"快系统"，读完你会更清楚为什么数据大字比长句更有效。'
    },
    {
      source: 'weread',
      id: 'weread-20260805-1',
      title: '史玉柱自述：我的营销心得',
      author: '史玉柱',
      goal: 'both',
      weread: '',
      why: '脑白金、征途操盘手毫无保留复盘产品开发、营销传播、广告投放、团队管理。品牌部可直接抄"送礼就送脑白金"式一句话定位。',
      tip: '重点读"广告投放"和"消费者洞察"两章，对照诚悦六大产品体系做一句定位练习。'
    },
    {
      source: 'weread',
      id: 'weread-20260805-2',
      title: '故事营销：像泰国剧情广告一样写故事',
      author: '徐图图',
      goal: 'express',
      weread: '',
      why: '用火爆全网的泰国剧情广告拆解"故事核心 / 目标 / 转折 / 立意"，广告文案和短视频创作者都能直接用。',
      tip: '把诚悦"高原营地""国宾级礼宾"案例改写成泰国广告式叙事，完播率会更高。'
    },
    {
      source: 'weread',
      id: 'weread-20260805-3',
      title: '能断金刚：超凡的古老商业智慧',
      author: '[美]麦克·罗奇',
      goal: 'logic',
      weread: '',
      why: '用古老向善之道讲商业生存密码，助你穿越周期，让事业和人生都走得稳、走得远。',
      tip: '结合"客己平等、相互成就"核心价值观，写一条诚悦版"种善因得善果"的客户故事。'
    },
    {
      source: 'weread',
      id: 'weread-20260805-4',
      title: '金钱心理学（全新增订版）',
      author: '[美]摩根·豪泽尔',
      goal: 'logic',
      weread: '',
      why: '全球销量超千万册，拆解金钱世界底层逻辑——影响财富终局的不是金融知识，而是对人性与金钱本质的认知。',
      tip: '读"消费主义陷阱"一章，反思品牌部内容是否也在制造伪需求。'
    },
    {
      source: 'weread',
      id: 'weread-20260805-5',
      title: '第一性原理（微信读书特别版）',
      author: '李善友',
      goal: 'logic',
      weread: '',
      why: '用第一性原理拆解创新与认知，跳出类比思维，适合做品牌定位时回归本质。',
      tip: '做诚悦品牌定位时，先问"物业 / 餐饮的本质是什么"，再推导话术。'
    },
    {
      source: 'weread',
      id: 'weread-20260805-6',
      title: 'AI未来已来：CEO、组织、个人的时代红利',
      author: '李开复',
      goal: 'both',
      weread: '',
      why: '2026 新出版，讲 AI 给组织与个人带来的时代红利，品牌部可借势做"AI + 物业"内容。',
      tip: '摘"AI 重构工作流"观点，写成诚悦内部科普或视频号选题。'
    },
    {
      source: 'weread',
      id: 'weread-20260805-7',
      title: '聪明的投资者（第4版注疏点评版）',
      author: '[美]本杰明·格雷厄姆 / [美]贾森·兹威格',
      goal: 'logic',
      weread: '',
      why: '投资与投机的分野、防御型 / 积极型组合策略，训练"长期主义"思维，对品牌资产经营有启发。',
      tip: '类比"品牌是长期资产"，别为短期流量牺牲调性。'
    },
    {
      source: 'weread',
      id: 'weread-20260805-8',
      title: '半小时玩转小龙虾：OpenClaw极简入门（轻科技）',
      author: '图灵智能研究院 刘江',
      goal: 'logic',
      weread: '',
      why: '一夜刷屏的个人 AI 助手 OpenClaw，解密核心价值与未来趋势，品牌部可快速上手提效。',
      tip: '用 OpenClaw 搭一个"诚悦选题灵感"助手，每天推送 3 个视频号选题。'
    }
  ]
};
