import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import CategoriesSection from './components/CategoriesSection.jsx'
import ProductSection from './components/ProductSection.jsx'
import CallToActionSection from './components/CallToAction.jsx'
import FooterSection from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <HeroSection />
        <CategoriesSection />
        <ProductSection />
        <CallToActionSection />
        <FooterSection />
      </div>
    </>
  )
}

export default App
