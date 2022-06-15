import React from 'react'
import './foot.css' 
import {AiFillApple} from 'react-icons/ai'
import {GrReddit} from 'react-icons/gr'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
const foot = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>EGATOR</a>

      <ul className='permalinks'>
        <li><a href='#' target="_blank">Home</a></li>
        <li><a href='#'target="_blank">Home</a></li>
        <li><a href='#'target="_blank">Home</a></li>
        <li><a href='#'target="_blank">Home</a></li>
        <li><a href='#'target="_blank">Home</a></li>
        <li><a href='#'target="_blank">Home</a></li>
        
        
      </ul>
      <div className='leoo'>
        <a href='https://apple.com' target='_blank'><AiFillApple/></a>
        <a href='https://reddit.com'target='_blank'><GrReddit/></a>
        <a href='https://linkedin.com'target='_blank'><AiFillLinkedin/></a>
        <a href='https://twitter.com'target='_blank'><AiOutlineTwitter/></a>
        <a href='https://instagram.com'target='_blank'><AiFillInstagram/></a>
        <a href='https://youtube.com'target='_blank'><AiFillYoutube/></a>

       
        </div>
        <div className='copyright'>
          <small>Copyright&copy;2022 - All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default foot