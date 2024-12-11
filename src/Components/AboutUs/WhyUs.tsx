const WhyUsContent = {
  title: "Why Choose Us",
  content:
    "ZEDOPS is designed with a user-centric approach, ensuring that technology is accessible and easy to use for everyone in your organization.",
  section: {
    "1":{
      title: "Designed for You",
      content: "Simple, intuitive, and user-friendly for everyone.",
    },
    "2":{
      title: "Tailored Solutions",
      content: "Scalable to meet your business needs, big or small.",
    },
    "3":{
      title: "Dedicated Support",
      content: "Our dedicated support team is here to help you succeed.",
    },
    "4":{
      title: "Industry Experts",
      content: "Built by partners who understand construction.",
    },
  },
};

const WhyUs: React.FC = () => {
  return (
    <>
      <section className="py-8 bg-orange-50 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center xl:max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              {WhyUsContent.title}
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
              {WhyUsContent.content}
            </p>
          </div>

          <div className="grid max-w-4xl grid-cols-1 mx-auto mt-12 sm:mt-16 lg:mt-20 sm:grid-cols-2">
            <div className="pb-8 sm:items-start sm:flex lg:pr-14 lg:pb-14 sm:pr-8 sm:pb-8">
              <div className="inline-flex items-center justify-center text-xl font-medium text-gray-900 rounded-full shrink-0 w-14 h-14 bg-rose-100">
                1
              </div>
              <div className="mt-6 sm:mt-0 sm:ml-8">
                <p className="text-base font-medium text-gray-500">
                  {WhyUsContent.section[1].title}
                </p>
                <p className="mt-5 text-xl font-medium text-gray-900">
                 {WhyUsContent.section[1].content}
                </p>
              </div>
            </div>

            <div className="py-8 border-t border-gray-200 sm:border-t-0 sm:flex sm:items-start sm:border-l sm:pt-0 sm:pl-8 sm:pb-8 lg:pl-14 lg:pb-14">
              <div className="inline-flex items-center justify-center text-xl font-medium text-gray-900 rounded-full shrink-0 w-14 h-14 bg-rose-100">
                2
              </div>
              <div className="mt-6 sm:mt-0 sm:ml-8">
                <p className="text-base font-medium text-gray-500">
                {WhyUsContent.section[2].title}
                </p>
                <p className="mt-5 text-xl font-medium text-gray-900">
                {WhyUsContent.section[2].content}
                </p>
              </div>
            </div>

            <div className="py-8 border-t border-gray-200 sm:flex sm:items-start sm:pr-8 sm:pt-8 lg:pr-14 lg:pt-14">
              <div className="inline-flex items-center justify-center text-xl font-medium text-gray-900 rounded-full shrink-0 w-14 h-14 bg-rose-100">
                3
              </div>
              <div className="mt-6 sm:mt-0 sm:ml-8">
                <p className="text-base font-medium text-gray-500">
                {WhyUsContent.section[3].title}
                </p>
                <p className="mt-5 text-xl font-medium text-gray-900">
                {WhyUsContent.section[3].content}
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200 sm:flex sm:items-start sm:pt-8 sm:pl-8 sm:border-l lg:pt-14 lg:pl-14">
              <div className="inline-flex items-center justify-center text-xl font-medium text-gray-900 rounded-full shrink-0 w-14 h-14 bg-rose-100">
                4
              </div>
              <div className="mt-6 sm:mt-0 sm:ml-8">
                <p className="text-base font-medium text-gray-500">
                {WhyUsContent.section[4].title}
                </p>
                <p className="mt-5 text-xl font-medium text-gray-900">
                {WhyUsContent.section[4].content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
