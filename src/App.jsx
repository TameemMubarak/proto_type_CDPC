import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Programs/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title sub='our programs' main='What We Offer' />
        <Program/>
       <About />
        <Title sub='our Gallery' main='Campus Photos' />
        <Campus />
        <Title sub='StudentsTestimonials' main='ask our students what they say' />
        <Testimonials/>
        <Title sub='Contact Us' main='Get In Touch' />
        <Contact/>
        <Footer/>
      </div>
    </div>
   
  )
}

export default App

