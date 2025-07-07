import React from "react";
import Image from "next/image";
import {Building2, Calendar, CheckCircle, TrendingUp, Users} from "lucide-react";
import Link from "next/link";
import {Button} from "@/Components/UI/button";

const aboutUsContent = {
    hero: {
        title: "Shaping the Future of Construction Management",
        description:
            "At ZedOps, we're on a mission to simplify and modernize construction workflows. Our goal is to build tools that empower teams to collaborate effectively, streamline project management, and deliver outstanding results.",
        image: "/about-us-1.jpeg",
    },
    whoWeAre: {
        title: "Who We Are",
        description:
            "We are a passionate team of construction and technology enthusiasts, dedicated to addressing the unique challenges faced by the construction industry. With a strong focus on innovation and usability, ZedOps is creating solutions that are intuitive, powerful, and scalable.",
        image: "/construction-management-about-us.jpg",
    },
    ourMission: {
        title: "Our Mission",
        description:
            "To transform construction management by leveraging technology to bridge the gap between fieldwork and project planning. We believe in empowering teams with tools that foster collaboration, efficiency, and innovation.",
    },
    whyChooseUs: {
        title: "Why ZedOps?",
        description:
            "We are building ZedOps with the end-user in mind, ensuring our platform is intuitive, practical, and addresses the real needs of the construction industry.",
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
    const {hero, whoWeAre, ourMission, whyChooseUs} = aboutUsContent;

    return (
        <div className="bg-gray-50 text-background">
            {/* Hero Section */}
            <section className="py-16">
                {" "}
                <div
                    className="max-w-6xl flex flex-col mx-auto px-6 lg:px-0 lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    <div>
                        <h1 className="text-4xl font-black lg:text-5xl">{hero.title}</h1>
                        <p className="mt-8 text-gray-500 text-sm sm:text-lg lg:text-xl max-w-3xl mx-auto font-medium">{hero.description}</p>
                    </div>
                    <div className="mt-12 lg:mt-0">
                        <Image
                            src={hero.image}
                            alt="Hero Image"
                            width={600}
                            height={400}
                            className="rounded-md shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Who We Are Section */}
            <section className="py-16 bg-white">
                <div
                    className="max-w-6xl mx-auto flex flex-col px-6 lg:px-0 lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="mb-8">
                        <Image
                            src={whoWeAre.image}
                            alt="Who We Are"
                            width={600}
                            height={400}
                            className="rounded-md shadow-lg"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-black  lg:text-4xl">
                            {whoWeAre.title}
                        </h2>
                        <p className="mt-6 text-gray-500 text-sm sm:text-lg lg:text-xl max-w-3xl mx-auto font-medium">{whoWeAre.description}</p>
                    </div>
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="py-16 bg-background text-white">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-black lg:text-4xl">{ourMission.title}</h2>
                    <p className="mt-6 text-gray-300 text-sm sm:text-lg lg:text-xl max-w-3xl mx-auto font-medium">{ourMission.description}</p>
                </div>
            </section>

            {/* Why Choose ZedOps Section */}
            <section className="pt-16 lg:py-16 ">
                <div className="max-w-6xl mx-auto px-6 lg:px-0 text-center">
                    <h2 className="text-3xl font-black  lg:text-4xl">
                        {whyChooseUs.title}
                    </h2>
                    <p className="mt-6 text-gray-700 text-sm sm:text-lg lg:text-xl max-w-3xl mx-auto font-medium">{whyChooseUs.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                        {whyChooseUs.points.map((point, index) => (
                            <div
                                key={index}
                                className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 hover:scale-105"
                            >
                                {/* Icon or Visual Representation */}
                                {/* Icon */}
                                <div
                                    className="flex items-center justify-center w-16 h-16 mx-auto bg-background rounded-full text-white">
                                    {<point.icon/>}
                                </div>
                                {/* Title */}
                                <h3 className="mt-6 text-lg font-bold ">{point.title}</h3>

                                {/* Description */}
                                {/*<p className="mt-3 text-sm ">{point.description}</p>*/}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call-to-Action Section */}
                <section className="mt-16 max-w-6xl mx-auto py-12 bg-gray-950 lg:rounded-2xl">
                    <div className="px-8 flex flex-col items-center  justify-center lg:flex-row lg:justify-between">
                        {/* Text Content */}
                        <div className="text-center lg:text-left">
                            <h2 className="text-2xl font-bold text-white lg:text-3xl">
                                Experience how ZedOps redefines construction efficiency
                            </h2>
                            <p className="mt-2 text-lg text-gray-300">
                                Start your journey with ZedOps and discover the tools that make
                                construction smarter, faster, and easier.
                            </p>
                        </div>

                        {/* Button */}
                        <div className="my-auto">
                            <Link href="/book-a-demo" title="Book a Demo">
                                <Button size={"lg"} className="font-semibold">
                                    Book a Demo <Calendar/>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default AboutUs;
