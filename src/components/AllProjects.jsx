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
      <h1 className="text-5xl font-bold mb-2">Projects</h1>
      <ul className="italic flex gap-6 mb-1 text-lg">
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {currentProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            image={project.image}
            id={project.id}
          />
        ))}
      </div>
    </div>
  );
}
