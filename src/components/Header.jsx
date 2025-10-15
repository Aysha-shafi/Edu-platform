import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { assets } from "../assets/assets"; 




const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-3">
                 <div className="flex items-center gap-2">
    <img src={assets.logo} alt="Logo" className="w-10 h-10 object-contain" />
    <h1 className="text-xl font-bold text-black-600">EduPlatform</h1>
  </div>

        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600 flex items-center gap-1">
  Courses <RiArrowDropDownLine className="text-xl" />
</a>

          <a href="#" className="hover:text-blue-600">My Learning</a>
          <a href="#" className="hover:text-blue-600">Test Practice</a>
          <a href="#" className="hover:text-blue-600">About Us</a>
        </nav>
       <div class="space-x-3">
  <button class="px-4 py-1 border-2 border-gray-300 text-black  rounded-lg     ">
    Login
  </button>
  <button class="px-3 py-1.5 bg-[#2B6CB0] border-2 text-white  rounded-lg  hover:bg-blue-800   ">
    Sign Up
  </button>
</div>
      </div>
    </header>
  );
};

export default Header;
