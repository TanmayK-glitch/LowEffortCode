"use client";

import { useEffect, useRef } from "react";

const LINES = [
  { angle: 17, top: "18%", left: "-8%", width: "75%" },
  { angle: -15, top: "52%", left: "25%", width: "85%" },
  { angle: 19, top: "78%", left: "5%",  width: "60%" },
];

export default function DecoLines() {
  const rootRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const currRef  = useRef({ x: 0.5, y: 0.5 });
  const rafRef   = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight };
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const loop = () => {
      const el = rootRef.current;
      if (el) {
        currRef.current.x += (mouseRef.current.x - currRef.current.x) * 0.06;
        currRef.current.y += (mouseRef.current.y - currRef.current.y) * 0.06;
        const dx = (currRef.current.x - 0.5) * 8;
        const dy = (currRef.current.y - 0.5) * 8;
        el.querySelectorAll<HTMLDivElement>(".deco-line").forEach((line) => {
          const base = line.dataset.rot ?? "0";
          line.style.transform = `rotate(${base}deg) translate(${dx}px, ${dy}px)`;
        });
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={rootRef} className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }} aria-hidden="true">
      {LINES.map((l, i) => (
        <div
          key={i}
          className="deco-line"
          data-rot={l.angle}
          style={{ top: l.top, left: l.left, width: l.width, transform: `rotate(${l.angle}deg)` }}
        />
      ))}
    </div>
  );
}
