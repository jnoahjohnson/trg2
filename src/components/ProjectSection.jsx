import React, { useState } from "react";
import projects from "../data/projects.json";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  const [currentProjects, setCurrentProjects] = useState(projects);

  const setProjectCategory = (category) => {
    setCurrentProjects(
      projects.filter((project) => project.category === category)
    );
  };

  return (
    <div className="px-4 max-w-5xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-2">Project Highlights</h1>
      <ul className="italic flex gap-6 mb-1">
        <li>
          <button onClick={() => setCurrentProjects(projects)}>All</button>
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
      <div className="relative w-full h-96 mb-12">
        <div className="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-scroll pb-4 ">
          {currentProjects.map((project) => (
            <div className="w-full md:w-1/3 flex-shrink-0 snap-start snap-always">
              <ProjectCard
                key={project.id}
                title={project.title}
                image={project.image}
                id={project.id}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          className="text-gray-200 bg-gray-600 hover:bg-gray-700 px-4 py-2 inline-block"
          href="/projects"
        >
          View All Projects
        </a>
      </div>
    </div>
  );
}
