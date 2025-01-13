import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const features = [
  {
    name: 'Supplier Collaboration',
    description: 'Always in Sync – Never Out of Touch.Real-time updates ensure seamless communication between you and your suppliers. Access the latest information, track progress, and make decisions with confidence, no matter where you are. Need supplier details or updates? Just check in and stay ahead.',
  },
  {
    name: 'Supplier Performance Insights',
    description: 'No more digging through emails or spreadsheets. Get real-time insights into supplier performance, track key metrics, and assess reliability all in one place. Stay informed, make data-driven decisions, and keep your supply chain running smoothly.',
  },
  {
    name: 'End-to-End Contract ',
    description: 'Track your contracts from initiation to completion, with every detail in one place. No more uncertainty or missed deadlines. With our comprehensive system, you ll always know the status of each agreement, key milestones, and upcoming renewals—ensuring smooth, on-time execution of every contract.',
  },
];

const additionalFeatures = [
  {
    name: 'Employee Profiles',
    description: 'For HR professionals, team leads, and managers, maintaining detailed employee profiles is crucial. Keep a comprehensive record of each team member’s skills, performance, and development for long-term success and growth.',
  },
  {
    name: 'Workforce Scheduling',
    description: 'No more confusion – keep all scheduling details clear and accessible. Easily track shifts, time-off requests, and availability to ensure optimal workforce management and prevent any staffing gaps.',
  },
  {
    name: 'Performance & Development',
    description: 'Do you know how your team is performing and progressing? If you’re tracking it in our Performance & Development logs, you will. Keep clear records of achievements, growth, and areas for improvement to drive continuous success.',
  },
];
export default function Example() {
  const [openFeature, setOpenFeature] = useState<number | null>(null);
  const [openAdditionalFeature, setOpenAdditionalFeature] = useState<number | null>(null);
  const [highlightedFeature, setHighlightedFeature] = useState<number | null>(null);

  const toggleFeatureDescription = (index: number) => {
    setOpenFeature(openFeature === index ? null : index);
    setHighlightedFeature(openFeature === index ? null : index);
  };

  const toggleAdditionalFeatureDescription = (index: number) => {
    setOpenAdditionalFeature(openAdditionalFeature === index ? null : index);
    setHighlightedFeature(openAdditionalFeature === index ? null : index);
  };
return (
    <div className="overflow-hidden">
      {/* First Section */}
      <section id="supplier-relations" className="bg-pink-50 py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 sm:gap-20 lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <h2 className="text-base font-semibold text-indigo-600">Supplier Relations</h2>
              <p className="mt-2 text-2xl sm:text-4xl font-semibold text-gray-900">
              Build Stronger Partnerships, Don’t Let Them Break Down
              </p>
              <p className="mt-6 text-lg text-gray-600">
              Track supplier performance, manage contracts, and foster collaboration. Set clear expectations,
              monitor deliverables, and ensure seamless supply chain operations.
              </p>
              <dl className="mt-10 space-y-8">
                {features.map((feature, index) => (
                  <div key={feature.name} className="relative">
                    <dt
                      className={`font-semibold cursor-pointer ${
                        highlightedFeature === index ? 'text-orange-500' : 'text-gray-900'
                      }`}
                      onClick={() => toggleFeatureDescription(index)}
                    >
                      <ArrowRight className="inline-block text-indigo-600" /> {feature.name}
                    </dt>
                    <dd
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        openFeature === index ? 'max-h-screen mt-2' : 'max-h-0'
                      }`}
                    >
                      {openFeature === index && feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <img
              alt=""
              src="/directory-1.jpg"
              className="w-full h-auto sm:w-full sm:max-h-[400px] md:max-h-[500px] lg:max-h-[100%] rounded-xl shadow-xl ring-1 ring-gray-400/10 mt-20"
            />
          </div>
        </div>
      </section>
     {/* Second Section */}
      <section id="employee-operations" className="bg-pink-50 py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 sm:gap-20 lg:grid-cols-2">
            <img
              alt=""
              src="/directory-2.png"
              className="w-full h-auto sm:w-full sm:max-h-[400px] md:max-h-[500px] lg:max-h-[100%] rounded-xl shadow-xl ring-1 ring-gray-400/10 mt-20"
            />
            <div className="lg:pr-8 lg:pt-4">
              <h2 className="text-base font-semibold text-indigo-600">Employee Operations</h2>
              <p className="mt-2 text-2xl sm:text-4xl font-semibold text-gray-900">
              Optimizing employee operations for a more efficient and empowered workforce.
              </p>
              <p className="mt-6 text-lg text-gray-600">
              Track attendance, tasks, performance, and well-being—all in one place. From daily activities to key updates, stay on top of your workforce with ease and ensure smooth operations every day.
              </p>
              <dl className="mt-10 space-y-8">
                {additionalFeatures.map((feature, index) => (
                  <div key={feature.name} className="relative">
                    <dt
                      className={`font-semibold cursor-pointer ${
                        highlightedFeature === index ? 'text-orange-500' : 'text-gray-900'
                      }`}
                      onClick={() => toggleAdditionalFeatureDescription(index)}
                    >
                      <ArrowRight className="inline-block text-indigo-600" /> {feature.name}
                    </dt>
                    <dd
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        openAdditionalFeature === index ? 'max-h-screen mt-2' : 'max-h-0'
                      }`}
                    >
                      {openAdditionalFeature === index && feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
</div>
  );
}
