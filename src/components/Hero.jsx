import React from "react";
export default function Hero() {
  return (
    <div className="w-full h-128 bg-white relative">
      <img
        src="/images/XR-front.png"
        className="w-full h-full object-cover object-center absolute inset-0"
      />
      <div className="max-w-5xl w-full h-full mx-auto relative px-4 py-12">
        <div className="h-full w-max bg-darkbg bg-opacity-50 px-10 py-6 relative flex flex-col items-start justify-between border-sushi border-solid border-4">
          <div>
            <h1 className="font-semibold text-md text-white uppercase mb-2">
              Industrial
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
