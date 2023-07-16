import React from 'react'
import Slider from './Slider'
import About from './About'
import Service from './Service'
import Footer from './Footer'
import Navbar from './Navbar';


function HomePage() {
  return (
     <>
     <Navbar />
     <Slider/>
     <About/>
     <Service/>
     <Footer/>
     </>
  )
}

export default HomePage