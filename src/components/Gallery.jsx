import { useState } from 'react'

const categories = [
  { key: 'all', label: 'All' },
  { key: 'semi', label: 'Semi‑Realistic' },
  { key: 'anatomy', label: 'Anatomy' },
  { key: 'lighting', label: 'Lighting' },
  { key: 'fine', label: 'Fine Art' },
  { key: 'science', label: 'Science/Concept' },
]

// Placeholder images via unsplash; in real usage, replace with Fauzan's works
const images = [
  { src: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop', cat: 'semi' },
  { src: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop', cat: 'lighting' },
  { src: 'https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', cat: 'anatomy' },
  { src: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop', cat: 'fine' },
  { src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop', cat: 'science' },
  { src: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop', cat: 'semi' },
  { src: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop', cat: 'lighting' },
  { src: 'https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', cat: 'anatomy' },
]

export default function Gallery() {
  const [active, setActive] = useState('all')
  const filtered = active === 'all' ? images : images.filter(i => i.cat === active)

  return (
    <section id="gallery" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Portfolio Gallery</h2>
          <div className="flex items-center gap-2 overflow-x-auto">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm transition ${active === c.key ? 'border-blue-400 text-blue-300 bg-slate-800/60' : 'border-slate-700/70 text-slate-300 hover:text-white'}`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((img, idx) => (
            <figure key={idx} className="group relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/40">
              <img src={img.src} alt="Art piece" className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
              <figcaption className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
