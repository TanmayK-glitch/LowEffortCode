import heroImage from '../assets/hero-image.jpg';

const HeroSection = () => {
    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[#0a0a0a] text-white">
            {/* Left Column: Content */}
            <div className="flex flex-col justify-center px-6 py-12 lg:px-16 xl:px-24 border-r border-white/5 order-2 lg:order-1">
                <div className="max-w-xl">
                    <p className="uppercase tracking-[0.2em] text-gray-500 text-xs font-semibold mb-6 font-mono">
                        Strategic AI Partners
                    </p>

                    <h1 className="text-5xl lg:text-7xl font-headline font-extrabold tracking-[-0.02em] leading-[0.9] text-white mb-8">
                        INTELLIGENCE <br />
                        <span className="text-gray-400">ARCHITECTED.</span>
                    </h1>

                    <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md font-body font-medium">
                        We build the cognitive infrastructure for the next generation of enterprise.
                        Precision, scalability, and absolute control.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-white text-black px-8 py-4 font-bold text-xs uppercase tracking-wider hover:bg-gray-200 transition-colors duration-200 border border-white font-mono">
                            Start Project
                        </button>
                        <button className="bg-transparent border border-gray-700 text-gray-300 px-8 py-4 font-bold text-xs uppercase tracking-wider hover:border-white hover:text-white transition-colors duration-200 font-mono">
                            Our Vision
                        </button>
                    </div>


                    {/* Infinite Scroll Carousel */}
                    <div className="mt-16 pt-8 border-t border-white/10 w-full overflow-x-hidden relative group">
                        <div className="flex gap-8 animate-infinite-scroll w-max group-hover:[animation-play-state:paused]">
                            {[...Array(2)].map((_, i) => (
                                <div key={i} className="flex gap-8">
                                    {[
                                        {
                                            quote: "A paradigm shift in operational efficiency.",
                                            name: "ALEXEI VOLKOV",
                                            title: "CHIEF STRATEGY OFFICER"
                                        },
                                        {
                                            quote: "Scalability that actually keeps pace with demand.",
                                            name: "SARAH CHEN",
                                            title: "VP OF INFRASTRUCTURE"
                                        },
                                        {
                                            quote: "The cognitive layer we've been waiting for.",
                                            name: "DAVID MILLER",
                                            title: "CTO, NEXUS CORP"
                                        }
                                    ].map((item, index) => (
                                        <div key={index} className="w-[300px] flex-shrink-0 flex flex-col justify-center">
                                            <p className="text-xs text-gray-500 italic mb-3 font-body">
                                                "{item.quote}"
                                            </p>
                                            <div>
                                                <p className="text-white text-xs font-bold font-body">{item.name}</p>
                                                <p className="text-[10px] text-gray-500 uppercase font-mono">{item.title}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        {/* Fade effect for smooth edges */}
                        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </div>

            {/* Right Column: Image */}
            <div className="relative h-[60vh] lg:h-auto overflow-hidden order-1 lg:order-2">
                <div className="absolute inset-0 bg-black/20 z-10"></div>
                {/* Optional Grid Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-10 mix-blend-overlay"></div>
                <img
                    src={heroImage}
                    alt="Architectural minimalist structure"
                    className="w-full h-full object-cover grayscale contrast-125"
                />
            </div>
        </div>
    );
};

export default HeroSection;
