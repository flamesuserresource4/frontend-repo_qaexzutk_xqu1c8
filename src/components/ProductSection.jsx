import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function ProductSection({ onAddToCart }) {
  const [product, setProduct] = useState(null)
  const [qty, setQty] = useState(1)

  useEffect(() => {
    fetch(`${API}/api/products/droomwoordjes`).then(r=>r.json()).then(setProduct).catch(()=>{})
  }, [])

  const priceDisplay = useMemo(() => {
    if (!product) return ''
    return new Intl.NumberFormat('nl-NL', { style:'currency', currency: 'EUR' }).format(product.price)
  }, [product])

  return (
    <section className="py-16 bg-gradient-to-b from-rose-50/40 to-white" id="product">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        <motion.div initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}} className="bg-white/80 border border-slate-200 rounded-3xl p-5">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-rose-50 via-amber-50 to-sky-50 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl">🌙</div>
              <p className="mt-2 text-slate-500">Productfoto's komen hier</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-2">
            {[...Array(4)].map((_, i) => (
              <motion.div key={i} initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:i*0.05}} className="aspect-square rounded-xl bg-rose-50 border border-rose-100" />
            ))}
          </div>
        </motion.div>
        <motion.div initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.1}}>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-800">Droomwoordjes Kaartenset</h2>
          <p className="mt-3 text-slate-600 max-w-prose">
            40 kaarten met 1 zin, 5 kaarten met vraag + zin. Dromerige illustraties met een subtiel gouden randje en neutrale achterkant. Inclusief mooie bewaardoos.
          </p>
          <ul className="mt-4 space-y-1 text-slate-600">
            <li>• 45 kaarten totaal</li>
            <li>• Zachte pastelkleuren en gouden accenten</li>
            <li>• Pedagogische waarde: emoties, ritueel, verbinding</li>
          </ul>
          <div className="mt-6 flex items-center gap-4">
            <div className="text-2xl font-medium text-slate-800">{priceDisplay || '€ 29,95'}</div>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded-full border border-slate-300" onClick={()=>setQty(Math.max(1, qty-1))}>-</button>
              <div className="w-10 text-center">{qty}</div>
              <button className="w-8 h-8 rounded-full border border-slate-300" onClick={()=>setQty(qty+1)}>+</button>
            </div>
          </div>
          <div className="mt-4 flex gap-3">
            <motion.button whileTap={{ scale: 0.98 }} whileHover={{ y: -1 }} onClick={()=> onAddToCart(product || { title:'Droomwoordjes', slug:'droomwoordjes', price:29.95 }, qty)} className="px-5 py-3 rounded-full bg-rose-300 text-slate-800 shadow border border-rose-200 hover:shadow-md">In winkelmand</motion.button>
            <motion.a whileHover={{ y: -1 }} href="#faq" className="px-5 py-3 rounded-full bg-white text-slate-700 border border-slate-200 hover:bg-slate-50">Meer info</motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
