import React from 'react'

const NavBar = () => {
  return (
    <nav className='  bg-gray-800 text-white px-8 md:px-16 lg:px-24 fixed right-0 left-0 top-0'>
    <div className=' container py-2 flex md:justify-between items-center justify-center'>
      <div className=' text-2xl font-bold hidden md:inline'>LUKAS</div>
      <div className=' space-x-6'>
        <a href="/" className=' hover:text-gray-400'>Home</a>
        <a href="#about" className=' hover:text-gray-400'>About Me</a>
        <a href="#service" className=' hover:text-gray-400'>Service</a>
        <a href="#project" className=' hover:text-gray-400'>Project</a>
        <a href="#contact" className=' hover:text-gray-400'>Contact</a>
      </div>
      <button className=' bg-gradient-to-r from-green-400 
      to-blue-500 hidden md:inline transform transition-transform 
      duration-300 hover:scale-110 px-4 py-2 rounded-full'>Connect Me</button>
    </div>
    </nav>
  )
}

export default NavBar
