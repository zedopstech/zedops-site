import { PlayIcon } from "lucide-react";
import { Button } from "../UI/button";
import Image from "next/image";

const Hero = () => {
  const heroContent = {
    title: "Revolutionize Your Construction Management",
    description:
      "ZedOps transforms how construction teams operate—streamline workflows, mitigate risks, and drive unprecedented efficiency from preconstruction to project completion",
  };

  return (
    <section className="bg-black min-h-screen relative flex flex-col lg:grid lg:grid-cols-2 items-center justify-between gap-8 overflow-hidden">
      {/* Hero Text Section */}
      <div className="flex flex-col items-center lg:items-start justify-center px-6  pt-12 lg:pt-0 lg:px-12 xl:px-24 text-center lg:text-left z-10">
        <h1 className="text-3xl lg:text-5xl font-black text-white leading-tight">
          {heroContent.title}
        </h1>
        <p className="mt-6 text-lg text-white font-normal leading-relaxed max-w-xl">
          {heroContent.description}
        </p>

        <div className="mt-8 flex flex-row gap-4">
          <Button className="px-8 py-3 text-white font-medium ">
            Request Demo
          </Button>
          <Button
            className="font-medium text-white hover:text-primary w-full sm:w-auto"
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
