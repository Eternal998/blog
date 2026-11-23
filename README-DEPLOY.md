# Eternal — 部署与内容指南

基于 MIT 许可的 [anx-portfolio](https://github.com/AnxForever/anx-portfolio) 完整复刻，
品牌与内容已替换为 Eternal。按上游 TRADEMARK.md 的要求：

- 保留 `LICENSE`（含上游版权署名）
- 页脚 Source code / License / Inspired by 保留原作者归属
- `/sponsors` 页改为「支持原作者」
- 作者的文章、个人信息、头像、QR 码已全部移除或替换

## 当前状态

- 生产构建已完成（Next.js 16 standalone，43 个页面）
- 预览服务跑在 9999 端口（临时 Node 进程，部署 Docker 前需停掉）
- 内网 http://192.168.1.9:9999 · 外网 http://106.46.94.33:9999

## 部署到飞牛 Docker

1. 通知助手停掉 9999 端口的临时预览服务
2. 飞牛 Docker → Compose → 新增项目（位置随意，如「我的文件/eternal」）
3. 粘贴本目录 `docker-compose.fnos.yml` 的内容（绝对构建上下文版），创建并启动
   - 通用版 `docker-compose.yml`（`build: .`）适合项目就建在源码目录里的场景
4. 首次会拉取 `node:24-slim` 基础镜像（约 70MB），失败就配置镜像加速
5. `restart: unless-stopped` 保证 NAS 重启后自动恢复

构建上下文是绝对路径，项目建在哪里都可以。镜像只复制预构建产物，不在 NAS 上装依赖，构建很快。

## 修改内容

| 内容 | 位置 |
| --- | --- |
| 名字 / 标语 / 邮箱 / 头像 / 关于 | `src/features/portfolio/data/user.ts` |
| 社交链接 | `src/features/portfolio/data/social-links.ts`（图标映射在 `components/social-link-icons.tsx`） |
| 项目 | `src/features/portfolio/data/projects.tsx` |
| 技术栈 | `src/features/portfolio/data/tech-stack.tsx` |
| 教育 / 经历 / 奖项等 | 同目录对应文件（空数组时整节自动隐藏，填了才显示） |
| 文章 | `src/features/doc/content/blog/*.mdx`（frontmatter: title/description/createdAt/updatedAt/pinned） |
| 收藏 | `src/features/bookmark/data.tsx` |
| Now 页 | `src/app/(app)/(pages)/now/page.tsx` |
| 域名 | `src/config/site.ts` 的 `SITE_DOMAIN` |
| 头像 / 图标源 | `scripts/gen-brand-assets.mjs`（改完跑 `node scripts/gen-brand-assets.mjs`） |
| 像素 Logo | `src/components/anx-mark.tsx` / `anx-wordmark.tsx` 及同名 geometry 文件 |

## 重新构建（改完内容后）

```bash
cd eternal-portfolio
export PATH=/var/apps/nodejs_v24/target/bin:$PATH
export COREPACK_HOME="$PWD/../.corepack" COREPACK_NPM_REGISTRY=https://registry.npmmirror.com
NEXT_PUBLIC_APP_URL="http://你的地址:9999" \
NEXT_PUBLIC_GITHUB_CONTRIBUTIONS_API_URL="https://github-contributions-api.jogruber.de/v4" \
pnpm build
cp -r .next/static .next/standalone/.next/static
cp -r public .next/standalone/public
```

然后在飞牛 Docker 里重建容器（Compose 项目 → 重新构建/更新）。
`NEXT_PUBLIC_APP_URL` 在构建时内联，换域名后需要重新构建。

## 可选环境变量（构建时）

- `NEXT_PUBLIC_GITHUB_CONTRIBUTIONS_API_URL`：配置后首页显示真实 GitHub 贡献图
  （如 `https://github-contributions-api.jogruber.de/v4`），不配则为空
- `GITHUB_API_TOKEN`：提高 GitHub star 数请求限额（无 scope 即可）
- 统计 / 广告 / Discord 反馈相关变量全部留空 = 关闭

## 注意

- 公网 IP 是 PPPoE 动态地址，重拨可能变化；建议配飞牛 DDNS + 域名
- 外网暴露前请在飞牛防火墙只放行需要的端口（SMB/FTP/SSH 等不要暴露公网）
