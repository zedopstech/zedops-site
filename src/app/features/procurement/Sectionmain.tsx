import { ArrowRight } from 'lucide-react';
const features = [
  {
    name: 'Procurement Processes',
    description:
      'Streamline every step of procurement with tools that enhance vendor management, optimize sourcing, and ensure timely deliveries.Focus on strategy, not paperwork.',
    icon: ArrowRight
  },
  {
    name: 'Procurement Automation',
    description: 'Simplify vendor selection, track purchase orders, and ensure timely approvals with intelligent procurement automation tools.',
    icon: ArrowRight
  },
  
];
const additionalFeatures = [
    {
      name: 'Performance Tracking',
      description: 'Keep all supplier information in one organized platform for easy access.Monitor supplier reliability, quality, and delivery timelines with detailed metrics.',
      icon: ArrowRight
  },
    
    {
      name: 'Contract Management',
      description: 'Simplify the creation, storage, and renewal of vendor contracts.Identify and mitigate potential risks in vendor relationships.',
      icon: ArrowRight
    },
    
   
  ];
  const thirdSectionFeatures = [
    {
      name:'Automated Notifications',
      description: 'Monitor purchase orders from initiation to delivery in real-time.Receive instant alerts on order approvals, delays, or updates.',
      icon: ArrowRight
    },
    {
      name:'Budget Tracking',
      description: 'Track expenditures against allocated budgets for better financial control.Keep tabs on expected delivery dates to prevent project delays.',
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
                  <h2 className="text-base/7 font-bold text-primary">Smarter Procurement</h2>
                  <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-3xl">
                  Streamline Procurement, Deliver Excellence
                  </p>
                  <p className="mt-6 text-lg/8 text-gray-300">
                  Unlock tools that transform how procurement teams source, manage vendors, and ensure 
                  timely, cost-effective project deliveries.
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
                src="/procure-1.jpg"
                className="w-full h-auto sm:w-[44rem] sm:h-[30rem] md:ml-[-2rem] lg:ml-[-4rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 mt-12"
              />
            </div>
           {/* Second Section */}
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 mt-16">
            <img
                alt=""
                src="/procure-2.png"
                className="w-full h-auto sm:w-[44rem] sm:h-[30rem] md:ml-[-2rem] lg:ml-[-4rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 mt-12"
              />
              <div className="lg:pr-8 lg:mt-4 lg:ml-32 lg:max-w-3xl min-h-[200px]">
                <div className="lg:max-w-lg">
                  <h2 className="text-base/7 font-bold text-primary">Vendor Management</h2>
                  <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-3xl">
                  Manage Vendors,Build Strong Partnerships
                  </p>
                  <p className="mt-6 text-lg/8 text-gray-300">
                  Effortlessly organize and evaluate suppliers with tools for tracking performance, 
                  managing contracts, and fostering strong vendor relationships.
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
                  <h2 className="text-base/7 font-bold text-primary">Real-Time Purchase Tracking</h2>
                  <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-3xl">
                  Track Purchases Instantly, Stay Ahead
                  </p>
                  <p className="mt-6 text-lg/8 text-gray-300">
                   Conduct regular audits to ensure inventory accuracy and compliance.Generate detailed reports to gain insights, 
                   track performance, and make informed decisions.
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
                src="/procure-3.png"
                className="w-full h-auto sm:w-[44rem] sm:h-[30rem] md:ml-[-2rem] lg:ml-[-4rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 mt-12"
              />
            </div>
          </div>
        </div>
    );
}
