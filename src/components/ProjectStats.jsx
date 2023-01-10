
import React from "react";
import { getIcon } from "../utils/getIcon.tsx";
import getDisplayName from "../utils/getDisplayName.js";

export default function ProjectStats({ stats }) {
  return (
    <div>
      {stats.map((stat) => (
        <div className="mb-4" key={stat.type}>
          <div className="flex items-end mb-1 ">
            <span className="w-6 h-6 mr-2 text-gray-400 ">
              {getIcon(stat.type)}
            </span>
            <p className="font-light uppercase text-lg text-gray-400">
              {getDisplayName(stat.type)}
            </p>
          </div>
          <p className="text-3xl font-semibold">{stat.text}</p>
        </div>
      ))}
    </div>
  );
}
