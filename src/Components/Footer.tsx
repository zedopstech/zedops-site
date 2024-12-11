import {Facebook, Instagram, X } from "lucide-react";
import Logo from "./Logo";

const Footer: React.FC = () => {
  const FooterContent = {
    logoContent: 'ZedOps is transforming the construction industry by providing innovative, intelligent solutions that simplify project management. We empower teams to collaborate effectively, drive efficiency, and achieve success in every project phase.',
    socialMedia: [
        {
            'icon': <X/>,
        },{
            'icon': <Facebook/>,
        },{
            'icon': <Instagram/>,
        }
    ],
    sections:[
        {
            id:1,
            title:"Explore",
            options: [
                {
                    name:"Home",
                    url:"#hero"
                },
                {
                    name:"Features",
                    url:"#features"
                },
                {
                    name:"Contact Us",
                    url:""
                },
                {
                    name:"Book a Demo",
                    url:"#cto"
                }
            ]
        },
        // {
        //     id:2,
        //     title:"Resources",
        //     options: [
        //         {
        //             name:"Knowledge Base",
        //             url:""
        //         },
        //         {
        //             name:"Webinars",
        //             url:""
        //         },
        //         {
        //             name:"Blog",
        //             url:""
        //         },
        //         {
        //             name:"Case Studies",
        //             url:""
        //         },
        //         {
        //             name:"FAQs",
        //             url:""
        //         },
        //         {
        //             name:"Safety Guidelines",
        //             url:""
        //         },
        //         {
        //             name:"Server Status",
        //             url:""
        //         }
        //     ]
        // },
        {
            id:3,
            title:"Legal",
            options: [
                {
                    name:"Terms of Service",
                    url:""
                },
                {
                    name:"Privacy Policy",
                    url:""
                }
            ]
        }
    ],
    contactInfo:{
        title:"Contact Us",
        email: "support@zedops.com",
        address: <><span>zedOps HQ</span><br/>Madurai</>,
    }

  }
    return (<>
        <footer className="py-12 bg-gray-50 sm:py-16 lg:py-20">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 gap-x-8 gap-y-16 md:grid-cols-3 lg:grid-cols-6 lg:gap-x-20">
            <div className="col-span-2 md:col-span-3 lg:col-span-2">
                <a href="#" title="" className="">
                   <Logo/>
                </a>
                <p className="max-w-md mt-6 text-sm font-normal leading-6 text-gray-900">{FooterContent.logoContent}</p>

                <ul className="flex items-center mt-8 space-x-3">
                   {FooterContent.socialMedia.map((item, index)=><li key={index}>
                        <a
                            href="#"
                            title=""
                            className="inline-flex items-center justify-center p-2 text-gray-500 transition-all duration-200 bg-transparent border border-gray-300 rounded-full hover:bg-gray-900 hover:border-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        >
                            {item.icon}
                        </a>
                    </li>)}

                </ul>
            </div>

           {FooterContent.sections.map((section, index)=>(<div key={index} className="">
                <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">{section.title}</p>

                <ul className="mt-6 space-y-5">
                    {section.options.map((option, index)=>(<li key={index}>
                        <a href={option.url} title="" className="flex text-sm font-normal text-gray-900 transition-all duration-200 transform hover:translate-x-1"> {option.name} </a>
                    </li>))}
                </ul>
            </div>))}

            <div className="col-span-2 md:col-span-1 lg:col-span-2">
                <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">{FooterContent.contactInfo.title}</p>

                <div className="mt-5 space-y-6">
                    <div>
                        <p className="text-base font-bold text-gray-900">
                            <a href="#" title=""> {FooterContent.contactInfo.email} </a>
                        </p>
                        <p className="mt-2 text-sm font-medium text-gray-500">{FooterContent.contactInfo.address}</p>
                    </div>
                </div>
            </div>
        </div>

        <hr className="mt-16 border-gray-200 lg:mt-24" />

        <div className="mt-8 text-center">
            <p className="text-sm font-normal leading-6 text-gray-500">© Copyright 2022, All Rights Reserved by Zedops</p>
        </div>
    </div>
</footer>

    </>);
}

export default Footer;