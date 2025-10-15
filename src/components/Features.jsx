import React from "react";
import { IoChatbubbleOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { LiaFileAlt } from "react-icons/lia";
import { PiChartLineUpLight } from "react-icons/pi";
import { PiHeadphonesLight } from "react-icons/pi";






import { 
  BsCameraVideo, 
  BsGlobe,
  BsShieldCheck,

} from "react-icons/bs";

const Features = () => {

  const featuresData = [
    {
      icon: BsCameraVideo,
      title: "Live Interactive Classes",
      description: "Attend live classes with real-time interaction, whiteboard sharing, and instant doubt resolution.",
    },
    {
      icon: IoChatbubbleOutline,
      title: "Doubt Clearing",
      description: "24/7 doubt clearing through chat, voice calls, or dedicated doubt clearing sessions.",
    },
    {
      icon: CiCalendar,
      title: "Flexible Scheduling",
      description: "Choose class timings that fit your schedule with recorded sessions for missed classes.",
    },
    {
      icon: LiaFileAlt,
      title: "Test Series & Practice",
      description: "Regular mock tests, chapter-wise quizzes, and previous year question papers.",
    },
    {
      icon: PiChartLineUpLight,
      title: "Progress Tracking",
      description: "Detailed analytics of your performance with personalized improvement suggestions.",
    },
    {
      icon: BsGlobe,
      title: "Multi-language Support",
      description: "Learn in your preferred language with content available in Hindi, English, and regional languages.",
    },
    {
      icon: BsShieldCheck,
      title: "Certified Instructors",
      description: "Learn from experienced teachers with proven track records in their respective subjects.",
    },
    {
      icon:  PiHeadphonesLight,
      title: "24/7 Support",
      description: "Round-the-clock technical and academic support to ensure smooth learning experience.",
    },
  ];

  return (
   
    <section className="py-10 mt-15 bg-gray-50">
      <div className="max-w-5xl mx-auto px-3">
        
        {/* Title and Subtitle Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Why Choose EduPlatform?
          </h2>
          <p className="text-sm text-gray-500 max-w-3xl mx-auto">
            Experience the perfect blend of technology and personalized learning designed <br /> for your success
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresData.map((feature, i) => {
            const Icon = feature.icon;
          
            return (
              <div 
                key={i} 
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 
                           hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="flex items-center justify-center bg-blue-50 w-12 h-12 rounded-lg mb-4 border border-blue-100 mx-auto"> 
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                
                {/* Title */}
                <h3 className="text-sm font-semibold text-gray-800 mb-2 text-center">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-xs text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            );

          })}
        </div>
      </div>
    </section>
  );
};

export default Features;