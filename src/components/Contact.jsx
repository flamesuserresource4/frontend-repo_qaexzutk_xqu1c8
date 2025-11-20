import { useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact(){
  const [status, setStatus] = useState('')

  async function submit(e){
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try{
      const r = await fetch(`${API}/api/contact`, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload)})
      if(r.ok){ setStatus('Bedankt! We nemen snel contact op.') } else { setStatus('Er ging iets mis. Probeer later opnieuw.') }
    }catch{ setStatus('Er ging iets mis. Probeer later opnieuw.') }
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800">Contact</h2>
        <form onSubmit={submit} className="mt-6 grid sm:grid-cols-2 gap-4 bg-white/80 border border-slate-200 rounded-2xl p-5">
          <input name="name" required placeholder="Naam" className="border border-slate-300 rounded-xl px-3 py-2" />
          <input name="email" type="email" required placeholder="E-mail" className="border border-slate-300 rounded-xl px-3 py-2" />
          <textarea name="message" required placeholder="Bericht" className="sm:col-span-2 border border-slate-300 rounded-xl px-3 py-2 h-28" />
          <div className="sm:col-span-2 flex items-center gap-3">
            <button className="px-5 py-3 rounded-full bg-rose-300 text-slate-800 border border-rose-200">Versturen</button>
            <span className="text-sm text-slate-600">{status}</span>
          </div>
        </form>
        <div className="mt-4 text-slate-600">Volg op Instagram: <a className="text-rose-600 underline" href="https://instagram.com" target="_blank" rel="noreferrer">@droomwoordjes</a></div>
      </div>
    </section>
  )
}
