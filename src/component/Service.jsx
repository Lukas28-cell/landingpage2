import React from 'react'
const service =[
    {
        id:1,
        title:"Web Design",
        des: "Creating visually appealing and user-friendly web designs",
    },
    {
        id:2,
        title:"Frontend Development",
        des: "Building responsive amd interactive user interfaces",
    },
  
]
const Service = () => {
  return (
    <div className='bg-black text-white py-30' id='about'>
      <div className=' container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>My Services</h2>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {service.map((service) =>(
             <div key={service.id}>
                <div className='bg-gray-800 px-6 rounded-lg hover:shadow-lg 
                transform transition-transform duration-300 hover:scale-105'>
                    <div className=' text-right text-2xl font-bold text-transparent
        bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
            {service.id}
        </div>
        <h3 className='mt-2 text-2xl font-bold text-transparent
        bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>{service.title}</h3>
        <p className='mt-2 text-gray-300'>{service.des}</p>
        <a href="#" className='mt-4 inline-block text-blue-400 hover:text-green-500'>Read More</a>
                </div>
             </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Service;