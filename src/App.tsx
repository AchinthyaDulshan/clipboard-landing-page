import React from 'react'

import Hero from "./components/Hero"
import Services from './components/Services'
import Featuring from './components/Featuring'
import Features from './components/Features'
import Customers from './components/Customers'
import Download from './components/Download'
import Footer from './components/Footer'

type Props = {}

const App = (props: Props) => {
  return (
    <div>
      <Hero/>
      <Services/>
      <Featuring/>
      <Features/>
      <Customers/>
      <Download/>
      <Footer/>
    </div>
  )
}

export default App