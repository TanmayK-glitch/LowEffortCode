import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Scope Ref for GSAP Context
  const containerRef = useRef(null);

  // Element Refs
  const logoRef = useRef(null);
  const hamburgerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const bottomBarRef = useRef(null);
  const ctaRef = useRef(null);
  
  // Array Refs
  const navItemsRef = useRef([]);
  const linesRef = useRef([]);
  const iconsRef = useRef([]);
  const floatersRef = useRef([]);
  const mobileLinksRef = useRef([]);

  // --- 1. Initial Load Animations (Runs once) ---
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Navbar
      tl.from(logoRef.current, { y: -20, opacity: 0, duration: 1 })
        .from(navItemsRef.current, { y: -20, opacity: 0, duration: 0.8, stagger: 0.1 }, "-=0.8");

      // Hero Text Lines
      tl.from(linesRef.current, { 
        y: 50, opacity: 0, duration: 1.2, stagger: 0.15, clearProps: "all" 
      }, "-=0.6");

      // Icons
      tl.from(iconsRef.current, { 
        scale: 0, rotation: -180, duration: 0.8, stagger: 0.1, ease: "back.out(1.7)" 
      }, "-=1.0");

      // CTA Button
      tl.from(ctaRef.current, { 
        scale: 0.5, opacity: 0, duration: 0.8, ease: "back.out(1.7)", clearProps: "scale,opacity" 
      }, "-=0.8");

      // Floating Labels
      tl.from(floatersRef.current, { 
        opacity: 0, y: 20, duration: 1, stagger: 0.1 
      }, "-=0.5");

      // Bottom Bar
      tl.from(bottomBarRef.current, { 
        scaleY: 0, transformOrigin: "bottom", duration: 1 
      }, "-=1.0");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // --- 2. Mobile Menu Animation Logic ---
  useEffect(() => {
    // Safety check
    if (!hamburgerRef.current || !mobileMenuRef.current) return;

    const burgerSpans = hamburgerRef.current.children;
    const links = mobileLinksRef.current;

    // NOTE: We do NOT use ctx.revert() here on cleanup. 
    // Reverting would snap the elements back to original CSS instantly, killing the exit animation.
    // Instead, we simply animate TO the new state. GSAP handles the overwrites.

    if (isMenuOpen) {
      // --- OPEN STATE ---
      document.body.style.overflow = "hidden"; // Lock scroll

      // 1. Fade In Overlay
      gsap.to(mobileMenuRef.current, { 
        opacity: 1, 
        pointerEvents: "auto", 
        duration: 0.3 
      });

      // 2. Animate Hamburger to X
      gsap.to(burgerSpans[0], { rotation: 45, y: 8, backgroundColor: "black", duration: 0.3 });
      gsap.to(burgerSpans[1], { opacity: 0, duration: 0.3 });
      gsap.to(burgerSpans[2], { rotation: -45, y: -8, backgroundColor: "black", duration: 0.3 });

      // 3. Stagger Links In
      gsap.to(links, {
        y: 0, 
        opacity: 1, 
        duration: 0.5, 
        stagger: 0.1, 
        ease: "power2.out", 
        delay: 0.2
      });

    } else {
      // --- CLOSE STATE ---
      document.body.style.overflow = ""; // Unlock scroll

      // 1. Fade Out Overlay
      gsap.to(mobileMenuRef.current, { 
        opacity: 0, 
        pointerEvents: "none", 
        duration: 0.3 
      });

      // 2. Animate X back to Hamburger
      gsap.to(burgerSpans[0], { rotation: 0, y: 0, backgroundColor: "black", duration: 0.3 });
      gsap.to(burgerSpans[1], { opacity: 1, duration: 0.3 });
      gsap.to(burgerSpans[2], { rotation: 0, y: 0, backgroundColor: "black", duration: 0.3 });

      // 3. Push Links Down/Out
      gsap.to(links, { 
        y: 40, 
        opacity: 0, 
        duration: 0.3 
      });
    }

  }, [isMenuOpen]); // Runs whenever isMenuOpen changes

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Helper to assign refs
  const addRef = (el, refArray, index) => {
    if (el) refArray.current[index] = el;
  };

  return (
    <div ref={containerRef} className="bg-[#e3e3e3] font-['Inter'] w-full min-h-screen flex flex-col overflow-x-hidden">
      
      {/* --- Navigation --- */}
      <nav className="flex justify-between items-center px-6 py-6 md:px-12 md:py-6 uppercase font-semibold text-sm text-[#333] relative z-50">
        <div ref={logoRef} className="font-['Anton'] text-2xl tracking-wider z-50">
          BASEGRID
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {['Services', 'Our Work', 'Contact'].map((item, i) => (
            <a 
              key={item}
              ref={el => addRef(el, navItemsRef, i)}
              href="#" 
              className="relative transition-colors duration-300 hover:text-black after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Hamburger Icon (Visible on Mobile) */}
        <div 
          ref={hamburgerRef} 
          onClick={toggleMenu} 
          className="flex flex-col gap-[6px] cursor-pointer z-50 md:hidden w-[30px] h-[20px]"
        >
          <span className="w-full h-[2px] bg-black block origin-center transition-colors"></span>
          <span className="w-full h-[2px] bg-black block origin-center transition-colors"></span>
          <span className="w-full h-[2px] bg-black block origin-center transition-colors"></span>
        </div>
      </nav>

      {/* --- Mobile Menu Overlay --- */}
      <div 
        ref={mobileMenuRef}
        className="fixed top-0 left-0 w-full h-screen bg-[#e3e3e3] flex flex-col justify-center items-center gap-8 z-40 opacity-0 pointer-events-none"
      >
        {/* REMOVED THE <BUTTON>CLOSE</BUTTON> HERE TO FIX OVERLAP */}

        {['Services', 'Our Work', 'Contact'].map((item, i) => (
          <a
            key={item}
            ref={el => addRef(el, mobileLinksRef, i)}
            href="#"
            onClick={toggleMenu}
            className="font-['Anton'] text-[13vw] uppercase text-black opacity-0 translate-y-10 leading-none hover:text-gray-600 transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      {/* --- Main Hero Content --- */}
      <main className="relative flex-grow flex flex-col justify-center items-center p-4 md:p-8 w-full">
        
        {/* Floating Labels */}
        <div ref={el => addRef(el, floatersRef, 0)} className="hidden md:block absolute top-[45%] left-[8%] text-right text-xs font-bold text-gray-400 leading-tight uppercase">
          Web & App<br/>Development
        </div>
        <div ref={el => addRef(el, floatersRef, 1)} className="hidden md:block absolute top-[60%] left-[10%] text-right text-xs font-bold text-gray-400 leading-tight uppercase">
          System<br/>Integration<br/>& Cloud
        </div>
        <div ref={el => addRef(el, floatersRef, 2)} className="hidden md:block absolute top-[10%] right-[5%] text-right text-xs font-bold text-gray-400 leading-tight uppercase">
          Custom AI Solutions<br/>& Integration
        </div>
        <div ref={el => addRef(el, floatersRef, 3)} className="hidden md:block absolute bottom-[10%] right-[15%] text-left text-xs font-bold text-gray-400 leading-tight uppercase">
          Maintenance<br/>& Security
        </div>

        {/* Headline Wrapper */}
        <div className="flex flex-col items-center w-full max-w-[1600px]">
          
          {/* Row 1 */}
          <div ref={el => addRef(el, linesRef, 0)} className="flex items-center justify-center font-['Anton'] text-[16vw] md:text-[13.5vw] leading-[0.9] md:leading-[0.85] tracking-tight uppercase whitespace-nowrap w-full flex-wrap md:flex-nowrap mb-2 md:mb-0">
            <span className="text-white">TRANS</span>
            
            <div ref={el => addRef(el, iconsRef, 0)} className="inline-flex justify-center items-center h-[0.8em] w-[0.8em] mx-[0.05em] bg-[#edff67] text-white">
               <svg className="w-[80%] h-[80%] fill-white" viewBox="0 0 24 24">
                  <path d="M12 2L14.5 9.5H22L16 14L18.5 21.5L12 17L5.5 21.5L8 14L2 9.5H9.5L12 2Z"/>
               </svg>
            </div>
            
            <span className="text-white">FORMING</span>
          </div>

          {/* Row 2 */}
          <div ref={el => addRef(el, linesRef, 1)} className="relative flex items-center justify-center font-['Anton'] text-[16vw] md:text-[13.5vw] leading-[0.9] md:leading-[0.85] tracking-tight uppercase whitespace-nowrap w-full flex-wrap md:flex-nowrap mb-2 md:mb-0">
            
            <span className="text-white">IDEAS</span>
            
            <div ref={el => addRef(el, iconsRef, 1)} className="inline-flex justify-center items-center h-[0.8em] w-[0.85em] mx-[0.05em]">
               <svg className="w-full h-full fill-black" viewBox="0 0 100 100">
                  <circle cx="25" cy="25" r="22" />
                  <circle cx="75" cy="25" r="22" />
                  <circle cx="25" cy="75" r="22" />
                  <circle cx="75" cy="75" r="22" />
               </svg>
            </div>
            
            <span className="text-white">INTO</span>

            {/* CTA Button */}
            <a 
              href="#" 
              ref={ctaRef}
              className="md:absolute right-auto md:right-[5%] top-auto md:top-1/2 md:-translate-y-1/2 mt-4 md:mt-0 bg-black text-white no-underline px-8 py-4 rounded-full font-['Inter'] text-sm md:text-base font-medium tracking-normal flex items-center gap-2 hover:bg-[#333] hover:scale-105 hover:shadow-xl transition-all duration-300 group z-10 whitespace-nowrap"
            >
              Work with us
              <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>

          {/* Row 3 */}
          <div ref={el => addRef(el, linesRef, 2)} className="flex items-center justify-center font-['Anton'] text-[16vw] md:text-[13.5vw] leading-[0.9] md:leading-[0.85] tracking-tight uppercase whitespace-nowrap w-full flex-wrap md:flex-nowrap text-[#edff67]">
            <span>EXPERI</span>
            
            <div 
              ref={el => addRef(el, iconsRef, 2)} 
              className="inline-flex justify-center items-center h-[0.75em] w-[0.75em] mx-[0.02em] bg-black"
              style={{ clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)" }}
            >
               <svg className="w-[60%] h-[60%] -rotate-45 stroke-white fill-none" viewBox="0 0 24 24" strokeWidth="0">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="4" />
               </svg>
            </div>
            
            <span>ENCES</span>
          </div>

        </div>
      </main>

      {/* --- Bottom Neon Bar --- */}
      <div ref={bottomBarRef} className="h-[60px] w-full bg-[#edff67] mt-auto"></div>

    </div>
  );
}