import { useState } from "react"
import { langs } from "./assets/langs"
import { Canvas } from "./components/Canvas"
import { Nav } from "./components/Nav"
import { Header } from "./components/Header"
import { Projects } from "./components/Projects"
import { Oficinas } from "./components/Oficinas"
import { Footer } from "./components/Footer"
import { Contact } from "./components/Contact"
import "./App.css"

function App() {
  const langCode = navigator.language.slice(0,2)
  const initialLang = langs[langCode] ? langCode : "en"

  const [lang, setLang] = useState(initialLang)


  return (
    <>
      <Canvas />
      <Nav setLang={setLang} lang={langs[lang]} alang={lang}/>
       <div id="about" className="container">
        <Header lang={langs[lang]} />
        <main>
          <Projects lang={langs[lang]} experiences={langs.experiences}/>
          <Oficinas lang={langs[lang]}/>
          <Contact />
        </main>
        <Footer />
      </div>
    </>

  )
}

export default App
