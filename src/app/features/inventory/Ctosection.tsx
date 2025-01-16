import { BadgeCheck, Rocket } from "lucide-react";
export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-sky-950 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-white">
              Stay on Top of Your Stock Manage Your Inventory with Ease
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Revolutionize Your Inventory Management with Cutting-Edge
              Technology
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <button
                type="submit"
                className="flex-none rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Get Started
              </button>
              <button
                type="submit"
                className="flex-none rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Request Demo
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <BadgeCheck
                  aria-hidden="true"
                  className="size-6 text-orange-500"
                />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">
                Efficient Stock Management Starts
              </dt>
              <dd className="mt-2 text-base/7 text-white">
                Keep your inventory streamlined and organized with powerful
                tools to track, manage, and optimize.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <Rocket aria-hidden="true" className="size-6 text-orange-500" />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">
                Boost Business Efficiency
              </dt>
              <dd className="mt-2 text-base/7  text-white">
                Simplify stock counting, reduce errors, and increase
                profitability with seamless inventory tracking solutions.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
