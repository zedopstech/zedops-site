import { ArrowUpRight, Headset, Link2 } from "lucide-react";
import { Button } from "../UI/button";

import Link from "next/link";

const CtoContent = {
  mainTitle: "Experience Support Like Never Before",
  content:
    "Redefining construction management with unmatched support and seamless integrations, empowering teams to excel at every stage and achieve exceptional results effortlessly.",
  subTitles: [
    {
      title: "Effortless Integrations with Your Favorite Tools",
      icon: <Link2 className="w-12 h-12" />,
      image: "/cto-integration.jpg",
      content:
        "Streamline your workflow by connecting ZedOps with the tools you already use. With dozens of ready-to-use integrations, managing your projects has never been this smooth.",
    },
    {
      title: "Round-the-Clock Expert Assistance",
      icon: <Headset className="w-12 h-12" />,
      image: "/call-support.webp",
      content:
        "Connect with our dedicated support team anytime, anywhere. Whether it’s via email, chat, or phone, our experts are always ready to assist, ensuring your questions are answered in minutes.",
    },
  ],
};

const Support: React.FC = () => {
  return (
    <section
      id="cto"
      className="bg-white text-background py-16 px-6 flex justify-center items-center relative"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="hidden lg:block h-full w-full bg-no-repeat bg-center bg-cover "
          style={{ backgroundImage: "url('/world-map.webp')" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid items-center grid-cols-1 text-center lg:text-left gap-y-10 lg:grid-cols-5">
          {/* Text Section */}
          <div className="lg:col-span-2 lg:pr-8 xl:pr-24">
            <h2 className="text-2xl font-bold">{CtoContent.mainTitle}</h2>
            <p className="mt-5 text-base font-normal leading-7">
              {CtoContent.content}
            </p>

            <div className="flex items-center justify-center mt-8 space-x-5 lg:justify-start">
              <div className="relative inline-flex group">
                <Link href="/book-a-demo" title="Book a demo">
                  <Button
                    variant={"destructive"}
                    className="px-8 py-3 font-medium"
                  >
                    Request Demo
                  </Button>
                </Link>
              </div>
              <Button variant={"ghost"}>
                <p className="text-base font-medium">Learn More</p>
              </Button>
            </div>
          </div>

          {/* Cards Section */}
          <div className="lg:col-span-3 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6">
              {CtoContent.subTitles.map((item, index) => (
                <Link
                  href="#"
                  key={index}
                  className="relative w-full h-[400px] overflow-hidden shadow-sm rounded-xl px-6 py-12 flex flex-col items-center text-center sm:items-start sm:text-left group cursor-pointer"
                >
                  <div
                    key={index}
                    className="absolute inset-0 bg-no-repeat bg-center bg-cover transition-transform duration-500 ease-in-out group-hover:scale-110 blur-0"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black opacity-60"></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-start text-white">
                    <div className="flex items-start w-16 h-16 sm:bg-transparent">
                      {item.icon}
                    </div>
                    <h3 className="mt-4 text-lg text-start font-bold sm:mt-4">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base text-start font-normal leading-7 font-pj">
                      {item.content}
                    </p>
                  </div>

                  {/* Icon Button */}
                  <div
                    className="absolute hidden sm:block bottom-4 right-4 p-2 rounded-full border border-white text-white group-hover:scale-105 transition-colors"
                    aria-label="Learn More"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
