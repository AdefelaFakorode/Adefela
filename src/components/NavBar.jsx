import { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import {Link} from 'react-scroll'

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const navbarStyle = {
    boxShadow: "0px 4px 6px rgba(0, 0, 0, .3)",
    zIndex: 1
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-end items-center px-4 bg-primary  font-bold" style={navbarStyle}>
      <div className="hidden sm:flex ">
        {/* Menu */}
        <ul className="sm:flex hidden">
          <li className="text-primaryTextColor translate-colors duration-300 hover:text-bHoverColor">
          <Link 
      activeClass="active" 
      to="home" 
      smooth={true} 
      duration={500} 
    >
      Home
    </Link>
          </li>
          <li className="text-primaryTextColor translate-colors duration-300 hover:text-bHoverColor">
          <Link 
      activeClass="active" 
      to="about" 
      smooth={true} 
      duration={500} 
    >
      About
    </Link>
          </li>
          <li className="text-primaryTextColor translate-colors duration-300 hover:text-bHoverColor">
          <Link 
      activeClass="active" 
      to="skills" 
      smooth={true} 
      duration={500} 
    >
      Skills
    </Link>
          </li>
          <li className="text-primaryTextColor translate-colors duration-300 hover:text-bHoverColor">
          <Link 
      activeClass="active" 
      to="projects" 
      smooth={true} 
      duration={500} 
    >
      Projects
    </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className="sm:hidden z-10 text-primaryTextColor translate-colors duration-300 hover:text-bHoverColor">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-primary flex flex-col justify-center items-center '} style={navbarStyle}>
        <li className="py-6 text-4xl text-primaryTextColor translate-colors duration-300 hover:text-bHoverColor">
        <Link 
        onClick={handleClick} 
      activeClass="active" 
      to="home" 
      smooth={true} 
      duration={500} 
    >
      Home
    </Link>
        </li>
        <li className="py-6 text-4xl text-primaryTextColor translate-colors duration-300 hover:text-bHoverColor">
        <Link 
        onClick={handleClick}
      activeClass="active" 
      to="about" 
      smooth={true} 
      duration={500} 
    >
      About
    </Link>
        </li>
        <li className="py-6 text-4xl text-primaryTextColor translate-colors duration-300 hover:text-bHoverColor">
        <Link 
        onClick={handleClick}
      activeClass="active" 
      to="skills" 
      smooth={true} 
      duration={500} 
    >
      Skills
    </Link>
        </li>
        <li className="py-6 text-4xl text-primaryTextColor translate-colors duration-300 hover:text-bHoverColor">
        <Link 
        onClick={handleClick}
      activeClass="active" 
      to="projects" 
      smooth={true} 
      duration={500} 
    >
      Projects
    </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
