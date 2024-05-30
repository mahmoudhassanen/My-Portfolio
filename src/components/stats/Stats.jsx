import React, { useEffect } from 'react';
import {stats} from '../../data';
import parse from 'html-react-parser';
import AOS from "aos";
import "aos/dist/aos.css";
export default function Stats({no}) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  
  return (
   <>
      {stats.map(({no , title} , index ) => 
      {
        return <> 
        <div
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="500"
        data-aos-offset="0"
        data-aos-easing="ease-in-sine"
        className="stats__box" key={index}>
           <h3 className="stats__no">{no}</h3>
           <p className='stats__title'>{parse(title)}</p> 
        </div>
        </>
      }
      )}
   </>
  )
}
