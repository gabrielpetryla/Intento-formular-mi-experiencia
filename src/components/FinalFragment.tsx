import { motion } from 'framer-motion'
import { finalLine } from '../data'

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
}

const word = {
  hidden: { opacity: 0, y: 10, filter: 'blur(3px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.2, 0.7, 0.3, 1] as const },
  },
}

export default function FinalFragment() {
  const words = finalLine.split(' ')

  return (
    <motion.section
      className="fragmento-final"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      variants={container}
    >
      <span className="shard__tag" style={{ borderBottomColor: '#565148' }}>
        silencio
      </span>
      <p>
        {words.map((w, i) => (
          <motion.span key={i} variants={word} style={{ display: 'inline-block', marginRight: '0.35em' }}>
            {w}
          </motion.span>
        ))}
      </p>
    </motion.section>
  )
}
