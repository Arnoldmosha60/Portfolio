/* eslint-disable no-unused-vars */
import React from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import BackToTopButton from "./components/BackToTopButton"

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
        <BackToTopButton />
      </div>
    </>
  )
}

export default App
