/* This example requires Tailwind CSS v2.0+ */
import React from "react";
export default function BlogSection({
  title,
  href,
  category,
  description,
  date,
  datetime,
  imageUrl,
  readingTime,
  author,
}) {
  return (
    <div className="relative w-full h-full">
      <div
        key={title}
        className="flex flex-col rounded-lg shadow-lg overflow-hidden h-full"
      >
        <div className="flex-shrink-0">
          <img className="h-48 w-full object-cover" src={imageUrl} alt="" />
        </div>
        <div className="p-6 bg-darkbg-dark flex-grow h-full flex flex-col justify-between">
          <div>
            <p className="text-sm font-medium text-rblue">
              <a href={category.href} className="hover:underline">
                {category.name}
              </a>
            </p>
            <a href={href} className="block mt-2">
              <p className="text-xl font-semibold text-gray-200">{title}</p>
              <p className="mt-3 text-base text-gray-400">{description}</p>
            </a>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <a href={author.href}>
                <span className="sr-only">{author.name}</span>
                <img
                  className="h-10 w-10 rounded-full"
                  src={author.imageUrl}
                  alt=""
                />
              </a>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-200">
                <a href={author.href} className="hover:underline">
                  {author.name}
                </a>
              </p>
              <div className="flex space-x-1 text-sm text-gray-400">
                <time dateTime={datetime}>{date}</time>
                <span aria-hidden="true">&middot;</span>
                <span>{readingTime} read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
