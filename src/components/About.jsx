export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">About Me</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              I'm Fauzan Aditya — a digital artist and experimental creative exploring the intersection of art, physics, and AI. My work blends semi‑realistic character studies, anatomy and lighting explorations, and fine art sensibilities with futuristic, cinematic storytelling.
            </p>
            <p className="mt-4 text-slate-300 leading-relaxed">
              I believe art is a system — a beautiful interplay of form, energy, and information. Through iterative studies and tech‑assisted workflows, I craft pieces that feel alive, intentional, and deeply human.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/60 p-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Semi‑realistic Portraits',
                  'Anatomy Studies',
                  'Lighting Experiments',
                  'Fine Art & Texture',
                  'Concept Art: Science Themes',
                  'Physics + AI Pipelines',
                ].map((tag) => (
                  <div
                    key={tag}
                    className="rounded-xl bg-slate-800/60 border border-slate-700/60 px-4 py-3 text-sm text-slate-200"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <div className="pointer-events-none absolute -inset-px rounded-2xl border border-blue-500/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
