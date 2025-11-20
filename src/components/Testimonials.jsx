import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Testimonials() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`${API}/api/testimonials`).then(r=>r.json()).then(setItems).catch(()=>{})
  }, [])

  const displayed = items.length ? items : [
    {name:'Lisa', role:'Moeder', quote:'Elke avond kiezen we een kaart. Het brengt zoveel rust en verbinding.'},
    {name:'Jeroen', role:'Leerkracht', quote:'Prachtige set om emoties bespreekbaar te maken in de klas.'},
    {name:'Sophie', role:'Kindercoach', quote:'Heel mooi ontworpen en inhoudelijk sterk.'},
  ]

  return (
    <section className="py-16 bg-white" id="reviews">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}} className="text-2xl sm:text-3xl font-semibold text-slate-800">Wat anderen zeggen</motion.h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((t, i) => (
            <motion.div key={i} initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.45, delay:i*0.05}} className="bg-rose-50/40 border border-rose-100 rounded-2xl p-5">
              <div className="text-amber-600">“</div>
              <p className="text-slate-700">{t.quote}</p>
              <div className="mt-3 text-sm text-slate-500">— {t.name}{t.role ? `, ${t.role}`:''}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
