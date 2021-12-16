import React, { useState } from "react";
import { XIcon } from "@heroicons/react/outline";

export default function TeamCard({ name, headshot, title, bio }) {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="relative w-full h-96 flex items-end p-6 transition-all duration-300 group">
        <img
          src={headshot}
          className="object-cover w-full h-full absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-gray-400 mix-blend-multiply hover:bg-sushi transition-all duration-300 opacity-0 group-hover:opacity-50"></div>
        <div className="relative opacity-0 group-hover:opacity-100 transition duration-150">
          <h1 className="text-3xl font-bold mb-1">{name}</h1>
          <p className="text-gray-300 mb-2">{title}</p>
          <button onClick={() => setIsOpen(true)} className="text-white">
            See More
          </button>
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
          <XIcon
            onClick={() => setIsOpen(false)}
            className="text-white absolute top-4 right-4 w-8 h-8 hover:text-gray-300 cursor-pointer"
          >
            X
          </XIcon>
          <div className="flex flex-col md:flex-row w-full h-full pt-12 md:p-0">
            <div className="relative w-full h-96 md:h-full md:w-96 mr-4 mb-2 md:mb-0">
              <img
                src={headshot}
                className="w-full h-full object-cover object-center absolute inset-0"
              />
            </div>
            <aside className="flex flex-col items-start justify-start">
              <div className="grid grid-col-2 gap-4">
                  <div>
                    <h1 className="text-5xl font-bold mb-1">{name}</h1>
                  </div>
                  <div>
                    <a href="#" class="text-gray-300 hover:text-gray-500">
                    <span class="sr-only">LinkedIn</span>
                    <svg
                      class="h-10 w-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    </a>
                  </div>
              </div>
              <br />
              <p className="mb-2 text-2xl">{title}</p>
              <p className="text-2xl">{bio}</p>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
