import React, { useEffect, useRef, useState } from "react";
import Fade from "react-reveal/Fade";

export default function StatsSection() {
  return (
    <>
      <div className="relative grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto px-4 py-8 gap-6">
        <div
          className={`flex items-center justify-start md:justify-center w-full`}
        >
          <Fade left>
            <div className="w-32 h-32 border-solid border-sushi border-4 flex items-center">
              <h2 className="text-7xl font-bold ml-6">3124</h2>
            </div>
            <div className="w-24"></div>
            <div className="h-full flex items-center font-normal text-lg">
              <h1>
                Apartment Units
                <br />
                Under Construction
              </h1>
            </div>
          </Fade>
        </div>
        <Fade right>
          <img src="https://res.cloudinary.com/dgjw3jwe3/image/upload/v1638390277/images/num-ap_r0t39d.jpg" className={`w-full h-auto z-10`} />
          <div
            style={{ backgroundImage: `url(/elements/dots.svg)` }}
            className={`w-64 h-48 absolute -right-2 bottom-4 z-0 transform transition-all duration-500 bg-cover bg-no-repeat `}
          />
        </Fade>
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto px-4 py-12 gap-6">
        <div className="flex items-center justify-start md:justify-center w-full md:col-start-2">
          <Fade right>
            <div className="w-32 h-32 border-solid border-sushi border-4 flex items-center">
              <h2 className="text-7xl font-bold ml-10">4.2</h2>
            </div>
            <div className="w-12"></div>
            <div className="h-full flex items-center font-normal text-lg">
              <h1>
                Million Industrial
                <br />
                Square Feet
              </h1>
            </div>
          </Fade>
        </div>
        <Fade left>
          <img
            src="https://res.cloudinary.com/dgjw3jwe3/image/upload/v1638391095/images/Projects/XR1/Interior_2_b3sbrx.jpg"
            className={`w-full h-auto transform z-10 md:col-start-1 md:row-start-1`}
          />
          <div
            style={{ backgroundImage: `url(/elements/dots.svg)` }}
            className={`w-64 h-48 absolute -left-2 bottom-4 z-0 transform transition-all duration-500 bg-cover bg-no-repeat `}
          />
        </Fade>
      </div>
    </>
  );
}
