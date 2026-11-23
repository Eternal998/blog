import type { Metadata } from "next"

import { X_HANDLE } from "@/config/site"
import { jsonLdBreadcrumbList, JsonLdScript } from "@/lib/json-ld"
import { Markdown } from "@/components/markdown"
import {
  PageHeading,
  PageHeadingDescription,
  PageHeadingTagline,
  PageHeadingTitle,
} from "@/components/page-heading"

const title = "Now"
const description = "我现在在做什么。"

const ogImage = `/og/simple?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/now",
  },
  openGraph: {
    url: "/now",
    type: "website",
    images: {
      url: ogImage,
      width: 1200,
      height: 630,
      alt: title,
    },
  },
  twitter: {
    card: "summary_large_image",
    site: X_HANDLE,
    creator: X_HANDLE,
    images: [ogImage],
  },
}

// 更新这个页面时，同步改这里的日子。
const LAST_UPDATED = "2026-11-23"

const content = `## 这段时间

### Eternal 网站

先把站点跑起来：首页、博客、Now、Bookmarks 四个页面，加上暗色模式和命令菜单搜索。功能后面慢慢加，内容慢慢填。

### 整理自己的东西

把做过的项目、写过的笔记归拢到一处，能直接看、能讲明白。

## 小工具和折腾

- 飞牛 NAS + Docker：把常用服务都搬进自己的机器。
- 静态站点工作流：写完即部署，不依赖任何平台。

## 最近

- 2026-11-23，Eternal 上线，跑在 9999 端口。
- 2026-11-20，写下第一篇文章。
`

export default function NowPage() {
  return (
    <>
      <JsonLdScript
        data={jsonLdBreadcrumbList([
          {
            name: "Home",
            href: "/",
          },
          {
            name: "Now",
            href: "/now",
          },
        ])}
      />

      <div>
        <PageHeading>
          <PageHeadingTagline>Now</PageHeadingTagline>
          <PageHeadingTitle>现在在做什么。</PageHeadingTitle>
          <PageHeadingDescription>
            更新于 {LAST_UPDATED}。
          </PageHeadingDescription>
        </PageHeading>

        <div className="h-4" />

        <div className="screen-line-bottom h-px" />

        <div className="typeset typeset-description mx-auto max-w-3xl px-4 py-8">
          <Markdown>{content}</Markdown>
        </div>
      </div>
    </>
  )
}
