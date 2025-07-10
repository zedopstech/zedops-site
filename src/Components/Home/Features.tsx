"use client";

import React from "react";
import {
    ArrowRight,
    BarChart3,
    Bot,
    Brain,
    Calendar,
    ChevronRight,
    Clock,
    Cog,
    CoinsIcon,
    Command,
    Crosshair,
    Cpu,
    DollarSign,
    Eye,
    FileCode,
    FileCog,
    FileText,
    FlaskConical,
    Folder,
    FolderOpen,
    Gauge,
    GitCommit,
    Lightbulb,
    Paperclip,
    PieChart,
    RefreshCw,
    Rocket,
    Save,
    Sparkles,
    Tag,
    Target,
    TrendingUp,
    Users,
    Workflow,
    Wrench,
} from "lucide-react";
import ComingSoon from "@/Components/Home/CommingSoon";

const FeatureContent = [
    {
        mainTitle: "Smart Project Management",
        content:
            "Say goodbye to messy coordination, endless follow-ups, and miscommunication. Our platform brings everything together — so your team can focus on building, not chasing updates.",
        link: "/features/ai-intelligence",
        icon: Brain,
        color: "from-blue-500 to-indigo-600",
        bgGradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
        accentColor: "blue",
        orbitIcons: [
            Bot,
            Sparkles,
            Gauge,
            Lightbulb,
            Cpu,
            Command,
            Eye,
            FlaskConical,
        ],
        subTitles: [
            {
                id: 1,
                title: "Save 2–3 hours daily for every Project Manager",
            },
            {
                id: 2,
                title: "Cut project delays by up to 40%",
            },
            {
                id: 3,
                title: "Gain real-time visibility into every site and task",
            },
        ],
        howItWorks: {
            content: 'Central dashboard to assign, track, and update tasks across projects. Status updates, milestone tracking – all in one place. Plug-and-play with your existing workflows – no steep learning curve.'
        }
    },
    {
        mainTitle: "Seamless Team Collaboration",
        content: "Juggling multiple teams, roles, and responsibilities across sites? Our People Management Hub brings everyone together under one clear system — so your teams know exactly what to do, who’s responsible, and how to work smarter together.",
        link: "/features/project-tracking",
        icon: Rocket,
        color: "from-green-500 to-emerald-600",
        bgGradient: "from-green-500/10 via-emerald-500/5 to-transparent",
        accentColor: "green",
        orbitIcons: [
            Clock,
            TrendingUp,
            RefreshCw,
            Target,
            Crosshair,
            BarChart3,
            PieChart,
            GitCommit,
        ],
        subTitles: [
            {
                id: 1,
                title: "Cut team coordination time by 50%",
            },
            {
                id: 2,
                title: "No more role confusion or mixed signals",
            },
            {
                id: 3,
                title: "Fast, smooth onboarding for new members",
            },
            {
                id: 4,
                title: "Role-based access ensures safety and control",
            },
        ],
        howItWorks: { content: 'Add team members, assign roles, and control access with just a few clicks — all in one dashboard.' }
    },
    {
        mainTitle: "Real-Time Operations Control",
        content: "Too much time is wasted filling forms, chasing updates, and logging work manually. We replace that with a smarter, digital way to track daily activity — so nothing slips through the cracks.",
        link: "/features/document-management",
        icon: FileText,
        color: "from-amber-500 to-orange-600",
        bgGradient: "from-amber-500/10 via-orange-500/5 to-transparent",
        accentColor: "amber",
        orbitIcons: [FileCode, FileCog, Folder, FolderOpen, Paperclip, Tag, Save],
        subTitles: [
            {
                id: 1,
                title: "Eliminate 80% of paperwork and manual entry",
            },
            {
                id: 2,
                title: "Get accurate time logs for faster payroll",
            },
            {
                id: 3,
                title: "Photo logs ensure quality and reduce rework",
            },
            {
                id: 4,
                title: "Real-time progress tracking for full visibility",
            },
        ],
        howItWorks: { content: 'Your team logs daily tasks, time, and photos — everything gets stored instantly in one secure dashboard.' }
    },
    {
        mainTitle: "Quality & Compliance Assurance",
        content:"Missed inspections and poor documentation lead to costly rework, project delays, and compliance risks. We fix this with a digital system that ensures nothing gets missed and everything is well-documented.",
        link: "/features/resource-management",
        icon: Users,
        color: "from-purple-500 to-pink-600",
        bgGradient: "from-purple-500/10 via-pink-500/5 to-transparent",
        accentColor: "purple",
        orbitIcons: [
            Users,
            Workflow,
            DollarSign,
            CoinsIcon,
            Gauge,
            Calendar,
            Cog,
            Wrench,
        ],
        subTitles: [
            {
                id: 1,
                title: "Prevent costly rework and avoid delays",
            },
            {
                id: 2,
                title: "Reduce quality issues by up to 60%",
            },
            {
                id: 3,
                title: "Photo logs for accountability",
            },
        ],
        howItWorks: { content: 'Capture photo evidence directly on-site, add notes, and assign issues for quick resolution.' }
    },
];

