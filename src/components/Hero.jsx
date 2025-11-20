import { motion } from 'framer-motion'

export default function Hero({ onCTAClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-24 w-96 h-96 bg-gradient-to-br from-rose-200/60 via-amber-100/60 to-sky-100/60 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-16 w-[28rem] h-[28rem] bg-gradient-to-br from-sky-100/60 via-emerald-100/60 to-amber-100/60 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 sm:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-sm text-amber-700/80 bg-amber-50 border border-amber-200 rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Zacht • Magisch • Vriendelijk
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-slate-800">
              Droomwoordjes —
              <span className="block text-slate-600">Een kaartenset vol magie en verbinding</span>
            </h1>
            <p className="mt-5 text-lg text-slate-600 max-w-xl">
              Een liefdevolle kaartenset voor kinderen. Rituelen, fantasie en emoties komen samen in 45 dromerige kaarten met een subtiele gouden touch.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={onCTAClick} className="px-5 py-3 rounded-full bg-rose-300 text-slate-800 shadow hover:shadow-md transition border border-rose-200">
                Bestel nu
              </button>
              <a href="#over" className="px-5 py-3 rounded-full bg-white text-slate-700 border border-slate-200 hover:bg-slate-50">Meer weten</a>
            </div>
            <div className="mt-6 text-slate-500 text-sm">Gratis verzending vanaf 2 sets • Levering binnen 1-3 werkdagen</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="relative rounded-3xl p-6 bg-white/80 backdrop-blur border border-amber-100 shadow-sm">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-rose-50 via-amber-50 to-sky-50 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl">✨</div>
                  <p className="mt-2 text-slate-500">Productfoto's komen hier</p>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 bg-white text-amber-800 border border-amber-200 rounded-full px-3 py-1 text-sm shadow">Nieuw</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
