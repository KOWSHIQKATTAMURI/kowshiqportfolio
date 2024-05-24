import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './pages/Hero';
import About from './pages/About';
// import Skills from './pages/Skills';
// import Qualification from './pages/Qualifications';
import GetInTouch from './pages/GetInTouch';
import Footer from './components/Footer';
import TestimonalPage from './pages/TestimonalsPage';



const App:React.FC = () => {
  return(
    <div className='app'>
      <Navbar/>
      <Hero/>
      <About/>
      {/* <Skills/> */}
      <TestimonalPage/>
      {/* <Qualification/> */}
      <GetInTouch/>
      <Footer/>
      
    </div>
  )
}

export default App;