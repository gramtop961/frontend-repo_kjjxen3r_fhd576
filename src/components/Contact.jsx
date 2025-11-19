import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('Sending...')
    // Placeholder: in a real setup, send to backend or email service
    setTimeout(() => setStatus('Thanks — your message has been sent!'), 800)
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Contact & Collaboration</h2>
            <p className="mt-4 text-slate-300">
              For commissions, collaborations, or business inquiries, reach out below. I’m open to projects at the intersection of art, science, and technology.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-300/90">
              <div className="rounded-xl border border-slate-700/70 bg-slate-900/60 p-4">Open to Commissions</div>
              <div className="rounded-xl border border-slate-700/70 bg-slate-900/60 p-4">Brand Collabs</div>
              <div className="rounded-xl border border-slate-700/70 bg-slate-900/60 p-4">Workshops</div>
              <div className="rounded-xl border border-slate-700/70 bg-slate-900/60 p-4">Speaking</div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-700/70 bg-slate-900/60 p-6">
            <div className="grid gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Name</label>
                <input required className="w-full rounded-lg bg-slate-800/60 border border-slate-700/70 px-4 py-3 text-slate-100 placeholder-slate-400" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Email</label>
                <input type="email" required className="w-full rounded-lg bg-slate-800/60 border border-slate-700/70 px-4 py-3 text-slate-100 placeholder-slate-400" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Message</label>
                <textarea required rows="5" className="w-full resize-none rounded-lg bg-slate-800/60 border border-slate-700/70 px-4 py-3 text-slate-100 placeholder-slate-400" placeholder="Tell me about your project..." />
              </div>
              <button className="mt-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 text-slate-900 font-semibold shadow-[0_10px_30px_rgba(34,211,238,.35)] hover:scale-[1.02] transition">
                Send Message
              </button>
              {status && <p className="text-sm text-blue-300/90">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
