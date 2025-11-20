export default function Navbar({ cartCount=0, onCartClick }){
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/60 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-semibold text-slate-800">Droomwoordjes</a>
        <nav className="hidden sm:flex items-center gap-6 text-slate-700">
          <a href="#product" className="hover:text-rose-600">Product</a>
          <a href="#over" className="hover:text-rose-600">Over</a>
          <a href="#reviews" className="hover:text-rose-600">Reviews</a>
          <a href="#faq" className="hover:text-rose-600">FAQ</a>
          <a href="#contact" className="hover:text-rose-600">Contact</a>
        </nav>
        <button onClick={onCartClick} className="relative px-3 py-1.5 rounded-full bg-rose-300 text-slate-800 border border-rose-200">
          Winkelmand
          {cartCount>0 && <span className="absolute -top-1 -right-1 text-xs bg-amber-500 text-white rounded-full px-1.5">{cartCount}</span>}
        </button>
      </div>
    </header>
  )
}
