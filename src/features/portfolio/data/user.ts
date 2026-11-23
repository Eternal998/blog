import type { User } from "@/features/portfolio/types/user"

const BIO = "记录技术、生活，以及一切值得留下的东西。"

export const USER: User = {
  firstName: "Eternal",
  lastName: "",
  displayName: "Eternal",
  username: "Eternal998",
  bio: BIO,
  // Rendered as plain text, not markdown — keep these free of link syntax.
  flipSentences: [
    "记录技术、生活，以及一切值得留下的东西。",
    "折腾 NAS、静态站点和 AI 小工具。",
    "项目、笔记和收藏都放在这里。",
  ],
  jobTitle: "开发者 / 记录者",
  // 不想公开的话删掉这一行即可。
  address: "洛阳，中国",
  // 邮箱是 base64 编码的，避免被爬虫直接抓走。
  emailB64: "dGFuZ3dlbmJvNzMzQHFxLmNvbQ==",
  // phoneNumberB64 暂未公开 —— 留空即可，对应的 overview 条目会自动跳过。
  jobs: [],
  about: `这里是 Eternal。喜欢把想法做成能跑的东西，再把它写下来。不追热点，只留值得反复看的内容。

平时折腾 NAS、静态站点和 AI 小工具。这个网站用来放做过的项目、开发中的记录，还有平时收藏的网页。

（占位自我介绍：替换成你自己的经历、方向和正在做的事。）
`,
  avatar: "/images/eternal-avatar-dark.webp",
  avatarSketch: "/images/eternal-avatar.webp",
  ogImage: `/og/simple?title=Eternal&description=${encodeURIComponent(BIO)}`,
  keywords: [
    "eternal",
    "个人网站",
    "博客",
    "NAS",
    "静态站点",
    "AI 工具",
  ],
  timeZone: "Asia/Shanghai",
  dateCreated: "2026-11-20",
}
