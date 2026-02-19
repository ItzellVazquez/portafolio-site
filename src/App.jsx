import { FaFacebookF, FaInstagram, FaLinkedinIn,FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa6";
import Projects from './components/projects';
import './App.css'

function App() {

  return (
    <>
      <div className='text-white grid lg:grid-cols-5 content-center min-h-screen auto-rows-[110px] gap-4 p-10 max-w-[1440px] mx-auto'>

        {/* FOTO */}
        <div className='bg-[#0B1B32] rounded-2xl col-span-1 row-span-2 overflow-hidden
                        hover:scale-[1.02] hover:shadow-xl transition duration-300'>
          <img 
            className="w-full h-full object-cover" 
            src='https://scontent.fclq1-1.fna.fbcdn.net/v/t39.30808-6/499357486_9835057396603417_440676154145702468_n.jpg?stp=c0.185.720.720a_dst-jpg_s206x206_tt6&_nc_cat=108&ccb=1-7&_nc_sid=5df8b4&_nc_eui2=AeEeFxiPsUkTyDyEHUX6yvDnKs9vjtGPtkQqz2-O0Y-2RKVU8o9wCMU4VmVhBeLiIbvtgaurQsY1bQ8n3MxQhirM&_nc_ohc=LPS4nxA6qLMQ7kNvwHaJleX&_nc_oc=AdkKcE3ZtXVqRmw8NmvwallmS__0z66Gh4T0uavK8i8PoQyXB2stbBu-E0mwEqFdfSctkMwjrm2C1fdtLRmbDDD6&_nc_zt=23&_nc_ht=scontent.fclq1-1.fna&_nc_gid=JHBda7Jc1lwIU61Ct0mIsQ&oh=00_AfsFcr2Hw0d_wdYk0MiUZlK8QXZlytvejB5KlmSx8o9kxw&oe=699C0163'
          />
        </div>

        {/* HERO / TITULO */}
        <div className='bg-[#0B1B32] rounded-2xl p-8 lg:col-span-2 row-span-2 
                        flex flex-col justify-center border-l-4 border-[#C48CB3]
                        hover:bg-[#132C4A] hover:scale-[1.02] hover:shadow-xl transition duration-300'>

          <h1 className='text-3xl lg:text-4xl font-bold leading-tight'>
            Front-End Developer
          </h1>

          <p className='text-lg mt-2 text-[#83A6CE]'>
            & VTEX IO Specialist
          </p>

          <p className='text-sm mt-3 text-gray-300'>
            eCommerce & UI Development
          </p>

        </div>

        {/* PROYECTOS */}
        <div className='bg-[#132C4A] rounded-2xl p-6 lg:col-span-2 row-span-3 
                        hover:bg-[#26415E] hover:scale-[1.02] hover:shadow-xl transition duration-300'>

          <h3 className="text-lg font-semibold mb-4 text-[#83A6CE]">
            Proyectos
          </h3>

          <Projects />

        </div>

        {/* RESUMEN */}
        <div className='bg-[#132C4A] rounded-2xl p-6 lg:col-span-3 row-span-2 
                        hover:bg-[#26415E] hover:scale-[1.02] hover:shadow-xl transition duration-300
                        overflow-y-auto'>

          <h3 className="text-lg font-semibold mb-3 text-[#83A6CE]">
            Sobre mí
          </h3>

          <p className='text-[15px] leading-relaxed text-gray-200'>
            Soy desarrolladora Front-End apasionada por crear interfaces claras, funcionales y visualmente atractivas. 
            Tengo experiencia trabajando con React y JavaScript, así como en el desarrollo de soluciones eCommerce utilizando VTEX IO, 
            donde he participado en personalización de tiendas, integraciones y mejoras de la experiencia de usuario. 
            Disfruto aprender constantemente, enfrentar nuevos retos y aportar soluciones que generen valor en los proyectos digitales.
          </p>

        </div>

        {/* REDES */}
        <div className='bg-[#0B1B32] rounded-2xl p-6 lg:col-span-2 row-span-1 
                        flex justify-around items-center text-xl
                        hover:bg-[#26415E] hover:scale-[1.02] hover:shadow-xl transition duration-300'>

          <a 
            href="mailto:itzell.guadalupe.vazquez.gutierrez@gmail.com"
            className="text-2xl hover:text-[#C48CB3] transition cursor-pointer"
          >
            <FaEnvelope />
          </a>
          <FaLinkedinIn className="hover:text-[#C48CB3] transition cursor-pointer"/>
          <FaWhatsapp className="hover:text-[#C48CB3] transition cursor-pointer"/>
          <FaPhone className="hover:text-[#C48CB3] transition cursor-pointer"/>
          <FaFacebookF className="hover:text-[#C48CB3] transition cursor-pointer"/>
          <FaInstagram className="hover:text-[#C48CB3] transition cursor-pointer"/>

        </div>

      </div>
    </>
  )
}

export default App
