"use client";

import { Headset, Link2 } from "lucide-react";
import { Button } from "./UI/button";
import { redirect } from "next/navigation";

const CtoContent = {
  mainTitle: "Experience Support Like Never Before",
  content:
    "Redefining construction management with unmatched support and seamless integrations, empowering teams to excel at every stage and achieve exceptional results effortlessly.",
  subTitles: [
    {
      id: 1,
      title: "Round-the-Clock Expert Assistance",
      icon: <Headset className="w-12 h-12 text-primary" />,
      content:
        "Connect with our dedicated support team anytime, anywhere. Whether it’s via email, chat, or phone, our experts are always ready to assist, ensuring your questions are answered in minutes.",
    },
    {
      id: 2,
      title: "Effortless Integrations with Your Favorite Tools",
      icon: <Link2 className="w-12 h-12 text-primary" />,
      content:
        "Streamline your workflow by connecting ZedOps with the tools you already use. With dozens of ready-to-use integrations, managing your projects has never been this smooth.",
    },
  ],
};

const CtoSection: React.FC = () => {
  return (
    <section
      id="cto"
      className="bg-slate-500-950 py-16 flex justify-center items-center relative"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="hidden lg:block h-full w-full bg-no-repeat bg-center bg-cover "
          style={{ backgroundImage: "url('/world-map.webp')" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 text-center lg:text-left gap-y-10 lg:grid-cols-5">
          {/* Text Section */}
          <div className="lg:col-span-2 lg:pr-8 xl:pr-24">
            <h2 className="text-2xl font-bold text-black font-pj">
              {CtoContent.mainTitle}
            </h2>
            <p className="mt-5 text-base text-black font-normal leading-7">
              {CtoContent.content}
            </p>

            <div className="flex items-center justify-center mt-8 space-x-5 lg:justify-start">
              <div className="relative inline-flex group">
                <Button
                  className="px-8 py-3 text-white font-medium"
                  onClick={() => {
                    redirect("/book-a-demo");
                  }}
                >
                  Request Demo
                </Button>
              </div>
              <Button variant={"ghost"} className="text-primary">
                <p className="text-base font-medium">Learn More</p>
              </Button>
            </div>
          </div>

          {/* Cards Section */}
          <div className="lg:col-span-3 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6">
              {CtoContent.subTitles.map((item, index) => (
                <div
                  key={index}
                  className="overflow-hidden bg-white shadow-sm border border-gray-100 rounded-xl px-6 py-12 flex flex-col items-center text-center sm:items-start sm:text-left"
                >
                  <div className="flex items-center justify-center w-16 h-16 sm:items-start sm:bg-transparent">
                    {item.icon}
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-gray-900 font-pj sm:mt-4">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base font-normal leading-7 text-gray-700 font-pj">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtoSection;
