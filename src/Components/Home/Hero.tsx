import { PlayIcon, BarChart3, ClipboardCheck, Clock, Wand2 } from "lucide-react";
import Link from "next/link";
import { Button } from "../UI/button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative mx-auto max-w-7xl min-h-[94vh] overflow-hidden flex items-center justify-center"
    >
      
      {/* Content Container */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center gap-8 px-6 lg:px-0 py-12">
        {/* Hero Text Section */}
        <div className="flex flex-col w-full max-w-3xl mx-auto items-center text-center">
          <div
            className="mb-6 px-4 py-1.5 rounded-full bg-[length:200%_100%] bg-gradient-to-r from-teal-500/20 via-teal-500/40 to-teal-500  text-white/90 text-sm font-semibold flex items-center gap-2"
          >
            <Wand2 className="h-4 w-4" />
            AI-Powered Construction Management Platform
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-white">Simplify Construction</span>
            <br />
            <span className="text-primary">Management</span>
            <br />
            <span className="relative text-white">
              With Modern Tools
              <span className="absolute bottom-1 left-0 w-full h-2 bg-primary/40 -z-10 transform skew-x-3"></span>
            </span>
          </h1>

          <p className="mt-6 text-lg text-white/90 font-medium leading-relaxed max-w-xl">
            <span className="font-black text-xl text-primary">
              Save valuable time and resources
            </span>{" "}
            with a platform that streamlines workflows, enhances team communication, and delivers projects on schedule.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center items-center gap-5">
            <Link href="/book-a-demo" title="Request early access">
              <Button className="px-8 py-6 font-medium bg-primary text-secondary hover:bg-primary/90 hover:shadow-lg group">
                Early Access
              </Button>
            </Link>
            <Link
              href="#core-features"
              className="font-medium text-primary hover:text-white transition-all duration-300 flex items-center gap-2 group"
            >
              <div className="p-2 rounded-full bg-white/10 group-hover:bg-primary/20 transition-colors duration-300">
                <PlayIcon className="w-5 h-5 text-white" />
              </div>
              <span className="group-hover:underline">See How It Works</span>
            </Link>
          </div>
          
          {/* Key Benefits */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-2xl mx-auto">
            <div className="flex items-center gap-3 group">
              <div className="p-3 rounded-lg bg-white/10 group-hover:bg-primary/20 transition-colors duration-300">
                <Clock className="text-primary w-5 h-5" />
              </div>
              <div className="text-start">
                <p className="text-sm font-semibold text-white">Save 30+ hours</p>
                <p className="text-xs text-white/70">Automate repetitive tasks</p>
              </div>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="p-3 rounded-lg bg-white/10 group-hover:bg-primary/20 transition-colors duration-300">
                <BarChart3 className="text-primary w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Real-time insights</p>
                <p className="text-xs text-white/70">Data-driven decisions</p>
              </div>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="p-3 rounded-lg bg-white/10 group-hover:bg-primary/20 transition-colors duration-300">
                <ClipboardCheck className="text-primary w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Easy implementation</p>
                <p className="text-xs text-white/70">Quick team onboarding</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
