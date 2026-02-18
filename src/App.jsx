import { useState } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import Projects from './components/projects';
import './App.css'

function App() {

  return (
    <>
      <div className='text-white grid  lg:grid-cols-5 content-center min-h-screen auto-rows-[150px] gap-4 p-10 max-w-[1440px] mx-auto'>
        <div className='bg-[#0B1B32] rounded-2xl col-span-1 row-span-2 hover:bg-[#26415E] hover:scale-[1.02] hover:shadow-lg transition duration-300 ease-in-out'>
          <img 
            className="w-full h-full object-cover rounded-2xl" 
            src='https://scontent.fclq1-1.fna.fbcdn.net/v/t39.30808-6/499357486_9835057396603417_440676154145702468_n.jpg?stp=c0.185.720.720a_dst-jpg_s206x206_tt6&_nc_cat=108&ccb=1-7&_nc_sid=5df8b4&_nc_eui2=AeEeFxiPsUkTyDyEHUX6yvDnKs9vjtGPtkQqz2-O0Y-2RKVU8o9wCMU4VmVhBeLiIbvtgaurQsY1bQ8n3MxQhirM&_nc_ohc=LPS4nxA6qLMQ7kNvwHaJleX&_nc_oc=AdkKcE3ZtXVqRmw8NmvwallmS__0z66Gh4T0uavK8i8PoQyXB2stbBu-E0mwEqFdfSctkMwjrm2C1fdtLRmbDDD6&_nc_zt=23&_nc_ht=scontent.fclq1-1.fna&_nc_gid=JHBda7Jc1lwIU61Ct0mIsQ&oh=00_AfsFcr2Hw0d_wdYk0MiUZlK8QXZlytvejB5KlmSx8o9kxw&oe=699C0163'></img>
        </div>
        <div className='bg-[#0B1B32] rounded-2xl p-6 lg:col-span-2 row-span-2 hover:bg-[#26415E] hover:scale-[1.02] hover:shadow-lg transition duration-300 ease-in-out'>
          <span className='text-4xl'>
            Front-End Developer & VTEX IO Specialist & E-Commerce
          </span>
        </div>
        <div className='bg-[#0B1B32] rounded-2xl p-6 lg:col-span-2 row-span-3 hover:bg-[#26415E] hover:scale-[1.02] hover:shadow-lg transition duration-300 ease-in-out'>
          <Projects />
        </div>
        <div className='bg-[#0B1B32] rounded-2xl p-6 lg:col-span-3 row-span-2 hover:bg-[#26415E] hover:scale-[1.02] hover:shadow-lg transition duration-300 ease-in-out'>
          <span className='text-1xl'>Soy desarrolladora Front-End apasionada por crear interfaces claras, funcionales y visualmente atractivas. Tengo experiencia trabajando con React y JavaScript, así como en el desarrollo de soluciones eCommerce utilizando VTEX IO, donde he participado en personalización de tiendas, integraciones y mejoras de la experiencia de usuario. Disfruto aprender constantemente, enfrentar nuevos retos y aportar soluciones que generen valor en los proyectos digitales.</span>
        </div>
        <div className='bg-[#0B1B32] rounded-2xl p-6 lg:col-span-1 row-span-1 hover:bg-[#26415E] hover:scale-[1.02] hover:shadow-lg transition duration-300 ease-in-out'>
          contacto
        </div>
        <div className='bg-[#0B1B32] rounded-2xl p-6 lg:col-span-1 row-span-1 flex justify-between hover:bg-[#26415E] hover:scale-[1.02] hover:shadow-lg transition duration-300 ease-in-out'>
          <FaFacebookF color="#FFFFFF" />
          <FaInstagram color="#FFFFFF" />
          <FaLinkedinIn color="#FFFFFF" />
        </div>
      </div>
    </>
  )
}

export default App
