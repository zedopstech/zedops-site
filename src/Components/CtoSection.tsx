import { Clock, Link2 } from "lucide-react";

const CtoContent = {
    mainTitle:"Experience Support Like Never Before",
    content: 'ZedOps goes beyond software by providing unparalleled support and seamless integrations to ensure your construction projects succeed at every step',
    subTitles:[
        {
            id:1,
            title:"Round-the-Clock Expert Assistance",
            icons:<Clock className=" text-orange-400"/>,
            content:"Connect with our dedicated support team anytime, anywhere. Whether it’s via email, chat, or phone, our experts are always ready to assist, ensuring your questions are answered in minutes."
        },
        {
            id:2,
            title:"Effortless Integrations with Your Favorite Tools",
            icons: <Link2 className=" text-orange-400"/>,
            content:"Streamline your workflow by connecting ZedOps with the tools you already use. With dozens of ready-to-use integrations, managing your projects has never been this smooth."
        }
    ]

}

const CtoSection: React.FC = () => {
  return (
    <>
      <section id='cto'className="py-12 bg-orange-50 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 text-center lg:text-left gap-y-10 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:pr-8 xl:pr-24">
              <h2 className="text-2xl font-bold text-gray-900 font-pj">
               {CtoContent.mainTitle}
              </h2>
              <p className="mt-5 text-base font-normal leading-7 text-gray-600 font-pj">
              {CtoContent.content}
              </p>

              <div className="flex items-center justify-center mt-8 space-x-5 lg:justify-start">
                <div className="relative inline-flex group">
                  <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#7b6f79] to-orange-200 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>

                  <a
                    href="#"
                    title=""
                    className="relative inline-flex items-center justify-center px-5 py-2 text-base font-bold text-white transition-all duration-200 bg-orange-400 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj hover:bg-black rounded-xl"
                    role="button"
                  >
                    Book a Demo
                  </a>
                </div>

                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center px-5 py-2 text-base font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-orange-400 focus:bg-gray-900 hover:text-white focus:text-black hover:border-gray-500 focus:border-gray-900"
                  role="button"
                >
                  Learn more
                </a>
              </div>
            </div>

            <div className="lg:col-span-3 lg:pl-8 xl:pl-24">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6">

                {CtoContent.subTitles.map((item, index)=>(<div key={index} className="bg-white border border-gray-200 shadow-md rounded-2xl">
                  <div className="px-8 py-6">
                    {item.icons}
                    <h3 className="mt-8 text-lg font-bold text-gray-900 lg:mt-12 font-pj">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base font-normal leading-7 text-gray-700 font-pj">
                      {item.content}
                    </p>
                  </div>
                </div>))}

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtoSection;
