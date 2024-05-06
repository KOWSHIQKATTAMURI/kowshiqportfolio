import React from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';



const App:React.FC = () => {
  return(
    <div className='app'>
      <Navbar/>
      <Hero/>
      <About/>
      
    </div>
  )
}

export default App;