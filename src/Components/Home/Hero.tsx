import { PlayIcon, BarChart3, ClipboardCheck, Clock, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "../UI/button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative mx-auto max-w-7xl min-h-[94vh] overflow-hidden flex items-center justify-center"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/95 via-secondary/90 to-secondary/80 z-0"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      
      {/* Content Container */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center gap-8 px-6 lg:px-0 py-12">
        {/* Hero Text Section */}
        <div className="flex flex-col w-full max-w-7xl mx-auto items-center text-center">
          <div
            className="mb-6 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm text-white font-semibold flex items-center gap-2 animate-fadeIn shadow-sm"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm tracking-wide">Next-Gen Construction Management Platform</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-white">Transform Your</span>
            <br />
            <span className="text-primary">Construction Projects</span>
            <br />
            <span className="relative inline-block text-white">
              With Advanced Technology
              <span className="absolute bottom-1 left-0 w-full h-2 bg-primary/40 -z-10 transform skew-x-3"></span>
            </span>
          </h1>

          <p className="mt-6 text-lg text-white/90 font-medium leading-relaxed max-w-xl">
            <span className="font-black text-xl text-primary">
              Boost productivity by up to 35%
            </span>{" "}
            with our innovative platform that eliminates bottlenecks, enhances collaboration, and delivers data-driven insights for smarter decision-making.
          </p>
          
          {/* <div className="flex flex-wrap justify-center gap-4 mt-8">
            {[
              { icon: CheckCircle, text: "Predictive Analytics" },
              { icon: TrendingUp, text: "Real-time Dashboards" },
              { icon: Clock, text: "30% Faster Delivery" },
              { icon: ClipboardCheck, text: "Automated Compliance" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full">
                <item.icon className="w-4 h-4 text-primary" />
                <span className="text-sm text-white/80">{item.text}</span>
              </div>
            ))}
          </div> */}
          
          <div className="mt-10 flex flex-wrap justify-center items-center gap-5">
            <Link href="/book-a-demo" title="Request early access">
              <Button className="px-8 py-6 font-medium bg-primary text-secondary hover:bg-primary/90 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                Get Started Free
              </Button>
            </Link>
            <Link
              href="#core-features"
              className="font-medium text-primary hover:text-white transition-all duration-300 flex items-center gap-2 group"
            >
              <div className="p-2 rounded-full bg-white/10 group-hover:bg-primary/20 transition-colors duration-300">
                <PlayIcon className="w-5 h-5 text-white" />
              </div>
              <span className="group-hover:underline">Watch Demo (2 min)</span>
            </Link>
          </div>
          
          {/* Key Benefits */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl mx-auto text-start">
            <div className="flex items-center gap-3 group p-3 rounded-lg hover:bg-white/5 hover:shadow-md transition-all duration-300">
              <div className="p-3 rounded-lg bg-white/10 group-hover:bg-primary/20 transition-colors duration-300">
                <Clock className="text-primary w-5 h-5" />
              </div>
              <div className="text-start">
                <p className="text-sm font-semibold text-white">Save 30+ hours weekly</p>
                <p className="text-xs text-white/70">Streamlined workflows</p>
              </div>
            </div>
            <div className="flex items-center gap-3 group p-3 rounded-lg hover:bg-white/5 hover:shadow-md transition-all duration-300">
              <div className="p-3 rounded-lg bg-white/10 group-hover:bg-primary/20 transition-colors duration-300">
                <BarChart3 className="text-primary w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">20% cost reduction</p>
                <p className="text-xs text-white/70">Optimized resource allocation</p>
              </div>
            </div>
            <div className="flex items-center gap-3 group p-3 rounded-lg hover:bg-white/5 hover:shadow-md transition-all duration-300 ">
              <div className="p-3 rounded-lg bg-white/10 group-hover:bg-primary/20 transition-colors duration-300">
                <ClipboardCheck className="text-primary w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">99.8% accuracy</p>
                <p className="text-xs text-white/70">In project forecasting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
