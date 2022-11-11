/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ChartBarIcon,
  CursorClickIcon,
  DocumentReportIcon,
  MenuIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function Header() {
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <Popover className="relative bg-darkbg h-full">
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:space-x-10 max-w-6xl m-auto">
        <div>
          <a href="/" className="flex">
            <span className="sr-only">The Ritchie Group</span>
            <img
              className="md:h-14 w-auto h-12"
              src="/assets/logo.png"
              alt="The Ritchie Group"
            />
          </a>
        </div>
        <div className="-mr-2 -my-2">
          <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-200 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sushi">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-7 w-7" aria-hidden="true" />
          </Popover.Button>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="z-50 absolute top-0 right-0 bottom-0 p-2 w-full md:w-1/3 h-screen transform overflow-visible"
        >
          <div className="h-full rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-darkbg divide-y-2 divide-gray-50">
            <div className="pt-16 pb-6 px-5 h-full relative">
              <div className="absolute top-6 right-6">
                <div className="-mr-2">
                  <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-200 hover:text-gray-400  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sushi">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="h-full flex flex-col justify-between">
                <nav className="grid gap-6">
                  <a
                    href="/projects"
                    className="text-4xl font-semibold text-gray-200 hover:text-gray-400"
                  >
                    Projects
                  </a>

                  <a
                    href="/team"
                    className="text-4xl font-semibold text-gray-200 hover:text-gray-400"
                  >
                    About Us
                  </a>
                 
                  {/* <a
                    href="/ritchieFoundation"
                    className="text-4xl font-semibold text-gray-200 hover:text-gray-400"
                  >
                    Ritchie Foundation
                  </a> */}

                  <a
                    href="/news"
                    className="text-4xl font-semibold text-gray-200 hover:text-gray-400"
                  >
                    News
                  </a>

                  <a
                    href="https://investors.appfolioim.com/ritchiegroup/investor"
                    className="text-4xl font-semibold text-gray-200 hover:text-gray-400"
                  >
                    Investor Portal
                  </a>
                  <a
                    href="/contact"
                    className="text-4xl font-semibold text-gray-200 hover:text-gray-400"
                  >
                    Contact Us
                  </a>
                </nav>
                <div>
                  <div className="flex gap-4 mb-4">
                    <a href="https://www.linkedin.com/company/the-ritchie-group-llc" class="text-gray-300 hover:text-gray-500">
                    <span class="sr-only">LinkedIn</span>
                    <svg
                      class="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                  </div>
                  <p className="text-gray-300 text-sm">
                    © The Ritchie Group 2021. All Rights Resevered
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
