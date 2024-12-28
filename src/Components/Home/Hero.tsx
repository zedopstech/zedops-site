import { PlayIcon } from "lucide-react";
import { Button } from "../UI/button";
import Image from "next/image";

const Hero = () => {
  const heroContent = {
    title:
      "Build Smarter, Deliver Faster: with AI-Powered Insights and World-Class Support",
    description:
      "Save 40% of your time, improve collaboration, and achieve exceptional results across all phases of construction.",
  };

  return (
    <section className="bg-slate-50 min-h-screen relative flex flex-col lg:grid lg:grid-cols-2 items-center justify-between gap-8 overflow-hidden">
      {/* Hero Text Section */}
      <div className="flex flex-col items-center lg:items-start justify-center px-6  pt-8 lg:pt-0 lg:px-12 xl:px-24 text-center lg:text-left z-10">
        <h1 className="text-sm lg:text-lg font-bold gradient-text">
          {"Construction Management Reimagined"}
        </h1>
        <h1 className="mt-4 text-2xl lg:text-4xl text-black font-black leading-tight">
          {heroContent.title}
        </h1>
        <p className="mt-6 text-sm lg:text-base text-black font-medium leading-relaxed max-w-xl">
          {heroContent.description}
        </p>

        <div className="mt-8 flex flex-row gap-4">
          <Button className="px-8 py-3 text-white font-medium gradient-button">
            Get Started Today
          </Button>
          <Button
            className="font-medium text-black hover:text-primary w-full sm:w-auto"
            variant="link"
            icon={PlayIcon}
          >
            Why ZedOps?
          </Button>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="relative w-[80vh] h-[40vh] lg:h-auto lg:absolute lg:top-0 lg:right-0 lg:inset-y-0 lg:w-1/2">
        <Image
          src="/hero-image.jpeg"
          alt="Construction workers using ZedOps"
          layout="fill"
          objectFit="cover"
          priority
          objectPosition="top center"
          className="rounded-lg lg:rounded-none"
        />
      </div>
    </section>
  );
};

export default Hero;
