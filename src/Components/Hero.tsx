import { CalendarDays } from "lucide-react";
import Link from "next/link";

const HeroContent = {
    title:' Revolutionize Your Construction Management',
    description: "ZedOps transforms how construction teams operate—streamline workflows, mitigate risks, and drive unprecedented efficiency from preconstruction to project completion.",
    getStartBtn: '#',
    demoReqBtn:"#"
}

const Hero:React.FC = () =>{
    return (<>
      <section id="hero" className="pb-8 bg-orange-50 sm:pb-12 lg:pb-12">
        <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-40">
            <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
                <div className="lg:mt-16">
                    <div className="mx-auto text-center sm:max-w-lg lg:max-w-xl lg:text-left lg:mx-0">
                        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl xl:text-4xl sm:tracking-tight">{HeroContent.title}</h1>
                        <p className="mt-6 text-lg leading-7 text-gray-700 lg:leading-8 lg:text-xl">{HeroContent.description}</p>
                    </div>

                    <div className="flex flex-col items-stretch justify-center gap-4 mt-8 sm:flex-row sm:items-center sm:mt-10 lg:justify-start sm:flex-wrap">
                        <a
                            href="#cto"
                            title=""
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-200 bg-orange-500 border rounded-lg shadow-sm hover:bg-white hover:text-black hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                            role="button"
                        >
                            Get Start
                        </a>

                        <Link
                            href="/coming-soon"
                            title=""
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-900 transition-all duration-200 border border-gray-400 rounded-lg hover:bg-orange-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                            role="button"
                        >
                           <CalendarDays className=" text-gray-400 w-[18px]"/>{"  "}
                           <span className="px-1">Request Demo</span>
                           
                        </Link>
                    </div>
                </div>
            </div>

            <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
            <div className="py-12 mt-6 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="relative pl-10 -mr-40 sm:max-w-3xl lg:max-w-none lg:h-full lg:pl-24">
                        <img className="w-full shadow-2xl rounded-xl lg:rounded-2xl lg:h-full lg:w-auto lg:max-w-none" src="/construction-management-ZedOps.png" alt="Zedops-construction-management" />
                </div>
                </div>
            </div>
        </div>
    </section>
    </>);
};

export default Hero;