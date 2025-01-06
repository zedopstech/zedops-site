import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const features = [
  {
    name: 'Real-time collaboration',
    description: 'Always updated – never outdated. Changes made in the field or in the office are made in real time. You are always working with the latest data. Need the "latest" plans – go in and grab em',
  },
  {
    name: 'Financial Tracking',
    description: 'Financials from anywhere. You no longer need to be in the office or wade through a lot of reports to get a grasp on your project financials. It’s all in one place making it easy to stay on track of your income and expenses.',
  },
  {
    name: 'Project Tracking',
    description: 'Project tracking made easy. Track your projects from start to finish, advancing them from one status to the next. No more guessing about the status of the project or asking "what else is left". Using the Schedule, you’ll know the percent complete for the project as a whole as well as the individual tasks.',
  },
];

const additionalFeatures = [
  {
    name: 'Project Records',
    description: 'For superintendents, project managers, and even subcontractor managers, it’s paramount to keep logs of what happens on the job site. Have that complete Project Record for years to come.',
  },
  {
    name: 'People on Jobsite',
    description: 'You no longer have to guess – keep it all easily recorded in the Daily Log. This is great for tracking down the source of delays.',
  },
  {
    name: 'Material & Equipment used',
    description: 'Do you know where your inventory is being used and when? If you are recording it in our Daily Log’s then you will.',
  },
];

const thirdSectionFeatures = [
  {
    name: 'Non-Working Days',
    description: 'Seamlessly integrate with your existing tools like Slack, Trello, and more to streamline your workflows.',
  },
  {
    name: 'Gantt Charts',
    description: 'Generate and customize reports to suit your specific needs and share insights with your team.',
  },
  {
    name: 'Percent Complete Tracking',
    description: 'Ensure your data is secure with enterprise-grade encryption and regular backups.',
  },
];

export default function Example() {
  const [openFeature, setOpenFeature] = useState<number | null>(null);
  const [openAdditionalFeature, setOpenAdditionalFeature] = useState<number | null>(null);
  const [openThirdFeature, setOpenThirdFeature] = useState<number | null>(null);
  const [highlightedFeature, setHighlightedFeature] = useState<number | null>(null); // Track highlighted feature

  const toggleFeatureDescription = (index: number) => {
    setOpenFeature(openFeature === index ? null : index);
    setHighlightedFeature(openFeature === index ? null : index); // Toggle highlight
  };

  const toggleAdditionalFeatureDescription = (index: number) => {
    setOpenAdditionalFeature(openAdditionalFeature === index ? null : index);
    setHighlightedFeature(openAdditionalFeature === index ? null : index); // Toggle highlight
  };

  const toggleThirdFeatureDescription = (index: number) => {
    setOpenThirdFeature(openThirdFeature === index ? null : index);
    setHighlightedFeature(openThirdFeature === index ? null : index); // Toggle highlight
  };

  return (
    <div className="overflow-hidden">
      {/* First Section */}
      <div id="projects" className="bg-pink-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-indigo-600">Projects</h2>
                <p className="mt-2 text-pretty font-semibold tracking-tight text-gray-900 sm:text-4xl">
                  Take Charge of Your Projects, Don't Let Them Take Charge of You
                </p>
                <p className="mt-6 text-lg/8 text-gray-600">
                  Organize your projects with customizable workflows and boards. Set clear goals and track milestones with interactive Gantt charts. Assign tasks, manage resources, and ensure timely delivery. Collaborate with your team in a centralized workspace.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                  {features.map((feature, index) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt
                        className={`inline font-semibold cursor-pointer ${
                          highlightedFeature === index ? 'text-orange-500' : 'text-gray-900'
                        }`}
                        onClick={() => toggleFeatureDescription(index)}
                      >
                        <ArrowRight className="inline ml-2 text-indigo-600" /> {feature.name}
                      </dt>
                      <dd
                        className={`inline block mt-2 text-gray-600 transition-all duration-300 ease-in-out max-h-0 overflow-hidden ${
                          openFeature === index ? 'max-h-screen' : ''
                        }`}
                      >
                        {openFeature === index && feature.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
              alt=""
              src="/project hero.jpg"
              className="w-[500px] h-[550px] rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div id="daily-logs" className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <img
              alt=""
              src="/project dailylog.png"
              className="w-[500px] h-[550px] rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-indigo-600">Daily Logs</h2>
                <p className="mt-2 text-pretty font-semibold tracking-tight text-gray-900 sm:text-4xl">
                  Stay On Top of Daily Activities
                </p>
                <p className="mt-6 text-lg/8 text-gray-600">
                  Full Daily Logs keep you safe and up to date. Weather, visitors, safety, productivity, materials used and more are all covered in your Daily Logs.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                  {additionalFeatures.map((feature, index) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt
                        className={`inline font-semibold cursor-pointer ${
                          highlightedFeature === index ? 'text-orange-500' : 'text-gray-900'
                        }`}
                        onClick={() => toggleAdditionalFeatureDescription(index)}
                      >
                        <ArrowRight className="inline ml-2 text-indigo-600" /> {feature.name}
                      </dt>
                      <dd
                        className={`inline block mt-2 text-gray-600 transition-all duration-300 ease-in-out max-h-0 overflow-hidden ${
                          openAdditionalFeature === index ? 'max-h-screen' : ''
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
        </div>
      </div>

      {/* Third Section */}
      <div id="scheduling" className="bg-pink-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-indigo-600">Scheduling</h2>
                <p className="mt-2 text-pretty font-semibold tracking-tight text-gray-900 sm:text-4xl">
                  Manage Your Projects Effectively
                </p>
                <p className="mt-6 text-lg/8 text-gray-600">
                  Time is money, and outdated, costly tools shouldn't slow you down. Say goodbye to expensive CPM Gantt chart software and embrace a smarter way to manage your schedules. Carry your project plans with you wherever you go and effortlessly share them with your team, keeping everyone aligned and productive.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                  {thirdSectionFeatures.map((feature, index) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt
                        className={`inline font-semibold cursor-pointer ${
                          highlightedFeature === index ? 'text-orange-500' : 'text-gray-900'
                        }`}
                        onClick={() => toggleThirdFeatureDescription(index)}
                      >
                        <ArrowRight className="inline ml-2 text-indigo-600" /> {feature.name}
                      </dt>
                      <dd
                        className={`inline block mt-2 text-gray-600 transition-all duration-300 ease-in-out max-h-0 overflow-hidden ${
                          openThirdFeature === index ? 'max-h-screen' : ''
                        }`}
                      >
                        {openThirdFeature === index && feature.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
              alt=""
              src="/project schedule.jpg"
              className="w-[500px] h-[550px] rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
