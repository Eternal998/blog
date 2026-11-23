# Eternal 的个人网站

个人网站。首页展示个人介绍、GitHub 贡献热力图与最近的内容入口，另有博客、Now、收藏、项目等页面。

基于 MIT 许可的 [anx-portfolio](https://github.com/AnxForever/anx-portfolio) 复刻，品牌与内容已替换为 Eternal。上游版权与许可见 [LICENSE](./LICENSE)，页脚保留 Source code / License / Inspired by 归属，`/sponsors` 页指向上游作者。上游的品牌资产（名称、Logo、头像）不在 MIT 授权范围内，已全部替换，详见 [TRADEMARK.md](./TRADEMARK.md)。

## 技术栈

- **Next.js 16**（App Router、standalone 输出）
- **React 19** + **TypeScript**（strict）
- **Tailwind CSS v4** + **shadcn/ui**
- **MDX** —— 文章与文档
- **Motion** —— 动效；**Vitest** —— 测试
- **pnpm** —— 包管理

## 本地运行

```bash
pnpm install
cp .env.example .env.local   # 按需填写，全部可选
pnpm dev
```

打开 <http://localhost:3000>。

## 内容在哪里改

| 内容 | 位置 |
| --- | --- |
| 名字 / 标语 / 邮箱 / 头像 / 关于 | `src/features/portfolio/data/user.ts` |
| 社交链接（右上角 GitHub 按钮同步） | `src/features/portfolio/data/social-links.ts` |
| 项目 / 技术栈 / 教育 / 经历等 | `src/features/portfolio/data/` 对应文件 |
| 文章 | `src/features/doc/content/blog/*.mdx` |
| 收藏 | `src/features/bookmark/data.tsx` |
| Now 页 | `src/app/(app)/(pages)/now/page.tsx` |
| 域名 | `src/config/site.ts` 的 `SITE_DOMAIN` |

空列表的区块会自动隐藏，填了才显示。头像与 PWA 图标由 `scripts/gen-brand-assets.mjs` 生成。

## 构建与部署

```bash
pnpm build                              # 产出 .next/standalone
cp -r .next/static .next/standalone/.next/static
cp -r public .next/standalone/public
```

Docker 部署见 [README-DEPLOY.md](./README-DEPLOY.md)（含飞牛 NAS 专用 compose）。
`NEXT_PUBLIC_APP_URL` 与 `NEXT_PUBLIC_GITHUB_CONTRIBUTIONS_API_URL` 在构建时内联，换域名或开启贡献图后需重新构建。

## 测试

```bash
pnpm test:run
```

## 许可

MIT。保留上游版权署名，详见 [LICENSE](./LICENSE)。
