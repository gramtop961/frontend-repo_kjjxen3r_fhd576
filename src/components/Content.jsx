export default function Content() {
  return (
    <section id="content" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">F.ArtpreneurJourney</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              A content series documenting the path of an artist‑entrepreneur — connecting art with science and technology. Tutorials, breakdowns, workflow experiments, and reflections designed to help creatives build systems, not just styles.
            </p>
            <ul className="mt-6 space-y-2 text-slate-300/90 text-sm">
              <li>• AI‑assisted painting techniques</li>
              <li>• Physics‑inspired design thinking</li>
              <li>• Career systems and creative discipline</li>
            </ul>
          </div>
          <div>
            <div className="aspect-video w-full overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/60">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed?listType=search&list=F.ArtpreneurJourney"
                title="F.ArtpreneurJourney"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
