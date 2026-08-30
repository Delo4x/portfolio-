import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Project } from './components/Project'
import { Skills } from './components/Skills'

function App() {
  return (
    <div className="min-h-svh bg-bg">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
