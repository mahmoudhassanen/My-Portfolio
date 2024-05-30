import React, { useEffect } from 'react';

import CV from '../../assets/cv.pdf';
import {FaDownload} from 'react-icons/fa';
import Stats from '../../components/stats/Stats';
import Info from '../../components/info/Info';
import './about.css' ;
import Skills from '../../components/skills/Skills';
import {resume} from '../../data'
import Resume from '../../components/resume/Resume';
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  
  return (
  <main className="section container">
   <section className="about"> 
  <h2 className="section__title text-flicker-in-glow  ">
    About <span> Me </span>
  </h2>


  <div className="about__container grid">
    <div className="about__info">
      <h3 className="section__subtitle">
        Personal Infos
      </h3>

    
      <ul className="info__list grid">
      <Info />
      </ul>
      

      <a 
      // data-aos="fade-up"
      // data-aos-duration="3000"
      href={CV} download='' className="button bounce-top"> Download CV
      <span className="button__icon">
         <FaDownload /> </span>
      </a>
    </div>
    <div className="stats grid">
     <Stats />
    </div>
  </div>

   </section>
   <div className="separator"></div>
   <section className='skills'>
    <h3 className="section__title subtitle__center text-flicker-in-glow"> My <span> Skills </span></h3>
     
     <div className="skills__container grid">
        <Skills />
     </div>
    </section>
    <div className="separator"></div>
    <div className="resume">
    <h3 className="section__title subtitle__center text-flicker-in-glow ">Education <span>  &  </span> Experience   </h3>
     <div className="resume__container grid">
     <div className="resume__data">
          {resume.map((val ) => {
            if (val.category === 'education' ) {
              return <Resume key={val.index} {...val} />
            }
          })}
      </div>
      <div className="resume__data">
          {resume.map((val ) => {
            if (val.category === 'experience' ) {
              return <Resume key={val.index} {...val} />
            }
          })}
      </div>
   
     </div>
    </div>
  </main>
  )
}

export default About
