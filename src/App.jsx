import { Canvas } from "./components/Canvas"
import { Header } from "./components/Header"
import { Projects } from "./components/Projects"
import { Oficinas } from "./components/Oficinas"
import { Didatico } from "./components/Didatico"
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
          <Didatico />
        </main>
        <Footer />
      </div>
    </>

  )
}

export default App
