import Nav from "./nav"
import About from "./about"
import Project from "./project"
import Contact from "./contact"
import Footer from "./footer"
import '../index.css'

const main = () => {
  return (
    <div className="max-w-7xl mx-auto">
        <Nav/>
        <About/>
        <Project/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default main
