# Hero01 – Modern React Hero Component

A production-ready Hero section built with React and Tailwind CSS.  
Designed for SaaS, AI, and startup landing pages.

---

## Features

- **Infinite Scroll Carousel** – continuously scrolling testimonial bar
- **Fully Customizable** – props for all text content and background image
- **Responsive** – optimized for mobile, tablet, and desktop
- **No External Animation Libraries** – clean, dependency-free implementation

---

## Installation

1. Copy the `hero` folder into your project (e.g. `src/components/`)
2. Ensure Tailwind CSS is already set up in your project

> This product includes **only the Hero component**, not a full website or app.

---

## Tailwind Configuration (Required)

Add the following to your `tailwind.config.js` to enable fonts and the infinite scroll animation:

```js
export default {
  theme: {
    extend: {
      fontFamily: {
        headline: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'infinite-scroll': 'scroll 25s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
}
