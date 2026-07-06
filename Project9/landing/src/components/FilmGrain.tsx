"use client";

import { useEffect, useRef } from "react";

export default function FilmGrain() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const resize = () => {
      c.width = Math.ceil(window.innerWidth / 3);
      c.height = Math.ceil(window.innerHeight / 3);
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    let raf: number;
    let last = 0;
    const FPS_INTERVAL = 1000 / 12; // 12 fps — cinematic flicker

    const draw = (t: number) => {
      if (t - last >= FPS_INTERVAL) {
        last = t - ((t - last) % FPS_INTERVAL);
        const { width: w, height: h } = c;
        const img = ctx.createImageData(w, h);
        const d = img.data;
        for (let i = 0; i < d.length; i += 4) {
          const v = (Math.random() * 255) | 0;
          d[i] = d[i + 1] = d[i + 2] = v;
          d[i + 3] = 255;
        }
        ctx.putImageData(img, 0, 0);
      }
      if (!mq.matches) raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <canvas
      ref={ref}
      className="film-grain"
      aria-hidden="true"
      style={{ width: "100vw", height: "100vh", imageRendering: "pixelated" }}
    />
  );
}
