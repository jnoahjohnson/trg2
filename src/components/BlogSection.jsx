/* This example requires Tailwind CSS v2.0+ */
import React from "react";
export default function BlogSection({ title, href, category, description, date, datetime, imageUrl, readingTime, author}) {
  return (
    <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            <div
              key={title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={imageUrl}
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href={category.href} className="hover:underline">
                      {category.name}
                    </a>
                  </p>
                  <a href={href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {description}
                    </p>
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
                    <p className="text-sm font-medium text-gray-900">
                      <a href={author.href} className="hover:underline">
                        {author.name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={datetime}>{date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{readingTime} read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        </div>
      </div>
    </div>
  );
}
