import React from "react";

export default function ProjectCard({ image, title, id }) {
  return (
    <div class="relative w-full h-96 flex items-end p-6 mt-4 hover:text-white text-sushi transition-all duration-300">
      <img src={image} class="object-cover w-full h-full absolute inset-0" />
      <div class="absolute inset-0 bg-gray-500 mix-blend-multiply hover:bg-sushi transition-all duration-300"></div>
      <div class="relative">
        <h1 class="text-3xl font-bold">{title}</h1>
        <a href={`/projects/${id}`} class="text-white">
          See Project <span>{">"}</span>
        </a>
      </div>
    </div>
  );
}
