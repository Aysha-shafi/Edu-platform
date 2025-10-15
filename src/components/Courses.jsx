import React from "react";
import { courses } from "../data/courses";
import { FaStar,} from "react-icons/fa";
import { LuClock4 } from "react-icons/lu";
import { FiBookOpen } from "react-icons/fi";



const Courses = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h3 className="text-3xl font-bold text-center mb-3">Popular Courses</h3>
        <p className="text-gray-500 text-center mx-auto mb-10">
          Join thousands of students already learning with our top-rated courses
        </p>

        {/* Course Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden"
            >
              {/* Course Image */}
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-40 object-cover"
                />

              
              </div>

              {/* Course Content */}
              <div className="p-4">
               


<div className="flex items-center justify-between mb-2">
  

  <span className="inline-block text-sm font-medium text-black bg-white border border-gray-300 px-3  rounded-full whitespace-nowrap">
    {course.level}
  </span>

  {/* Rating */}
  <div className="flex items-center text-sm">
    <FaStar className="text-yellow-500 mr-1" /> 
    <span className="text-black">{course.rating} </span>
    <span className="text-gray-400 ml-1">({course.students})</span> 
  </div>
</div>


                {/* Title */}
                <h4 className="font-semibold mb-1">{course.title}</h4>

                 

                {/* Teacher */}
                <p className="text-sm text-gray-500 mb-2 mt-3">{course.teacher}</p>

           

               

                {/* Duration & Lessons */}
                <div className="flex text-gray-500 text-xs mb-3 gap-16">
                  <span className="flex items-center gap-1">
                   <LuClock4 />{course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                 <FiBookOpen /> {course.lessons} lessons
                  </span>
                </div>

                {/* Price */}
                <div className="mb-3">
                  <span className="text-lg font-bold text-gray-800 mr-2">
                    ₹{course.price}
                  </span>
                  {course.oldPrice && (
                    <span className="text-sm line-through text-gray-400">
                      ₹{course.oldPrice}
                    </span>
                  )}
                </div>

                {/* Button */}
                <button className=" py-2 px-4 bg-[#2B6CB0] text-white rounded-lg font-medium hover:bg-blue-700 transition">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <button className="px-6 py-2 border border-blue-600 text-[#2B6CB0] rounded-lg hover:bg-blue-50 transition">
            View All Courses →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
