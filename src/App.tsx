import { motion } from 'framer-motion'
import { fragments } from './data'
import Shard from './components/Shard'
import FinalFragment from './components/FinalFragment'
import './index.css'

export default function App() {
  return (
    <>
      <header className="site-header">
        <motion.h1
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.3, 1] }}
        >
          Intento formular mi experiencia de enseñar tan temprano
        </motion.h1>
        <motion.p
          className="nota"
          initial={{ opacity: 0, rotate: -8 }}
          animate={{ opacity: 1, rotate: -2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          — fragmentos, no en fila —
        </motion.p>
      </header>

      <div className="mosaic">
        {fragments.map((fragment) => (
          <Shard key={fragment.id} fragment={fragment} />
        ))}
      </div>

      <FinalFragment />

      <footer className="site-footer">
        soporte: texto + fragmentos de mosaico + video incrustado (youtube, dominio sin cookies) — sin narración
      </footer>
    </>
  )
}
