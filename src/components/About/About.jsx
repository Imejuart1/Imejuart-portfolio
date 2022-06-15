import React from 'react'
import './about.css'
import ME from '../../assets/eju.PNG'
import {FiAward} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {BsFolderSymlinkFill} from 'react-icons/bs'

const About = () => {
  return (
   <section id='about'>
     <h5>Get to know</h5>
     <h2>About Me</h2>

     <div className="container about__container">
       <div className='about__me'>
         <div className='about__me-image'>
             <img src={ME} alt="my image"/>
         </div>

       </div>

     <div className="about__content">
       <div className="about__cards">
       <article className='about__card'>
           < FiAward className='about__icon'/>
           <h5>Experience</h5>
           <small>1+  year Working</small>

         </article>
         <article className='about__card'>
           <FiUsers className='about__icon'/>
           <h5>Clients</h5>
           <small>2 clients</small>

         </article>
         <article className='about__card'>
           <BsFolderSymlinkFill className='about__icon'/>
           <h5>Projects</h5>
           <small>4+ projects</small>

         </article>
        
         
       </div>
       <p>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores commodi cumque mollitia harum libero, nisi quasi eos praesentium quo laudantium ratione itaque obcaecati quam aut incidunt eaque excepturi perspiciatis laboriosam.
          
         </p>
       <a href='#contact' className='btn btn-primary'>Contact me</a>
     </div>


     </div>
   </section>
  )
}

export default About