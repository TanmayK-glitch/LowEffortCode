"use client";

import { useEffect, useRef } from "react";

interface Props {
  size?: number;
  rays?: number;
  style?: React.CSSProperties;
  className?: string;
}

export default function Sunburst({ size = 180, rays = 24, style, className = "" }: Props) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    let rot = 0;
    let last = 0;
    let raf: number;

    const loop = (t: number) => {
      if (!last) last = t;
      const dt = t - last;
      last = t;
      if (!mq.matches) {
        rot += (360 / 100_000) * dt; // full turn every 100 s
        svg.style.transform = `rotate(${rot}deg)`;
      }
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const c = size / 2;
  const rInner = 4;
  const rOuter = size / 2 - 4;

  return (
    <svg
      ref={ref}
      className={`sunburst-wrap ${className}`}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden="true"
      style={{ willChange: "transform", ...style }}
    >
      <circle cx={c} cy={c} r={rInner} fill="none" stroke="var(--line-strong)" strokeWidth="0.7" />
      {Array.from({ length: rays }, (_, i) => {
        const a = (i * 360) / rays;
        const rad = (a * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={c + Math.cos(rad) * (rInner + 4)}
            y1={c + Math.sin(rad) * (rInner + 4)}
            x2={c + Math.cos(rad) * rOuter}
            y2={c + Math.sin(rad) * rOuter}
            stroke="var(--line)"
            strokeWidth={i % 3 === 0 ? "0.5" : "0.25"}
          />
        );
      })}
    </svg>
  );
}
