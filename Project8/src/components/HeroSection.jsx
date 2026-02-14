const BACKGROUND_IMAGE = '/lucid-origin_Abstract_generative_portrait_of_a_human_head_and_upper_torso_formed_from_glowing-0.jpg'
// Adjust this value to control the vertical position of the background image.
// Higher percentage (e.g., 50%) moves the image up (showing more bottom).
// Lower percentage (e.g., 0%) moves the image down (showing more top).
const BG_POSITION = 'center -70%'

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-dark">
      {/* Background Image with Vignette & Grain */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat opacity-100 mix-blend-normal saturate-125 brightness-110 contrast-110"
        style={{
          backgroundImage: `url('${BACKGROUND_IMAGE}')`,
          backgroundPosition: BG_POSITION
        }}
      />

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_90%)]" />

      {/* Grain Effect (CSS Pattern) */}
      <div className="absolute inset-0 opacity-[0.03] text-white pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      {/* Content Container */}
      <div className="relative h-full max-w-[1400px] mx-auto px-6 sm:px-12 flex flex-col justify-center z-10">

        {/* Main Content - Left Aligned */}
        <div className="max-w-2xl flex flex-col items-start gap-8 mt-12 relative z-10">
          {/* subtle text-backing gradient */}
          <div className="absolute -inset-10 bg-radial-gradient from-black/60 to-transparent opacity-80 blur-2xl -z-10" />

          {/* Pixel Headline */}
          <div className="space-y-2">
            <h1 className="text-6xl md:text-8xl font-sans font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 tracking-tighter leading-[0.9] drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
              DIGITAL<br />
              <span className="text-white/90" style={{ textShadow: '4px 0 #ff6b6b, -4px 0 #00ffff' }}>SENSES</span>
            </h1>
            {/* Glitch Decorative Element */}
            <div className="h-1 w-24 bg-coral/80 mt-2 animate-pulse" />
          </div>

          {/* Supporting Paragraph */}
          <p className="text-sm md:text-base font-mono text-white/50 max-w-md leading-relaxed tracking-tight border-l border-white/20 pl-6">
            We architect the invisible nervous system of tomorrow's enterprises. <br />
            Organic intelligence meets silicon precision.
          </p>

          {/* Primary CTA - High Contrast */}
          <a
            href="#explore"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-coral text-white text-xs font-mono font-bold tracking-[0.2em] uppercase transition-all hover:bg-white hover:text-dark hover:shadow-[0_0_20px_rgba(255,107,107,0.4)]"
          >
            <span className="relative z-10">Initialize System</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0" />
          </a>

        </div>

        {/* Abstract Data Decoration - Right Side (Optional balance) */}
        <div className="absolute bottom-12 right-6 md:right-12 text-right hidden sm:block">
          <div className="flex flex-col gap-1 text-[10px] font-mono text-white/30 tracking-widest">
            <span>SYS.STATUS: ONLINE</span>
            <span>LATENCY: 12ms</span>
            <span>NODE: ALPHA_01</span>
          </div>
        </div>

      </div>
    </section>
  )
}
