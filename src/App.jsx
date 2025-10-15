import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Courses from "./components/Courses";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import AppDownload from "./components/AppDownload";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <Hero />
      <Programs />
      <Courses />
      <Stats />
      <Features />
      <Testimonials />
      <AppDownload />
      <Footer />
    </div>
  );
}

export default App;
