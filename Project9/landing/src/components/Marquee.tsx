"use client";

import { useRef, useEffect, useCallback } from "react";

const ITEMS = [
  "VOIDFORM STUDIO",
  "BRAND STRATEGY",
  "DIGITAL DESIGN",
  "MOTION SYSTEMS",
  "CREATIVE DIRECTION",
  "VISUAL IDENTITY",
  "ART DIRECTION",
  "INTERACTIVE EXPERIENCES",
];

const SPEED = 110; // px/s — locked constant

export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const prevRef = useRef(0);
  const rafRef = useRef(0);
  const pausedRef = useRef(false);
  const reducedRef = useRef(false);

  const tick = useCallback((t: number) => {
    if (!trackRef.current) return;
    if (prevRef.current === 0) prevRef.current = t;
    const dt = t - prevRef.current;
    prevRef.current = t;

    if (!pausedRef.current) {
      const s = reducedRef.current ? SPEED * 0.25 : SPEED;
      xRef.current -= (s * dt) / 1000;

      // Seamless reset: measure width of one item-set
      const first = trackRef.current.firstElementChild as HTMLElement | null;
      if (first) {
        const w = first.offsetWidth;
        if (Math.abs(xRef.current) >= w) xRef.current += w;
      }

      trackRef.current.style.transform = `translate3d(${xRef.current}px,0,0)`;
    }

    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedRef.current = mq.matches;
    const h = (e: MediaQueryListEvent) => { reducedRef.current = e.matches; };
    mq.addEventListener("change", h);
    rafRef.current = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(rafRef.current); mq.removeEventListener("change", h); };
  }, [tick]);

  const set = (
    <div className="flex items-center" style={{ flexShrink: 0 }}>
      {ITEMS.map((item, i) => (
        <div key={i} className="flex items-center">
          <span className="marquee-item">{item}</span>
          <span className="marquee-dot" aria-hidden="true" />
        </div>
      ))}
    </div>
  );

  return (
    <div
      className="ticker-bar"
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
      role="marquee"
      aria-label="Studio services"
    >
      <div ref={trackRef} className="marquee-track">
        {set}{set}{set}{set}
      </div>
    </div>
  );
}
