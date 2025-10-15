import React from "react";
import { Download } from "lucide-react";
import { MdOutlineFileDownload } from "react-icons/md";
import { CiMobile2 } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";

const AppDownload = () => {
  return (
    <section className="bg-[linear-gradient(to_left,_#DD2476_0%,_#8A2387_50%,_#4080FF_100%)] text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
        
      
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h2 className="text-4xl font-bold mb-4">
            Take Your Learning <br />
            Anywhere with Our App
          </h2>
          <p className="text-lg text-gray-200 mb-6">
            Download the EduPlatform mobile app and access all your <br /> courses,
            live classes, and study materials on the go.
          </p>

          <ul className="text-gray-100 space-y-3 mb-6 text-base">
            <li><span className="font-bold mr-1">•</span> Offline video downloads</li>
            <li><span className="font-bold mr-1">•</span> Push notifications for classes</li>
            <li><span className="font-bold mr-1">•</span> Interactive practice tests</li>
            <li><span className="font-bold mr-1">•</span> Progress tracking & analytics</li>
          </ul>

          <div className="flex items-center space-x-2 mb-8">
            <span className="text-yellow-300 text-lg"><FaRegStar /></span>
            <p className="text-gray-100 text-sm">4.8/5 on App Store & Play Store</p>
          </div>

          {/* Download Buttons */}
          <div className="flex space-x-4">
            {/* App Store Button */}
            <button className="flex items-center space-x-2 bg-black text-white text-xs px-5 py-3 rounded-lg hover:bg-gray-900 transition">
              <MdOutlineFileDownload className="text-xl" />
              <div className="text-left">
                Download on the <br />
                <span className="text-base font-semibold">App Store</span>
              </div>
            </button>

            {/* Google Play Button */}
            <button className="flex items-center space-x-2 bg-black text-white text-xs px-6 py-3 rounded-lg hover:bg-gray-900 transition">
              <MdOutlineFileDownload className="text-xl" />
              <div className="text-left">
                Get it on <br />
                <span className="text-base font-semibold">Google Play</span>
              </div>
            </button>
          </div>
        </div>

        
        <div className="lg:w-1/2 flex justify-center relative scale-90 md:scale-100">
            
            
            <div className="relative w-80 p-1 bg-white border-8 border-black rounded-[3rem] shadow-2xl">

                
                <div className="bg-white text-gray-800 rounded-[2.5rem] p-6 pt-0 h-auto"> 
                   
                    
                    <div className="flex items-center justify-between h-10 px-6 bg-gray-100 rounded-t-[2.5rem] mx-[-1.5rem]">
                      
                        <span className="text-lg">9:41</span>
                        
                        
                        <div className="space-x-1 flex items-center">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        </div>
                    </div>

                    
                    <div className="pt-4 pb-6"> 
                      
                        <div className="mb-4 flex items-center space-x-20"> 
                            <h4 className="font-extrabold text-2xl text-gray-900 leading-none">EduPlatform</h4>
                            <CiMobile2 className="text-blue-600 text-4xl" /> 
                        </div>

                       
                        {/* Live Class Starting Card */}
                        <div className="bg-green-50 p-4 rounded-xl mb-4">
                            <p className="text-blue-600 font-semibold text-lg">Live Class Starting</p>
                            <p className="text-sm text-gray-500">Mathematics – 10:00 AM</p>
                        </div>

                        {/* Today's Practice Card */}
                        <div className="bg-white p-4 rounded-xl mb-4 shadow-sm">
                            <p className="font-semibold text-lg">Today's Practice</p>
                            <p className="text-sm text-gray-500">5 questions remaining</p>
                        </div>

                        {/* Test Results Card */}
                        <div className="bg-green-50 p-4 rounded-xl">
                            <p className="font-semibold text-lg text-green-700">Test Results</p>
                            <p className="text-sm text-gray-500">Score: 85/100</p>
                        </div>
                    </div> 

                </div>
               
            </div>
            
            
            
            <div className="absolute -bottom-8 -left-10 bg-green-500 p-3 rounded-full shadow-lg z-20">
              <Download className="text-white w-7 h-7" />
            </div>
            
            
            <div className="absolute top-2 right-4 bg-yellow-400 p-3 rounded-full shadow-lg z-20">
              <FaRegStar className="text-amber-700 w-7 h-7" />
            </div>

        </div>
      </div>
    </section>
  );
};

export default AppDownload;