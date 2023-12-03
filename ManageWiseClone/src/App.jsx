import './App.css'
import {BrowserRouter as Router} from 'react-router-dom'
import Faq from './components/FAQ/Faq'
import Feature1 from './components/Features/Feature1/Feature1'
import Feature2 from './components/Features/Feature2/Feature2'
import Feature3 from './components/Features/Feature3/Feature3'
import HeroSection from './components/HeroSection/HeroSection'
import Navbar from './components/Navbar/Navbar'
import Pricing from './components/Pricing/Pricing'

function App() {

  return (
    <>
      <Router>
        <Navbar/>       
        <HeroSection />
        <Feature1 />
        <Feature2 />
        <Feature3 />
        <Faq />
        <Pricing />
      </Router>
    </>
  )
}

export default App
