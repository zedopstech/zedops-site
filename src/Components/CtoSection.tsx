import { Headset, Link2 } from "lucide-react";
import { Button } from "./UI/button";

const CtoContent = {
  mainTitle: "Experience Support Like Never Before",
  content:
    "ZedOps goes beyond software by providing unparalleled support and seamless integrations to ensure your construction projects succeed at every step",
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
    <>
      <section id="cto" className="py-12 bg-violet-50 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 text-center lg:text-left gap-y-10 lg:grid-cols-5">
            {/* Text Section */}
            <div className="lg:col-span-2 lg:pr-8 xl:pr-24">
              <h2 className="text-2xl font-bold text-gray-900 font-pj">
                {CtoContent.mainTitle}
              </h2>
              <p className="mt-5 text-base font-normal leading-7 text-gray-600 font-pj">
                {CtoContent.content}
              </p>

              <div className="flex items-center justify-center mt-8 space-x-5 lg:justify-start">
                <div className="relative inline-flex group">
                  <Button className="px-8 py-3 text-white font-medium ">
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
    </>
  );
};

export default CtoSection;
