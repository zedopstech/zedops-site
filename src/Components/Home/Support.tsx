import { ArrowUpRight, Headset, Mail, MessageSquare, Clock, Shield, BookOpen, PuzzleIcon, User } from "lucide-react";
import { Button } from "../UI/button";
import Link from "next/link";

const CtoContent = {
  mainTitle: "Expert Support for Your Construction Team",
  content:
    "We're committed to providing exceptional assistance to all our early adopters. Our team is ready to help you implement and maximize the value of our AI-powered platform for your construction projects.",
  subTitles: [
    {
      title: "Seamless Integration",
      icon: PuzzleIcon,
      content: "Integrate with your existing tools with minimal disruption to current operations.",
      color: "bg-[#F9E3FD]"  
    },
    {
      title: "Responsive Support",
      icon: Headset,
      content: "Priority support with quick response times for all early access members.",
      color: "bg-[#E1E0FF]"
    },
    {
      title: "Comprehensive Docs",
      icon: BookOpen,
      content: "Access detailed guides and tutorials to master our platform quickly.",
      color: "bg-[#E3FFCD]"
    },
    {
      title: "Implementation Help",
      icon: User,
      content: "Expert guidance through setup, data migration, and initial configuration.",
      color: "bg-[#FFEACC]"
    },
  ],
  contactOptions: [
    {
      title: "Email Support",
      icon: Mail,
      link: "/contact-sales",
      description: "Get a response within 24 hours"
    },
    {
      title: "Live Chat",
      icon: MessageSquare,
      link: "#",
      description: "Available 9am-5pm IST"
    },
    {
      title: "Priority Access",
      icon: Shield,
      link: "/book-a-demo",
      description: "For early access members"
    }
  ]
};

const Support: React.FC = () => {
  return (
    <section
      id="support"
      className="bg-[#151414] text-white py-24 px-6 flex justify-center items-center relative overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 text-sm font-semibold tracking-wider text-white rounded-full bg-secondary inline-block mb-5 shadow-md">Early Access Program</span>
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span>{CtoContent.mainTitle}</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed">
            {CtoContent.content}
          </p>
        </div>

        {/* Support Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CtoContent.subTitles.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 ${item.color} group cursor-pointer transform transition-all duration-300 hover:-translate-y-2 shadow-xl overflow-hidden`}
            >              

              {/* Content with relative positioning */}
              <div className=" z-10">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-xl text-secondary transition-colors duration-300">
                  <item.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-secondary transition-colors duration-300 mb-3">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                  {item.content}
                </p>
                
                {/* Arrow icon */}
                <div className="mt-4 self-end inline-flex">
                  <div
                    className="p-2 rounded-full border border-gray-300 text-gray-500 group-hover:bg-secondary/20 group-hover:text-secondary group-hover:border-secondary/50 group-hover:scale-110 transition-all duration-300"
                    aria-label="Learn More"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Options and CTA */}
        <div className="bg-gray-200 backdrop-blur-sm rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left side - CTA */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Ready to transform your construction management?</h3>
              <p className="text-gray-600">Get early access to our platform and receive personalized onboarding support from our team of construction technology experts.</p>
              
              <Link href="/book-a-demo" title="Request early access demo">
                <Button
                  variant={"destructive"}
                  className="px-8 py-3 font-medium w-full sm:w-auto mt-4 bg-secondary hover:bg-secondary text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Request Early Access
                </Button>
              </Link>
            </div>
            
            {/* Right side - Contact options */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {CtoContent.contactOptions.map((option, index) => (
                  <Link 
                    key={index} 
                    href={option.link}
                    className="flex flex-col items-center p-5 rounded-xl bg-white/80 transition-all duration-300 hover:shadow-md hover:-translate-y-1 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-3 transition-colors duration-300">
                      <option.icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-gray-900 transition-colors duration-300">{option.title}</h4>
                    <p className="text-sm text-gray-500 mt-1 text-center">{option.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
