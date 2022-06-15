import React from 'react'
import './servi.css'
import {BiCheck} from 'react-icons/bi'
const services = () => {
  return (
    <section id='services'>
  <h5>what i offer</h5>
  <h2>Services</h2>
  <div className="container services__container">
    <article className="service">
      <div className="services__head">
        <h3>UI/UX Design</h3>
      </div>
      <ul className='service__list'>
        <li>
        <BiCheck className='peju'/>
          <p>meju no is time</p>
          </li>
          <li>
          <BiCheck className='peju'/>
          <p>meju no is time</p>
          </li>
          <li>
          <BiCheck className='peju'/>
          <p>meju no is time</p>
          </li>
          <li>
          <BiCheck className='peju'/>
          <p>meju no is time</p>
          </li>
          <li>
          <BiCheck className='peju'/>
          <p>meju no is time</p>
          </li> 
      </ul>
    </article>
    <article className="service">
      <div className="services__head">
        <h3>Web development</h3>
      </div>
      <ul className='service__list'>
        <li>
        <BiCheck className='peju'/>
          <p>meju no is time</p>
          </li>
          <li>
          <BiCheck className='peju'/>
          <p>meju no is time</p>
          </li>
          <li>
          <BiCheck className='peju'/>
          <p>meju no is time</p>
          </li>
          <li>
          <BiCheck className='peju'/>
          <p>meju no is time</p>
          </li>
          <li>
          <BiCheck className='peju'/>
          <p>meju no is time</p>
          </li> 
      </ul>
    </article>
    <article className="service">
      <div className="services__head">
        <h3>Content creation</h3>
      </div>
      <ul className='service__list'>
        <li>
          <BiCheck className='peju'/>
          <p>meju no is time</p>
          </li>
          <li>
          <BiCheck className='peju'/>
          <p>meju no is time</p>
          </li>
          <li>
          <BiCheck className='peju'/>
          <p>meju no is time</p>
          </li>
          <li>
          <BiCheck className='peju'/>
          <p>meju no is time</p>
          </li>
          <li>
          <BiCheck className='peju'/>
          <p>meju no is time</p>
          </li> 
      </ul>
    </article>
  </div>
  </section>
  )
}

export default services