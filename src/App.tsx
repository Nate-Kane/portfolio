import './App.css'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import About from './sections/About'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App
