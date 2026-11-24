import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import Contact from './components/Contact'
import { LanguageProvider } from './LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <main className="bg-[#F1F0EE]">
        <Navbar />

        <Hero />

        <About />

        <Skills />

        <Work />

        <Contact />
      </main>
    </LanguageProvider>
  )
}

export default App