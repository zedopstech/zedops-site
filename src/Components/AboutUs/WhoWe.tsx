const FeatureContent= {
    title:"Who We Are",
    content:"Founded by a team of passionate construction and technology experts, Zedops was built to solve the real-world challenges faced by the construction industry. With years of industry experience, we understand the unique needs of construction professionals and the importance of delivering projects on time and within budget.",
    image:"/Zedops-about-us.png"
}
const WhoWe:React.FC = () =>{
    return(<>
    <section className="py-10 bg-orange-50 sm:py-16 lg:py-12">
    <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">

        <div className="relative pl-20 pr-6 sm:pl-6 md:px-0">
                    <img className="ml-auto rounded-2xl" src={FeatureContent.image} alt="" />
            </div>

            <div className="">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">{FeatureContent.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">{FeatureContent.content}</p>
            </div>

        </div>
    </div>
</section>

    </>);
}

export default WhoWe;