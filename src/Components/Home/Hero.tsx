import { PlayIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../UI/button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="mx-auto max-w-6xl min-h-[94vh] gap-8 flex flex-col lg:grid lg:grid-cols-2 lg:gap-0 items-center overflow-hidden justify-between"
    >
      {/* Hero Text Section */}
      <div className="flex flex-col md:w-3/4 lg:w-full px-6 lg:px-0 md:items-center justify-between lg:items-start lg:justify-center pt-4 md:pt-8 lg:pt-0 text-center lg:text-left">
        <h1 className="mt-4 text-3xl text-start md:text-center lg:text-start lg:text-6xl  text-primary font-medium ">
          Transform Your Construction Workflow with AI Insights and Unmatched
          Support
        </h1>

        <p className="mt-6 text-lg text-[#1BB387] text-start md:text-center lg:text-start font-medium leading-relaxed max-w-xl">
          <span className="font-black text-xl text-primary">
            Save 40% of your time,
          </span>{" "}
          improve collaboration, and achieve exceptional results across all
          phases of construction.
        </p>
        <div className="mt-8 flex flex-row justify-start md:justify-center lg:justify-start items-center gap-4">
          <Link href="/book-a-demo" title="Book a demo">
            <Button className="px-8 py-6 font-medium">Get Started</Button>
          </Link>
          <Link
            href="#"
            className="font-medium text-sm text-primary hover:text-white transition-all flex items-center gap-2"
          >
            <PlayIcon className="w-5 h-5" />
            Why ZedOps?
          </Link>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="md:h-[60vh] lg:h-auto">
        <Image
          src="/hero-image.jpeg"
          width={800}
          height={400}
          alt="Construction workers using ZedOps"
          objectPosition="top center"
          className="lg:rounded-xl shadow-lg"
        />
      </div>
      {/* <div className="h-full w-full">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <div className="flex flex-col gap-4 items-center justify-between w-full py-4">
            <h2 className="text-2xl text-primary font-medium">
              Trusted by the Best
            </h2>
            <div className="flex items-center justify-between gap-4">
              <Image
                src="/images/clients/airbnb-logo.png"
                width={100}
                height={50}
                alt="Airbnb"
              />
              <Image
                src="/images/clients/lyft-logo.png"
                width={100}
                height={50}
                alt="Lyft"
              />
              <Image
                src="/images/clients/uber-logo.png"
                width={100}
                height={50}
                alt="Uber"
              />
              <Image
                src="/images/clients/airbnb-logo.png"
                width={100}
                height={50}
                alt="Airbnb"
              />
              <Image
                src="/images/clients/lyft-logo.png"
                width={100}
                height={50}
                alt="Lyft"
              />
              <Image
                src="/images/clients/uber-logo.png"
                width={100}
                height={50}
                alt="Uber"
              />
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
