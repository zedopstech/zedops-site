"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/Components/UI/button";
import { Building2, CheckCircle, TrendingUp, Users } from "lucide-react";
import { redirect } from "next/navigation";

const aboutUsContent = {
  hero: {
    title: "Shaping the Future of Construction Management",
    description:
      "At Zedops, we're on a mission to simplify and modernize construction workflows. Our goal is to build tools that empower teams to collaborate effectively, streamline project management, and deliver outstanding results.",
    image: "/about-us-1.jpeg",
  },
  whoWeAre: {
    title: "Who We Are",
    description:
      "We are a passionate team of construction and technology enthusiasts, dedicated to addressing the unique challenges faced by the construction industry. With a strong focus on innovation and usability, Zedops is creating solutions that are intuitive, powerful, and scalable.",
    image: "/construction-management-about-us.jpg",
  },
  ourMission: {
    title: "Our Mission",
    description:
      "To transform construction management by leveraging technology to bridge the gap between fieldwork and project planning. We believe in empowering teams with tools that foster collaboration, efficiency, and innovation.",
  },
  whyChooseUs: {
    title: "Why Choose Zedops?",
    description:
      "We are building Zedops with the end-user in mind, ensuring our platform is intuitive, practical, and addresses the real needs of the construction industry.",
    points: [
      {
        title: "Focused on Construction",
        description:
          "Our platform is designed specifically for the construction industry, ensuring every feature adds value.",
        icon: Building2, // Lucide-react icon name
      },
      {
        title: "User-Friendly Design",
        description:
          "We prioritize simplicity and usability, making it easy for teams to adapt and excel.",
        icon: CheckCircle,
      },
      {
        title: "Future-Ready",
        description:
          "We're continuously innovating to stay ahead of the ever-evolving industry landscape.",
        icon: TrendingUp,
      },
      {
        title: "Collaborative Development",
        description:
          "We actively seek feedback to ensure our solutions meet the needs of construction professionals.",
        icon: Users,
      },
    ],
  },
};

const AboutUs: React.FC = () => {
  const { hero, whoWeAre, ourMission, whyChooseUs } = aboutUsContent;

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-400 to-primary py-16">
        <div className="max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="lg:pr-16">
            <h1 className="text-4xl font-bold text-white lg:text-5xl">
              {hero.title}
            </h1>
            <p className="mt-6 text-lg text-white">{hero.description}</p>
          </div>
          <div className="mt-12 lg:mt-0">
            <Image
              src={hero.image}
              alt="Hero Image"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-8">
            <Image
              src={whoWeAre.image}
              alt="Who We Are"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
              {whoWeAre.title}
            </h2>
            <p className="mt-6 text-lg text-gray-600">{whoWeAre.description}</p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold lg:text-4xl">{ourMission.title}</h2>
          <p className="mt-6 text-lg">{ourMission.description}</p>
        </div>
      </section>

      {/* Why Choose Zedops Section */}
      <section className="py-16 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 lg:text-4xl">
            {whyChooseUs.title}
          </h2>
          <p className="mt-6 text-lg text-gray-700">
            {whyChooseUs.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
            {whyChooseUs.points.map((point, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 hover:scale-105"
              >
                {/* Icon or Visual Representation */}
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-r from-primary to-orange-400 rounded-full text-white">
                  {<point.icon />}
                </div>
                {/* Title */}
                <h3 className="mt-6 text-lg font-bold text-gray-900">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-gray-600">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action Section */}
        <section className="mt-16 max-w-6xl mx-auto py-12 bg-black rounded-2xl">
          <div className="px-12 flex flex-col lg:flex-row items-center justify-between">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold text-white lg:text-3xl">
                Experience how Zedops redefines construction efficiency
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Start your journey with Zedops and discover the tools that make
                construction smarter, faster, and easier.
              </p>
            </div>

            {/* Button */}
            <div className="mt-8 lg:mt-0">
              <Button
                size={"lg"}
                className="text-lg font-medium"
                onClick={() => {
                  redirect("/book-a-demo");
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default AboutUs;
