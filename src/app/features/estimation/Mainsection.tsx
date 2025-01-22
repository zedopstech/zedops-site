import { ArrowRight } from 'lucide-react';
const features = [
  {
    name: 'Comprehensive Takeoff Options',
    description:
      'Measure areas, linear distances, or weights to suit any construction type and project needs.',
    icon: ArrowRight
  },
  {
    name: 'AI-Powered Accuracy',
    description: 'Simplify vendor selection, track purchase orders, and ensure timely approvals with intelligent procurement automation tools.',
    icon: ArrowRight
  },
  {
    name: 'Time-Saving Automation',
    description: 'Quickly generate detailed estimates and focus on winning more bids in less time.',
    icon: ArrowRight
  },
  
];
const additionalFeatures = [
    {
      name: 'AI-Enhanced Takeoff',
      description: 'Replace manual counting with AI-driven automation, ensuring precise quantity measurements and error-free results.',
      icon: ArrowRight
  },
    
    {
      name: 'Versatile Takeoff Methods',
      description: 'Support area, linear, or weight-based takeoffs to cater to all types of construction projects.',
      icon: ArrowRight
    },
    {
      name: 'Efficient Estimation Process',
      description: 'Speed up the estimation process to reduce turnaround time and secure more competitive bids.',
      icon: ArrowRight
    },
    
   
  ];
  const thirdSectionFeatures = [
    {
      name:'AI-Driven Quantity Takeoff',
      description:'Streamline the counting process with AI-powered automation for precise and efficient takeoffs.',
      icon: ArrowRight
    },
    {
      name:'Multi-Page & Multi-Dimensional Accuracy',
      description:'Count and validate items across pages with customizable filters to ensure the highest level of accuracy.',
      icon: ArrowRight
    },
    {
      name:'Versatile Measurement Options',
      description:'Support for area, linear, and weight-based takeoffs, tailored for all construction types and needs.',
      icon: ArrowRight
    },
    
  ];
  export default function Example() {
    return (
        <div className="overflow-hidden bg-background py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* First Section */}
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base/7 font-bold text-primary">Optimized Estimation</h2>
                  <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-3xl">
                  Win More Projects
                  </p>
                  <p className="mt-6 text-lg/8 text-gray-300">
                  Elevate your estimation accuracy and efficiency to secure more jobs with confidence.
                 </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-300 lg:max-w-none">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-bold text-primary">
                          <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-white" />
                          {feature.name}
                        </dt>{' '}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <img
                alt=""
                src="/estimation-1.png"
                className="w-full h-auto sm:w-[44rem] sm:h-[30rem] md:ml-[-2rem] lg:ml-[-4rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 mt-12"
              />
            </div>
           {/* Second Section */}
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 mt-16">
            <img
                alt=""
                src="/estimation-2.png"
                className="w-full h-auto sm:w-[44rem] sm:h-[30rem] md:ml-[-2rem] lg:ml-[-4rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 mt-12"
              />
              <div className="lg:pr-8 lg:mt-4 lg:ml-32 lg:max-w-3xl min-h-[200px]">
                <div className="lg:max-w-lg">
                  <h2 className="text-base/7 font-bold text-primary">Streamlined Estimation</h2>
                  <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-3xl">
                  Boost Your Project Wins
                  </p>
                  <p className="mt-6 text-lg/8 text-gray-300">
                  Increase your project success rate with faster, more accurate construction estimates.
                  </p>
                  <dl className="mt-10  max-w-xl space-y-8 text-base/7 text-gray-300 lg:max-w-none">
                    {additionalFeatures.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-bold text-primary">
                          <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-white" />
                          {feature.name}
                        </dt>{' '}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
            {/* Third Section */}
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 mt-16">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base/7 font-bold text-primary">Advanced Estimation Solutions</h2>
                  <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-3xl">
                  Maximize Your Project Wins
                  </p>
                  <p className="mt-6 text-lg/8 text-gray-300">
                  Accelerate your estimation process and increase bid accuracy with advanced tools.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-300 lg:max-w-none">
                    {thirdSectionFeatures.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-bold text-primary">
                          <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-white" />
                          {feature.name}
                        </dt>{' '}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <img
                alt=""
                src="/estimation-3.jpg"
                className="w-full h-auto sm:w-[44rem] sm:h-[30rem] md:ml-[-2rem] lg:ml-[-4rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 mt-12"
              />
            </div>
          </div>
        </div>
    );
}
