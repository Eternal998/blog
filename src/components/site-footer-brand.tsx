"use client"

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react"

const VIEWBOX_WIDTH = 1312

/**
 * The glyphs are rectangles on a 32-unit cell grid, emitted per horizontal run.
 * The same data drives both layers: filled for the body, stroked for the
 * technical-drawing keyline the original logotype had.
 */
const GLYPH_PATH =
  "M0 0h160v32h-160zM0 32h32v32h-32zM0 64h32v32h-32zM0 96h128v32h-128zM0 128h32v32h-32zM0 160h32v32h-32zM0 192h160v32h-160zM192 0h160v32h-160zM256 32h32v32h-32zM256 64h32v32h-32zM256 96h32v32h-32zM256 128h32v32h-32zM256 160h32v32h-32zM256 192h32v32h-32zM384 0h160v32h-160zM384 32h32v32h-32zM384 64h32v32h-32zM384 96h128v32h-128zM384 128h32v32h-32zM384 160h32v32h-32zM384 192h160v32h-160zM576 0h128v32h-128zM576 32h32v32h-32zM704 32h32v32h-32zM576 64h32v32h-32zM704 64h32v32h-32zM576 96h128v32h-128zM576 128h32v32h-32zM640 128h32v32h-32zM576 160h32v32h-32zM672 160h32v32h-32zM576 192h32v32h-32zM704 192h32v32h-32zM768 0h32v32h-32zM896 0h32v32h-32zM768 32h64v32h-64zM896 32h32v32h-32zM768 64h64v32h-64zM896 64h32v32h-32zM768 96h32v32h-32zM832 96h32v32h-32zM896 96h32v32h-32zM768 128h32v32h-32zM864 128h64v32h-64zM768 160h32v32h-32zM864 160h64v32h-64zM768 192h32v32h-32zM896 192h32v32h-32zM992 0h96v32h-96zM960 32h32v32h-32zM1088 32h32v32h-32zM960 64h32v32h-32zM1088 64h32v32h-32zM960 96h160v32h-160zM960 128h32v32h-32zM1088 128h32v32h-32zM960 160h32v32h-32zM1088 160h32v32h-32zM960 192h32v32h-32zM1088 192h32v32h-32zM1152 0h32v32h-32zM1152 32h32v32h-32zM1152 64h32v32h-32zM1152 96h32v32h-32zM1152 128h32v32h-32zM1152 160h32v32h-32zM1152 192h160v32h-160z"

export function SiteFooterInteractiveLogotype() {
  const shouldReduceMotion = useReducedMotion()

  const gradientX1Raw = useMotionValue(0.5)
  const gradientX1 = useSpring(
    useTransform(gradientX1Raw, [0, 1], [0, VIEWBOX_WIDTH]),
    {
      stiffness: 150,
      damping: 25,
    }
  )

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return

    const containerRect = event.currentTarget.getBoundingClientRect()
    gradientX1Raw.set(
      (event.clientX - containerRect.left) / containerRect.width
    )
  }

  const handleMouseLeave = () => {
    if (shouldReduceMotion) return
    gradientX1Raw.set(0.5)
  }

  return (
    <div className="screen-line-bottom after:z-1 after:bg-foreground/15">
      <div
        className="overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex w-full translate-y-[37.5%] items-center justify-center">
          <svg
            className="container size-full"
            viewBox="0 0 1312 224"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={GLYPH_PATH} fill="url(#paint0_linear_1145_73)" />
            <path
              className="stroke-foreground/10"
              d={GLYPH_PATH}
              strokeWidth="2"
            />
            <defs>
              <motion.linearGradient
                id="paint0_linear_1145_73"
                x1={gradientX1}
                y1="1"
                x2="400"
                y2="224"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.625"
                  stopColor="var(--foreground)"
                  stopOpacity="0"
                />
                <stop offset="1" stopColor="var(--foreground)" />
              </motion.linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-1/2 hidden h-px w-[50%] max-w-full -translate-x-1/2 dark:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(228, 228, 231, 0.3) 50%, rgba(0, 0, 0, 0) 100%)",
        }}
        aria-hidden
      />
    </div>
  )
}
