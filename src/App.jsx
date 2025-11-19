import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Projects from './components/Projects'
import Content from './components/Content'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Background accents */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-32 right-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.05),transparent_60%)]" />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Gallery />
        <Projects />
        <Content />
        <Contact />
      </main>

      <footer className="relative border-t border-slate-800/70 py-10 mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Fauzan Aditya</p>
          <a href="#hero" className="text-sm text-slate-300 hover:text-white">Back to top</a>
        </div>
      </footer>
    </div>
  )
}

export default App
