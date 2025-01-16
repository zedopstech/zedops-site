import { ArrowRight } from 'lucide-react';
const features = [
  {
    name: 'Real-Time Monitoring',
    description:
      'Track material movement and availability instantly across sites. Ensure timely updates to prevent delays and improve efficiency.',
    icon: ArrowRight
  },
  {
    name: 'Stock Level Insights',
    description: 'Gain a clear view of current inventory levels at any time. Make informed decisions to prevent overstocking or shortages.',
    icon: ArrowRight
  },
  
];
const additionalFeatures = [
    {
      name: 'Track in Real-Time',
      description: 'Monitor the location and status of your equipment in real-time to ensure smooth operations. With instant updates, you can quickly identify issues and optimize asset usage.',
      icon: ArrowRight
  },
    
    {
      name: 'Maximize Equipment Use',
      description: 'Ensure optimal equipment utilization by tracking availability and usage patterns. Allocate assets efficiently to reduce idle time and boost productivity across all projects.',
      icon: ArrowRight
    },
    
   
  ];
  const thirdSectionFeatures = [
    {
      name:'Efficient Audits',
      description: 'Streamline your audit processes with automated tools that ensure quick and accurate checks. Minimize errors and reduce manual effort while maintaining full inventory visibility',
      icon: ArrowRight
    },
    {
      name:'Comprehensive Reports',
      description: 'Generate detailed reports to track inventory levels, movements, and usage patterns. Use these insights to optimize inventory management and support strategic decision-making.',
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
                  <h2 className="text-base/7 font-bold text-primary">Material Tracking</h2>
                  <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-3xl">
                    Track materials seamlessly, build efficiently
                  </p>
                  <p className="mt-6 text-lg/8 text-gray-300">
                    Efficiently monitor the movement and usage of materials in real time. Ensure timely availability, reduce wastage, and keep projects on schedule.
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
                src="/material-1.jpg"
                className="w-full h-auto sm:w-[44rem] sm:h-[30rem] md:ml-[-2rem] lg:ml-[-4rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 mt-12"
              />
            </div>
    
            {/* Second Section */}
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2  mt-16">
            <img
                alt=""
                src="/material-2.jpeg"
                className="w-full h-auto sm:w-[44rem] sm:h-[30rem] md:ml-[-2rem] lg:ml-[-4rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 mt-12"
              />
              <div className="lg:pr-8 lg:mt-4 lg:ml-32 lg:max-w-3xl min-h-[200px]">
                <div className="lg:max-w-lg">
                  <h2 className="text-base/7 font-bold text-primary">Equipment Tracking</h2>
                  <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-3xl">
                    Track equipment effortlessly, enhance productivity
                  </p>
                  <p className="mt-6 text-lg/8 text-gray-300">
                    Efficiently managing and tracking your equipment is crucial for optimizing productivity, reducing downtime, and minimizing costs. 
                    With our equipment tracking solution.
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
                  <h2 className="text-base/7 font-bold text-primary">Inventory Audits & Reporting</h2>
                  <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-3xl">
                    Manage inventory efficiently, reduce costs
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
                src="/material-3.jpg"
                className="w-full h-auto sm:w-[44rem] sm:h-[30rem] md:ml-[-2rem] lg:ml-[-4rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 mt-12"
              />
            </div>
          </div>
        </div>
    );
}
