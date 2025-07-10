import React, { useEffect, useState } from "react";
import { ArrowUp, DollarSign, Package } from "lucide-react";

const COMING_SOON_CONTENT = {
  badge: "🧠 Coming Soon – Even More Value",
  title: "The Future of Construction Management",
  subtitle:
    "Get ready for advanced features that will further revolutionize your construction operations",
  cards: [
    {
      id: 1,
      icon: <Package className="text-gray-700 w-5 h-5" />,
      title: "Complete Supply Chain Control",
      description:
        "End-to-end material management from request to delivery with smart procurement and inventory tracking.",
      impact: "Reduce material costs by 15–20%",
    },
    {
      id: 2,
      icon: <DollarSign className="text-gray-700 w-5 h-5" />,
      title: "Intelligent Budget Management",
      description:
        "Predictive cost tracking with real-time budget monitoring and variance analysis.",
      impact: "Stay within budget 95% of the time",
    },
  ],
};

const ComingSoon = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="w-full bg-secondary py-16 px-4">
      <div className="max-w-7xl mx-auto bg-custombg rounded-3xl p-16 text-center shadow-sm">
        {/* Badge */}
        <div className="inline-block mb-4 sm:mb-6 px-4 py-1 sm:px-6 sm:py-2 rounded-full backdrop-blur-sm bg-secondary text-white font-semibold items-center gap-1 sm:gap-2 animate-fadeIn shadow-sm text-xs sm:text-sm">
          <div className="flex">
            <span className="tracking-wide text-xs sm:text-sm lg:text-lg">
              {COMING_SOON_CONTENT.badge}
            </span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-lg sm:text-xl lg:text-3xl xl:text-5xl text-secondary font-black mb-6">
          {COMING_SOON_CONTENT.title}
        </h2>

        {/* Subheading */}
        <p className="text-gray-600 text-sm sm:text-lg lg:text-xl max-w-3xl mx-auto font-medium">
          {COMING_SOON_CONTENT.subtitle}
        </p>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {COMING_SOON_CONTENT.cards.map((item) => (
            <div className="space-y-4 sm:space-y-8 relative" key={item.id}>
              <div className="group bg-white rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-300 ease-in-out border border-gray-200 relative overflow-hidden h-full">
                <div className="relative z-10 p-2">
                  <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-secondary/5 group-hover:bg-secondary/10 transition-colors duration-300"></div>
                  <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl text-secondary bg-secondary/20 group-hover:bg-secondary/30 group-hover:text-secondary transition-all duration-300 shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-lg uppercase font-black mb-3 text-secondary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="font-medium text-gray-600 transition-colors duration-300 relative z-10">
                    {item.description}
                  </p>
                  <p className="font-bold text-emerald-700 transition-colors duration-300 relative z-10 mt-4">
                    <ArrowUp className={"inline-block mr-1 w-4 h-4"} />
                    &nbsp;
                    {item.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
