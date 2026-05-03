# Design System — ethanmanners.com

Tokens live in `src/lib/styles/tokens.css` and are wired into Tailwind via `src/app.css`.
Visual reference: `/styleguide` route (not linked from nav).

---

## Color

| Token        | Value     | Usage                        |
|-------------|-----------|------------------------------|
| `--bg`       | `#06070a` | Page background              |
| `--bg-elev`  | `#0c0e13` | Cards, elevated surfaces     |
| `--fg`       | `#e8e8ed` | Primary type (soft off-white)|
| `--fg-muted` | `#8a8a93` | Secondary type               |
| `--fg-subtle`| `#4a4a52` | Tertiary type, dividers      |
| `--accent`   | `#ff5b1f` | Accent (Miami-warm orange)   |
| `--border`   | `#1a1c22` | Borders                      |

**Accent rule:** at most one accent element visible per viewport.

---

## Type

Typeface: **Inter** (variable, self-hosted from `/static/fonts/`).

| Class      | Size                         | Line-height | Tracking  | Usage           |
|-----------|------------------------------|-------------|-----------|-----------------|
| `.text-xl` | `clamp(2.25rem, 5vw, 3.5rem)` | 1.05       | `-0.02em` | Hero, titles    |
| `.text-lg` | `1.375rem`                    | 1.4        | `-0.01em` | Subheads        |
| `.text-base`| `1rem`                       | 1.6        | `0`       | Body            |
| `.text-xs` | `0.8125rem`                   | 1.4        | `+0.08em` | Labels, meta    |

**Meta labels:** `.meta` class = `text-xs` + uppercase + `--fg-muted`. Only place uppercase is used.

---

## Spacing

8px base grid. Use these multiples only:

| Token        | Value   | px  |
|-------------|---------|-----|
| `--space-1`  | `0.5rem`  | 8   |
| `--space-2`  | `1rem`    | 16  |
| `--space-3`  | `1.5rem`  | 24  |
| `--space-4`  | `2rem`    | 32  |
| `--space-6`  | `3rem`    | 48  |
| `--space-8`  | `4rem`    | 64  |
| `--space-12` | `6rem`    | 96  |
| `--space-16` | `8rem`    | 128 |

No arbitrary values (`mt-[13px]`). Ever.

---

## Motion

| Context       | Duration | Easing                         |
|--------------|----------|--------------------------------|
| Hover states  | `200ms`  | `cubic-bezier(0.32, 0.72, 0, 1)` |
| Big movements | `400ms`  | `cubic-bezier(0.32, 0.72, 0, 1)` |
| Page enter    | `300ms`  | fade + 8px y-translate          |
| Scroll reveal | once     | fade + 16px y-translate         |

CSS variables: `--ease`, `--duration-fast`, `--duration`.

---

## Tailwind Usage

Custom theme values are wired in `src/app.css` under `@theme`. Use Tailwind utilities that reference the theme (`text-fg`, `bg-bg-elev`, `border-border`) rather than raw hex values. The design system is the source of truth, not individual classes.
