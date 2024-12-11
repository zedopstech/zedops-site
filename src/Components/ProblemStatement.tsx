import { Check, HandCoins, Shield, UsersRound } from "lucide-react";

const content = {
    mainTitle: "The All-in-One Construction Management Solution for Every Phase",
    subTitles: [
        {
            id:1,
            title:"Streamline Project Collaboration",
            content: 'Unite your entire team—from foremen to project managers—on a single, easy-to-use platform. Collaborate in real-time, share insights, and ensure seamless communication between the field and the office.',
            icon: <UsersRound className=" text-orange-400"/>
        },
        {
            id:2,
            title:"Maximize Efficiency Across Every Task",
            content: 'Assign tasks, track performance, and stay ahead with up-to-date project data. Manage schedules and repeat best practices to drive consistent success across all your projects.',
            icon: <Check className=" text-orange-400"/>
        },
        {
            id:3,
            title:"Gain Complete Financial Control",
            content:"Monitor your project's financial health with integrated cost management. Connect field teams with accounting to ensure budgets, estimates, and expenses align with your goals.",
            icon: <HandCoins className=" text-orange-400"/>
        },
        {
            id:4,
            title:"Reduce Risks and Deliver with Confidence",
            content:"Leverage real-time insights to make informed decisions. Manage quality, safety, and compliance while capturing as-built data for an accurate, indisputable record of every project.",
            icon: <Shield className=" text-orange-400"/>
        }
    ]
}
const patchOne = content.subTitles.slice(0,2);
const patchTwo = content.subTitles.slice(2,4);

const ProblemStatement:React.FC = () => {
    return(<>
    <section id="problem-statement" className="py-12 bg-orange-50 sm:py-16 lg:py-20">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-4xl font-pj">{content.mainTitle}</h2>
        </div>

        <div className="grid max-w-4xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 sm:mt-12 lg:mt-20 sm:text-left">
            <div className="space-y-4 sm:space-y-8">
                {patchOne.map((item, index)=>(<div key={index} className="overflow-hidden bg-white shadow-md rounded-xl">
                    <div className="p-9">
                       {item.icon}
                        <h3 className="mt-8 text-2xl font-bold text-gray-900 sm:mt-20 font-pj">{item.title}</h3>
                        <p className="mt-6 text-base text-gray-600 font-pj">{item.content}</p>
                    </div>
                </div>))}
            </div>

            <div className="space-y-4 sm:space-y-8">
                {patchTwo.map((item, index)=>(<div key={index} className="overflow-hidden bg-white shadow-md rounded-xl">
                    <div className="p-9">
                       {item.icon}
                        <h3 className="mt-8 text-2xl font-bold text-gray-900 sm:mt-20 font-pj">{item.title}</h3>
                        <p className="mt-6 text-base text-gray-600 font-pj">{item.content}</p>
                    </div>
                </div>))}
            </div>
        </div>
    </div>
</section>
    </>);
};

export default ProblemStatement;