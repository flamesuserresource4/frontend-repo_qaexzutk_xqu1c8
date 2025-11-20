import { useMemo } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function CartSheet({ open, items, onClose, onCheckout }){
  const total = useMemo(() => items.reduce((s, it)=> s + it.quantity * Math.round(it.price*100), 0), [items])

  async function checkout(){
    const payload = {
      email: null,
      items: items.map(it => ({ slug: it.slug, title: it.title, quantity: it.quantity, unit_amount: Math.round(it.price*100) }))
    }
    const r = await fetch(`${API}/api/orders`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) })
    if(r.ok){
      onCheckout && onCheckout()
      onClose()
      alert('Bestelling aangemaakt! Je ontvangt een bevestiging per e-mail (mock).')
    }else{
      alert('Kon bestelling niet aanmaken. Probeer later opnieuw.')
    }
  }

  return (
    <div className={`fixed inset-0 z-50 ${open?'' : 'pointer-events-none'}`}>
      <div className={`absolute inset-0 bg-slate-900/40 transition-opacity ${open? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <div className={`absolute right-0 top-0 h-full w-full sm:w-[28rem] bg-white shadow-xl transition-transform ${open? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 border-b border-slate-200 flex items-center justify-between">
          <h3 className="font-medium text-slate-800">Winkelmand</h3>
          <button onClick={onClose} className="text-slate-500">Sluiten</button>
        </div>
        <div className="p-6 space-y-4 overflow-y-auto h-[calc(100%-9rem)]">
          {items.length===0 && <div className="text-slate-500">Je mandje is leeg.</div>}
          {items.map((it, idx)=> (
            <div key={idx} className="flex items-center justify-between border border-slate-200 rounded-xl p-3">
              <div>
                <div className="font-medium text-slate-800">{it.title}</div>
                <div className="text-sm text-slate-600">Aantal: {it.quantity}</div>
              </div>
              <div className="text-slate-800">€ {(it.quantity * it.price).toFixed(2)}</div>
            </div>
          ))}
        </div>
        <div className="p-6 border-t border-slate-200">
          <div className="flex items-center justify-between text-slate-700">
            <div>Totaal</div>
            <div className="font-medium">€ {(total/100).toFixed(2)}</div>
          </div>
          <button onClick={checkout} className="mt-4 w-full px-5 py-3 rounded-full bg-rose-300 text-slate-800 border border-rose-200">Afrekenen</button>
        </div>
      </div>
    </div>
  )
}
