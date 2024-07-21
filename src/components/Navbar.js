import React, { useState } from "react";
import { Link } from "react-scroll";
import pic from "../Assets/pic.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: "home", text: "Home" },
    { id: "about", text: "About" },
    { id: "skills", text: "Skills" },
    { id: "projects", text: "Projects" },
    { id: "contact", text: "Contact" },
  ];

  return (
    <div className="bg-black text-white fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20 h-16 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={pic} className="h-12 w-12 rounded-full" alt="Profile" />
          <div>
            <h1 className="font-semibold text-xl cursor-pointer">
              <span className="text-blue-500 text-2xl">M</span>adhuri
              <p className="text-sm">Full Stack Developer</p>
            </h1>
          </div>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map(({ id, text }) => (
            <li key={id}>
              <Link
                to={id}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="text-green-500"
                className="text-white hover:text-blue-500 cursor-pointer"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile Menu */}
        <div className="md:hidden">
          <button onClick={() => setMenu(!menu)}>
            {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu Links */}
      {menu && (
        <div className="bg-black md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-xl">
            {navItems.map(({ id, text }) => (
              <li key={id}>
                <Link
                  to={id}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  activeClass="text-green-500"
                  className="text-white hover:text-blue-500 cursor-pointer"
                  onClick={() => setMenu(false)}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
