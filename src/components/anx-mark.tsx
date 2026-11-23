/**
 * Monogram: "E", drawn on the same 32-unit cell grid the rest of the brand
 * geometry uses. Regenerate the path by editing the glyph matrices, not by
 * hand — every run is a whole number of cells.
 */
export function AnxMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 160 224"
      aria-hidden
      {...props}
    >
      <path fill="currentColor" d="M0 0h160v32h-160zM0 32h32v32h-32zM0 64h32v32h-32zM0 96h128v32h-128zM0 128h32v32h-32zM0 160h32v32h-32zM0 192h160v32h-160z" />
    </svg>
  )
}

export function getMarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 160 224"><path fill="currentColor" d="M0 0h160v32h-160zM0 32h32v32h-32zM0 64h32v32h-32zM0 96h128v32h-128zM0 128h32v32h-32zM0 160h32v32h-32zM0 192h160v32h-160z"/></svg>`
}
