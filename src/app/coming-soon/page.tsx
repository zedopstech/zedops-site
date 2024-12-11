"use client"
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { Lock, MoveRight } from "lucide-react";
import { useState } from "react";
const ComingSoonContent = {
    title: "Redefining Construction Management",
    content: "ZedOps is on its way to revolutionize how construction projects are managed, from preconstruction to closeout. Stay ahead of the curve with a platform designed to simplify workflows, boost collaboration, and drive efficiency across your projects",
    section: [
        {
            title:"Ready to Use",
            description:"Build your projects with modular and pre-designed blocks tailored for your construction need."
        },
        {
            title:"End-to-End Tools",
            description:"From planning to completion, all your project essentials in one place"
        },
        {
            title:"Easy Access",
            description:"Intuitive design ensures accessibility for every team member, from site workers to office admins"
        }
    ]

};

export default function ComingSoon() {
    const [email, setEmail] = useState('');
    const [enable, setEnable] = useState(true);

    const handleSubmit = () =>{
        if (enable && email) {
            setEnable(false);
        }   
       
    
    }
  return (<>
      <Header/>
      <section className="py-10 bg-orange-50 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-left sm:text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">{ComingSoonContent.title}</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">{ComingSoonContent.content}</p>
        </div>

        <div className="mt-8 space-y-8 sm:space-x-12 sm:mt-12 sm:flex sm:items-start sm:justify-center sm:space-y-0 md:space-x-20 lg:mt-20">
            <div className="lg:flex lg:justify-between grid items-start">
                {ComingSoonContent.section.map((item, index)=>(<div key={index} className="ml-8 mt-2">
                    <h3 className="text-xl font-semibold text-black">{item.title}</h3>
                    <p className="mt-1.5 text-base text-gray-600">{item.description}</p>
                </div>))}

            </div>
        </div>

       {enable && <form action="#" method="POST" className="max-w-xl mx-auto mt-12">
            <div className="sm:p-2 sm:bg-white sm:border-2 sm:border-transparent sm:rounded-full sm:focus-within:border-gray-500 sm:focus-within:ring-1">
                <div className="flex flex-col items-start sm:flex-row sm:justify-center">
                    <div className="flex-1 w-full min-w-0">
                        <div className="relative text-gray-400 focus-within:text-gray-600">
                            <label className="sr-only"></label>
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            </div>
                            <input
                                type="email"
                                name="email"
                                onChange={(e)=> setEmail(e.target.value)}
                                id="email"
                                placeholder="Enter email address"
                                className="block w-full py-4 pl-10 pr-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-transparent rounded-full focus:border-transparent focus:ring-0 caret-blue-600"
                                required
                            />
                        </div>
                    </div>

                    <button onClick={handleSubmit} type="submit" className="inline-flex items-center justify-center w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-orange-400 border border-transparent rounded-full sm:ml-4 sm:mt-0 sm:w-auto hover:bg-orange-300">
                    Be the First to Know
                       <MoveRight className=" px-1"/>
                    </button>
                </div>
            </div>
        </form>}

        {!enable && <div className="max-w-2xl mx-auto mt-6">
            <div className="p-4 mb-4 text-sm text-center bg-green-50" role="alert">
            <span className="font-medium">Thank you for showing interest in Zedops Construction Management Software!</span> Our team will reach out to you shortly.</div>
        </div>}

        <div className="flex items-center justify-start mt-8 sm:justify-center sm:px-0">
            <Lock/>
            <span className="ml-2 text-sm text-gray-600"> Your data is complely secured with us. We don’t share with anyone. </span>
        </div>
    </div>
</section>
      <Footer/>
  </>);
}
