import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import ProductSection from './components/ProductSection'
import Testimonials from './components/Testimonials'
import About from './components/About'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CartSheet from './components/CartSheet'
import Decor from './components/Decor'

const API = import.meta.env.VITE_BACKEND_URL || ''

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState([])

  function addToCart(prod, qty=1){
    setCart(prev => {
      const ex = prev.find(p => p.slug === prod.slug)
      if(ex){
        return prev.map(p => p.slug===prod.slug ? { ...p, quantity: p.quantity + qty } : p)
      }
      return [...prev, { title: prod.title, slug: prod.slug, price: prod.price || 29.95, quantity: qty }]
    })
    setCartOpen(true)
  }

  useEffect(()=>{
    // Ensure default product exists (seed once if list is empty)
    fetch(`${API}/api/products`).then(r=>r.json()).then(async list => {
      if(Array.isArray(list) && list.length===0){
        const payload = {
          title: 'Droomwoordjes Kaartenset',
          slug: 'droomwoordjes',
          description: 'Een dromerige kaartenset met 45 kaarten vol verbinding en fantasie. Zachte pastelkleuren, gouden accenten en een mooie bewaardoos.',
          short_description: 'Kaartenset vol magie en verbinding',
          price: 29.95,
          currency: 'eur',
          images: [],
          features: ['40 kaarten met 1 zin', '5 kaarten met vraag + zin', 'Gouden randje', 'Dromerige illustraties', 'Mooie bewaardoos'],
          in_stock: true,
          stripe_price_id: null
        }
        await fetch(`${API}/api/products`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) })
      }
    }).catch(()=>{})
  }, [])

  return (
    <div className="min-h-screen bg-white relative">
      <Decor />
      <Navbar cartCount={cart.reduce((s,it)=>s+it.quantity,0)} onCartClick={()=>setCartOpen(true)} />
      <Hero onCTAClick={()=>document.getElementById('product')?.scrollIntoView({behavior:'smooth'})} />
      <ProductSection onAddToCart={addToCart} />
      <Features />
      <Testimonials />
      <About />
      <FAQ />
      <Contact />
      <Footer />
      <CartSheet open={cartOpen} items={cart} onClose={()=>setCartOpen(false)} onCheckout={()=> setCart([])} />
    </div>
  )
}

export default App