const Features: React.FC = () => {
    return (
        <div className="relative text-white py-24" id="features">
            {/*<div className="relative z-10 max-w-3xl px-6 sm:px-8 lg:px-6 mx-auto text-center mb-16 lg:mb-20">
                <span
                    className="inline-block px-4 py-1.5 rounded-full bg-primary/15 text-primary text-sm font-semibold mb-5 shadow-sm">Key Features</span>
                <h2 className="text-3xl leading-tight sm:text-4xl xl:text-5xl font-bold">
                    Built for Construction Teams
                </h2>
                <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
                    Tools designed specifically for the challenges of modern construction management, helping teams work
                    smarter and deliver better results.
                </p>
            </div>*/}

            <div className="mx-auto text-center mb-16">
                <div
                    className="inline-block mb-4 sm:mb-6 px-4 py-1 sm:px-6 sm:py-2 rounded-full backdrop-blur-sm bg-primary text-secondary font-semibold items-center gap-1 sm:gap-2 animate-fadeIn shadow-sm text-xs sm:text-sm">
                    <div className="flex">
                        <span className="tracking-wide text-xs sm:text-sm lg:text-lg">
                          What We Solve?
                        </span>
                    </div>
                </div>

                <h2 className="text-lg sm:text-xl lg:text-3xl xl:text-5xl text-white font-black mb-6">
                    <p className="text-white">
                        Your Team Deserves a Smoother Way to Build.
                    </p>
                </h2>

                <p className="text-gray-300 text-sm sm:text-lg lg:text-xl max-w-3xl mx-auto font-medium">
                    We solve construction inefficiencies by eliminating bottlenecks,
                    enhancing collaboration, and delivering AI-powered insights—boosting
                    productivity by up to 35%.
                </p>
            </div>

            {/* <section className="py-12 md:py-18 relative">
                <div
                    className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 items-center px-6 lg:px-8">
                    <div
                        className={`${
                            1 % 2 === 0 ? "lg:col-span-6 lg:order-1" : "lg:col-span-6 lg:order-2"
                        } order-1`}
                    >
                        <div
                            className={`relative w-full h-64 lg:h-80`}>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-2xl font-bold text-white">🏗️&nbsp;Smart Project Management</span>
                            </div>
                        </div>
                    </div>



                    <div
                        className={`${
                            1 % 2 === 0 ? "lg:col-span-6 lg:order-2" : "lg:col-span-6 lg:order-1"
                        } space-y-8 order-2`}
                    >
                        <div>
                            <h3 className="text-3xl font-bold mb-4 text-white">
                                <span className="text-primary">🏗️&nbsp;Smart Project Management</span>
                            </h3>
                            <p className="text-lg text-gray-300 leading-relaxed">Say goodbye to messy coordination,
                                endless follow-ups, and miscommunication. Our platform brings everything together — so
                                your team can focus on building, not chasing updates.</p>
                        </div>

                        <div className="space-y-6 pb-4">
                            <h4 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300 py-1">
                                What you&#39;ll gain
                            </h4>

                            <div className="space-y-4 divide-y divide-white/10 text-gray-200 text-base leading-relaxed">
                                <div className="pt-0 flex items-center">
                                    <ArrowRight className={'w-4 h-4 mr-3'}/>
                                    Save 2–3 hours every day for each Project Manager
                                </div>
                                <div className="pt-4 flex items-center">
                                    <ArrowRight className={'w-4 h-4 mr-3'}/>
                                    Eliminate confusion with clear task ownership & updates
                                </div>
                                <div className="pt-4 flex items-center">
                                    <ArrowRight className={'w-4 h-4 mr-3'}/>
                                    Gain real-time visibility across all project sites
                                </div>
                                <div className="pt-4 flex items-center">
                                    <ArrowRight className={'w-4 h-4 mr-3'}/>
                                    Make smarter calls using performance dashboards
                                </div>
                                <div className="pt-4 flex items-center">
                                    <ArrowRight className={'w-4 h-4 mr-3'}/>
                                    Works with your tools – no major changes required
                                </div>
                            </div>
                        </div>


                        <Link
                            href={'/feature/smart-project-management'}
                            className="inline-flex uppercase items-center px-5 py-2.5 bg-primary/10 hover:bg-primary text-primary hover:text-secondary rounded-lg transition-all duration-300 group shadow-sm hover:shadow-lg"
                        >
                            <span className="mr-2 text-sm font-bold tracking-wider">Explore More</span>
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                        </Link>
                    </div>
                </div>
            </section> */}


            {FeatureContent.map((feature, index) => (
                <section key={index} className="py-12 md:py-18 relative">
                    <div
                        className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 items-center px-6 lg:px-8">

                        {/* Image/Icon Block */}
                        <div
                            className={`order-1 lg:col-span-6 ${
                                index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                            }`}
                        >
                            <div
                                className="relative w-full h-64 lg:h-80 bg-gradient-to-r rounded-xl flex items-center justify-center text-white text-2xl font-bold"
                                style={{
                                    background: `linear-gradient(to right, ${feature.color})`,
                                }}
                            >
                                <feature.icon className="w-12 h-12"/>
                                <span className="ml-4">{feature.mainTitle}</span>
                            </div>
                        </div>

                        {/* Text Block */}
                        <div
                            className={`order-2 lg:col-span-6 ${
                                index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                            } space-y-8`}
                        >
                            <div>
                                <h3 className="text-3xl font-bold mb-4 text-white">
                                    <span className="text-primary">{feature.mainTitle}</span>
                                </h3>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    {feature.content}
                                </p>
                            </div>

                            <div className="space-y-2 pt-1 pb-4">
                                <h4 className="text-lg uppercase font-black text-white">How it works?</h4>
                                <div
                                    className="text-gray-200 text-base leading-relaxed">
                                    <div className="pt-2">
                                        <div className="flex items-start">
                                            <div>
                                                <div className="text-lg text-gray-200">
                                                    {feature.howItWorks.content}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2 pb-4">
                                <h4 className="text-lg uppercase font-black text-white">What you&#39;ll gain</h4>
                                <div
                                    className="text-gray-200 text-base leading-relaxed">
                                    {feature.subTitles.map((item) => (
                                        <div key={item.id} className="pt-4">
                                            <div className="flex items-start">
                                                <ArrowRight className="w-4 h-4 my-auto mr-3 text-primary"/>
                                                <div>
                                                    <div className="text-lg text-gray-200">
                                                        {item.title}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <a
                                href={feature.link}
                                className="inline-flex uppercase items-center px-5 py-2.5 bg-primary/10 hover:bg-primary text-primary hover:text-secondary rounded-lg transition-all duration-300 group shadow-sm hover:shadow-lg"
                            >
                                  <span className="mr-2 text-sm font-bold tracking-wider">
                                    Explore More
                                  </span>
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                            </a>
                        </div>
                    </div>
                </section>
            ))}


            <ComingSoon/>

            {/* Bottom CTA */}
            {/*<div className="relative z-10 mt-8 mb-16 text-center">*/}
            {/*    <Link*/}
            {/*        href="/features"*/}
            {/*        className="inline-flex items-center px-8 py-3.5 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300"*/}
            {/*    >*/}
            {/*        View All Features*/}
            {/*        <ArrowRight className="ml-2 w-5 h-5"/>*/}
            {/*    </Link>*/}
            {/*</div>*/}
        </div>
    );
};

export default Features;
