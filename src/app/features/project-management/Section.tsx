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
  const [highlightedFeature, setHighlightedFeature] = useState<number | null>(null);

  const toggleFeatureDescription = (index: number) => {
    setOpenFeature(openFeature === index ? null : index);
    setHighlightedFeature(openFeature === index ? null : index);
  };

  const toggleAdditionalFeatureDescription = (index: number) => {
    setOpenAdditionalFeature(openAdditionalFeature === index ? null : index);
    setHighlightedFeature(openAdditionalFeature === index ? null : index);
  };

  const toggleThirdFeatureDescription = (index: number) => {
    setOpenThirdFeature(openThirdFeature === index ? null : index);
    setHighlightedFeature(openThirdFeature === index ? null : index);
  };

  return (
    <div className="overflow-hidden">
      {/* First Section */}
      <section id="projects" className="bg-pink-50 py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 sm:gap-20 lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <h2 className="text-base font-semibold text-indigo-600">Projects</h2>
              <p className="mt-2 text-2xl sm:text-4xl font-semibold text-gray-900">
                Take Charge of Your Projects, Don't Let Them Take Charge of You
              </p>
              <p className="mt-6 text-lg text-gray-600">
                Organize your projects with customizable workflows and boards. Set clear goals and track milestones with interactive Gantt charts. Assign tasks, manage resources, and ensure timely delivery.
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
              src="/project hero.jpg"
              className="w-full h-auto rounded-xl shadow-xl ring-1 ring-gray-400/10"
            />
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section id="daily-logs" className="bg-gray-50 py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 sm:gap-20 lg:grid-cols-2">
            <img
              alt=""
              src="/project dailylog.png"
              className="w-full h-auto rounded-xl shadow-xl ring-1 ring-gray-400/10"
            />
            <div className="lg:pr-8 lg:pt-4">
              <h2 className="text-base font-semibold text-indigo-600">Daily Logs</h2>
              <p className="mt-2 text-2xl sm:text-4xl font-semibold text-gray-900">
                Stay On Top of Daily Activities
              </p>
              <p className="mt-6 text-lg text-gray-600">
                Full Daily Logs keep you safe and up to date. Weather, visitors, safety, productivity, materials used, and more are all covered in your Daily Logs.
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

      {/* Third Section */}
      <section id="scheduling" className="bg-pink-50 py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 sm:gap-20 lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <h2 className="text-base font-semibold text-indigo-600">Scheduling</h2>
              <p className="mt-2 text-2xl sm:text-4xl font-semibold text-gray-900">
                Manage Your Projects Effectively
              </p>
              <p className="mt-6 text-lg text-gray-600">
                Time is money, and outdated, costly tools shouldn't slow you down. Say goodbye to expensive CPM Gantt chart software and embrace a smarter way to manage your schedules.
              </p>
              <dl className="mt-10 space-y-8">
                {thirdSectionFeatures.map((feature, index) => (
                  <div key={feature.name} className="relative">
                    <dt
                      className={`font-semibold cursor-pointer ${
                        highlightedFeature === index ? 'text-orange-500' : 'text-gray-900'
                      }`}
                      onClick={() => toggleThirdFeatureDescription(index)}
                    >
                      <ArrowRight className="inline-block text-indigo-600" /> {feature.name}
                    </dt>
                    <dd
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        openThirdFeature === index ? 'max-h-screen mt-2' : 'max-h-0'
                      }`}
                    >
                      {openThirdFeature === index && feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <img
              alt=""
              src="/project schedule.jpg"
              className="w-full h-auto rounded-xl shadow-xl ring-1 ring-gray-400/10"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
