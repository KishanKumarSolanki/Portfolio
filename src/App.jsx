import React from "react"
import { BackgroundRippleEffect } from "./components/ui/background-ripple-effect";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import BlurBlob from "./BlurBlob";
import { DottedGlowBackground } from "./components/ui/dotted-glow-background";


function App() {
  return (
    <>
      <div>
        <BackgroundRippleEffect />
        <Navbar />
        <Hero />
        <DottedGlowBackground />
        <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />
      </div>
    </>
  )
}

export default App