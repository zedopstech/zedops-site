import Image from "next/image";

const FeatureContent = [
  {
    mainTitle: "Simplify Your Project Management",
    content:
      "Effortlessly manage your projects with ZedOps, a comprehensive solution that streamlines workflows, enhances collaboration, and keeps every task on track. From scheduling to inspections, our tools empower teams to focus on building, not managing.",
    image: "/simplify-project-management.png",
    subTitles: [
      {
        id: 1,
        title: "Streamlined Task Management",
        content:
          "Stay on top of your projects with tools for scheduling, daily logs, and punch lists. Easily manage permits, inspections, and work orders, ensuring no detail is overlooked.",
      },
      {
        id: 2,
        title: "Centralized Client Collaboration",
        content:
          "Enhance communication with a dedicated client portal. Share updates, track progress, and receive approvals in one place, reducing delays and boosting transparency.",
      },
    ],
  },
  {
    mainTitle: "Powerful Financial Insights",
    content:
      "Take control of your project finances with ZedOps’ advanced cost management features. Gain real-time insights, manage budgets with precision, and make informed decisions to keep your projects profitable.",
    image: "/budget-insights.webp",
    subTitles: [
      {
        id: 1,
        title: "Integrated Cost Tracking",
        content:
          "Monitor estimates, bids, change orders, invoices, and purchase orders in real-time. Stay informed with a detailed financial dashboard that helps you drill down into critical data",
      },
      {
        id: 2,
        title: "Streamlined Payments & Billing",
        content:
          "Simplify billing with features like AIA invoicing, progress billing, and online payments. Manage subcontracts, expenses, and cost codes efficiently to reduce overhead and ensure profitability.",
      },
    ],
  },
];

const Features: React.FC = () => {
  return (
    <div className="bg-white pt-12">
      <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
        <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-4xl font-pj">
          {"Unleashing Smarter Construction Management"}
        </h2>
      </div>
      {FeatureContent.map((item, index) => (
        <div key={index}>
          {index % 2 === 0 ? (
            <section id="features" className="py-12 sm:py-16 lg:py-20">
              <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 gap-y-8 sm:gap-y-12 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-32">
                  <div className="lg:order-2">
                    <Image
                      src={item.image}
                      alt=""
                      width={500}
                      height={500}
                      className="rounded-2xl w-full h-[40vh] lg:h-[76vh] object-cover object-[80%]"
                    />
                  </div>

                  <div className="flex flex-col justify-between lg:order-1">
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        {item.mainTitle}
                      </h2>
                      <p className="mt-6 text-base font-normal leading-7 text-gray-600">
                        {item.content}
                      </p>
                    </div>

                    <div className="grid max-w-xs grid-cols-1 mt-10 gap-y-6 sm:max-w-none sm:grid-cols-2 sm:gap-x-8 xl:mt-20 md:gap-x-16 lg:gap-x-8 xl:gap-x-16">
                      {item.subTitles.map((list) => (
                        <div key={list.id}>
                          <div className="w-24 h-px bg-gray-200"></div>
                          <h3 className="text-lg font-bold text-gray-900 mt-7">
                            {list.title}
                          </h3>
                          <p className="mt-4 text-sm font-normal text-gray-600">
                            {list.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <section className="py-12 sm:py-16 lg:py-20">
              <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 gap-y-8 sm:gap-y-12 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-32">
                  <div className="lg:order-2">
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        {item.mainTitle}
                      </h2>
                      <p className="mt-6 text-base font-normal leading-7 text-gray-600">
                        {item.content}
                      </p>
                    </div>

                    <div className="grid max-w-xs grid-cols-1 mt-10 gap-y-6 sm:max-w-none sm:grid-cols-2 sm:gap-x-8 xl:mt-20 md:gap-x-16 lg:gap-x-8 xl:gap-x-16">
                      {item.subTitles.map((list) => (
                        <div key={list.id}>
                          <div className="w-24 h-px bg-gray-200"></div>
                          <h3 className="text-lg font-bold text-gray-900 mt-7">
                            {list.title}
                          </h3>
                          <p className="mt-4 text-sm font-normal text-gray-600">
                            {list.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between lg:order-1">
                    <Image
                      src={item.image}
                      alt=""
                      width={500}
                      height={500}
                      className="rounded-2xl w-full h-[40vh] lg:h-[76vh] object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      ))}
    </div>
  );
};

export default Features;
