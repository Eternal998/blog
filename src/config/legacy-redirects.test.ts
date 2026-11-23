import { describe, expect, it } from "vitest"

import nextConfig from "../../next.config"
import { LEGACY_REDIRECTS } from "./legacy-redirects"

describe("legacy redirects", () => {
  it("starts fresh: no upstream legacy URLs are carried over", () => {
    expect(LEGACY_REDIRECTS).toEqual([])
  })

  it("keeps the structural redirects and leaves unknown URLs alone", async () => {
    const redirects = (await nextConfig.redirects?.()) ?? []

    expect(redirects).toContainEqual({
      source: "/wall-of-love",
      destination: "/testimonials",
      permanent: true,
    })
    expect(redirects).toContainEqual({
      source: "/llms-full.txt",
      destination: "/llms.txt",
      permanent: true,
    })
    expect(redirects.some(({ source }) => source === "/status")).toBe(false)
    expect(
      redirects.filter(({ source }) => source.startsWith("/scripts/"))
    ).toEqual([])
  })
})
