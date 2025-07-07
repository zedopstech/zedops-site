import { featuredArticles, quickStartSteps } from "@/Data/resources/knowledge";
import { FileText } from "lucide-react";

const Feature = () => {
  return (
    <div className="bg-custombg py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* 🔹 Featured Articles */}
        {/* <section>
          <h2 className="text-3xl font-bold text-center mb-2 text-secondary">
            Featured Articles
          </h2>
          <p className="text-center text-gray-500 mb-10">
            Start with these essential guides to get up and running quickly with your application.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {featuredArticles.map((article, i) => {
              const Icon = article.icon || FileText; // ✅ fallback

              return (
                <div
                  key={i}
                  className="relative group bg-white border border-gray-200 p-6 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
                >
                  
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-secondary/5 group-hover:bg-secondary/10 transition-colors duration-300 z-0" />

                  <div className="relative z-10">
                    
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary/20 group-hover:text-secondary transition-all duration-300 shadow-sm">
                      <Icon size={22} />
                    </div>

                  
                    <div className="flex items-center mb-2 text-sm space-x-2">
                      <span className="px-2 py-1 rounded-full font-semibold text-xs bg-secondary text-white">
                        {article.tag}
                      </span>
                      <span className="text-gray-400">{article.readTime}</span>
                    </div>

                    
                    <h3 className="text-lg uppercase font-black text-secondary mb-2 group-hover:text-secondary transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 text-sm font-medium group-hover:text-gray-600 transition-colors duration-300">
                      {article.description}
                    </p>

                    
                    <div className="text-xs text-gray-400 mt-2">
                      📅 Updated {article.updatedAt}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section> */}

        {/* 🔹 Quick Start Guide */}
        <section className="bg-gray-50 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-2 text-secondary">
            Quick Start Guide
          </h2>
          <p className="text-gray-500 mb-10">
            New to the application? Follow these essential steps to get started quickly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left md:text-center">
            {quickStartSteps.map((step) => (
              <div
                key={step.step}
                className="flex flex-col items-center space-y-2"
              >
                <div
                  className={`text-white w-10 h-10 rounded-full flex items-center justify-center font-bold ${step.color}`}
                >
                  {step.step}
                </div>
                <h4 className="font-semibold">{step.title}</h4>
                <p className="text-gray-500 text-sm text-center">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Feature;
