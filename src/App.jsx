// import { FaFacebookF, FaInstagram, FaLinkedinIn,FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa6";
import './App.css'
import Menu from './components/Sections/Menu'
import Hero from './components/Sections/Hero'
import About from './components/Sections/About'
import Skills from './components/Sections/Skills'
import ReactProjects from './components/Sections/ReactProjects'
import VtexProjects from './components/Sections/VtexProjects'
import Contact from './components/Sections/Contact'

function App() {

  return (
    <>
      <div className='flex grid justify-center p-8 scroll-smooth'>
        <Menu></Menu>
        <Hero></Hero>
        <About></About>
        <Skills></Skills>
        <ReactProjects></ReactProjects>
        <VtexProjects></VtexProjects>
        <Contact></Contact>
      </div>
    </>
  )
}

export default App
