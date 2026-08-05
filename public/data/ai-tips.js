/* 诚悦品牌工作台 · AI 技巧库（WorkBuddy / Code / xAI）· 内联数据
   数据源：B站/今日头条/腾讯云开发者社区公开教程（2026 上半年）
   字段：id / title / platform / author / duration / views / date / tags / summary / takeaway / url / badge
   - platform: 'bilibili' | 'douyin' | 'wechat' | 'toutiao' | 'qcloud'
   - badge: 可选角标（"新推送" / "推荐" 等）
*/
window.WB_AI_TIPS = {
  updated: '2026-08-05',
  source: 'B站 / 今日头条 / 腾讯云开发者社区',
  items: [
    {
      id: 'ai-20260805-01',
      title: 'Claude Code 入门教程：手把手带你走进 Vibe Coding（10 集系统课）',
      platform: 'bilibili',
      author: 'Claude Code 官方中文',
      duration: '共 10 集，约 95 分钟',
      views: '12.6 万',
      date: '2026-07',
      tags: ['Claude Code', '入门', 'MCP', 'SubAgent'],
      summary: '10 集系统课：介绍与安装、CLAUDE.md、上下文、工具与权限、规划与思考、Slash Commands、MCP 服务器、子代理、GitHub 集成、想法与技巧。',
      takeaway: '品牌部可直接套用"CLAUDE.md = 团队记忆"思路，让 WorkBuddy 长期记住诚悦品牌话术、禁用词库、六大产品体系等。',
      url: 'https://www.bilibili.com/video/BV1qQmgB5ENs/',
      badge: '新推送'
    },
    {
      id: 'ai-20260805-02',
      title: '翻遍整个B站：Claude Code 入门到精通（MCP / SubAgent / Agent Skill / Hooks）',
      platform: 'bilibili',
      author: '大模型学习指南',
      duration: '约 4 小时 50 分钟',
      views: '38.2 万',
      date: '2026-03',
      tags: ['Claude Code', '应用实战', '11个提效技巧', 'Agent Skills'],
      summary: '入门与配置、最佳实践、应用实战 3 大章，27 小节。含 5 个真实项目改造案例、11 个让成功率翻倍的技巧、Playwright MCP 增强 Bug 修复。',
      takeaway: '"应用实战"章节是品牌部最该抄的——把"拍视频号脚本"当项目改造，让 Claude Code 接管重复劳动，人只做最后 5% 的判断。',
      url: 'https://www.bilibili.com/video/BV1gEQdBuED5/',
      badge: '热门'
    },
    {
      id: 'ai-20260805-03',
      title: 'Claude Code 四小时教程：零基础 AI 编程实战（中英附文稿）',
      platform: 'bilibili',
      author: 'Nick Saraev（BibiGPT 搬运）',
      duration: '约 4 小时',
      views: '6.8 万',
      date: '2026-02',
      tags: ['Claude Code', '零基础', 'Plan Mode', 'Agent Teams'],
      summary: '环境配置→CLAUDE.md→计划模式→权限安全→上下文管理→Slash 命令→MCP→Skills→Subagents→Agent Teams→部署上线全流程。强调"任务-执行-验证"循环。',
      takeaway: '"计划模式"是工作流最大杠杆——写视频号脚本前先让 AI 出 3 版方向人确认，比直接出稿返工率低 60%+。',
      url: 'https://app.bibigpt.co/content/24a9e556-50ea-4bd0-a6a2-4074e6830898'
    },
    {
      id: 'ai-20260805-04',
      title: 'WorkBuddy 提示词技巧：3 个模板让 AI 帮你事半功倍（任务型/分析型/迭代型）',
      platform: 'toutiao',
      author: 'WorkBuddy 用户社区',
      duration: '图文约 6 分钟',
      views: '4.2 万',
      date: '2026-03',
      tags: ['WorkBuddy', 'Prompt', '模板', '职场效率'],
      summary: '三套万能模板：任务型（角色+任务+背景+要求）、分析型（数据+角度+形式+结论）、迭代型（按需追问）。一句话总结：好 prompt = 角色+任务+背景+具体要求。',
      takeaway: '品牌部"撰写脚本"任务可直接套任务型模板：角色=诚悦内容策略+任务=产出 15 秒脚本+背景=客户画像+要求=禁用词/字数/钩子结构。',
      url: 'https://www.toutiao.com/article/7618417467240628778/'
    },
    {
      id: 'ai-20260805-05',
      title: 'WorkBuddy 保姆级教程：5 个核心功能，10 分钟上手（计划/仅问答/默认 三模式）',
      platform: 'toutiao',
      author: 'WorkBuddy 用户社区',
      duration: '图文约 10 分钟',
      views: '7.5 万',
      date: '2026-07',
      tags: ['WorkBuddy', '工作空间', '3种模式', '四类万能 prompt'],
      summary: '3 种模式取舍：不懂的用"计划"、查资料的用"仅问答"、老手用默认。强调"一个项目 = 一个独立工作空间"黄金法则，附 4 类万能 prompt（整理/分析/创作/自动化）。',
      takeaway: '诚悦品牌部"周更"工作流应该开独立工作空间：每周一个文件夹，所有选题、脚本、素材都进去，WorkBuddy 长期记忆上下文。',
      url: 'https://www.toutiao.com/article/7669759335827784235/',
      badge: '推荐'
    },
    {
      id: 'ai-20260805-06',
      title: '用 WorkBuddy 给三个闺女做抖音脚本：红头文件风 Skill 实战全记录（附完整提示词）',
      platform: 'qcloud',
      author: '腾讯云开发者社区',
      duration: '图文 约 12 分钟',
      views: '1.6 万',
      date: '2026-07-25',
      tags: ['WorkBuddy', 'Skill', '官方通报体', '抖音脚本'],
      summary: '把 WB 定位为"编导+文案助理"而非"剪辑师"。"官方通报体"Skill：用红头文件严肃格式描述混乱素材，制造极致反差。前 3 秒钩子、单条 1 件事、20 秒内、留轻互动。',
      takeaway: '"反差叙事"是诚悦可以学的——商办物业的"严肃"调性配"客户/员工暖心细节"反差，比直接喊服务理念更容易破圈。',
      url: 'https://cloud.tencent.com/developer/article/2715571'
    }
  ]
};
