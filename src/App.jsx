import { Canvas } from "./components/Canvas"
import { Header } from "./components/Header"
import { Projects } from "./components/Projects"
import { Oficinas } from "./components/Oficinas"
import { Footer } from "./components/Footer"
import "./App.css"

function App() {

  return (
    <>
      <Canvas />
       <div className="container">
        <Header />
        <main>
          <Projects />
          <Oficinas />
        </main>
        <Footer />
      </div>
    </>

  )
}

export default App
