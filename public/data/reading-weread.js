/* 诚悦品牌工作台 · 阅读计划 · 微信读书推荐池（自动抓取）
   每周一由自动化任务从微信读书热门/推荐书单提取实用书籍，追加到此处。
   字段：id / source('weread') / title / author / goal('logic'|'express'|'both') / weread / why / tip
   - weread：直接用 https://weread.qq.com/web/reader/... 精确链接，或留空由前端按书名搜索
   - 前端会在 WB_READING_LIB（精选种子）之后合并本池，并打「📚 微信读书」标签
*/
window.WB_READING_WEREAD = {
  updated: '2026-08-05',
  items: [
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
