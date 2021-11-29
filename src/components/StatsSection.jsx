import React, { useEffect, useRef, useState } from "react";
import { Transition } from "@headlessui/react";

export default function StatsSection() {
  const [show, setShow] = useState({
    imageOne: false,
    imageTwo: false,
  });

  const [numApartments, setNumApartments] = useState(0);
  const [numProjects, setNumProjects] = useState(0);

  const imageOneRef = useRef(null);
  const imageTwoRef = useRef(null);

  useEffect(() => {
    console.log("hello there");
    const topPos = (element) => element.getBoundingClientRect().bottom;
    //added to reduce redundancy
    const image1Pos = topPos(imageOneRef.current);
    const image2Pos = topPos(imageTwoRef.current);

    const onScroll = () => {
      const scrollPos = window.scrollY + 200;

      // The 200 is the offset until it starts
      const numPos = window.scrollY - 100;

      setNumApartments(
        Math.min(
          Math.floor(Math.abs((Math.max(numPos, 0) / image1Pos) * 300)),
          300
        )
      );

      setNumProjects(
        Math.min(
          Math.floor(Math.abs((Math.max(numPos, 0) / image2Pos) * 21)),
          21
        )
      );

      if (image1Pos < scrollPos) {
        setShow((state) => ({ ...state, imageOne: true }));
      }
      if (image2Pos < scrollPos) {
        setShow((state) => ({ ...state, imageTwo: true }));
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <>
      <div className="relative grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto px-4 py-8 gap-6">
        <div className="flex items-center justify-start md:justify-center w-full">
          <div className="w-32 h-32 border-solid border-sushi border-4 flex items-center">
            <h2 className="text-7xl font-bold ml-6">{numApartments}</h2>
          </div>
          <div className="w-16"></div>
          <div className="h-full flex items-center font-normal text-lg w-min">
            <h1>
              Number of
              <br />
              Apartments
            </h1>
          </div>
        </div>
        <img
          src="/images/num-ap.jpg"
          className={`w-full h-auto transform z-10 ${
            show.imageOne
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-5"
          } transition-all duration-300`}
          ref={imageOneRef}
        />
        <div
          style={{ backgroundImage: `url(/elements/dots.svg)` }}
          className={`w-64 h-48 absolute -right-2 bottom-4 z-0 transform transition-all duration-500 bg-cover bg-no-repeat ${
            show.imageOne
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-5"
          }`}
        />
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto px-4 py-12 gap-6">
        <div className="flex items-center justify-start md:justify-center w-full md:col-start-2">
          <div className="w-32 h-32 border-solid border-sushi border-4 flex items-center">
            <h2 className="text-7xl font-bold ml-10">{numProjects}</h2>
          </div>
          <div className="w-4"></div>
          <div className="h-full flex items-center font-normal text-lg">
            <h1>
              Projects in
              <br />
              Process
            </h1>
          </div>
        </div>
        <img
          src="/images/projects-prog.jpg"
          className={`w-full h-auto transform z-10 md:col-start-1 md:row-start-1 ${
            show.imageTwo
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-5"
          } transition-all duration-300`}
          ref={imageTwoRef}
        />
        <div
          style={{ backgroundImage: `url(/elements/dots.svg)` }}
          className={`w-64 h-48 absolute -left-2 bottom-4 z-0 transform transition-all duration-500 bg-cover bg-no-repeat ${
            show.imageTwo
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-5"
          }`}
        />
      </div>
    </>
  );
}
