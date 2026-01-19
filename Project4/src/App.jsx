import React, { useState, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import Squiggle from './components/Squiggle';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Squiggles
      tl.from(".squiggle-item", {
        opacity: 0,
        scale: 0,
        duration: 1,
        stagger: 0.1,
        ease: "back.out(1.7)"
      })

        // Capsule
        .from(".hero-capsule", {
          y: -20,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out"
        }, "-=0.5")

        // Headline
        .from(".hero-headline", {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        }, "-=0.4")

        // Buttons
        .from(".hero-btn", {
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out"
        }, "-=0.6");

    }, comp);

    return () => ctx.revert();
  }, []);

  // Image paths - using online placeholders for immediate visual result.
  // In a real scenario with local files, you would use:
  // const heroTop = "/images/hero-top.jpg";
  // const photoLeftTop = "/images/photo-left-top.jpg";
  // const photoLeftBottom = "/images/photo-left-bottom.jpg";
  // const photoRight = "/images/photo-right.jpg";

  const heroTop = "https://placehold.co/400x300/e2d5c5/4b2e26?text=Hero+Top";
  const photoLeftTop = "https://placehold.co/400x500/d4c5b5/4b2e26?text=Left+Top";
  const photoLeftBottom = "https://placehold.co/400x500/c5b5a5/4b2e26?text=Left+Bottom";
  const photoRight = "https://placehold.co/400x500/e2d5c5/4b2e26?text=Right";

  return (
    <div ref={comp} className="min-h-screen bg-brand-beige font-sans text-brand-brown overflow-x-hidden">
      {/* Top Strip */}
      <div className="h-9 bg-brand-brown flex justify-center items-center relative px-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-brand-light rounded-[2px] flex items-center justify-center">
            <span className="text-brand-brown text-[10px] font-bold">s</span>
          </div>
          <span className="text-brand-light text-xs tracking-[0.2em] uppercase font-medium">strangr</span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-3xl font-bold tracking-tighter">strangr</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          <a href="#" className="relative text-brand-brown">
            home
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-brand-orange rounded-full"></span>
          </a>
          <a href="#" className="text-brand-brown/70 hover:text-brand-brown transition-colors">services</a>
          <a href="#" className="text-brand-brown/70 hover:text-brand-brown transition-colors">works</a>
          <a href="#" className="text-brand-brown/70 hover:text-brand-brown transition-colors">blog</a>
          <a href="#" className="text-brand-brown/70 hover:text-brand-brown transition-colors">contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-brand-brown"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[88px] left-0 w-full bg-brand-beige border-b border-brand-brown/10 p-4 z-50 shadow-lg">
          <div className="flex flex-col gap-4 text-center">
            <a href="#" className="font-medium text-brand-orange">home</a>
            <a href="#" className="text-brand-brown/70">services</a>
            <a href="#" className="text-brand-brown/70">works</a>
            <a href="#" className="text-brand-brown/70">blog</a>
            <a href="#" className="text-brand-brown/70">contact</a>
          </div>
        </div>
      )}

      {/* Main Hero Section */}
      <main className="relative max-w-[1200px] mx-auto px-4 flex flex-col justify-center items-center min-h-[calc(100vh-180px)] py-12">

        {/* Decorative Squiggles */}
        <div className="squiggle-item absolute top-10 left-10 hidden md:block">
          <Squiggle color="#f36f36" rotation={-15} />
        </div>
        <div className="squiggle-item absolute top-20 right-20 hidden md:block">
          <Squiggle color="#92a36f" rotation={45} />
        </div>
        <div className="squiggle-item absolute bottom-40 left-1/4 hidden md:block opacity-50">
          <Squiggle color="#f36f36" rotation={180} />
        </div>
        <div className="squiggle-item absolute bottom-20 right-10 hidden md:block">
          <Squiggle color="#4b2e26" rotation={-10} />
        </div>

        {/* New Squiggles */}
        <div className="squiggle-item absolute top-32 left-[15%] opacity-60">
          <Squiggle color="#92a36f" rotation={120} />
        </div>
        <div className="squiggle-item absolute bottom-1/3 right-[15%] opacity-70">
          <Squiggle color="#f36f36" rotation={-45} />
        </div>
        <div className="squiggle-item absolute top-1/2 left-10 md:left-20 opacity-40">
          <Squiggle color="#4b2e26" rotation={90} />
        </div>
        <div className="squiggle-item absolute top-5 right-5 md:hidden">
          <Squiggle color="#f36f36" rotation={30} />
        </div>
        <div className="squiggle-item absolute bottom-10 left-5 md:hidden">
          <Squiggle color="#92a36f" rotation={-20} />
        </div>

        {/* Left Image Cluster (Desktop) - Removed */}

        {/* Right Image (Desktop) - Removed */}

        {/* Center Content */}
        <div className="relative z-20 max-w-2xl mx-auto text-center flex flex-col items-center">

          {/* Hero Top Image - Removed */}

          {/* Capsule */}
          <div className="hero-capsule mb-6 px-4 py-1.5 rounded-full border border-brand-brown/20 text-brand-brown/60 text-xs font-medium tracking-wider uppercase bg-white/30 backdrop-blur-sm">
            Full Version Soon
          </div>

          {/* Headline */}
          <h1 className="hero-headline text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
            Need Company <br />
            <span className="relative inline-block text-brand-orange mt-2">
              Meet Stranger
              <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[3px] md:h-[5px] bg-brand-orange rounded-full"></span>
            </span>
          </h1>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center mt-4">
            <a
              href="#"
              className="hero-btn px-8 py-3 bg-brand-orange text-white font-semibold rounded-full hover:bg-[#e06531] transition-all shadow-sm hover:shadow-md"
            >
              Try Strangr
            </a>
            <a
              href="#"
              className="hero-btn group flex items-center gap-2 px-6 py-3 text-brand-brown font-medium hover:text-brand-orange transition-colors"
            >
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Mobile Only Images (Stacked) - Removed */}

        </div>
      </main>
    </div>
  )
}

export default App
