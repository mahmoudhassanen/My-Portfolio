import React from 'react'
import '../skills/Skills.css'
import { CiBadgeDollar } from "react-icons/ci";

function FrontendSkills() {
  return (
    <div className='skills__content'>
    <h2 className='skills__title'>Frontend Developer</h2>
     <h3 className='skills__title'></h3>
     <div className='skills__box'>
        <div className='skills__group'>
          <div className='skills__data'>
          <CiBadgeDollar  className='skills__icon'/>
          <div >
           <h3 className='skills__name'>
              Html
           </h3>
          </div>

          </div>
          <div className='skills__data'>
          <CiBadgeDollar  className='skills__icon'/>
          <div >
           <h3 className='skills__name'>
            Css
           </h3>
          </div>

          </div>
          <div className='skills__data'>
          <CiBadgeDollar  className='skills__icon'/>
          <div >
           <h3 className='skills__name'>
             Bootstrap
           </h3>
          </div>

          </div>
        </div>


        <div className='skills__group'>
          <div className='skills__data'>
          <CiBadgeDollar  className='skills__icon'/>
          <div >
           <h3 className='skills__name'>
              JavaScript
           </h3>
          </div>

          </div>
          <div className='skills__data'>
          <CiBadgeDollar  className='skills__icon'/>
          <div >
           <h3 className='skills__name'>
            TypeScript
           </h3>
          </div>

          </div>
          <div className='skills__data'>
          <CiBadgeDollar  className='skills__icon'/>
          <div >
           <h3 className='skills__name'>
             React js
           </h3>
          </div>

          </div>
        </div>

     </div>
  </div>
  )
}

export default FrontendSkills