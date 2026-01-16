import MeshGradient from './MeshGradient';

function Hero() {
    return (
        <section className="relative h-screen min-h-[800px] w-full flex flex-col items-center justify-center overflow-hidden bg-[var(--color-bg)]">
            <MeshGradient />

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl px-6 -mt-16">

                {/* Massive Headline - Refined & Spaced */}
                <h1
                    className="text-center font-serif text-[clamp(3.5rem,6vw,5.5rem)] leading-[0.95] tracking-tight text-[var(--color-text-primary)] mb-10 font-semibold"
                    style={{ fontFamily: 'var(--font-serif)' }}
                >
                    <span className="block">Crafting Digital Excellence</span>
                    <span className="block">for Pune's <span className="font-bold">Boldest</span> Brands.</span>
                </h1>

                {/* Subtext and Sub-Components - Scaled Down */}
                <div className="flex flex-col items-center gap-10 max-w-lg">
                    <p className="text-center text-[var(--color-text-primary)] text-base md:text-lg leading-relaxed tracking-wide font-light opacity-90">
                        Your brand is your strongest competitive advantage. We'll help you realize it, embed it deeply, and transform it into genuine momentum.
                    </p>

                    <a
                        href="#contact"
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-text-primary)] text-white text-sm font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(0,0,0,0.15)] ring-1 ring-white/20 hover:ring-white/40"
                    >
                        <span>Discover Our Work</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transform group-hover:translate-x-1 transition-transform duration-300"
                        >
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>

            {/* Footer Bar - Experience & Social Proof (Grayscale & Subtle) */}
            <div className="absolute bottom-0 left-0 w-full z-10 border-t border-[var(--color-text-secondary)]/10 bg-white/0 backdrop-blur-[2px]">
                <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between opacity-80 hover:opacity-100 transition-opacity duration-500">

                    {/* Experience Badge */}
                    <div className="flex items-center h-8 pr-12 border-r border-black/5">
                        <span className="text-2xl font-bold font-serif mr-4 text-[var(--color-text-primary)]">25+</span>
                        <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--color-text-secondary)] leading-tight opacity-70">
                            Years<br />Experience
                        </span>
                    </div>

                    {/* Logos Container */}
                    <div className="flex items-center justify-end gap-20 flex-1 pl-12 grayscale opacity-70">
                        <span className="text-[11px] font-semibold text-black/60 tracking-[0.2em] uppercase hover:text-black transition-colors cursor-default">
                            TechCorp
                        </span>
                        <div className="w-px h-5 bg-black/10 hidden md:block"></div>
                        <span className="text-[11px] font-semibold text-black/60 tracking-[0.2em] uppercase hover:text-black transition-colors cursor-default">
                            InnovateLabs
                        </span>
                        <div className="w-px h-5 bg-black/10 hidden md:block"></div>
                        <span className="text-[11px] font-semibold text-black/60 tracking-[0.2em] uppercase hover:text-black transition-colors cursor-default">
                            GrowthX
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
