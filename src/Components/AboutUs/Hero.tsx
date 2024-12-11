const HeroContent = {
    title:' Building the Future of Construction Management',
    description: "At Zedops, we are revolutionizing the way construction projects are planned, managed, and delivered. Our mission is to empower construction companies with cutting-edge tools that enhance productivity, streamline workflows, and foster seamless collaboration across teams and stakeholders."
}

const Hero:React.FC = () =>{
    return (<>
      <section id="hero" className="pb-8 bg-orange-50 sm:pb-12 lg:pb-8">
        <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-40">
            <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
                <div className="lg:mt-16">
                    <div className="mx-auto text-center sm:max-w-lg lg:max-w-xl lg:text-left lg:mx-0">
                        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl xl:text-4xl sm:tracking-tight">{HeroContent.title}</h1>
                        <p className="mt-6 text-lg leading-7 text-gray-700 lg:leading-8 lg:text-xl">{HeroContent.description}</p>
                    </div>
                </div>
            </div>

            <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
            <div className="py-12 mt-6 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="relative pl-10 -mr-40 sm:max-w-3xl lg:max-w-none lg:h-full lg:pl-24">
                        <img className="w-full shadow-2xl rounded-xl lg:rounded-2xl lg:h-full lg:w-auto lg:max-w-none" src="/zed-ops.png" alt="Zedops-construction-management" />
                </div>
                </div>
            </div>
        </div>
    </section>
    </>);
};

export default Hero;