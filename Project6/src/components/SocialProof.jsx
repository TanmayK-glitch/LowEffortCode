function SocialProof() {
    return (
        <div className="absolute bottom-10 right-10 w-80 p-6 rounded-2xl z-10 bg-[var(--color-card-dark)]/90 backdrop-blur-xl border border-white/10 text-white lg:w-72 lg:right-8 lg:bottom-8 md:relative md:bottom-auto md:right-auto md:w-full md:max-w-[360px] md:mx-auto md:mt-12">
            {/* Header */}
            <div className="flex flex-col gap-4 mb-6">
                {/* Icon */}
                <div className="w-11 h-11 flex items-center justify-center bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-gradient-teal)] rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-card-dark)]">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                        <path d="M2 17l10 5 10-5"></path>
                        <path d="M2 12l10 5 10-5"></path>
                    </svg>
                </div>

                {/* Text */}
                <p className="text-sm leading-relaxed text-white/85">
                    Dimakh is the strategic backbone for ambitious businesses ready to become category leaders.
                </p>
            </div>

            {/* Stats */}
            <div className="mb-6 pb-4 border-b border-white/10">
                <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-white font-[var(--font-serif)]" style={{ fontFamily: 'var(--font-serif)' }}>25+</span>
                    <span className="text-xs text-white/60 uppercase tracking-wider">Years Experience</span>
                </div>
            </div>

            {/* Client Logos */}
            <div className="flex items-center gap-6">
                <div className="flex-1">
                    <span className="text-xs font-semibold text-white/70 uppercase tracking-wide">TechCorp</span>
                </div>
                <div className="flex-1">
                    <span className="text-xs font-semibold text-white/70 uppercase tracking-wide">InnovateLabs</span>
                </div>
                <div className="flex-1">
                    <span className="text-xs font-semibold text-white/70 uppercase tracking-wide">GrowthX</span>
                </div>
            </div>
        </div>
    );
}

export default SocialProof;
