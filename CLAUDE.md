# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Sintectur is a corporate travel agency website — a single static HTML page with embedded CSS and JavaScript. No build tools, no framework, no dependencies.

**View the site:** Open [apple/index.html](apple/index.html) in a browser, or run a local server:
```
python -m http.server 8000
```

## Architecture

Everything lives in [apple/index.html](apple/index.html) — one file with three sections:

**CSS (~535 lines in `<style>`):**
- Design tokens defined as CSS variables in `:root` — accent color `#0071e3`, spacing, fonts
- Typography: Apple system font stack (`-apple-system`, `BlinkMacSystemFont`, `"SF Pro Display"`)
- Component styles for each section: nav, hero, services grid, about, MICE, testimonial, CTA, footer
- Responsive via `max-width` media queries at `1024px` (tablet), `768px` (mobile), `480px` (small mobile)

**JavaScript (~10 lines in `<script>`):**
- Single responsibility: mobile hamburger menu toggle
- Adds/removes `.open` class on the nav menu and toggle button on click

**HTML sections (in order):**
`nav` → `hero` → `services` (3-col grid) → `about` (stats) → `mice` (dark theme) → `testimonial` → `cta` → `footer`

## Making Changes

- **Colors:** Update CSS variables in `:root`
- **New section:** Follow existing pattern — wrapper div with consistent padding (`100px 40px`), semantic HTML, add responsive styles at the three breakpoints
- **Responsive testing:** Browser DevTools device toolbar at 480px, 768px, 1024px
- **Mobile nav:** The `.open` class controls visibility — CSS handles display toggling, no JS needed for styles
