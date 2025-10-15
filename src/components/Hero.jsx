import React from "react";
import heroImg from "../assets/hero.png";
import { IoPlayOutline } from "react-icons/io5";
import { RiBookOpenLine } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";




const Hero = () => {
  return (
<section
  className="text-white py-16"
  style={{
    backgroundImage: 'linear-gradient(to bottom right, #DD2476 0%, #8A2387 50%, #4080FF 100%)'
  }}
>      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-8 px-4">
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Master Your <br /><span className="text-[#2B6CB0]">Academic Goals</span> <br /> with Expert <br /> Guidance
          </h2>
          <p className="mb-6 text-lg">
            From school tuition to competitive exam preparation, get <br />
            personalized online coaching
            that adapts to your learning <br /> style and schedule.
          </p>



           <div className="flex items-center space-x-6 text-sm mb-8">
            
            
            <div className="flex items-center space-x-1">
                <FaRegStar className="w-5 h-5 text-yellow-400" />
                <span className=" text-white">4.9/5 Rating</span>
            </div>
            
          
            <div className="flex items-center space-x-1">
                <FaUserFriends className="w-5 h-5 text-blue-300" />
                <span className=" text-white">50,000+ Students</span>
            </div>

            
            <div className="flex items-center space-x-1">
                <RiBookOpenLine className="w-5 h-5 text-orange-400" />
                <span className=" text-white">500+ Courses</span>
            </div>
          </div>
          <button className="px-6 py-2 bg-[#2B6CB0] rounded-lg mr-4">Explore Courses</button>
<button className="px-6 py-2 border rounded-lg text-[#2B6CB0] bg-white inline-flex items-center space-x-2">
    <IoPlayOutline className="w-5 h-5" /> 
    <span>Watch Demo</span>
</button>        </div>
        <div className="relative w-full h-full"> 
          <img src={heroImg} alt="Hero" className=" shadow-lg w-full h-auto object-cover" /> 

          
           <div className="absolute top-0 left-0 bg-white text-gray-800 pl-2 pr-4 py-3 rounded-lg flex items-center space-x-2 shadow-md">
            <span className="block w-2.5 h-2.5 bg-green-500 rounded-full"></span> 
            <span className="text-gray-600 text-sm">Live Classes</span>
          </div>

          
          <div className="absolute bottom-10 right-0 bg-white text-gray-800 px-5 py-3 rounded-lg shadow-lg text-center">
            <p className="text-blue-600 font-bold text-xl leading-none">98%</p> 
            <p className="text-gray-600 text-xs mt-1">Success Rate</p> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
