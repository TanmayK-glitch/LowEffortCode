"use client";

import { motion } from "framer-motion";

const NAV = ["About", "Work", "Recognition", "Contact"];

const fade = (delay: number) => ({
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
});

export default function Header() {
  return (
    <header className="site-header">
      {/* Logo lockup */}
      <motion.div
        className="logo-mark"
        initial="hidden"
        animate="show"
        variants={fade(0.3)}
      >
        <div>
          <div className="logo-name">Voidform</div>
          <div className="logo-tagline">Digital Studio</div>
        </div>
      </motion.div>

      {/* Nav */}
      <nav className="nav-stack" aria-label="Primary">
        {NAV.map((label, i) => (
          <motion.a
            key={label}
            href={`#${label.toLowerCase()}`}
            className="nav-link"
            initial="hidden"
            animate="show"
            variants={fade(0.5 + i * 0.07)}
          >
            {label}
          </motion.a>
        ))}

        <motion.a
          href="#archive"
          className="archive-link"
          initial="hidden"
          animate="show"
          variants={fade(0.85)}
        >
          Archive <span aria-hidden="true">↘</span>
        </motion.a>
      </nav>
    </header>
  );
}
