import { Check, HandCoins, Shield, UsersRound } from "lucide-react";

const content = {
  mainTitle:
    "Empowering Construction Teams with Streamlined Tools for Every Stage",
  subTitles: [
    {
      id: 1,
      title: "Streamline Project Collaboration",
      content:
        "Unite your entire team—from foremen to project managers—on a single, easy-to-use platform. Collaborate in real-time, share insights, and ensure seamless communication between the field and the office.",
      icon: <UsersRound className="text-primary w-8 h-8" />,
      buttonText: "Learn More",
      buttonLink: "#collaboration",
    },
    {
      id: 2,
      title: "Maximize Efficiency Across Every Task",
      content:
        "Assign tasks, track performance, and stay ahead with up-to-date project data. Manage schedules and repeat best practices to drive consistent success across all your projects.",
      icon: <Check className="text-primary w-8 h-8" />,
      buttonText: "Learn More",
      buttonLink: "#efficiency",
    },
    {
      id: 3,
      title: "Gain Complete Financial Control",
      content:
        "Monitor your project's financial health with integrated cost management. Connect field teams with accounting to ensure budgets, estimates, and expenses align with your goals.",
      icon: <HandCoins className="text-primary w-8 h-8" />,
      buttonText: "Learn More",
      buttonLink: "#financial-control",
    },
    {
      id: 4,
      title: "Reduce Risks and Deliver with Confidence",
      content:
        "Leverage real-time insights to make informed decisions. Manage quality, safety, and compliance while capturing as-built data for an accurate, indisputable record of every project.",
      icon: <Shield className="text-primary w-8 h-8" />,
      buttonText: "Learn More",
      buttonLink: "#confidence",
    },
  ],
};

const CoreFeatures: React.FC = () => {
  interface CardProps {
    title: string;
    content: string;
    icon: React.ReactNode;
    buttonText: string;
    buttonLink: string;
  }

  const Card: React.FC<CardProps> = ({
    title,
    content,
    icon,
    buttonText,
    buttonLink,
  }) => (
    <div className="group bg-white shadow-md rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
        <div className="flex justify-center items-center w-12 h-12 mb-6 group-hover:scale-105 transition-transform duration-200">
          <div className="p-2 rounded bg-background">{icon}</div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="mt-4 text-base text-gray-600">{content}</p>
        <a
          href={buttonLink}
          className="mt-6 inline-flex items-center px-4 py-2 text-sm font-semibold text-background border border-background rounded-lg transition-colors hover:text-primary hover:bg-background"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );

  return (
    <section
      id="core-features"
      className="bg-gray-50 py-16 lg:py-20 px-6 lg:px-0"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-3xl leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
            <span className="text-background">{content.mainTitle}</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-2 lg:gap-12">
          {content.subTitles.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              content={item.content}
              icon={item.icon}
              buttonText={item.buttonText}
              buttonLink={item.buttonLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
