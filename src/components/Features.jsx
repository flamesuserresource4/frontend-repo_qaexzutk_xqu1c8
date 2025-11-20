import { motion } from 'framer-motion'

const features = [
  { title: '40 kaarten met 1 zin', desc: 'Krachtige, eenvoudige boodschappen' },
  { title: '5 vraagkaarten', desc: 'Samen in gesprek met je kind' },
  { title: 'Dromerige illustraties', desc: 'Wolkjes, sterren en zachte kleuren' },
  { title: 'Gouden randje', desc: 'Subtiele, magische details' },
  { title: 'Neutrale achterkant', desc: 'Rustig en tijdloos design' },
  { title: 'Mooie bewaardoos', desc: 'Stevig en duurzaam' },
]

export default function Features() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-rose-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}} className="text-2xl sm:text-3xl font-semibold text-slate-800">Waarom Droomwoordjes?</motion.h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div key={i} initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.45, delay:i*0.04}} className="bg-white/70 backdrop-blur border border-slate-200 rounded-2xl p-5 hover:shadow-sm">
              <div className="text-amber-600">★</div>
              <h3 className="mt-2 font-medium text-slate-800">{f.title}</h3>
              <p className="text-slate-600 text-sm mt-1">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
