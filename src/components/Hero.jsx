import React, { useState, useEffect } from "react";
export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    var interval = window.setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === 3 ? 1 : prevSlide + 1));
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="w-full h-128 bg-white relative">
      <img
        src="https://res.cloudinary.com/dgjw3jwe3/image/upload/v1638810192/images/Projects/XR3/XR3_hnleoo.jpg"
        className={`w-full h-full object-cover object-center absolute inset-0 ${
          currentSlide === 1
            ? "translate-x-0 transition-transform duration-1000"
            : currentSlide === 2
            ? "-translate-x-full transition-transform duration-1000"
            : currentSlide === 3
            ? "translate-x-full"
            : ""
        }`}
      />
      <img
        src="https://res.cloudinary.com/dgjw3jwe3/image/upload/v1638419234/images/Projects/Midtown360/Midtown_360_HR_112_of_116_edit_adnzhu.jpg"
        className={`w-full h-full object-cover object-center absolute inset-0 ${
          currentSlide === 2
            ? "translate-x-0 transition-transform duration-1000"
            : currentSlide === 1
            ? "translate-x-full"
            : currentSlide === 3
            ? "-translate-x-full transition-transform duration-1000"
            : ""
        }`}
      />
      <img
        src="https://res.cloudinary.com/dgjw3jwe3/image/upload/v1638390991/images/Projects/LeMeridien/C05-Edited_eahsrb.jpg"
        className={`w-full h-full object-cover object-center absolute inset-0 ${
          currentSlide === 3
            ? "translate-x-0 transition-transform duration-1000"
            : currentSlide === 2
            ? "translate-x-full"
            : currentSlide === 1
            ? "-translate-x-full transition-transform duration-1000"
            : ""
        }`}
      />
      <div className="max-w-5xl w-full h-full mx-auto relative px-4 py-12">
        <div className="h-full w-max bg-darkbg bg-opacity-80 px-10 py-6 relative flex flex-col items-start justify-between border-sushi border-solid border-4 z-50">
          <div>
            <h1 className="font-semibold text-md text-white uppercase mb-2">
              {currentSlide === 1
                ? "Multi-Family"
                : currentSlide === 2
                ? "Residential"
                : "Industrial"}
            </h1>
            <h1 className="font-bold text-white text-4xl uppercase">
              The
              <br />
              Ritchie
              <br />
              Group
            </h1>
          </div>
          <a href="/projects" className="font-semibold text-sm hover:underline">
            See Projects <span className="text-xs">{">"}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
