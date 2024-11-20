import React from 'react'
// import Lukas from './component/Lukas'
import NavBar from './component/NavBar'
import Hero from './component/Hero'
import About from './component/About'
import Contact from './component/Contact'
import Footer from './component/Footer'
import Service from './component/Service'
import Projects from './component/Projects'

const App = () => {
  return (
    <div>
      {/* <Lukas/> */}
   
      <Hero/>
      <About/>
      <Service/>
      <Projects/>
      <Contact/>
      <Footer/>
      <NavBar/>
      
    </div>
  )
}

export default App
