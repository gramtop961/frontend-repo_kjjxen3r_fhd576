import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-slate-900/50 px-4 py-1 text-xs tracking-widest text-blue-300/90 uppercase">
            Digital Artist • Physics + AI • Cinematic Aesthetics
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_0_30px_rgba(59,130,246,0.25)]">
            Fauzan Aditya
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            Semi‑realistic art, fine art, and experimental pieces blending science and technology into visual storytelling.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#gallery" className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 text-slate-900 font-semibold shadow-[0_10px_30px_rgba(34,211,238,.35)] hover:scale-[1.02] transition">
              Explore Portfolio
            </a>
            <a href="#contact" className="rounded-xl border border-slate-600/80 bg-slate-900/60 px-6 py-3 text-slate-200 hover:bg-slate-800/70 transition">
              Work Together
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-950" />
    </section>
  )
}
