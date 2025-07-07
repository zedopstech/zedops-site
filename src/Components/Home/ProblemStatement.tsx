"use client";
import {
    Building2,
    ClipboardCheck,
    Clock,
    Coins,
    FileText,
    HardHat,
    LineChart,
    Ruler,
    ShieldCheck,
    Users,
    Workflow,
    BadgeDollarSign,
    Calendar, ArrowRight, ChartArea, CheckCircle,
} from "lucide-react";
import Link from "next/link";
import {useEffect} from "react";

const WHY_ZEDOPS = [
    {
        id: 1,
        title: "Save 2-3 hours daily per project manager",
        badge_title: '35% Boost in Project Efficiency',
        sub_title: 'Smart Project Management',
        desc: 'Boost project efficiency by 35% with smart, streamlined management.',
        icon: ChartArea
    },
    {
        id: 2,
        title: "Reduce team coordination time by 50%",
        badge_title: 'Seamless Team Collaboration',
        sub_title: 'People Management Hub',
        desc: 'Unite your team with seamless collaboration and smart role-based control.',
        icon: Users
    },
    {
        id: 3,
        title: "Eliminate 80% of paperwork and manual data entry",
        badge_title: 'Real-Time Operations Control',
        sub_title: 'Daily Operations Management',
        desc: 'Stay in control with real-time logs, time tracking, and daily ops visibility.',
        icon: FileText
    },
    {
        id: 4,
        title: "Prevent costly rework and delays",
        badge_title: 'Quality & Compliance Assurance',
        sub_title: 'Inspection & Observation',
        desc: 'Ensure top-tier quality & compliance with smart inspections and auto-reports.',
        icon: CheckCircle
    },
]

const content = {
    mainTitle: "Why Industry Leaders Choose ZedOps",
    subTitle: "Everything you need to manage your construction projects efficiently",
    // Features organized with icons for the grid layout
    features: [
        {
            id: 1,
            text: "Team Collaboration",
            icon: Users,
            description: "Connect your team with real-time communication and file sharing"
        },
        {
            id: 2,
            text: "Project Planning",
            icon: Workflow,
            description: "Plan your projects with interactive Gantt charts and task assignments"
        },
        {
            id: 3,
            text: "Cost Control",
            icon: Coins,
            description: "Track and analyze costs with detailed financial reporting"
        },
        {
            id: 4,
            text: "Quality Management",
            icon: ClipboardCheck,
            description: "Implement quality checks and approvals for superior results"
        },
        {
            id: 5,
            text: "Fast Execution",
            icon: Clock,
            description: "Streamline processes with automated workflows and approvals"
        },
        {
            id: 6,
            text: "Safety Compliance",
            icon: HardHat,
            description: "Ensure safety standards with checklists and incident reporting"
        },
        {
            id: 7,
            text: "Resource Allocation",
            icon: Building2,
            description: "Optimize resource usage across multiple projects"
        },
        {
            id: 8,
            text: "Documentation",
            icon: FileText,
            description: "Centralize all project documentation with version control"
        },
        {
            id: 9,
            text: "Risk Management",
            icon: ShieldCheck,
            description: "Identify and mitigate risks before they impact your project"
        },
        {
            id: 10,
            text: "Schedule Tracking",
            icon: LineChart,
            description: "Monitor project timelines and milestones in real-time"
        },
        {
            id: 11,
            text: "Field Reports",
            icon: Ruler,
            description: "Collect data from the field with mobile-friendly forms"
        },
        {
            id: 12,
            text: "Budgeting",
            icon: BadgeDollarSign,
            description: "Create and manage detailed budgets with variance analysis"
        },
    ],
    cta: {
        text: "Get Started Today",
        link: "/signup"
    }
};

// Split features into groups of 6 for the carousel
/*const featureGroups = [
    content.features.slice(0, 6),
    content.features.slice(6, 12)
];

const FeatureCard = ({feature}: { feature: typeof content.features[0] }) => (
    <div
        className="bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 group border border-gray-100/50 relative overflow-hidden h-full"
    >
        {/!* Gradient overlay effect *!/}
        <div
            className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/!* Content with relative positioning *!/}
        <div className="relative z-10">
            {/!* Subtle background decoration *!/}
            <div
                className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-secondary/5 group-hover:bg-secondary/10 transition-colors duration-300"></div>

            <div
                className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary/20 group-hover:text-secondary transition-all duration-300 shadow-sm">
                <feature.icon size={26}/>
            </div>

            <h3 className="text-xl font-bold text-gray-700 mb-3 group-hover:text-secondary transition-colors duration-300">
                {feature.text}
            </h3>

            <p className="text-gray-500 group-hover:text-gray-600 transition-colors duration-300 relative z-10">
                {feature.description}
            </p>
        </div>
    </div>
);*/

const CoreFeatures: React.FC = () => {
    useEffect(() => {
        const checkIfMobile = () => {
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);


    return (
        <section
            id="core-features"
            className="py-20 lg:py-28 px-6 lg:px-0 relative overflow-hidden bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
        >
            <div className="mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="mx-auto text-center mb-16">
                    <div
                        className="inline-block mb-4 sm:mb-6 px-4 py-1 sm:px-6 sm:py-2 rounded-full backdrop-blur-sm bg-secondary text-white font-semibold items-center gap-1 sm:gap-2 animate-fadeIn shadow-sm text-xs sm:text-sm">
                        <div className="flex">
                            <span className="tracking-wide text-xs sm:text-sm lg:text-lg">Why ZedOps?</span>
                        </div>
                    </div>

                    <h2 className="text-lg sm:text-xl lg:text-3xl xl:text-5xl text-gray-800 font-black mb-6">
                        <p className="text-secondary">Why Industry Leaders Choose ZedOps</p>
                        {/*<p className="text-secondary font-black mt-4">ZedOps</p>*/}
                    </h2>

                    <p className="text-gray-600 text-sm sm:text-lg lg:text-xl max-w-3xl mx-auto font-medium">
                        Everything you need to manage your construction projects efficiently.
                        From team collaboration to cost control, ZedOps has you covered.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
                    {WHY_ZEDOPS.map(item => (
                        <div className="space-y-4 sm:space-y-8 relative" key={item.id}>
                            <div
                                className="bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 group border border-gray-100/50 relative overflow-hidden h-full"
                            >
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative z-10 p-2">
                                    <div
                                        className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-secondary/5 group-hover:bg-secondary/10 transition-colors duration-300"></div>
                                    <div
                                        className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary/20 group-hover:text-secondary transition-all duration-300 shadow-sm">
                                        {item.icon && <item.icon size={26}/>}
                                    </div>
                                    <div className={'mb-2 font-semibold text-gray-700 group-hover:text-secondary transition-colors duration-300'}>
                                    <span
                                        className="text-gray-500 group-hover:text-gray-600 transition-colors duration-300 relative z-10">
                                        {item.sub_title}
                                    </span>
                                    </div>
                                    <h3 className="text-lg uppercase font-black text-secondary mb-3 group-hover:text-secondary transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-500 font-medium group-hover:text-gray-600 transition-colors duration-300 relative z-10">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="mt-16 text-center">

                    <p className="mb-6 font-bold text-xl text-secondary">🚀 Ready to transform your construction operations and achieve these results?</p>

                    <Link href="/book-a-demo"
                        className="inline-flex items-center px-8 py-3.5 bg-secondary/90 hover:bg-secondary text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                    >
                        <Calendar className="mr-3 h-5 w-5"/>
                        Book a Demo
                        <ArrowRight className="ml-3 h-5 w-5"/>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CoreFeatures;
