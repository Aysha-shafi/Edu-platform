import React from "react";
import { HiOutlineUsers, HiOutlineBookOpen,  HiOutlineClock } from "react-icons/hi2";
import { LuAward } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";


const Stats = () => {

  const data = [
    { 
      icon: HiOutlineUsers, 
      number: "50,000+", 
      label: "Active Students", 
      subtext: "Learning with us" 
    },
    { 
      icon: HiOutlineBookOpen, 
      number: "500+", 
      label: "Courses Available", 
      subtext: "Across all categories" 
    },
    { 
      icon: LuAward, 
      number: "98%", 
      label: "Success Rate", 
      subtext: "In competitive exams" 
    },
    { 
      icon: HiOutlineClock, 
      number: "10,000+", 
      label: "Hours of Content", 
      subtext: "High-quality videos" 
    },
  ];

  return (
    <section className="bg-[#2B6CB0] text-white py-12 md:py-16"> 
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Title Section */}
        <div className="text-center mb-8 ">
          <h2 className="text-2xl font-bold mb-3">Trusted by Thousands of Students</h2>
          <p className=" text-blue-100 text-xs">Our numbers speak for the quality of education we provide</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 text-center gap-10">
          {data.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="flex flex-col items-center">
              
                <div className="bg-white/20 p-2 rounded-xl mb-6">
                  <Icon className="w-5 h-5" />
                </div>
                
                {/* Number */}
                <h3 className="text-2xl font-bold mb-2">
                  {stat.number}
                </h3>
                
               
                <p className=" font-medium mb-1 text-sm">
                  {stat.label}
                </p>

               
                <p className="text-blue-100 text-xs">
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;