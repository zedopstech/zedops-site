import { PlayIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../UI/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-100 via-white to-gray-50">
      <div className="mx-auto max-w-7xl min-h-[80vh] relative flex flex-col lg:grid lg:grid-cols-2 items-center justify-between gap-8 overflow-hidden">
        {/* Hero Text Section */}
        <div className="flex flex-col items-center lg:items-start justify-center px-6 pt-8 lg:pt-0 lg:px-6 xl:px-12 text-center lg:text-left z-10">
          <h1 className="text-md lg:text-lg font-bold gradient-text">
            &quot;Construction Management Reimagined&quot;
          </h1>
          <h1 className="mt-4 text-2xl lg:text-4xl text-black font-black leading-tight">
            Build Smarter, Deliver Faster: With AI-Powered Insights and
            World-Class Support
          </h1>
          <p className="mt-6 text-sm lg:text-base text-black font-medium leading-relaxed max-w-xl">
            Save 40% of your time, improve collaboration, and achieve
            exceptional results across all phases of construction.
          </p>

          <div className="mt-8 flex flex-col lg:flex-row items-center gap-4">
            <Link href="/book-a-demo" title="Book a demo">
              <Button className="px-8 py-6 text-white font-medium">
                Get Started Today
              </Button>
            </Link>
            <Link
              href="#why-zedops"
              className="font-medium text-sm text-black hover:text-primary transition-all flex items-center gap-2"
            >
              <PlayIcon className="w-5 h-5" />
              Why ZedOps?
            </Link>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="relative w-[80vh] h-[40vh] lg:h-[60vh]">
          <Image
            src="/hero-image.jpeg"
            alt="Construction workers using ZedOps"
            layout="fill"
            objectFit="cover"
            priority
            objectPosition="top center"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
