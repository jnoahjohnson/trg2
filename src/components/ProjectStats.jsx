import { HashtagIcon } from "@heroicons/react/outline";
import React from "react";

export default function ProjectStats(stats) {
  return (
    <div className="flex items-end">
      <HashtagIcon className="w-6 h-6 mr-2 text-gray-400" />
      <p className="text-4xl font-light">300 units</p>
    </div>
  );
}
