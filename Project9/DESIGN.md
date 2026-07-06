# Design System

## Color Palette

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#0A0A0A` | Page background |
| `--fg-display` | `#C9C9C9` | Giant hero display type (soft silver) |
| `--fg-strong` | `#F5F5F5` | Nav links, eyebrow text, labels |
| `--fg-muted` | `#8A8A8A` | Body/paragraph copy |
| `--accent` | `#C6FF3D` | Lime — 1-2 tiny accent spots only |
| `--line` | `rgba(255,255,255,0.15)` | Hairline rules, decorative lines |
| `--line-strong` | `rgba(255,255,255,0.25)` | Stronger rules, sunburst strokes |

### Color Strategy

**Restrained monochrome with surgical accent.** Near-black body, silver type, one lime-green accent used in exactly two places (marquee separator dot, bottom-left dash). The palette's power comes from how little saturated color exists.

## Typography

### Display Face
- **Font**: Bodoni Moda (Google Fonts), loaded via `next/font/google`
- **CSS Variable**: `--font-display` → `var(--font-display-loaded)`
- **Usage**: Hero headline only
- **Scale**: `clamp(4rem, 14vw, 13rem)` desktop, `clamp(2.5rem, 12vw, 5rem)` mobile
- **Line-height**: 0.85
- **Letter-spacing**: -0.01em
- **Style**: Italic
- **Treatment**: `scaleX(0.82)` on wrapper to fake condensed width

### Body/UI Face
- **Font**: Archivo (Google Fonts), loaded via `next/font/google`
- **CSS Variable**: `--font-body` → `var(--font-body-loaded)`
- **Usage**: Nav links, eyebrow, body text, ticker, labels
- **Nav style**: Bold, uppercase, 13px, `letter-spacing: 0.05em`
- **Eyebrow**: Bold, uppercase, 12px, `letter-spacing: 0.04em`
- **Body**: Regular weight, 14-15px, `line-height: 1.5`
- **Ticker**: Bold, uppercase, 11px, `letter-spacing: 0.12em`

## Spacing & Layout

- Ticker bar: 44px sticky, hairline borders top/bottom
- Header padding: `px-6 md:px-10 py-6`
- Hero type uses negative margin overlap: `-0.08em` between lines
- Asymmetric headline offsets: `-4vw`, `8vw`, `-2vw` per line
- Right-side text block: max-width 280-300px, positioned at `top: 42%`, `right: 12-16%`

## Z-Index Scale

| Token | Value | Usage |
|---|---|---|
| `--z-grain` | 1 | Film grain overlay |
| `--z-decorative` | 2 | Diagonal lines, sunburst |
| `--z-content` | 3 | Type, text blocks, CTAs |
| `--z-nav` | 10 | Header |
| `--z-ticker` | 11 | Sticky marquee |

## Motion

### Easing
- **Primary**: `cubic-bezier(0.16, 1, 0.3, 1)` — exponential ease-out
- **Secondary**: `cubic-bezier(0.25, 1, 0.5, 1)` — quart ease-out

### Animations
1. **Marquee**: rAF-driven, 110px/s, pause on hover
2. **Hero load-in**: clip-path + translateY reveal, staggered 130ms, 900ms total
3. **Nav hover**: underline scaleX 0→1 left-origin, 250ms + letter-spacing increase
4. **Archive arrow**: translate 3px down-right on hover, 200ms
5. **Sunburst**: 360°/100s continuous rotation via rAF
6. **Diagonal lines**: ±3px damped parallax following cursor (0.08 lerp)
7. **Accent dash**: scaleX 0→1, 500ms, fires at 1.3s delay
8. **Film grain**: Canvas noise at 12fps, 4% opacity

### Reduced Motion
- Marquee slows to 30% speed
- Hero entrance animations skipped (instant visible)
- Sunburst rotation stops
- Diagonal parallax disabled
- Film grain shows static single frame

## Components

| Component | File | Purpose |
|---|---|---|
| `Marquee` | `src/components/Marquee.tsx` | rAF-driven infinite ticker |
| `Header` | `src/components/Header.tsx` | Logo lockup + nav stack |
| `Hero` | `src/components/Hero.tsx` | Display type + text block + CTA |
| `Sunburst` | `src/components/Sunburst.tsx` | SVG radiating line decoration |
| `DiagonalLines` | `src/components/DiagonalLines.tsx` | Parallax diagonal hairlines |
| `FilmGrain` | `src/components/FilmGrain.tsx` | Canvas noise overlay |
