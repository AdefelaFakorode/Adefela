import { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const navbarStyle = {
    boxShadow: "0px 4px 6px rgba(0, 0, 0, .3)"
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-end items-center px-4 bg-primary  font-bold" style={navbarStyle}>
      <div className="hidden sm:flex ">
        {/* Menu */}
        <ul className="sm:flex hidden">
          <li className="text-primaryTextColor translate-colors duration-300 hover:text-bHoverColor">Home</li>
          <li className="text-primaryTextColor translate-colors duration-300 hover:text-bHoverColor">About</li>
          <li className="text-primaryTextColor translate-colors duration-300 hover:text-bHoverColor">Project</li>
          <li className="text-primaryTextColor translate-colors duration-300 hover:text-bHoverColor">Contact</li>
        </ul>
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className="sm:hidden z-10 text-primaryTextColor translate-colors duration-300 hover:text-bHoverColor">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-primary flex flex-col justify-center items-center '} style={navbarStyle}>
        <li className="py-6 text-4xl text-primaryTextColor translate-colors duration-300 hover:text-bHoverColor">Home</li>
        <li className="py-6 text-4xl text-primaryTextColor translate-colors duration-300 hover:text-bHoverColor">About</li>
        <li className="py-6 text-4xl text-primaryTextColor translate-colors duration-300 hover:text-bHoverColor">Project</li>
        <li className="py-6 text-4xl text-primaryTextColor translate-colors duration-300 hover:text-bHoverColor">Contact</li>
      </ul>
    </div>
  );
}

export default NavBar;
