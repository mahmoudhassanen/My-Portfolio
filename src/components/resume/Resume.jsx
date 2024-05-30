import React, { useEffect } from 'react'

import parse from 'html-react-parser';
import AOS from "aos";
import "aos/dist/aos.css";
const Resume = ({icon , year , title , desc }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  
  return (
    
    <div className="resume__item">
     <div className="resume__icon" 
     data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
     >{icon}</div>
     <span className="resume__date">{year}</span>
     <h3 className="resume__subtitle">{parse(title)}</h3>
     <p className="resume__description">{parse(desc)}</p> 
    </div>
   
  )
}

export default Resume
