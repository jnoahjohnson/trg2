import React, { useState } from "react";
import projects from "../data/projects.json";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  const [currentProjects, setCurrentProjects] = useState(projects.slice(0, 6));

  const setProjectCategory = (category) => {
    setCurrentProjects(
      projects.filter((project) => project.category === category).slice(0, 6)
    );
  };
  return (
    <div class="px-4 max-w-5xl mx-auto py-8">
      <h1 class="text-3xl font-bold mb-2">Project Highlights</h1>
      <ul class="italic flex gap-6 mb-1">
        <li>
          <button onClick={() => setCurrentProjects(projects.slice(0, 6))}>
            All
          </button>
        </li>
        <li>
          <button onClick={() => setProjectCategory("multi-family")}>
            Multi-Family
          </button>
        </li>
        <li>
          <button onClick={() => setProjectCategory("industrial")}>
            Industrial
          </button>
        </li>
        <li>
          <button onClick={() => setProjectCategory("hospitality")}>
            Hospitality
          </button>
        </li>
      </ul>
      {currentProjects.length === 0 && (
        <p className="text-center text-xl font-bold py-2">
          There are no projects with this cateogry.
        </p>
      )}
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {currentProjects.map((project) => (
          <ProjectCard
            title={project.title}
            image={project.image}
            id={project.id}
          />
        ))}
      </div>
      <div class="text-center">
        <a
          class="text-gray-200 bg-gray-600 hover:bg-gray-700 px-4 py-2 inline-block"
          href="/projects"
        >
          View All Projects
        </a>
      </div>
    </div>
  );
}
