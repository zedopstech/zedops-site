'use client';
import React, { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";

const Header: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const navigationOption = [
    {
      name:"Home",
      href:"/"
    },
    {
      name:"Products",
      href:"#problem-statement"
    },
    {
      name:"Features",
      href:"#features"
    },
    {
      name:"About Us",
      href:"/about-us"
    }
  ];
  return (
    <div>
      <header className="py-4 bg-orange-50 sm:py-5">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="shrink-0">
              <Link href="/" title="">
                <Logo />
              </Link>
            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-4 lg:ml-12">
              {navigationOption.map((item, index) => (
                <a
                  href={item.href}
                  key={index}
                  title={item.name}
                  className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="hidden sm:flex sm:items-center sm:justify-end sm:space-x-4 sm:ml-auto">
              <Link
                href="/coming-soon"
                title="Start free trial"
                className="inline-flex items-center justify-center px-6 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-gray-600 rounded-lg hover:border-gray-400 hover:bg-orange-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-900"
                role="button"
              >
                Book a Demo
              </Link>
            </div>

            <div className="flex ml-4 lg:hidden">
              <button
                type="button"
                className="inline-flex items-center p-2.5 text-gray-900 duration-200 border border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transiton-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 focus:bg-gray-900 focus:text-white"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
              >
                {expanded ? (
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {expanded && (
          <div className="px-4 py-4 bg-gray-50 border-t border-gray-300 lg:hidden">
            <nav className="space-y-2">
              {navigationOption.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className="block px-4 py-2 text-base font-medium text-gray-900 transition-all duration-200 rounded-md hover:bg-gray-100"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;