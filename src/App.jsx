import { useState } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import './App.css'

function App() {

  return (
    <>
      <div className='text-white grid grid-cols-6 content-center min-h-screen auto-rows-[150px] gap-4 p-10'>
        <div className='bg-[#0B1B32] rounded-2xl p-6 col-span-3 row-span-3 hover:scale-105'>
          Itzell Vazquez + resumen
        </div>
        <div className='bg-[#0B1B32] rounded-2xl p-6 col-span-1 row-span-3 hover:scale-105'>
          foto
        </div>
        <div className='bg-[#0B1B32] rounded-2xl p-6 col-span-2 row-span-4 hover:scale-105'>
          proyectos
        </div>
        <div className='bg-[#0B1B32] rounded-2xl p-6 col-span-2 row-span-1 hover:scale-105'>
          contacto
        </div>
        <div className='bg-[#0B1B32] rounded-2xl p-6 col-span-2 row-span-1 flex justify-between hover:scale-105'>
          <FaFacebookF color="#FFFFFF" />
          <FaInstagram color="#FFFFFF" />
          <FaLinkedinIn color="#FFFFFF" />
        </div>
      </div>
    </>
  )
}

export default App
