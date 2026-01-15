import MeshGradient from './MeshGradient';

function Hero() {
    return (
        <section className="relative h-screen min-h-[800px] w-full flex flex-col items-center justify-center overflow-hidden bg-[var(--color-bg)]">
            <MeshGradient />

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl px-6 -mt-16">

                {/* Massive Headline - Refined & Spaced */}
                <h1
                    className="text-center font-serif text-[clamp(2.5rem,5vw,5rem)] leading-[1.6] tracking-tight text-[var(--color-text-primary)] mb-12"
                    style={{ fontFamily: 'var(--font-serif)' }}
                >
                    <span className="block">Crafting</span>
                    <span className="block">Digital Excellence</span>
                    <span className="block">for Pune's</span>
                    <span className="block italic font-light">Boldest Brands.</span>
                </h1>

                {/* Subtext and Sub-Components - Scaled Down */}
                <div className="flex flex-col items-center gap-10 max-w-md">
                    <p className="text-center text-[var(--color-text-secondary)] text-xs md:text-sm leading-8 tracking-wide font-light opacity-80">
                        Your brand is your strongest competitive advantage. We'll help you realize it, embed it deeply, and transform it into genuine momentum.
                    </p>

                    <a
                        href="#contact"
                        className="group flex items-center gap-3 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-text-primary)] hover:text-[var(--color-accent-dark)] transition-all duration-300"
                    >
                        Discover how
                        <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                    </a>
                </div>
            </div>

            {/* Footer Bar - Experience & Social Proof (Grayscale & Subtle) */}
            <div className="absolute bottom-0 left-0 w-full z-10 border-t border-[var(--color-text-secondary)]/5 bg-white/0 backdrop-blur-[2px]">
                <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between opacity-60 hover:opacity-100 transition-opacity duration-500">

                    {/* Experience Badge */}
                    <div className="flex items-center h-8 pr-8 border-r border-black/5">
                        <span className="text-xl font-medium font-serif mr-3 text-[var(--color-text-primary)]">25+</span>
                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-secondary)] leading-normal">
                            Years<br />Experience
                        </span>
                    </div>

                    {/* Logos Container */}
                    <div className="flex items-center justify-end gap-16 flex-1 pl-8 grayscale">
                        <span className="text-[10px] font-bold text-black/40 tracking-[0.2em] uppercase hover:text-black/80 transition-colors cursor-default">
                            TechCorp
                        </span>
                        <div className="w-px h-4 bg-black/5 hidden md:block"></div>
                        <span className="text-[10px] font-bold text-black/40 tracking-[0.2em] uppercase hover:text-black/80 transition-colors cursor-default">
                            InnovateLabs
                        </span>
                        <div className="w-px h-4 bg-black/5 hidden md:block"></div>
                        <span className="text-[10px] font-bold text-black/40 tracking-[0.2em] uppercase hover:text-black/80 transition-colors cursor-default">
                            GrowthX
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
