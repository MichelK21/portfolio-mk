import React from "react";
import { useState } from "react";

import Logo from "../assets/logo-mk-0.jpg";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, SetNav] = useState(false);
  const handleClick = () => SetNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo " style={{ width: "80px" }} />
      </div>

      {/* Desktop menu */}
      <div>
        {/* en dessous de 768px, rien n'est affiché, étirer pour voir */}
        <ul className="hidden md:flex">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* {Menu Hamburger} */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* {Mobile Menu} */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl ">
          <Link
            onClick={handleClick}
            to="home"
            smooth={true}
            duration={500}
            offset={-100}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          <Link
            onClick={handleClick}
            to="about"
            smooth={true}
            duration={500}
            offset={-100}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          <Link
            onClick={handleClick}
            to="skills"
            smooth={true}
            duration={500}
            offset={-50}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          <Link
            onClick={handleClick}
            to="work"
            smooth={true}
            duration={500}
            offset={-100}
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* {Social icons} */}
      <div className=" hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/michel-k-a201391bb/"
              target="_blank"
              rel="noreferrer"
            >
              {/* <FaLinkedin /> */}Linkedin
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/MichelK21"
              target="_blank"
              rel="noreferrer"
            >
              Github
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:michelkacou10@gmail.com"
              // target="_blank"
              // rel="noreferrer"
            >
              Email
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <Link
              onClick={handleClick}
              to="cv"
              className="flex justify-between items-center w-full text-gray-300"
            >
              CV
              <BsFillPersonLinesFill size={30} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
