import React from 'react'
import lukas from '../../public/image/lukas-pic.jpg'

const About = () => {
  return (
    <div className='bg-black text-white py-20 scroll-smooth' id='about'>
      <div className=' container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>About</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
          <img src={lukas} alt="" className='w-72 h-80 rounded object-cover mb-8 md:mb-0' />
        <div className=' flex-1'>
          <p className='text-lg mb-8'>  I am a passionate Frontend Developer with experience in building
              responsive and user-friendly web applications. I love to create
              beautiful and functional interfaces that provide a great user
              experience.</p>
            <div className='space-y-4'>
              <div className=' flex items-center'>
                <label htmlFor="htmlandcss" className='w-2/12'>html & css</label>
                <div className=' grow bg-gray-800 rounded-full h-2.5'>
                  <div className='bg-gradient-to-r from-green-400 to-blue-500
                  h-2.5 transition-transform duration-300 hover:scale-105 w-10/12'></div>
                </div>
              </div>

              <div className=' flex items-center'>
                <label htmlFor="htmlandcss" className='w-2/12'>Javascript</label>
                <div className=' grow bg-gray-800 rounded-full h-2.5'>
                  <div className='bg-gradient-to-r from-green-400 to-blue-500
                  h-2.5 transition-transform duration-300 hover:scale-105 w-9/12'></div>
                </div>
              </div>

              <div className=' flex items-center'>
                <label htmlFor="htmlandcss" className='w-2/12'>React JS</label>
                <div className=' grow bg-gray-800 rounded-full h-2.5'>
                  <div className='bg-gradient-to-r from-green-400 to-blue-500
                  h-2.5 transition-transform duration-300 hover:scale-105 w-9/12'></div>
                </div>
              </div>
            </div>
            <div className=' mt-12 flex justify-between text-center'>
              <div>
                <h3 className='text-2xl font-bold text-transparent
                bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>2+</h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3 className='text-2xl font-bold text-transparent
                bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>20+</h3>
                <p>Project Completed</p>
              </div>
              <div>
                <h3 className='text-2xl font-bold text-transparent
                bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>10+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About