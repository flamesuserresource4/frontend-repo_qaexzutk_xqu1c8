import { motion } from 'framer-motion'

export default function Footer(){
  return (
    <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="py-10 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-600">
        <div>© {new Date().getFullYear()} Droomwoordjes</div>
        <div className="flex items-center gap-5">
          <motion.a whileHover={{ y: -2 }} href="#" className="hover:text-rose-600">Instagram</motion.a>
          <motion.a whileHover={{ y: -2 }} href="#" className="hover:text-rose-600">Privacy</motion.a>
          <motion.a whileHover={{ y: -2 }} href="#" className="hover:text-rose-600">Contact</motion.a>
        </div>
      </div>
    </motion.footer>
  )
}
