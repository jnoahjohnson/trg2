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
    <Popover className="relative bg-darkbg">
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:space-x-10 max-w-7xl m-auto">
        <div>
          <a href="#" className="flex">
            <span className="sr-only">The Richie Group</span>
            <img className="h-8 w-auto sm:h-10" src="logo.png" alt="" />
          </a>
        </div>
        <div className="-mr-2 -my-2">
          <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-200 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sushi">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
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
          className="absolute top-0 right-0 bottom-0 p-2 w-full md:w-1/3 h-screen transform"
        >
          <div className="h-full rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-darkbg-dark divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-end">
                <div className="-mr-2">
                  <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-200 hover:text-gray-400  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sushi">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-12">
                <nav className="grid gap-6">
                  <a
                    href="#"
                    className="text-4xl font-semibold text-gray-200 hover:text-gray-400"
                  >
                    Pricing
                  </a>

                  <a
                    href="#"
                    className="text-4xl font-semibold text-gray-200 hover:text-gray-400"
                  >
                    Docs
                  </a>

                  <a
                    href="#"
                    className="text-4xl font-semibold text-gray-200 hover:text-gray-400"
                  >
                    Enterprise
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
