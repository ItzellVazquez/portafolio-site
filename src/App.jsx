import { useState } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import './App.css'

function App() {

  return (
    <>
      <div className='text-white grid lg:grid-cols-6 content-center min-h-screen auto-rows-[150px] gap-4 p-10'>
        <div className='bg-[#0B1B32] rounded-2xl p-6 col-span-1 row-span-2 hover:bg-[#26415E] hover:scale-[1.02] hover:shadow-lg transition duration-300 ease-in-out'>
          foto
        </div>
        <div className='bg-[#0B1B32] rounded-2xl p-6 lg:col-span-3 row-span-2 hover:bg-[#26415E] hover:scale-[1.02] hover:shadow-lg transition duration-300 ease-in-out'>
          Itzell Vazquez
        </div>
        <div className='bg-[#0B1B32] rounded-2xl p-6 lg:col-span-2 row-span-4 hover:bg-[#26415E] hover:scale-[1.02] hover:shadow-lg transition duration-300 ease-in-out'>
          proyectos
        </div>
        <div className='bg-[#0B1B32] rounded-2xl p-6 lg:col-span-3 row-span-2 hover:bg-[#26415E] hover:scale-[1.02] hover:shadow-lg transition duration-300 ease-in-out'>
          Resumen
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
