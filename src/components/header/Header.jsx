import React from 'react'
import './header.css'
import LEO from './LEO'
import ME from '../../assets/leo.png'
import Hsocials from './Hsocials'
const Header = () => {
  return (
  <header>
     <div className="container header_container">
       <h5>Hello I'm</h5>
       <h1>Ikwuegbuenyi Augustus Meju</h1>
       <h5 className="text-light">Front end developer</h5>
       <LEO />
       <Hsocials />
       <div className="me">
         <img src={ME} alt='image of me'/>
       </div>
       <a href='#contact' className='scroll__down'>Scroll down</a>
     </div>
  </header>
  )
}

export default Header