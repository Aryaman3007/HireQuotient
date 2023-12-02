import './App.css'
import Feature1 from './components/Features/Feature1/Feature1'
import Feature2 from './components/Features/Feature2.jsx/Feature2'
import HeroSection from './components/HeroSection/HeroSection'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
    <Navbar/>
    <HeroSection/> 
    <Feature1/>    
    <Feature2/>
    </>
  )
}

export default App
