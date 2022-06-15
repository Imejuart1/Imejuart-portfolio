import React from 'react'
import CV from '../../assets/CV.pdf'

const LEO = () => {
  return (
    <div className='leo'>
        <a href={CV} download className='btn' >Download CV</a>
    <a href='#Contact'className='btn btn-primary'>lets chat</a>
    </div>
  )
}

export default LEO