import React from 'react'
import '../skills/Skills.css'
import { CiBadgeDollar } from "react-icons/ci";

function MoreSkills() {
  return (
    <div className='skills__content'>
    <h2 className='skills__title'>More Skills</h2>
     <h3 className='skills__title'></h3>
     <div className='skills__box'>
        <div className='skills__group'>
          <div className='skills__data'>
          <CiBadgeDollar  className='skills__icon'/>
          <div >
           <h3 className='skills__name'>
              Tailwind Css
           </h3>
          </div>

          </div>
          <div className='skills__data'>
          <CiBadgeDollar  className='skills__icon'/>
          <div >
           <h3 className='skills__name'>
           Material Ui
           </h3>
          </div>

          </div>
          <div className='skills__data'>
          <CiBadgeDollar  className='skills__icon'/>
          <div >
           <h3 className='skills__name'>
             Github
           </h3>
          </div>

          </div>
        </div>


        <div className='skills__group'>
          <div className='skills__data'>
          <CiBadgeDollar  className='skills__icon'/>
          <div >
           <h3 className='skills__name'>
             Oop
           </h3>
          </div>

          </div>
          <div className='skills__data'>
          <CiBadgeDollar  className='skills__icon'/>
          <div >
           <h3 className='skills__name'>
            Figma
           </h3>
          </div>

          </div>
          <div className='skills__data'>
          <CiBadgeDollar  className='skills__icon'/>
          <div >
           <h3 className='skills__name'>
             Jquery
           </h3>
          </div>

          </div>
        </div>

     </div>
  </div>
  )
}

export default MoreSkills