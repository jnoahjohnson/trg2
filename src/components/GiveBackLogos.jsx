import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline/esm/index";

export default function GiveBackLogos({ title, image, info }) {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="relative w-full h-96 flex items-end p-6 transition-all duration-300 group">
        <img
          src={image}
          className="object-cover w-full h-full absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-gray-400 mix-blend-multiply hover:bg-sushi transition-all duration-300 opacity-0 group-hover:opacity-50"></div>
        <div className="relative opacity-0 group-hover:opacity-100 transition duration-150">
          <h1 className="text-3xl font-bold mb-1">{title}</h1>
          {/* <button onClick={() => setIsOpen(true)} className="text-white">
            See More
          </button> */}
        </div>
      </div>
      <div
        className={`${isOpen ? "fixed" : "hidden"} inset-0 w-full h-full z-30`}
      >
        <div
          className="absolute w-full h-full bg-gray-500 opacity-20"
          onClick={() => setIsOpen(false)}
        ></div>
        <div className="absolute inset-0 md:w-2/3 md:h-2/3 bg-darkbg m-auto p-4 shadow-lg">
          <XMarkIcon
            onClick={() => setIsOpen(false)}
            className="text-white absolute top-4 right-4 w-8 h-8 hover:text-gray-300 cursor-pointer"
          >
            X
          </XMarkIcon>
          <div className="flex flex-col md:flex-row w-full h-full pt-12 md:p-0">
            <div className="relative w-full h-96 md:h-full md:w-96 mr-4 mb-2 md:mb-0">
              <img
                src={image}
                className="w-full h-full object-cover object-center absolute inset-0"
              />
            </div>
            <aside className="flex flex-col items-start justify-start">
              <h1 className="text-5xl font-bold mb-1">{title}</h1>
              <br />
              <p className="mb-2 text-2xl">Social Links!</p>
              <p className="text-2xl">{info}</p>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
