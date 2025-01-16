import Image from "next/image";
import Link from "next/link";
import { Button } from "@/Components/UI/button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="mx-auto max-w-6xl min-h-[94vh] gap-8 flex flex-col lg:grid lg:grid-cols-2 lg:gap-0 items-center overflow-hidden justify-between"
    >
      {/* Hero Text Section */}
      <div className="flex flex-col md:w-3/4 lg:w-full px-6 lg:px-0 md:items-center justify-between lg:items-start lg:justify-center pt-4 md:pt-8 lg:pt-0 text-center lg:text-left">
        <h1 className="mt-4 text-3xl text-start md:text-center lg:text-start lg:text-6xl  text-primary font-medium ">
        Tendering Management
       </h1>
       <p className="mt-6 text-lg text-[#1BB387] text-start md:text-center lg:text-start font-medium leading-relaxed max-w-xl">
          <span className="font-black text-xl text-primary">
          Estimation
        </span>{" "}
        <br />
       Accelerate project initiation with precise cost estimates and optimized efficiency. 
       Deliver more competitive, winning bids every time.
       </p>
        <div className="mt-8 flex flex-row justify-start md:justify-center lg:justify-start items-center gap-4">
          <Link href="/book-a-demo" title="Book a demo">
            <Button className="px-8 py-6 font-medium">Get Started</Button>
          </Link>
          </div>
      </div>

      {/* Hero Image Section */}
      <div className="md:h-[60vh] lg:h-auto">
        <Image
          src="/hero estimation.jpg"
          width={800}
          height={400}
          alt="Construction workers using ZedOps"
          objectPosition="top center"
          className="lg:rounded-xl shadow-lg" 
         />
      </div>
     
    </section>
  );
};

export default Hero;
