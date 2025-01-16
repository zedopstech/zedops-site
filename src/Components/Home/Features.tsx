import Image from "next/image";

const FeatureContent = [
  {
    mainTitle: "Simplify Project Workflows",
    content:
      "Optimize every aspect of your construction projects with tools that simplify planning, enhance collaboration, and ensure nothing slips through the cracks. Focus on building, not managing.",
    image: "/simplify-project-management.png",
    subTitles: [
      {
        id: 1,
        title: "Task Automation",
        content:
          "Streamline task allocation, track progress, and ensure efficient workflows with intelligent task automation tools.",
      },
      {
        id: 2,
        title: "Collaborative Dashboard",
        content:
          "A centralized hub for teams and clients to collaborate seamlessly, ensuring transparency and timely updates.",
      },
    ],
  },
  {
    mainTitle: "Gain Financial Control",
    content:
      "Monitor, manage, and forecast project budgets with real-time insights and advanced cost management features.",
    image: "/budget-insights.webp",
    subTitles: [
      {
        id: 1,
        title: "Real-Time Budget Insights",
        content:
          "Track expenses, invoices, and estimates to keep your project financials on target.",
      },
      {
        id: 2,
        title: "Simplified Payments",
        content:
          "Streamline billing and payments with automated invoicing and integration with leading accounting software.",
      },
    ],
  },
];

const Features: React.FC = () => {
  return (
    <div className="bg-background text-white py-16">
      <div className="max-w-4xl px-6 sm:px-8 lg:px-6 mx-auto text-center mb-8 lg:16">
        <h2 className="text-3xl leading-tight sm:text-4xl xl:text-5xl">
          Empowering Smarter Construction
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Discover tools that revolutionize how construction teams plan,
          collaborate, and deliver projects.
        </p>
      </div>

      {FeatureContent.map((item, index) => (
        <section key={index} className="py-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 lg:px-0">
            {/* Adjust order for Image Section */}
            <div
              className={`${
                index % 2 === 0 ? "lg:order-1" : "lg:order-2"
              } order-1`}
            >
              <Image
                src={item.image}
                alt=""
                width={700}
                height={500}
                className="rounded-md shadow-lg object-cover"
              />
            </div>

            {/* Adjust order for Text Content */}
            <div
              className={`${
                index % 2 === 0 ? "lg:order-2" : "lg:order-1"
              } space-y-6 order-2`}
            >
              <h3 className="text-3xl font-bold">{item.mainTitle}</h3>
              <p className="text-lg text-gray-300">{item.content}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {item.subTitles.map((list) => (
                  <div key={list.id} className="flex flex-col space-y-3">
                    <div className="w-12 h-1 bg-primary rounded"></div>
                    <h4 className="text-xl font-semibold">{list.title}</h4>
                    <p className="text-gray-400">{list.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Features;
