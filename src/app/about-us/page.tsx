import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/Components/UI/button";
import { Building2, CheckCircle, TrendingUp, Users, ArrowRight } from "lucide-react";

// --- REWRITTEN CONTENT FOCUSED ON YOUR UNIQUE NARRATIVE ---
const aboutUsContent = {
  hero: {
    pretitle: "Our Story",
    title: "We&apos;re Closing the Gap Between the Field and the Office",
    description:
      "Zedops was born on the job site. We&apos;re a team of construction veterans and tech innovators who grew tired of watching great projects get bogged down by disconnected data, manual paperwork, and outdated software. We knew there had to be a better way.",
    image: "aboutUs/about-us-hero.webp", // Suggested: A high-quality, authentic photo of your team or co-founder on a site.
  },
  ourStory: {
    title: "A Platform Built From a Decade of Experience",
    description_p1:
      "Our co-founder spent over decades in Gulf contracting, managing complex projects and experiencing firsthand the frustrations of implementing software that wasn&apos;t built for the reality of the job site. He saw tools that were too complex, too expensive, or simply didn&apos;t connect to the financial big picture.",
    description_p2:
      "Zedops is the solution he wished he had. It&apos;s not just another app; it&apos;s a field-tested philosophy. We believe that technology should serve the craft, not complicate it. Every feature we build starts with a simple question: &apos;Will this make life easier for the site supervisor and give the project manager the data they actually need?&apos;",
    image: "/construction-management-about-us.jpg", // Suggested: A professional photo of your co-founder.
  },
  whyChooseUs: {
    title: "Our Guiding Principles",
    description:
      "We&apos;re building Zedops with a clear set of values that guide our every decision, ensuring we create a platform that is both powerful and practical.",
    points: [
      {
        title: "Field-First Design",
        description:
          "Our platform is designed from the job site up, ensuring our tools are intuitive and practical for the teams in the field.",
        Icon: Building2,
      },
      {
        title: "Radical Simplicity",
        description:
          "We prioritize clarity and ease-of-use. You shouldn&apos;t need a month of training to manage a project effectively.",
        Icon: CheckCircle,
      },
      {
        title: "Pragmatic Innovation",
        description:
          "We focus on technology that solves real-world construction problems, not just chasing the latest tech buzz.",
        Icon: TrendingUp,
      },
      {
        title: "Partnership Over Sales",
        description:
          "Your success is our success. We provide hands-on support to ensure you get the most value from our platform.",
        Icon: Users,
      },
    ],
  },
};

const AboutUs: React.FC = () => {
  const { hero, ourStory, whyChooseUs } = aboutUsContent;

  return (
    <div className="bg-white text-secondary">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block py-1.5 text-sm font-semibold bg-primary/10 text-primary rounded-full mb-4 uppercase tracking-wider">
                {hero.pretitle}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-secondary leading-tight">
                {hero.title}
              </h1>
              <p className="mt-6 text-lg text-secondary/80 leading-relaxed">
                {hero.description}
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={hero.image}
                alt="Zedops team collaborating on a construction project"
                width={600}
                height={450}
                className="rounded-2xl border object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 md:py-28 bg-orange-50">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary leading-tight">
                {ourStory.title}
              </h2>
              <div className="mt-6 text-lg text-secondary/80 space-y-6 leading-relaxed border-l-4 border-primary pl-6">
                 <p>{ourStory.description_p1}</p>
                 <p>{ourStory.description_p2}</p>
              </div>
            </div>
             <div className="order-1 lg:order-2 flex items-center justify-center">
              <Image
                src={ourStory.image}
                alt="Co-founder of Zedops"
                width={500}
                height={500}
                className="border object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Principles Section */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              {whyChooseUs.title}
            </h2>
            <p className="mt-6 text-lg text-secondary/80">
              {whyChooseUs.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {whyChooseUs.points.map((point, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-200/80 text-center transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-primary/10 rounded-full text-primary">
                  <point.Icon className="w-8 h-8"/>
                </div>
                <h3 className="mt-6 text-xl font-bold text-secondary">{point.title}</h3>
                <p className="mt-3 text-secondary/70">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-white py-10 md:py-10">
          <div className="container max-w-5xl mx-auto px-6">
            <div className="bg-secondary text-white text-center rounded-2xl p-12">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Ready to Build a Better Way?
              </h2>
                <p className="text-xl text-white/80 max-w-2xl mx-auto mt-6 mb-10">
                See for yourself how our field-first approach is redefining construction management. Let&apos;s build the future, together.
                </p>
              <Link href="/book-a-demo">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-200 px-8 py-6 text-lg font-semibold shadow-lg hover:scale-105 transition-transform">
                  Request a Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
    </div>
  );
};

export default AboutUs;