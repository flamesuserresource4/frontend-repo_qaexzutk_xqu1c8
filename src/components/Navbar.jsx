import { motion } from 'framer-motion'

export default function Navbar({ cartCount=0, onCartClick }){
  return (
    <motion.header initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="sticky top-0 z-40 backdrop-blur bg-white/60 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-semibold text-slate-800">Droomwoordjes</a>
        <nav className="hidden sm:flex items-center gap-6 text-slate-700">
          {['Product','Over','Reviews','FAQ','Contact'].map((label, i)=> (
            <motion.a key={label} href={`#${label.toLowerCase()==='product'?'product':label.toLowerCase()}`} whileHover={{ y: -2 }} className="hover:text-rose-600">
              {label}
            </motion.a>
          ))}
        </nav>
        <motion.button whileTap={{ scale: 0.98 }} whileHover={{ y: -1 }} onClick={onCartClick} className="relative px-3 py-1.5 rounded-full bg-rose-300 text-slate-800 border border-rose-200">
          Winkelmand
          {cartCount>0 && <span className="absolute -top-1 -right-1 text-xs bg-amber-500 text-white rounded-full px-1.5">{cartCount}</span>}
        </motion.button>
      </div>
    </motion.header>
  )
}
