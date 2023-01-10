import React from "react";
export default function ProjectCard({ image, title, id }) {
  return (
    <div className="relative w-full h-96 flex items-end p-6 mt-4 hover:text-white text-sushi transition-all duration-300">
      <img
        src={image}
        className="object-cover w-full h-full absolute inset-0"
      />
      <div className="absolute inset-0 bg-gray-500 mix-blend-multiply hover:bg-sushi transition-all duration-300"></div>
      <div className="relative">
        <h1 className="text-3xl font-bold">{title}</h1>
        <a href={`/projects/${id}`} className="text-white">
          See Project <span>{">"}</span>
        </a>
      </div>
    </div>
  );
}
