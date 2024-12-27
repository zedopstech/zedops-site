import { Check, HandCoins, Shield, UsersRound } from "lucide-react";

const content = {
  mainTitle: "The All-in-One Construction Management Solution for Every Phase",
  subTitles: [
    {
      id: 1,
      title: "Streamline Project Collaboration",
      content:
        "Unite your entire team—from foremen to project managers—on a single, easy-to-use platform. Collaborate in real-time, share insights, and ensure seamless communication between the field and the office.",
      icon: <UsersRound className="text-primary w-12 h-12" />,
    },
    {
      id: 2,
      title: "Maximize Efficiency Across Every Task",
      content:
        "Assign tasks, track performance, and stay ahead with up-to-date project data. Manage schedules and repeat best practices to drive consistent success across all your projects.",
      icon: <Check className="text-primary w-12 h-12" />,
    },
    {
      id: 3,
      title: "Gain Complete Financial Control",
      content:
        "Monitor your project's financial health with integrated cost management. Connect field teams with accounting to ensure budgets, estimates, and expenses align with your goals.",
      icon: <HandCoins className="text-primary w-12 h-12" />,
    },
    {
      id: 4,
      title: "Reduce Risks and Deliver with Confidence",
      content:
        "Leverage real-time insights to make informed decisions. Manage quality, safety, and compliance while capturing as-built data for an accurate, indisputable record of every project.",
      icon: <Shield className="text-primary w-12 h-12" />,
    },
  ],
};

const ProblemStatement: React.FC = () => {
  interface CardProps {
    title: string;
    content: string;
    icon: React.ReactNode;
  }

  const Card = ({ title, content, icon }: CardProps) => (
    <div className="overflow-hidden bg-white shadow-md rounded-xl">
      <div className="p-9 flex flex-col items-center sm:items-start text-center sm:text-left">
        <div className="flex justify-center items-center w-12 h-12 mb-4 sm:mb-8">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="mt-4 text-base text-gray-600">{content}</p>
      </div>
    </div>
  );

  return (
    <section
      id="problem-statement"
      className="py-12 bg-orange-50 sm:py-16 lg:py-20"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
            {content.mainTitle}
          </h2>
        </div>

        <div className="grid max-w-4xl grid-cols-1 mx-auto mt-8 gap-y-8 sm:grid-cols-2 sm:gap-x-8 lg:mt-20">
          {content.subTitles.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              content={item.content}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
