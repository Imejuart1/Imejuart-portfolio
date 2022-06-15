import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/About/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Port from './components/Portfolios/Port'
import  Teste from './components/testemonials/Teste'
import Contact from './components/contact/Contact'
import Foot from './components/footer/Foot'
const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Port />
    <Teste />
    <Contact />
    <Foot />
    </>
  )
}

export default App