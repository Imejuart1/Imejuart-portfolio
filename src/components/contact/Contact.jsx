import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiFillInstagram} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kitxoge', 'template_xzlqtbf', form.current, 'jnMLJvcWniaWwePi7')
     

      e.target.reset()
  };
    return (
    <section id='contact'>
          <h5>let's connect</h5>
          <h2>Contact me!</h2>

          <div className="container contact_container">
            <div className="contact_options">
              <article className="option">
                <MdOutlineEmail className='mad'/>
                <h4>Email</h4>
                <h5>mikwuegbuenyi@gmail.com</h5>
                <a href="mailto:mikwuegbuenyi@gmail.com" target="_blank">Send a mail</a>
              </article>
              <article className="option">
              <AiFillInstagram className='mad'/>
                <h4>Instagram</h4>
                <h5>meju_leoo</h5>
                <a href="https://www.instagram.com/direct/new/meju_leoo" target="_blank">Send a DM</a>
              </article>
              <article className="option">
                <AiOutlineWhatsApp className='mad'/>
                <h4>Whatsapp</h4>
                <h5>+2347085463058</h5>
                <a href="https://wa.me/qr/6PT5M6FMWH3JJ1" target="_blank">Send a message</a>
              </article>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <input type="text"name="name" placeholder='Your full name' required/>
              <input type="email" name="email" placeholder='Your email'required/>
              <textarea name="message"  rows="7" placeholder='Your message' required></textarea>
              <button type='submit'className='btn btn-primary'>Send Message</button>
            </form>
          </div>
          </section>

  )
}

export default Contact