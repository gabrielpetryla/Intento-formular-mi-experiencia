import { motion, type Variants } from 'framer-motion'
import type { Fragment } from '../data'
import TiltCard from './TiltCard'

const enterOffsets: Record<Fragment['enter'], { x: number; y: number; rotate: number; scale?: number }> = {
  left: { x: -90, y: 30, rotate: -6 },
  right: { x: 90, y: 30, rotate: 6 },
  up: { x: 0, y: -70, rotate: -4 },
  pop: { x: 0, y: 24, rotate: 7, scale: 0.86 },
}

function buildVariants(fragment: Fragment): Variants {
  const o = enterOffsets[fragment.enter]
  return {
    hidden: { opacity: 0, x: o.x, y: o.y, rotate: o.rotate, scale: o.scale ?? 1 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: fragment.photoRotation * 0.35,
      scale: 1,
      transition: { type: 'spring', stiffness: 70, damping: 14, mass: 0.9 },
    },
  }
}

export default function Shard({ fragment }: { fragment: Fragment }) {
  const variants = buildVariants(fragment)

  return (
    <motion.section
      className={`shard cut-${fragment.cut} ${fragment.gridClass}`}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      style={{ ['--accent' as string]: fragment.accent }}
    >
      {/* fita adesiva no canto, como se fixasse o recorte na parede */}
      <span className="tape" aria-hidden="true" />

      <TiltCard className="shard__inner" maxTilt={4}>
        <span className="shard__tag" style={{ borderBottomColor: fragment.accent }}>
          {fragment.tag}
        </span>

        <p className="shard__text">
          {fragment.text}
          {fragment.correction && (
            <span className="correction">
              <span className="struck">{fragment.correction.struck}</span>
              <span className="fix">{fragment.correction.fix}</span>
            </span>
          )}
          {fragment.correction?.after}
        </p>

        {fragment.marginNote && <p className="margin-note">{fragment.marginNote}</p>}

        <div className="shard__video" style={{ transform: `rotate(${fragment.photoRotation}deg)` }}>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${fragment.videoId}`}
            title={fragment.videoTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </TiltCard>

      {/* textura de grão de papel, por cima de tudo, sem interceptar clique */}
      <svg className="grain" aria-hidden="true">
        <filter id={`grain-${fragment.id}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.05 0" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#grain-${fragment.id})`} />
      </svg>
    </motion.section>
  )
}
