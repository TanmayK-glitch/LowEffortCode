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
  const leftTextRef = useRef([]);  // Left side text
  const rightTextRef = useRef([]); // Right side text
  const iconsRef = useRef([]);
  const floatersRef = useRef([]);
  const mobileLinksRef = useRef([]);

  // --- 1. Initial Load Animations (Runs once) ---
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Navbar + Top Elements (Fade + Slide Up)
      tl.from(logoRef.current, { 
        y: 20, opacity: 0, duration: 0.6 
      })
      .from(navItemsRef.current, { 
        y: 20, opacity: 0, duration: 0.6, stagger: 0.1 
      }, "-=0.4")
      .from(hamburgerRef.current, {
        y: 20, opacity: 0, duration: 0.6
      }, "-=0.6");

      // 2. Split Text Animation (Coming out from Logo)
      // Left text moves from Right (100%) to Left (0%)
      tl.from(leftTextRef.current, {
        x: "100%",
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out"
      }, "-=0.2");

      // Right text moves from Left (-100%) to Right (0%)
      tl.from(rightTextRef.current, {
        x: "-100%",
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out"
      }, "<"); // Run at same time as left text

      // 3. Icons (Pop in with the text)
      tl.from(iconsRef.current, { 
        scale: 0, rotation: -180, duration: 0.8, stagger: 0.1, ease: "back.out(1.7)" 
      }, "-=1.0");

      // 4. Subtext + Buttons Fade/Slide
      // Floating Labels
      tl.from(floatersRef.current, { 
        y: 10, opacity: 0, duration: 0.8, stagger: 0.1 
      }, "-=0.5");

      // CTA Button
      tl.from(ctaRef.current, { 
        y: 10, opacity: 0, duration: 0.8, clearProps: "all" 
      }, "-=0.6");

      // Bottom Bar
      tl.from(bottomBarRef.current, { 
        scaleY: 0, transformOrigin: "bottom", duration: 1 
      }, "-=0.8");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // --- 2. Mobile Menu Animation Logic ---
  useEffect(() => {
    // Safety check
    if (!hamburgerRef.current || !mobileMenuRef.current) return;

    const burgerSpans = hamburgerRef.current.children;
    const links = mobileLinksRef.current;

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
    <div ref={containerRef} className="bg-[#d8d9d8] font-['Host_Grotesk'] w-full min-h-screen flex flex-col overflow-x-hidden text-[#333]">
      
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
        className="fixed top-0 left-0 w-full h-screen bg-[#d8d9d8] flex flex-col justify-center items-center gap-8 z-40 opacity-0 pointer-events-none"
      >
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
        <div ref={el => addRef(el, floatersRef, 0)} className="hidden md:block absolute top-[45%] left-[8%] text-right text-xs font-['Host_Grotesk'] font-bold text-gray-400 leading-tight uppercase z-30">
          Web & App<br/>Development
        </div>
        <div ref={el => addRef(el, floatersRef, 1)} className="hidden md:block absolute top-[60%] left-[10%] text-right text-xs font-['Host_Grotesk'] font-bold text-gray-400 leading-tight uppercase z-30">
          System<br/>Integration<br/>& Cloud
        </div>
        <div ref={el => addRef(el, floatersRef, 2)} className="hidden md:block absolute top-[10%] right-[5%] text-right text-xs font-['Host_Grotesk'] font-bold text-gray-400 leading-tight uppercase z-30">
          Custom AI Solutions<br/>& Integration
        </div>
        <div ref={el => addRef(el, floatersRef, 3)} className="hidden md:block absolute bottom-[10%] right-[15%] text-left text-xs font-['Host_Grotesk'] font-bold text-gray-400 leading-tight uppercase z-30">
          Maintenance<br/>& Security
        </div>

        {/* Headline Wrapper */}
        <div className="flex flex-col items-center w-full max-w-[1600px] gap-2 md:gap-4">
          
          {/* Row 1 */}
          <div className="flex items-center justify-center font-['Oswald'] font-bold text-[14vw] md:text-[11.5vw] leading-[0.9] md:leading-[0.85] tracking-tight uppercase whitespace-nowrap w-full flex-wrap md:flex-nowrap mb-2 md:mb-0">
            
            {/* Left Text Mask */}
            <div className="overflow-hidden flex justify-end">
              <span ref={el => addRef(el, leftTextRef, 0)} className="text-[#fefeff] block">TRANS</span>
            </div>
            
            {/* Icon */}
            <div ref={el => addRef(el, iconsRef, 0)} className="inline-flex justify-center items-center h-[0.8em] w-[0.8em] mx-[0.05em] bg-[#eefe84] text-black z-10 relative">
               <svg className="w-[80%] h-[80%] fill-black" viewBox="0 0 24 24">
                  <path d="M12 2L14.5 9.5H22L16 14L18.5 21.5L12 17L5.5 21.5L8 14L2 9.5H9.5L12 2Z"/>
               </svg>
            </div>
            
            {/* Right Text Mask */}
            <div className="overflow-hidden flex justify-start">
              <span ref={el => addRef(el, rightTextRef, 0)} className="text-[#fefeff] block">FORMING</span>
            </div>
          </div>

          {/* Row 2 */}
          <div className="relative flex items-center justify-center font-['Oswald'] font-bold text-[14vw] md:text-[11.5vw] leading-[0.9] md:leading-[0.85] tracking-tight uppercase whitespace-nowrap w-full flex-wrap md:flex-nowrap mb-2 md:mb-0">
            
            {/* Left Text Mask */}
            <div className="overflow-hidden flex justify-end">
              <span ref={el => addRef(el, leftTextRef, 1)} className="text-[#fefeff] block">IDEAS</span>
            </div>
            
            {/* Icon */}
            <div ref={el => addRef(el, iconsRef, 1)} className="inline-flex justify-center items-center h-[0.8em] w-[0.85em] mx-[0.05em] z-10 relative">
               <svg className="w-full h-full fill-black" viewBox="0 0 100 100">
                  <circle cx="25" cy="25" r="22" />
                  <circle cx="75" cy="25" r="22" />
                  <circle cx="25" cy="75" r="22" />
                  <circle cx="75" cy="75" r="22" />
               </svg>
            </div>
            
            {/* Right Text Mask */}
            <div className="overflow-hidden flex justify-start">
              <span ref={el => addRef(el, rightTextRef, 1)} className="text-[#fefeff] block">INTO</span>
            </div>

            {/* CTA Button - UPDATED WITH ROUNDED-FULL */}
            <a 
              href="#" 
              ref={ctaRef}
              className="md:absolute right-auto md:right-[2%] top-auto md:top-1/2 md:-translate-y-1/2 mt-4 md:mt-0 bg-black text-white no-underline px-6 py-3 md:px-10 md:py-5 rounded-full font-['Host_Grotesk'] text-xs md:text-base font-medium tracking-normal flex items-center gap-2 hover:scale-105 hover:shadow-xl transition-all duration-300 group z-20 whitespace-nowrap"
            >
              Work with us
              <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>

          {/* Row 3 */}
          <div className="flex items-center justify-center font-['Oswald'] font-bold text-[14vw] md:text-[11.5vw] leading-[0.9] md:leading-[0.85] tracking-tight uppercase whitespace-nowrap w-full flex-wrap md:flex-nowrap text-[#eefe84]">
            
            {/* Left Text Mask */}
            <div className="overflow-hidden flex justify-end">
              <span ref={el => addRef(el, leftTextRef, 2)} className="block">EXPERI</span>
            </div>
            
            {/* Icon */}
            <div 
              ref={el => addRef(el, iconsRef, 2)} 
              className="inline-flex justify-center items-center h-[0.75em] w-[0.75em] mx-[0.02em] bg-white z-10 relative"
              style={{ clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)" }}
            >
               <svg className="w-[60%] h-[60%] -rotate-45 stroke-black fill-none" viewBox="0 0 24 24" strokeWidth="0">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="black" strokeWidth="4" />
               </svg>
            </div>
            
            {/* Right Text Mask */}
            <div className="overflow-hidden flex justify-start">
              <span ref={el => addRef(el, rightTextRef, 2)} className="block">ENCES</span>
            </div>
          </div>

        </div>
      </main>

      {/* --- Bottom Neon Bar --- */}
      <div ref={bottomBarRef} className="h-[60px] w-full bg-[#eefe84] mt-auto"></div>

    </div>
  );
}