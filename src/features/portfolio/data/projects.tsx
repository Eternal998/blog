import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "eternal-blog",
    title: "Eternal Blog",
    summary: "这个网站本身：基于开源 anx-portfolio 复刻，部署在飞牛 NAS 的 Docker 里。",
    period: {
      start: "11.2026",
    },
    skills: ["Next.js", "React", "Tailwind CSS", "Docker"],
    isExpanded: true,
    titleEffect: "shimmer",
    description: `静态优先的个人网站：首页、博客、Now、Bookmarks，加上暗色模式、命令菜单搜索和 Markdown 内容层。源码来自 MIT 许可的 [anx-portfolio](https://github.com/AnxForever/anx-portfolio)，品牌与内容已替换为 Eternal。

部署在飞牛 NAS 上，Nginx/Node 容器常驻，重启自动恢复。后续会逐步加上真实 GitHub 数据、RSS 与评论。`,
  },
]
