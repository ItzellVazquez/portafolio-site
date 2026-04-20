import './App.css'
import Menu from './components/Sections/Menu'
import Hero from './components/Sections/Hero'
import About from './components/Sections/About'
import Skills from './components/Sections/Skills'

import Separator from './components/Separator'
import Projects from './components/Sections/Projects'
import Contact from './components/Sections/Contact'
import Carousel from './components/Carousel'

function App() {

  return (
    <>
      <div>
        {/* <Menu></Menu> */}
        <Hero></Hero>
        <Separator></Separator>
        <About></About>
        <Separator></Separator>
        <Skills></Skills>
        <Separator></Separator>
        <Contact></Contact> 
        {/* <Projects></Projects> */}
        {/* 
        {/* <ReactProjects></ReactProjects>
        <VtexProjects></VtexProjects> */}
      </div>
    </>
  )
}

export default App
