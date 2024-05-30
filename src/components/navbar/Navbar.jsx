import React , {useState} from 'react';
import { links } from '../../data';
import { NavLink } from "react-router-dom";
import  "./navbar.css"
const Navbar = () => {
  
  const [showMenu, setShowMenu] = useState(false)
  return (
 <nav className="nav">
  <div className={`${showMenu ? 'nav__menu show-menu' : 'nav__menu'}`}>
    <ul data-aos="fade-left"
    data-aos-duration="800"
    data-aos-delay="1000"
     className="nav--list">
    {links.map(({name , icon , path ,} , index )  => {
    return (
      <li className="nav__item" key={index}>
       <NavLink  to={path} className={({isActive}) =>
         isActive ? 'nav__link Active__nav' :  'nav__link' }
         onClick={()=> setShowMenu(!showMenu)}>
       
         {icon}
         <h3 className="nav__name">{name}</h3>
       </NavLink>

      </li>
    )}
    )}
    </ul>
  </div>
  <div className={`${showMenu ? 'nav__toggle animate-toggle' : 'nav__toggle'}`} onClick={() => setShowMenu(!showMenu) }>
    <span></span>
    <span></span>
    <span></span>
  </div>
 </nav>
  )
}

export default Navbar
