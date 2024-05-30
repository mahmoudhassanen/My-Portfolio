import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/F.PNG';
import Work2 from './assets/Quiz.PNG';
import Work3 from './assets/pi.PNG';
import Work4 from './assets/R.PNG';
import Work5 from './assets/M.PNG';
import Work6 from './assets/T2.PNG';
import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';
import { FaSquareGithub } from "react-icons/fa6";
export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/aboutMe',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Mahmoud',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Hassanen',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '24 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Egyptian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Cairo',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+01115761903',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'mahmoudhassanen415@gmail.com',
  },

];

export const stats = [
 
  {
    id: 1,
    no: '12+',
    title: 'Completed <br/> Projects',
  },

 

  {
    id: 2,
    no: '5+',
    title: ' Certificates <br /> Won',
  },
  {
    id: 3,
    no: '2+',
    title: ' Freelancer <br /> Projects',
  },
];

export const resume = [
  {
    id: 1,
    category: 'education',
    icon:  <FaGraduationCap />,
    year: '2022  ',
    title: "Bachelor's degree <span> Ain Shams University </span>",
    desc: "I'm graduated from computer and information , scientific computing department"
  },

  {
    id: 2,
    category: 'education',
    icon:  <FaGraduationCap />,
    year: '2021 ',
    title: 'Front-end Developer <span> It Sharks </span>',
    desc: 'I got a certificate from the it Sharks for For Successfully Completed the front end development course',
  },

  {
    id: 3,
    category: 'education',
    icon:  <FaGraduationCap />,
    year: '2021 - 2022',
    title: 'Front-end Developer <span> Route </span>',
    desc: 'i got a certificate from route For Successfully Completed The Front-end Development Diploma ',
  },
  {
    id: 4,
    category: 'experience',
    icon:  <FaBriefcase />,
    year: '2023',
    title: 'Freelancer <span> First project </span>',
    desc: 'Design & UI Enhancements',
  },
  {
    id: 5,
    category: 'experience',
    icon:   <FaBriefcase />,
    year: '2022',
    title: 'Egyptian navy  <span>  Certificate </span>',
    desc: 'Frontend developer | Developing and maintaining web application using (html , css , javascript , React js)  ',
  },
 


  {
    id: 6,
    category: 'experience',
    icon:   <FaBriefcase />,
    year: '2023 - 2024',
    title: 'Egyptian navy <span> information system department </span>',
    desc: ' In Egyptian Navy Information System Department, I played a pivotal role as a frontend developer utilizing React.js Spearheaded design enhancements to improve user experience & optimizing API communication to enhance project efficiency ',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '90',
  },
  {
    id: 2,
    title: 'Css',
    percentage: '90',
  },
  {
    id: 3,
    title: 'Bootstrap',
    percentage: '85',
  },
  {
    id: 4,
    title: 'Javascript',
    percentage: '80',
  },
 

 

  {
    id: 5,
    title: 'React',
    percentage: '80',
  },

  {
    id: 6,
    title: 'material ui',
    percentage: '65',
  },
  {
    id: 7,
    title: 'tailwind css',
    percentage: '65',
  },
  {
    id: 8,
    title: 'Git',
    percentage: '90',
  },
 
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Ecommerce Fresh Cart',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Ecommerce',
      },
      {
        icon: <FaSquareGithub />,
        title: 'GitHub : ',
        desc: <a href='https://shorturl.at/2VqZq'>https://shorturl.at/2VqZq</a> ,
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React Js , Tailwind Css',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc:  <a href='https://rb.gy/pjnj3r'>https://rb.gy/pjnj3r</a>,
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Quiz App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Quiz',
      },
      {
        icon: <FaSquareGithub />,
        title: 'Github : ',
        desc: <a href='https://rb.gy/z6mzwu'>https://rb.gy/z6mzwu</a>,
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS ',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: <a href='https://rb.gy/4iackc'>https://rb.gy/4iackc</a> ,
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Pizza Shop',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Landing Page',
      },
      {
        icon: <FaSquareGithub />,
        title: 'Github : ',
        desc: <a href= 'https://rb.gy/0umyj6'>https://rb.gy/0umyj6</a>,
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React Js , Bootstrap',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: <a href='https://rb.gy/xi9iul'>https://rb.gy/xi9iul</a> ,
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Real State',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Landing Page',
      },
      {
        icon:<FaSquareGithub />,
        title: 'Github : ',
        desc: <a href='https://shorturl.at/0H5sE'>https://shorturl.at/0H5sE</a> ,
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React Js , Tailwind CSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: <a href='https://realstate.pages.dev/'>https://realstate.pages.dev/</a> ,
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Movie App',
    details: [
      {
        title: 'Project : ',
        desc: 'Movie DB',
      },
      {
        icon: <FaSquareGithub />,
        title: 'Github : ',
        desc: <a href= 'https://shorter.me/e-kxY'>https://shorter.me/e-kxY</a>,
      },
      {
        title: 'Language : ',
        desc: 'React JS, Axios ',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: <a href='https://shorter.me/LYp1H'>https://shorter.me/LYp1H </a>,
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Todo App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Todo List',
      },
      {
        icon: <FaSquareGithub />,
        title: 'Github : ',
        desc:  <a href="https://shorter.me/BWFey">https://shorter.me/BWFey</a>,
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React Js , TypeScript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: <a href='https://shorter.me/440We'>https://shorter.me/440We</a> ,
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
