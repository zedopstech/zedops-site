"use client";
import React, { useState } from "react";
import Logo from "../Common/Logo";
import Link from "next/link";
import { Button } from "../UI/button";
import { Headset, Menu, X } from "lucide-react";
import MobileNavigation from "./MobileNavigation";
import DesktopNavigationMenu from "./Navigation/Desktop";

const Header: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  // Disable body scroll when mobile menu is open
  React.useEffect(() => {
    if (expanded) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    
    // Cleanup function to ensure scroll is re-enabled if component unmounts while menu is open
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [expanded]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background py-4 shadow-sm w-full">
      <div className="mx-auto px-6 lg:px-0 max-w-7xl flex items-center justify-between">
        {/* Logo Section */}
        <div className="shrink-0 flex-1 text-center lg:text-left lg:flex-none">
          <Link href="/" title="Home">
            <Logo />
          </Link>
        </div>

        {/* Navigation for Large Screens */}
        <DesktopNavigationMenu />

        {/* Actions Section for Medium Screens and Above */}
        <div className="hidden sm:flex sm:items-center sm:space-x-4">
          <Link
            href="/contact-sales"
            title="Contact Sales"
            className="flex items-center px-4 py-2 text-base font-medium text-primary hover:text-white"
          >
            <Headset className="w-5 h-5 mr-2" />
            Contact Sales
          </Link>
          <Button className="px-10">Login</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden ml-4">
          <button
            type="button"
            className="p-2 text-primary"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-label="Toggle Navigation"
          >
            {expanded ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
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
