import React from "react";
import { FaStar } from "react-icons/fa";
import { LuQuote } from "react-icons/lu";
import { assets } from "../assets/assets";


const SuccessStories = () => {
  
  
  const testimonials = [
    {
      quote: "EduPlatform's NEET coaching was exceptional. The structured approach and regular mock tests helped me achieve my dream of getting into AIIMS.",
      name: "Priya Sharma",
      details: "NEET 2024 AIR 156",
      tag: "NEET",
      tagBg: "bg-blue-100 text-blue-800",
      image: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Priya", // Placeholder image
      rating: 5,
    },
    {
      quote: "The doubt clearing sessions and personalized attention from teachers made all the difference. Highly recommend for JEE preparation.",
      name: "Arjun Patel",
      details: "JEE Advanced AIR 89",
      tag: "JEE",
      tagBg: "bg-blue-100 text-blue-800",
      image: assets.arjun,
      rating: 5,
    },
    {
      quote: "The interactive classes and comprehensive study material helped me score excellent marks in my boards. The teachers are very supportive.",
      name: "Sneha Reddy",
      details: "Class 12 CBSE - 98.2%",
      tag: "CBSE",
      tagBg: "bg-blue-100 text-blue-800",
      image:assets.sneha,
      rating: 5,
    },
    {
      quote: "EduPlatform's UPSC course is comprehensive with excellent current affairs coverage. The essay writing sessions were particularly helpful.",
      name: "Rahul Kumar",
      details: "UPSC CSE 2023 - Rank 45",
      tag: "UPSC",
      tagBg: "bg-blue-100 text-blue-800",
      image: assets.rahul,  
      rating: 5,
    },
    {
      quote: "The speed training and mock tests for SSC were exactly what I needed. The quantitative aptitude sessions boosted my confidence significantly.",
      name: "Ananya Singh",
      details: "SSC CGL 2023 Selected",
      tag: "SSC",
      tagBg: "bg-blue-100 text-blue-800",
      image: assets.ananya, 
      rating: 5,
    },
    {
      quote: "The banking exam preparation course is well-structured with focus on reasoning and quantitative aptitude. Cleared SBI PO in first attempt!",
      name: "Vikash Mehta",
      details: "Banking PO - SBI",
      tag: "Banking",
      tagBg: "bg-blue-100 text-blue-800",
      image: assets.vikas, 
      rating: 5,
    },
  ];

  const StarRating = ({ count }) => (
    <div className="flex text-yellow-500">
      {Array.from({ length: 5 }, (_, i) => (
        <FaStar key={i} className="w-4 h-4" />
      ))}
    </div>
  );

  return (
    <section className="pt-20 pb-16 bg-white"> 
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Title and Subtitle Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Success Stories
          </h2>
          <p className="text-lg text-gray-500">
            Hear from our students who achieved their dreams with our guidance
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((story, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 
                         hover:shadow-xl transition duration-300 relative"
            >
              {/* Quote Icon and Rating */}
              <div className="flex justify-between items-center mb-4">
                <LuQuote className="text-black-300 text-3xl" />
                <StarRating count={story.rating} />
              </div>

              {/* Quote Text */}
              <p className="text-gray-500 text-sm mb-6 leading-relaxed italic">
                "{story.quote}"
              </p>

              {/* Student Info */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center">
                  {/* Student Image */}
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                  {/* Name and Details */}
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{story.name}</p>
                    <p className="text-xs text-gray-500">{story.details}</p>
                  </div>
                </div>

                {/* Tag */}
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${story.tagBg}`}>
                  {story.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          <p className="text-gray-400 mb-6">
            Join thousands of successful students
          </p>
          <div className="flex justify-center space-x-4">
            {/* Explore Courses Button */}
            <button className="px-6 py-3 bg-[#2B6CB0] text-white  rounded-lg hover:bg-blue-700 transition duration-300">
              Explore Courses
            </button>
            {/* View All Stories Button */}
            <button className="px-6 py-3 border border-blue-400 text-[#2B6CB0]   rounded-lg hover:bg-gray-50 transition duration-300">
              View All Success Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;