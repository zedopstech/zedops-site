import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import SolutionsList from "./Solutions";
import ResourcesList from "./Resources";

const DesktopNavigationMenu = () => {
  return (
    <NavigationMenu.Root className="hidden z-10 lg:flex justify-center">
      <NavigationMenu.List className="center m-0 flex list-none text-primary bg-transparent p-1">
        {/* Solutions */}
        <SolutionsList />
        {/* Resources */}
        <ResourcesList />
        {/* NavLink */}
        {/* <NavigationMenu.Item>
          <Link
            href="/pricing"
            className="block select-none px-3 py-2 font-normal text-secondary leading-none no-underline outline-none"
            title="pricing"
          >
            Pricing
          </Link>
        </NavigationMenu.Item> */}

        <NavigationMenu.Item>
          <Link
            href="/about-us"
            className="block select-none font-normal text-secondary px-3 py-2 leading-none no-underline outline-none"
            title="About Us"
          >
            About Us
          </Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute left-0 top-full flex w-full justify-center">
        <NavigationMenu.Viewport className="relative h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden bg-white transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn " />
      </div>
    </NavigationMenu.Root>
  );
};

export default DesktopNavigationMenu;
