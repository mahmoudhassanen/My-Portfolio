import React, { useEffect } from 'react';
import Me from '../../assets/7ssnein.jpeg';
import Confetti from "react-confetti";
import {FaArrowRight } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import './Home.css'
import useWindowSize from "react-use/lib/useWindowSize";
const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  const { width, height } = useWindowSize();
  return (
    <section className='home section grid'>
       <Confetti width={width} height={height} recycle={false} />
     <img src={Me} alt="" className='home__img'/>
     <div className="home__content">
      <div className="home__data">
        <h1 
       data-aos="fade-down"
       data-aos-easing="linear"
       data-aos-duration="1500"

        className="home__title">
          <span >  I'm Mahmoud Hassanen. 
            </span> <br /> Front-end Developer
        </h1>
        <p className="home__desc">Hi, I'm Mahmoud Hassanen, a 24-year-old frontend developer passionate about construction attractive website & portfolio. With expertise in HTML, CSS, and JavaScript , React js , I specialize in creating user-friendly interfaces that make an impact.  </p>

        <Link 
          //  data-aos="fade-up"
          //  data-aos-duration="3000"
        to='/contact' className='button bounce-top'>
        Contact With Me<span className='button__icon'><FaArrowRight /> </span>
        </Link>
      </div>
     </div>
     <div className="color__block"></div>
    </section>
  )
}

export default Home
