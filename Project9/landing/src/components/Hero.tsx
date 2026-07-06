"use client";

import { motion, useReducedMotion } from "framer-motion";
import Sunburst from "./Sunburst";
import DecoLines from "./DiagonalLines";

/*
 * Three headline words, each offset so the composition is asymmetric.
 * First and last intentionally bleed off the viewport edges.
 * The `scaleX(0.82)` only wraps each word — NOT the entire section.
 */
const LINES = [
  { word: "Shaping",  ml: "-6vw" },
  { word: "Digital",  ml: "10vw" },
  { word: "Presence", ml: "-3vw" },
];

const reveal = (i: number) => ({
  hidden: { y: 50, opacity: 0, clipPath: "inset(100% 0 0 0)" },
  show: {
    y: 0,
    opacity: 1,
    clipPath: "inset(0% 0 0 0)",
    transition: {
      delay: 0.2 + i * 0.13,
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
});

const fadeUp = (delay: number) => ({
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
});

const dashAnim = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { delay: 1.4, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  const reduced = useReducedMotion();
  const init = reduced ? "show" : "hidden";

  return (
    <section className="hero" aria-label="Hero">
      {/* Decorative diagonal lines (parallax) */}
      <DecoLines />

      {/* Sunburst — positioned at intersection of lines 1 & 2 */}
      <Sunburst
        size={200}
        className="hidden md:block"
        style={{
          position: "absolute",
          right: "26%",
          top: "22%",
        }}
      />

      {/* ── Giant display type ── */}
      <div className="relative px-4 md:px-10" style={{ zIndex: 2 }}>
        {LINES.map((line, i) => (
          <motion.div
            key={line.word}
            className="display-line"
            style={{
              marginLeft: line.ml,
              marginTop: i > 0 ? "-0.06em" : undefined,
            }}
            initial={init}
            animate="show"
            variants={reveal(i)}
          >
            {/* scaleX only wraps the text, not other positioned elements */}
            <span className="display-line-condense">{line.word}</span>
          </motion.div>
        ))}
      </div>

      {/* ── Right-of-center text block ── */}
      <motion.div
        className="hero-text-block"
        initial={init}
        animate="show"
        variants={fadeUp(0.85)}
      >
        <p className="eyebrow">
          A full-service creative studio crafting unparalleled digital
          experiences that define how brands are perceived.
        </p>
        <p className="supporting-copy">
          We partner with forward-thinking companies to design, build, and
          launch products that demand attention and earn trust.
        </p>

        <button
          className="showreel-btn"
          type="button"
          aria-label="Play our showreel video"
        >
          Play our <em>showreel</em>
          <span className="showreel-ring" aria-hidden="true" />
        </button>
      </motion.div>

      {/* ── Lime accent dash — bottom-left ── */}
      <motion.div
        className="absolute bottom-8 left-6 md:left-10"
        style={{ zIndex: 2, transformOrigin: "left" }}
        initial={init}
        animate="show"
        variants={dashAnim}
      >
        <div className="accent-dash" />
      </motion.div>

      {/* Bottom hairline */}
      <div
        className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: "var(--line)" }}
        aria-hidden="true"
      />
    </section>
  );
}
