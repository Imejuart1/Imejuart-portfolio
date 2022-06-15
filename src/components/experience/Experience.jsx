import React from 'react'
import './xpe.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills i have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className='experience__content'>
          <article className='experience__details'>
          <BsPatchCheckFill className='meju'/>
          
          <div>   <h4>HTML</h4>  <small className='text-light'>Experienced</small></div>
        </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='meju'/>
          
         <div> <h4>CSS</h4>  <small className='text-light'>Experienced</small></div>
         
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='meju'/>
        
          <div><h4>JavaScript</h4><small className='text-light'>Experienced</small></div>
          
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='meju'/>
          
         <div> <h4>React</h4><small className='text-light'>Experienced</small> </div>
          
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='meju'/>
          
          <div><h4>Bootstrap</h4><small className='text-light'>Beginner</small></div>
          
          </article>
        </div>
        </div>
        {/* meju */}
        <div className="Video Animation">
        <div><h3>Video Animaton</h3></div>
        <div className='experience__content'>
          <article className='experience__details'>
          <BsPatchCheckFill className='meju'/>
          <div><h4>VideoScribe</h4><small className='text-light'>Experienced</small></div>
          
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='meju'/>
          <div><h4>Animiz</h4> <small className='text-light'>Experienced</small></div>
         
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='meju'/>
         <div> <h4>Blender</h4> <small className='text-light'>Beginner</small></div>
         
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='meju'/>
          
           <div>  <h4>Medibang</h4>  <small className='text-light'>Experienced</small></div>
        
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='meju'/>
          
          <div><h4>Photoshop</h4><small className='text-light'>intermediate</small></div>
          
          </article>
        </div>
        </div>
        
       
      </div>
    </section>
    
  )
}

export default experience