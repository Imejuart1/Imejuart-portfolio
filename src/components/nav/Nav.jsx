import React from 'react'
import './nav.css'
import {AiTwotoneHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiFillBook} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {AiFillMessage} from 'react-icons/ai'
import { useState } from 'react'
const Nav = () => {
  const {activeNav, setActiveNav}= useState('#')
  return (
   <nav>
     <a href= "#"  onClick={() => setActiveNav('#about')} className  = {activeNav === "#" ? 'active' : ' '}><AiTwotoneHome/></a>
     <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ' '}><AiOutlineUser/></a>
     <a href="#experience"><AiFillBook/></a>
     <a href="#services"><RiServiceLine/></a>
     <a href="#contact"><AiFillMessage/></a>
   </nav>
  )
}

export default Nav 