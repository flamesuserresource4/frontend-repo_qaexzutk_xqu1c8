import { motion } from 'framer-motion'

export default function FAQ(){
  const items = [
    {q:'Hoe gebruik ik de kaartenset?', a:'Kies samen een moment op de dag. Trek een kaart, lees het droomwoord, stel een vraag en maak er een klein ritueel van.'},
    {q:'Vanaf welke leeftijd?', a:'Vanaf ongeveer 4 jaar, begeleid door een volwassene. Ook geschikt in de klas of praktijk.'},
    {q:'Wanneer worden bestellingen verzonden?', a:'Binnen 1-3 werkdagen. Je ontvangt een bevestiging per e-mail.'},
  ]
  return (
    <section id="faq" className="py-16 bg-gradient-to-b from-white to-sky-50/40">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}} className="text-2xl sm:text-3xl font-semibold text-slate-800">Veelgestelde vragen</motion.h2>
        <div className="mt-6 space-y-4">
          {items.map((it,i)=> (
            <motion.details key={i} initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4, delay:i*0.04}} className="bg-white/80 border border-slate-200 rounded-xl px-4 py-3">
              <summary className="cursor-pointer font-medium text-slate-800">{it.q}</summary>
              <p className="mt-2 text-slate-600">{it.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  )
}
