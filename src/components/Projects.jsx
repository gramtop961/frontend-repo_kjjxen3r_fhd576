export default function Projects() {
  const projects = [
    {
      title: 'Lumina: Anatomy & Light',
      desc: 'A study series exploring skin translucency, subsurface scattering, and cinematic rim light control.',
      note: 'Painted in Procreate + custom GLSL shader references',
    },
    {
      title: 'Gravity Dreams',
      desc: 'Concept art inspired by orbital mechanics, using curved perspective and layered atmospherics.',
      note: 'Process: thumbnails → value pass → color keys → final render',
    },
    {
      title: 'Neurobrush v2',
      desc: 'An AI‑assisted brush set trained on paint textures to accelerate block‑in and edge variety.',
      note: 'Experiment: fine‑tuning diffusion models on personal texture scans',
    },
  ]

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="relative rounded-2xl border border-slate-700/70 bg-slate-900/50 p-6">
              <div className="h-40 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/60 mb-5" />
              <h3 className="text-white font-semibold">{p.title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{p.desc}</p>
              <p className="mt-3 text-xs text-blue-300/80">{p.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
