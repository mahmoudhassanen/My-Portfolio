import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {FaEnvelopeOpen ,   FaPhoneSquareAlt  , FaLinkedin  } from 'react-icons/fa';
import {FiSend} from 'react-icons/fi'
import "./Contact.css"
import { FaSquareGithub } from "react-icons/fa6";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const Contact = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const form = useRef();
  const { width, height } = useWindowSize();
  
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm('service_oaq1c3q', 'template_2oxskl9', form.current, {
        publicKey: 'DaMSL4G4RHJJ2RFY8',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setShowConfetti(true);
          setTimeout(() => {
            setShowConfetti(false);
          }, 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      setShowConfetti(true);
  };
  return (
    <section className='contact section'>
     <h2 className='section__title'>
      Get In <span> Touch </span>
     </h2>
     <div className='contact__container container grid'>
   <div className='contact__data'>

<h3 className='contact__title'> Don't be shy ! </h3>
   <p className='contact__description'>
  Feel free to get in touch with me . I am always open to discussing 
  new projects , creative ideas or opportunities to be part of your visions.
   </p>
   <div className='contact__info'>
     <div className="info__items">
  <FaEnvelopeOpen className='info__icon' />
  <div>
    <span className='info__title'>Mail me </span>
    <h4 className='info__desc'>mahmoudhassanen415@gmai.com</h4>

  </div>
     </div>


      <div className="info__items">
  <FaPhoneSquareAlt className='info__icon' />
  <div>
    <span className='info__title'>Call me </span>
    <h4 className='info__desc'>+02 0111 576 1903</h4>
    
  </div>
      </div>
    </div>

    <div className='contact__social'>
  <a href="https://github.com/mahmoudhassanen" className='contact__social-link'>
    <FaSquareGithub />
  </a>
  <a href="https://www.linkedin.com/in/mahmoud-hassanen-03180820a/" className='contact__social-link'>
    <FaLinkedin />
  </a>
</div>

    </div>



  
   <form ref={form} onSubmit={sendEmail}  className='contact__form'>
    <div className='form__input-group'>
    <div className='contact__input-div'>
     <input type="text"
     placeholder='Your Name'
     className='form__control' />
</div>
 
    
      <div className='form__input-div'>
        
      
     <input type="email"
     name='email'
     placeholder='Your Email'
     className='form__control' />
    </div>
    <div className='form__input-div'>

     <input type="text"
    
     name='Project' 
     placeholder='Your Project'
     className='form__control' />
    </div>

    </div>
    
    <div className='form__input-div'>
<textarea className='form__control textarea '  name='subject'
placeholder='Your Message'></textarea>
</div>

<button className='button'>
Send Message  <span className='button__icon contact__button-icon'>
   <FiSend />
    </span>
</button>


   </form>
   </div>
   {showConfetti &&   <Confetti  width={width} height={height}/>
 }

    </section>
  )
}

export default Contact
