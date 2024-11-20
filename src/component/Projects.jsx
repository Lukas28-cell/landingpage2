import React from 'react'

const project = [
    {
      title: 2,
      description: "Nike-ecommerce project",
      image: "https://via.placeholder.com/300",
      demoLink: "https://neke-store-luk.vercel.app/", 
      repoLink: "https://github.com/Lukas28-cell/nike-project", 
    },
    {
      title: 2,
      description: "A modern restaura landing-page website.",
      image: "https://via.placeholder.com/300", 
      demoLink: "https://modern-restaura-landing-page.vercel.app/", 
      repoLink: "Lukas28-cell/Modern-restaura-landingPage", 
    },
    {
      title: 1,
      description: "A brief description",
      image: "./public/image/doctorbookingappointment.jpg", 
      demoLink: "https://example.com",
      repoLink: "https://github.com/Lukas28-cell/DoctorBookingAppointmentWebsi", 
    },
  ];
const Projects = () => {
  return (
    <div className='bg-black text-white py-30' id='about'>
    <div className=' container mx-auto px-8 md:px-16 lg:px-24'>
      <h2 className='text-4xl font-bold text-center mb-12'>My Services</h2>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {project.map((projects)=>(
            <div className='border-gray-800 p-6 rounded-lg hover:shadow-lg
             transform transition-transform duration-300 hover:scale-105'>
                <img src={projects.image} alt="" className=' rounded-lg mb-4 w-full h-48 object-cover' />
                <p className=' text-2xl font-bold mb-2'>{projects.description}</p>
         <div className=' flex space-x-28'>
         <a href=""className='inline-black bg-gradient-to-r from-green-400
                 to-blue-500 text-white px-4 py-2 rounded-full'
                 target='_blank' rel='noopener noreferrer'>GitHub</a>
                <a href="" className='inline-black bg-gradient-to-r from-green-400
                 to-blue-500 text-white px-4 py-2 rounded-full'
                 target='_blank' rel='noopener noreferrer'>live view</a>
         </div>
            </div>
        ))}
        </div>
        </div>
        </div>
  )
}

export default Projects
