# Balinese Royal Luxury Wedding Invitation

A premium, cinematic online wedding invitation website built with **React (Vite)**, featuring an immersive Balinese heritage theme with gold-and-ivory aesthetics, GSAP scroll animations, Framer Motion transitions, and glassmorphism effects.

---

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:5173` and click **Buka Undangan** to enter.

---

## Project Structure

```
src/
├── App.jsx                      # Main app (lazy-loaded sections)
├── main.jsx                     # Entry point
├── assets/
│   ├── images/                  # Replace SVG placeholders with real photos
│   │   ├── hero.svg             → hero.jpg  (1920x1080)
│   │   ├── bride.svg            → bride.jpg (600x800)
│   │   ├── groom.svg            → groom.jpg (600x800)
│   │   ├── gallery1-6.svg       → gallery1-6.jpg
│   │   ├── bg1.svg, bg2.svg     → bg1.jpg, bg2.jpg
│   │   └── ornament/            # Decorative SVG ornaments (keep as-is)
│   └── music/wedding.mp3        # Replace with your music file
├── components/                  # All UI sections (Cover, Hero, Gallery, RSVP, etc.)
├── data/wedding.js              # ALL content config — edit this one file
├── hooks/                       # useAudio, useDarkMode, useGsapScroll
├── styles/index.css             # Tailwind v4 + custom theme + animations
└── utils/helpers.js             # Date formatting, clipboard, utilities
```

---

## How to Customize

### 1. Replace Photos

Swap placeholder SVGs in `src/assets/images/` with your actual `.jpg` photos, then update imports in `src/data/wedding.js`:

```js
import brideImg from '../assets/images/bride.jpg';
```

### 2. Edit All Content

Open **`src/data/wedding.js`** — every name, date, location, event, love story milestone, bank account, quote, and dresscode is in this single file.

### 3. Replace Music

Drop your MP3 at `src/assets/music/wedding.mp3`.

### 4. Add YouTube Video

In `src/components/VideoSection.jsx`, uncomment the iframe and insert your video ID.

---

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Gold | #D4AF37 | Primary accent |
| Cream | #F5F0E8 | Light background |
| Dark Brown | #2C1810 | Text |
| Maroon | #800020 | Accent |
| Dark BG | #0D0A07 | Dark mode background |

## Typography

**Cinzel** (headings) · **Cormorant Garamond** (subheadings) · **Great Vibes** (script) · **Poppins** (body) · **Inter** (utility)

---

## Features

- Royal door opening animation on cover
- Parallax hero with Pura Bali silhouette
- Live flip-number countdown
- GSAP ScrollTrigger animations (timeline line drawing, text reveals)
- Framer Motion entrance animations on every section
- Glassmorphism card design
- Masonry gallery with lightbox
- RSVP form with validation and confetti
- Dark mode toggle (persisted)
- Floating vinyl music player
- Copy-to-clipboard for bank accounts
- Code splitting (lazy-loaded sections)
- SEO (Open Graph, Twitter Cards, structured data)
- Fully responsive (mobile-first)

---

## Tech Stack

React 19 · Vite · Tailwind CSS v4 · Framer Motion · GSAP · Lucide React · React Hook Form · React Helmet Async · React Confetti · Day.js

---

## Build and Deploy

```bash
npm run build     # outputs to dist/
npm run preview   # preview production build locally
```

Deploy `dist/` to Vercel, Netlify, GitHub Pages, or any static host.

---

## License

Personal use. Replace all photos and content with your own.
