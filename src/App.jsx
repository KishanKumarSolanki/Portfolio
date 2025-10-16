import React from "react"
import { BackgroundRippleEffect } from "./components/ui/background-ripple-effect";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import BlurBlob from "./BlurBlob";
import Skills from "./components/Skills";


function App() {
  return (
    <>
      <div>
        <BackgroundRippleEffect />
        <Navbar />
        <Hero />
        <BlurBlob position={{ top: '50%', left: '70%' }} size={{ width: '30%', height: '40%' }} />
        <Skills />
      
      </div>
    </>
  )
}

export default App