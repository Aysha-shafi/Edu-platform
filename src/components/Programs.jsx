import React from "react";
import { programs } from "../data/programs";

const Programs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-25">
        {/* Heading */}
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-3">
          Comprehensive Learning Programs
        </h3>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-14">
          Choose from our wide range of courses designed to help you achieve your <br />
          academic and career goals
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((prog, i) => (
            <div
              key={i}
              className="bg-gray-30 rounded-xl  shadow-sm hover:shadow-md transition p-8"
            >

            
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-lg text-2xl mb-6 ${prog.color}`}
              >
                {prog.icon}
              </div>

              {/* Title */}
              <h4 className="font-semibold text-lg text-gray-800 mb-2">
                {prog.title}
              </h4>

              {/* Description */}
<p className="text-gray-600 text-sm mb-4 whitespace-pre-line">{prog.desc}</p>

              {/* Features */}
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                {prog.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-blue-500 text-xs">●</span> {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button className="px-5 py-2 border border-gray-300 text-gray-700 rounded-md text-sm hover:bg-gray-50">
                Explore Courses
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
