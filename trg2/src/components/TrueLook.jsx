import React from "react";

export default function ProjectStats({ truelook }) {
  return truelook ? (
    <div className="mb-4 mt-2">
      <a
        href={truelook}
        className="px-3 py-2 bg-rblue-dark text-white rounded text-lg"
        target="_"
      >
        See the True Look
      </a>
    </div>
  ) : (
    <div className="mb-4"></div>
  );
}
