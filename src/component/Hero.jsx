import React, { useEffect, useState } from 'react'
import lukas from '/image/lukas-pic.jpg'

const Hero = () => {
    const name = 'front-end Developer'
    const [display, setDisplay] = useState(0);

    useEffect(()=>{
        const showname= setInterval(()=>{
            setDisplay(previndex =>(previndex + 1) % (name.length + 1))
        }, 1000);
        return () => clearInterval(showname)
    }, [])
  return (
    <div className='bg-black text-white py-16 mt-10 scroll-smooth'>
      <img src={lukas} alt=""
      className='mx-auto mb-8 w-48 h-48 rounded-full 
      object-cover transform transition-transform 
      duration-300 hover:scale-105' />
      <h1 className='text-4xl font-bold'>
        I'm {''} <span className='text-transparent
        bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'> Inaede Luke</span>,  
        {name.slice(0,display)}
      </h1>
      <p className='mt-4 text-lg text-gray-300'>I specialize in building modern and responsive web application</p>
      <div className='mt-8 space-x-4' id='contact'>
        <button className=' bg-gradient-to-r from-green-400 
      to-blue-500 hidden md:inline transform transition-transform 
      duration-300 hover:scale-110 px-4 py-2 rounded-full'>Contact with me</button>
        <button className=' bg-gradient-to-r from-pink-500 
      to-yellow-500 hidden md:inline transform transition-transform 
      duration-300 hover:scale-110 px-4 py-2 rounded-full'>Resume</button>
      </div>
    </div>
  )
}

export default Hero
