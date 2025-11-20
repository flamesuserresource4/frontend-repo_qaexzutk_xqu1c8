export default function Footer(){
  return (
    <footer className="py-10 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-600">
        <div>© {new Date().getFullYear()} Droomwoordjes</div>
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-rose-600">Instagram</a>
          <a href="#" className="hover:text-rose-600">Privacy</a>
          <a href="#" className="hover:text-rose-600">Contact</a>
        </div>
      </div>
    </footer>
  )
}
