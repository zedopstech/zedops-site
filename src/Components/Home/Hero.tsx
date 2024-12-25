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
    <section className="bg-black min-h-screen relative">
      <div className="mx-auto h-screen grid lg:grid-cols-2">
        {/* Hero Text Section */}
        <div className="flex flex-col lg:items-start items-center justify-center px-6 lg:px-12 xl:px-24 relative z-10">
          <h1 className="text-3xl text-center lg:text-start lg:text-5xl font-black text-white leading-tight">
            {heroContent.title}
          </h1>
          <p className="mt-6 text-lg text-center lg:text-start text-white font-normal leading-relaxed max-w-xl">
            {heroContent.description}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
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
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full">
          <div className="relative w-full h-full">
            <Image
              src="/hero-image.jpeg"
              alt="Construction workers using ZedOps"
              layout="fill"
              objectFit="cover"
              priority
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent lg:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
