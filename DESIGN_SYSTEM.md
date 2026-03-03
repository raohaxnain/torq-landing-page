# Torq Landing Page - Design System Rules

> Comprehensive design system documentation for Figma integration using Model Context Protocol (MCP)

---

## 1. Design Tokens

### Colors

#### Primary Palette

```css
/* Brand Colors */
--primary-lime: #d5fc9a; /* Tailwind: lime-200 */
--primary-purple: #6259b9; /* Secondary brand color */

/* Neutrals */
--neutral-black: #000000;
--neutral-white: #ffffff;
--neutral-dark: #0a0a0a;
--neutral-light: #ededed;

/* Slate Scale (Tailwind defaults) */
--slate-50: #f8fafc;
--slate-300: #cbd5e1;
--slate-700: #334155;
--slate-900: #0f172a;
```

#### Usage Guidelines

- **Primary CTA**: `bg-lime-200` (#D5FC9A) with hover state `bg-lime-100`
- **Text Gradients**: Black to Purple (`from-black to-[#6259B9]`)
- **Accent Dots**: `bg-[#D5FC9A]`
- **Dark Text**: `text-slate-900` or `text-slate-700`
- **Light Text**: `text-gray-600` or `text-slate-300`

### Typography

#### Font Family

```typescript
// Primary Font: Manrope (Custom)
--font-manrope: Manrope, ui-sans-serif, system-ui, sans-serif;

// Location: /public/fonts/manrope/
// Weights: 100, 300, 400, 500, 600, 700, 800
```

#### Font Sizes & Styles

```typescript
// Headings
h1: "text-4xl sm:text-5xl lg:text-7xl font-semibold"      // 36px → 48px → 72px
h2: "text-3xl sm:text-4xl lg:text-5xl font-semibold"      // 30px → 36px → 48px
h3: "text-2xl sm:text-3xl lg:text-4xl font-medium"        // 24px → 30px → 36px

// Body Text
body-large: "text-base lg:text-lg"                        // 16px → 18px
body-regular: "text-sm sm:text-base"                      // 14px → 16px
body-small: "text-xs sm:text-sm"                          // 12px → 14px

// Special
uppercase-label: "text-[0.65rem] uppercase tracking-[0.2em] font-bold"
button-text: "text-sm font-semibold uppercase tracking-[0.1em]"
```

#### Letter Spacing

- **Normal**: 0
- **Wide**: `tracking-[0.1em]` (0.1em)
- **Wider**: `tracking-[0.2em]` (0.2em)
- **Widest**: `tracking-[0.3em]` (0.3em)

### Spacing Scale

Uses Tailwind's default 4px base scale:

```typescript
// Common spacing values
padding: "px-4 sm:px-6 lg:px-8"; // Horizontal padding
section: "py-16 sm:py-20"; // Section vertical padding
gap: "gap-4 sm:gap-6 lg:gap-8"; // Flex/grid gaps

// Max widths
container: "mx-auto max-w-6xl"; // 1152px centered
content: "max-w-3xl"; // 768px
```

### Border Radius

```typescript
small: "rounded-lg"; // 8px
medium: "rounded-xl"; // 12px
large: "rounded-2xl"; // 16px
xlarge: "rounded-3xl"; // 24px
full: "rounded-full"; // 9999px
custom: "rounded-[40px]"; // Custom values
```

### Shadows

```typescript
// Elevation levels
subtle: "shadow-sm";
medium: "shadow-lg";
high: "shadow-xl";
highest: "shadow-2xl";
custom: "shadow-[0_20px_50px_rgba(0,0,0,0.35)]";
```

---

## 2. Component Library

### Component Architecture

All components follow this pattern:

```typescript
"use client";

import { useRef, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ComponentName() {
  // 1. State declarations
  const [state, setState] = useState(initialValue);

  // 2. Refs for animations
  const elementRef = useScrollAnimation<HTMLElement>({
    type: "fadeUp",
    duration: 1,
  });

  // 3. Event handlers
  const handleClick = () => {
    /* ... */
  };

  // 4. Return JSX
  return <section className="...">{/* Component content */}</section>;
}
```

### Core Components

| Component         | Purpose              | Key Features                                      |
| ----------------- | -------------------- | ------------------------------------------------- |
| **Hero**          | Landing hero section | GSAP animations, responsive nav, video background |
| **About**         | Company introduction | Scroll animations, gradient text                  |
| **Features**      | Feature showcase     | Touch carousel, stagger animations                |
| **Integration**   | Integration tags     | Infinite scroll carousel                          |
| **Results**       | Results/metrics      | Stats cards with overlays                         |
| **Blog**          | Blog post grid       | Card hover effects, responsive grid               |
| **Footer**        | Footer with modals   | Circle expand animation, forms                    |
| **Newsletter**    | Newsletter signup    | Simple form component                             |
| **LoadingScreen** | Page loader          | GSAP fade-out animation                           |
| **HeroVideo**     | Video player         | HTML5 video with autoplay                         |

### Button Components

#### Primary Button

```typescript
<button
  className="rounded-xl bg-lime-200 px-12 py-5 text-sm font-semibold
  uppercase tracking-[0.1em] text-slate-900
  transition-all duration-300 hover:bg-lime-100
  hover:scale-[1.02] hover:shadow-lg active:scale-95 cursor-pointer"
>
  Button Text
</button>
```

#### Secondary Button

```typescript
<button
  className="rounded-xl border-2 border-white bg-transparent px-8 py-4
  text-sm font-medium uppercase tracking-[0.15em] text-white
  transition-all duration-300 hover:bg-white/10 active:scale-95 cursor-pointer"
>
  Button Text
</button>
```

### Card Components

#### Feature Card

```typescript
<div className="relative rounded-3xl bg-gradient-to-br from-lime-100 via-lime-50 to-yellow-50 p-6 pb-8">
  {/* Badge number */}
  <div className="absolute right-6 top-4 text-5xl font-bold text-slate-900/20">
    01
  </div>

  {/* Icon + Title */}
  <div className="flex items-center gap-4">
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-300">
      <Icon className="h-6 w-6 text-slate-900" />
    </div>
    <span className="text-xs font-bold uppercase tracking-[0.35em] text-slate-900">
      Title
    </span>
  </div>

  {/* Description */}
  <p className="mt-6 text-sm leading-relaxed text-slate-900">
    Description text
  </p>
</div>
```

#### Blog Card

```typescript
<div
  className="group relative overflow-hidden rounded-3xl bg-white shadow-lg
  transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
>
  <Image src="..." alt="..." className="..." />
  <div className="p-6">
    <h3 className="text-xl font-semibold text-slate-900">Title</h3>
    <p className="mt-2 text-sm text-gray-600">Description</p>
  </div>
</div>
```

### Chip/Tag Component

```typescript
<div
  className="inline-flex items-center gap-2 rounded-xl border border-slate-900/10
  bg-white px-5 py-2 text-[0.7rem] font-medium uppercase
  tracking-[0.1em] text-slate-700"
>
  <div className="h-1.5 w-1.5 rounded-full bg-[#D5FC9A]" />
  Tag Text
</div>
```

---

## 3. Styling System

### Primary Method: Tailwind CSS v4

**Configuration**: Inline theme in `app/globals.css`

```css
@import "tailwindcss";

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-family-sans: var(--font-manrope), ui-sans-serif, system-ui, sans-serif;
}
```

### Common Patterns

#### Layout

```typescript
// Container
"mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";

// Grid
"grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3";

// Flexbox
"flex items-center justify-between gap-4";
```

#### Responsive Design

```typescript
// Mobile-first breakpoints
// 640px  - tablets
sm: // 768px  - small laptops
md: // 1024px - desktops

// Example
lg: "text-3xl sm:text-4xl lg:text-6xl";
("px-4 sm:px-6 lg:px-8");
("hidden lg:flex");
```

#### Gradients

**Text Gradients**:

```typescript
className =
  "bg-gradient-to-r from-black to-[#6259B9] bg-clip-text text-transparent";
```

**Background Gradients**:

```typescript
// Via Tailwind
className="bg-gradient-to-br from-lime-100 via-lime-50 to-yellow-50"

// Via inline styles (for images)
style={{ backgroundImage: "url('/background/Torq-gradients-green-purple-05.png')" }}
```

#### Transitions & Animations

**Tailwind Transitions**:

```typescript
"transition-all duration-300 ease-out";
"hover:scale-[1.02] active:scale-95";
"hover:shadow-lg transition-shadow";
```

**Custom Animations** (Styled JSX):

```typescript
<style jsx>{`
  @keyframes animation-name {
    from {
      /* ... */
    }
    to {
      /* ... */
    }
  }

  .animate-name {
    animation: animation-name 20s linear infinite;
  }
`}</style>
```

---

## 4. Animation System

### GSAP Animations

**Hook Usage**:

```typescript
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const elementRef = useScrollAnimation<HTMLHeadingElement>({
  type: "fadeUp", // Animation type
  duration: 1, // Duration in seconds
  delay: 0.2, // Delay in seconds
  start: "top 80%", // ScrollTrigger start
  once: true, // Animate only once
});

// Apply to element
<h2 ref={elementRef}>Animated Heading</h2>;
```

**Animation Types**:

- `fadeIn` - Fade in from opacity 0
- `fadeUp` - Fade in from bottom
- `fadeDown` - Fade in from top
- `fadeLeft` - Fade in from right
- `fadeRight` - Fade in from left
- `scale` - Scale up from 0.8
- `stagger` - Animate children with delay

### Stagger Animations

```typescript
import { useStaggerAnimation } from "@/hooks/useScrollAnimation";

const containerRef = useStaggerAnimation<HTMLDivElement>("div", {
  type: "fadeUp",
  stagger: 0.2, // 0.2s delay between children
});

<div ref={containerRef}>
  <div>Child 1</div>
  <div>Child 2</div>
  <div>Child 3</div>
</div>;
```

### CSS Keyframe Animations

**Infinite Scroll Example**:

```typescript
<style jsx>{`
  @keyframes scroll-left {
    0% { transform: translateX(0); }
    100% { transform: translateX(-33.333%); }
  }

  .animate-scroll-left {
    animation: scroll-left 20s linear infinite;
  }
`}</style>

<div className="flex animate-scroll-left">
  {/* Repeating items */}
</div>
```

---

## 5. Icon System

### Primary Icon Library: lucide-react

**Installation**:

```bash
npm install lucide-react
```

**Usage**:

```typescript
import { TrendingUp, Star, Zap } from "lucide-react";

<TrendingUp className="h-6 w-6 text-slate-900" strokeWidth={2.5} />;
```

**Common Icons**:

- `TrendingUp` - Analytics/growth
- `Star` - Rating/quality
- `Zap` - Speed/automation
- `Instagram`, `Facebook`, `Linkedin`, `Youtube`, `X` - Social media

**Icon Sizing**:

```typescript
small: "h-5 w-5"; // 20px
medium: "h-6 w-6"; // 24px
large: "h-7 w-7"; // 28px
xlarge: "h-14 w-14"; // 56px
```

**Icon Containers**:

```typescript
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-300">
  <Icon className="h-6 w-6 text-slate-900" strokeWidth={2.5} />
</div>
```

---

## 6. Asset Management

### Directory Structure

```
/public/
├── background/          - Gradient backgrounds (PNG)
├── fonts/manrope/      - Custom font files (OTF)
├── icons/              - Component-specific icons/images
├── stock images/       - Photography assets
├── *.svg              - Logo variants
├── *.mp4              - Video assets
└── favicon.ico        - Favicon
```

### Image Optimization (Next.js Image)

```typescript
import Image from "next/image";

// Background image with fill
<Image
  src="/background/Torq-gradients-green-purple-04.png"
  alt=""
  fill
  sizes="150vw"
  quality={60}
  className="object-cover"
/>

// Responsive image
<Image
  src="/icons/blog-image-1.png"
  alt="Blog post"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

### Video Assets

```typescript
<video autoPlay loop muted playsInline className="...">
  <source src="/Torq-Header-Video.mp4" type="video/mp4" />
</video>
```

---

## 7. Form Patterns

### Input Fields

```typescript
// Light background input
<input
  type="email"
  placeholder="Your email"
  className="w-full px-6 py-4 rounded-xl border-none
    bg-white/50 backdrop-blur-sm
    focus:outline-none focus:ring-2 focus:ring-slate-900
    text-slate-900 placeholder:text-slate-600"
/>

// Dark background input
<input
  type="email"
  placeholder="Your email"
  className="w-full px-6 py-4 rounded-lg
    bg-slate-700/50 border-none
    text-white placeholder:text-gray-400
    focus:outline-none focus:ring-2 focus:ring-lime-200"
/>
```

### Textarea

```typescript
<textarea
  rows={4}
  placeholder="Message"
  className="w-full px-6 py-4 rounded-xl border-none
    bg-white/50 backdrop-blur-sm resize-none
    focus:outline-none focus:ring-2 focus:ring-slate-900
    text-slate-900 placeholder:text-slate-600"
/>
```

---

## 8. Responsive Patterns

### Navigation

**Desktop**:

```typescript
<nav className="hidden lg:flex items-center gap-8">
  <a className="text-gray-300 hover:text-lime-200 transition-colors">Link</a>
</nav>
```

**Mobile**:

```typescript
<button className="lg:hidden">
  Menu
</button>

<div className="fixed inset-0 z-40 lg:hidden">
  {/* Mobile menu overlay */}
</div>
```

### Grid Layouts

```typescript
// Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns
"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6";

// Custom grid template
"grid grid-cols-1 lg:grid-cols-[140px_1fr] gap-6";
```

### Typography Scaling

```typescript
// Heading: 36px → 48px → 72px
"text-4xl sm:text-5xl lg:text-7xl";

// Body: 14px → 16px → 18px
"text-sm sm:text-base lg:text-lg";
```

---

## 9. Code Connect Guidelines

### Component Mapping

When creating Figma Code Connect files:

1. **Match Figma layers to React components**:

   - Button variants → Button component props
   - Card types → Card component with different props
   - Text styles → Tailwind typography classes

2. **Preserve responsive behavior**:

   - Map breakpoints to Figma frames
   - Include mobile/desktop variants

3. **Use actual component code**:

   ```typescript
   // In Code Connect file
   import Button from "@/components/Button";

   figma.connect(Button, {
     variant: { Type: "Primary" },
     props: {
       children: figma.string("Label"),
     },
     example: (props) => (
       <button className="rounded-xl bg-lime-200 px-12 py-5...">
         {props.children}
       </button>
     ),
   });
   ```

### Design Token Mapping

Map Figma variables to code tokens:

| Figma Variable    | Code Token     | Value   |
| ----------------- | -------------- | ------- |
| `color/primary`   | `bg-lime-200`  | #D5FC9A |
| `color/purple`    | `bg-[#6259B9]` | #6259B9 |
| `spacing/sm`      | `gap-4`        | 16px    |
| `spacing/md`      | `gap-6`        | 24px    |
| `font/heading-xl` | `text-7xl`     | 72px    |
| `radius/lg`       | `rounded-3xl`  | 24px    |

---

## 10. Best Practices

### DO

- ✅ Use Tailwind utility classes for all styling
- ✅ Implement mobile-first responsive design
- ✅ Use GSAP for complex animations via hooks
- ✅ Use Next.js Image component for all images
- ✅ Use lucide-react for icons
- ✅ Add "use client" directive to interactive components
- ✅ Use TypeScript for type safety
- ✅ Follow component naming: PascalCase files
- ✅ Use semantic HTML elements

### DON'T

- ❌ Create custom CSS files (use Tailwind or styled-jsx)
- ❌ Use inline styles except for dynamic values
- ❌ Use `<img>` tags (use Next.js Image)
- ❌ Forget responsive breakpoints
- ❌ Skip animation cleanup in useEffect
- ❌ Use arbitrary color values (use design tokens)
- ❌ Create wrapper divs unnecessarily

---

## 11. File Organization

```
project-root/
├── app/
│   ├── layout.tsx          # Root layout with font loading
│   ├── page.tsx            # Home page composition
│   └── globals.css         # Global styles and Tailwind
├── components/
│   └── [ComponentName].tsx # Individual components
├── hooks/
│   └── useScrollAnimation.ts # Custom animation hook
├── public/
│   ├── background/         # Background images
│   ├── fonts/             # Custom fonts
│   └── icons/             # Icons and images
└── [config files]         # next.config, tsconfig, etc.
```

---

## 12. Quick Reference

### Common Class Combinations

**Section Container**:

```typescript
"relative isolate bg-white py-16 sm:py-20";
```

**Content Wrapper**:

```typescript
"mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";
```

**Heading with Gradient**:

```typescript
"text-3xl font-semibold bg-gradient-to-r from-black to-[#6259B9] bg-clip-text text-transparent sm:text-4xl lg:text-5xl";
```

**Primary CTA Button**:

```typescript
"rounded-xl bg-lime-200 px-12 py-5 text-sm font-semibold uppercase tracking-[0.1em] text-slate-900 transition-all duration-300 hover:bg-lime-100 hover:scale-[1.02] hover:shadow-lg active:scale-95 cursor-pointer";
```

**Feature Card**:

```typescript
"relative rounded-3xl bg-gradient-to-br from-lime-100 via-lime-50 to-yellow-50 p-6 pb-8";
```

---

## Version

**Last Updated**: 2025-01-23
**Tailwind CSS**: v4
**Next.js**: 16.0.1
**React**: 19.2.0
**GSAP**: 3.13.0
**lucide-react**: 0.552.0
