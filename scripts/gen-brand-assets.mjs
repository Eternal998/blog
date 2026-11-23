// Regenerates brand raster assets (avatar + PWA icons) from the E monogram.
// Run from the repo root: node scripts/gen-brand-assets.mjs
import sharp from "sharp"

const E_PATH =
  "M0 0h160v32h-160zM0 32h32v32h-32zM0 64h32v32h-32zM0 96h128v32h-128zM0 128h32v32h-32zM0 160h32v32h-32zM0 192h160v32h-160z"

function markSVG(color, size, pad = 0, bg = null) {
  const inner = size - pad * 2
  const scale = inner / 224
  const w = 160 * scale
  const x = (size - w) / 2
  const y = pad
  const background = bg ? `<rect width="${size}" height="${size}" fill="${bg}"/>` : ""
  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">${background}<g transform="translate(${x} ${y}) scale(${scale})"><path fill="${color}" d="${E_PATH}"/></g></svg>`
  )
}

// Sketch-style avatar: rough double circle + E, transparent background.
function avatarSVG(color) {
  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 96 96" fill="none">
      <path d="M48 8c22 0 40 17 40 39S71 88 48 88 8 70 8 48 26 8 48 8Z" stroke="${color}" stroke-width="2.2" stroke-linecap="round" opacity=".9"/>
      <path d="M50 10c20 2 36 18 36 38 0 21-17 38-38 38" stroke="${color}" stroke-width="1.4" stroke-linecap="round" opacity=".45"/>
      <path d="M34 30h28M34 48h22M34 66h28M34 30v36" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
      <path d="M66 62c3 2 6 2 9 0" stroke="${color}" stroke-width="2" stroke-linecap="round" opacity=".6"/>
    </svg>`
  )
}

await sharp(avatarSVG("#09090b")).webp({ quality: 95 }).toFile("public/images/eternal-avatar.webp")
await sharp(avatarSVG("#fafafa")).webp({ quality: 95 }).toFile("public/images/eternal-avatar-dark.webp")

await sharp(markSVG("#09090b", 192, 24, "#ffffff")).png().toFile("public/icon-192x192.png")
await sharp(markSVG("#09090b", 512, 64, "#ffffff")).png().toFile("public/icon-512x512.png")
await sharp(markSVG("#09090b", 512, 112, "#ffffff")).png().toFile("public/maskable-icon.png")
await sharp(markSVG("#09090b", 180, 28, "#ffffff")).png().toFile("public/apple-touch-icon.png")

console.log("brand assets generated")
