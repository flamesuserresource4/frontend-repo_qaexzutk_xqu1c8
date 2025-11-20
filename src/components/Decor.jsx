import { motion } from 'framer-motion'

export default function Decor() {
  const items = [
    { x: '10%', y: '15%', size: 6, delay: 0 },
    { x: '85%', y: '25%', size: 8, delay: 0.2 },
    { x: '20%', y: '70%', size: 5, delay: 0.4 },
    { x: '75%', y: '80%', size: 7, delay: 0.1 },
    { x: '50%', y: '10%', size: 5, delay: 0.3 },
  ]
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {items.map((it, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{ left: it.x, top: it.y, width: it.size, height: it.size, background: 'linear-gradient(180deg,#f8e5b7,#f1c96b)', boxShadow:'0 0 12px rgba(241,201,107,0.6)' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: [0.2, 0.8, 0.2], y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: it.delay }}
        />
      ))}
    </div>
  )
}
