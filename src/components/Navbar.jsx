import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Projects', href: '#projects' },
  { label: 'Content', href: '#content' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 backdrop-blur-xl bg-slate-900/60 border border-slate-700/60 rounded-2xl shadow-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#hero" className="group inline-flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-300 shadow-[0_0_20px_rgba(59,130,246,.5)]" />
              <span className="font-semibold tracking-widest text-slate-100 group-hover:text-white transition-colors">FAUZAN ADITYA</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-slate-700/70 text-slate-200"
              onClick={() => setOpen(!open)}
              aria-label="Toggle Menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4 animate-in">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block w-full rounded-lg border border-slate-700/70 bg-slate-800/50 px-4 py-3 text-slate-200 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
