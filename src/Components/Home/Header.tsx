"use client";
import React, { useState, useEffect } from "react";
import Logo from "../Logo";
import Link from "next/link";
import { Button } from "../UI/button";
import { Headset } from "lucide-react";
import DesktopNavigation from "./DesktopNavigationMenu";
import MobileNavigation from "./MobileNavigation";

const Header: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  // Disable body scroll when menu is open
  useEffect(() => {
    if (expanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [expanded]);

  return (
    <header className="sticky top-0 z-50 bg-black py-5">
      <div className="px-4 mx-auto max-w-7xl flex items-center justify-between">
        {/* Logo Section */}
        <div className="shrink-0 flex-1 text-center lg:text-left lg:flex-none">
          <Link href="/" title="Home">
            <Logo />
          </Link>
        </div>

        {/* Navigation for Large Screens */}
        <DesktopNavigation />

        {/* Actions Section for Medium Screens and Above */}
        <div className="hidden sm:flex sm:items-center sm:space-x-4">
          <Link
            href="/contact-us"
            className="flex items-center px-4 py-2 text-base font-medium text-white hover:text-primary"
          >
            <Headset className="w-5 h-5 mr-2" />
            Contact Sales
          </Link>
          <Button
            variant={"secondary"}
            className="px-10 bg-slate-50 hover:bg-primary hover:text-white"
          >
            Login
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden ml-4">
          <button
            type="button"
            className="p-2 text-white"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-label="Toggle Navigation"
          >
            {expanded ? (
              <></>
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
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {expanded && (
        <MobileNavigation expanded={expanded} setExpanded={setExpanded} />
      )}
    </header>
  );
};

export default Header;
