import { BookmarkCategory, type Bookmark } from "./types"

/**
 * Starter collection — replace with your own bookmarks. The filter UI and
 * categories come from the upstream component; only the entries are local.
 */
export const BOOKMARKS: Bookmark[] = [
  {
    title: "MDN Web Docs",
    url: "https://developer.mozilla.org/",
    category: BookmarkCategory.REFERENCE,
    why: "Web 平台最可靠的参考手册，查 API 先看这里。",
  },
  {
    title: "shadcn/ui",
    url: "https://ui.shadcn.com/",
    category: BookmarkCategory.UI_LIBRARY,
    why: "可以直接带进自己项目的基础交互组件。",
  },
  {
    title: "Tailwind CSS",
    url: "https://tailwindcss.com/",
    category: BookmarkCategory.UI_LIBRARY,
    why: "用工具类把设计决策留在标记里，改起来快。",
  },
  {
    title: "web.dev",
    url: "https://web.dev/",
    category: BookmarkCategory.REFERENCE,
    why: "性能、可访问性与现代 Web 能力的系统性指南。",
  },
  {
    title: "Geist",
    url: "https://vercel.com/font",
    category: BookmarkCategory.REFERENCE,
    why: "为界面而生的字体，本站的排版用字。",
  },
  {
    title: "GitHub Explore",
    url: "https://github.com/explore",
    category: BookmarkCategory.REFERENCE,
    why: "看看别人在做什么，顺手捡几个好工具。",
  },
]
