import React, { useEffect } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import '../../pages/about/about.css'
import './Skills.css'
import {skills} from '../../data'
import FrontendSkills from './FrontendSkills'
import MoreSkills from './MoreSkills'
import AOS from "aos";
import "aos/dist/aos.css";
export default function Skills() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  
  return ( 
   <>
   <FrontendSkills />
   <MoreSkills />
   </>
   
  
 )
}
