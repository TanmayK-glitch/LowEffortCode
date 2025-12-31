# Hero01 Component

A premium Hero section built with React and Tailwind CSS.

## Features

-   **Infinite Scroll Carousel**: continuously scrolling testimonial/logo bar.
-   **Fully Customizable**: Props for all text content and background.
-   **Responsive**: Optimized for mobile, tablet, and desktop.
-   **No External Animations**: Clean, static "RAW" implementation (GSAP removed).

## Installation

1.  Copy the `hero` folder into your project's components directory.
2.  (Optional) Ensure you have configured the custom fonts in Tailwind if you want the exact same look.

## Tailwind Configuration

Add the following to your `tailwind.config.js` to enable the custom fonts and animations:

## Tailwind Configuration

Add the following to your `tailwind.config.js` to enable the custom fonts and animations:

```javascript
// tailwind.config.js
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
```

## Usage

```jsx
import { Hero } from './components/hero';

function App() {
  return (
    <Hero 
      title="INTELLIGENCE"
      titleSuffix="ARCHITECTED."
      subtitle="We build the cognitive infrastructure..."
      ctaText="Start Project"
      onCtaClick={() => console.log('Clicked')}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
| copy | --- | --- | --- |
| `title` | string | "INTELLIGENCE" | Main headline text |
| `titleSuffix` | string | "ARCHITECTED." | Secondary headline text (gray) |
| `subtitle` | string | "..." | Main description text |
| `eyebrow` | string | "Strategic AI Partners" | Small text above headline |
| `ctaText` | string | "Start Project" | Primary button text |
| `secondaryCtaText` | string | "Our Vision" | Secondary button text |
| `backgroundImage` | string | (Default Image) | Background image URL/Import |
