import { useRef, type ReactNode, type PointerEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface TiltCardProps {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  maxTilt?: number
}

/**
 * Wraps a fragment with a subtle 3D pointer-tilt, like a loose paper
 * cut-out reacting to a hand hovering just above the desk.
 */
export default function TiltCard({ children, className, style, maxTilt = 6 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)

  const springConfig = { stiffness: 150, damping: 18, mass: 0.6 }
  const rotateX = useSpring(useTransform(py, [0, 1], [maxTilt, -maxTilt]), springConfig)
  const rotateY = useSpring(useTransform(px, [0, 1], [-maxTilt, maxTilt]), springConfig)
  const liftZ = useSpring(useTransform(px, () => 0), springConfig)

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    px.set((e.clientX - rect.left) / rect.width)
    py.set((e.clientY - rect.top) / rect.height)
  }

  function handlePointerLeave() {
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        ...style,
        rotateX,
        rotateY,
        translateZ: liftZ,
        transformPerspective: 900,
        transformStyle: 'preserve-3d',
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </motion.div>
  )
}
