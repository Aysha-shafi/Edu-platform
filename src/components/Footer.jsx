import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";


import logo from "../assets/logo.png";
const Footer = () => {
  return (

    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">

          {/* 1. EduPlatform Section */}
          <div>
            <div className="flex items-center mb-3">
              <img src={logo} alt="EduPlatform Logo" className="w-8 h-8 mr-2" />
              <h4 className="font-bold text-lg">EduPlatform</h4>
            </div>
            <p className="text-sm text-gray-400 mt-2 max-w-xs">
              Empowering students with quality education through comprehensive online tuition and coaching programs.
            </p>

            <div className="flex space-x-3 mt-4 text-gray-400">
              <FaFacebookF className="hover:text-white cursor-pointer" />
              <FaTwitter className="hover:text-white cursor-pointer" />
              <FaInstagram className="hover:text-white cursor-pointer" />
              <FaYoutube className="hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* 2. Quick Links Section */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>School Tuition</li>
              <li>College Tuition</li>
              <li>Entrance Coaching</li>
              <li>Government Exams</li>
              <li>UPSC Coaching</li>
            </ul>
          </div>

          {/* 3. Support Section */}
          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>Help Center</li>
              <li>FAQ</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          {/* 4. Contact Info Section */}




          <div>
            <h4 className="font-bold text-lg mb-4">Contact info</h4>
            <div className="space-y-3 text-sm">


              <p className="flex items-center text-gray-400">
                <MdOutlineEmail className="w-4 h-4 mr-2 text-blue-400" />
                support@eduplatform.com
              </p>

              <p className="flex items-center text-gray-400">
                <IoCallOutline className="w-4 h-4 mr-2 text-blue-400" />
                +91 98765 43210
              </p>

              <p className="flex items-center text-gray-400">
                <IoLocationOutline className="w-4 h-4 mr-2 text-blue-400" />
                Mumbai, Maharashtra, India
              </p>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="text-center text-gray-500 text-sm">
          © 2024 EduPlatform. All rights reserved. | Designed for Excellence in Education
        </div>
      </div>
    </footer>
  );
};

export default Footer;

