export default function BlogHeader({ title, heading }: { title: string, heading: string }) {
    return (
        <section className="bg-black text-white relative overflow-x-clip py-16 sm:py-24">
            <div className="container mx-auto px-6 max-w-6xl">
                <h2 className="text-sm font-medium text-gray-400 mb-3">{title}</h2>
                <h1 className="text-5xl sm:text-6xl font-bold max-w-4xl leading-tight mb-12">{heading}</h1>
                
                <nav className="flex flex-row gap-6">
                    <a className="text-gray-400 text-sm hover:text-white transition-colors" 
                       href="#">Automation</a>
                    <a className="text-gray-400 text-sm hover:text-white transition-colors" 
                       href="#">Customer data</a>
                    <a className="text-gray-400 text-sm hover:text-white transition-colors" 
                       href="#">Company</a>
                </nav>
            </div>
        </section>
    )
} 