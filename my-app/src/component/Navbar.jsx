import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };
  return (
    <div className=" px-4 h-20 w-full flex justify-between items-center absolute z-20 text-white">
      <div>
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}  >Plateau.</h1>
      </div>
      <div>
        <ul className="hidden  md:flex">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Travel</a>
          </li>
          <li>
            <a href="/">View</a>
          </li>
          <li>
            <a href="/">Book</a>
          </li>
        </ul>
      </div>
      <div className="hidden md:flex gap-4 font-extrabold ">
        <BiSearch size={25} />
        <BsPerson size={25} />
      </div>
      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? (
          <AiOutlineClose className="text-black" size={20} />
        ) : (
          <HiOutlineMenu size={25} />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "w-full left-0 top-0 absolute bg-gray-100/90 px-4 py-7 flex flex-col text-black ease-in-out duration-700"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <h1>Plateau.</h1>
          <li className="border-b">Home</li>
          <li className="border-b">Destinations</li>
          <li className="border-b">Travel</li>
          <li className="border-b">View</li>
          <li className="border-b">Book</li>
          <div className="flex flex-col my-6">
            <button className="my-6">Search</button>
            <button>Account</button>
          </div>
          <div className='flex justify-between my-6'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
