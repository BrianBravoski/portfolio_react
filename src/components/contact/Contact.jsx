import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'


const contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
    
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
        <MdOutlineMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>brianbravoski28@gmail.com</h5>
          <a href="mailto:brianbravoski28@gmail.com">Send a Message</a>
          </article>

          <article className='contact__option'>
        <RiMessengerLine className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>Brian Kemboi</h5>
          <a href="https://m.me/">Send a Message</a>
          </article>

          <article className='contact__option'>
        <BsWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>Text Me </h5>
          <a href="https://whatsapp.com/send?phone=+254">Send a Message</a>
          </article>
        </div>


        <form action="" method="post">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your email'required />
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact