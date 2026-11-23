import {
  NextJsIcon,
  NodeJsIcon,
  ReactIcon,
  TailwindCssIcon,
  TsIcon,
} from "@/components/icons"

import type { TechStack } from "../types/tech-stack"

export const TECH_STACK: TechStack[] = [
  // Grouped by category, in the order the section should read.
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
    icon: <TsIcon />,
    categories: ["语言"],
  },
  {
    key: "react",
    title: "React",
    href: "https://react.dev",
    icon: <ReactIcon />,
    categories: ["前端"],
  },
  {
    key: "nextjs",
    title: "Next.js",
    href: "https://nextjs.org",
    icon: <NextJsIcon />,
    categories: ["前端"],
  },
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
    icon: <TailwindCssIcon />,
    categories: ["前端"],
  },
  {
    key: "nodejs",
    title: "Node.js",
    href: "https://nodejs.org",
    icon: <NodeJsIcon />,
    categories: ["运行时"],
  },
]
