# Design Review: Kambo Landing Page

Reviewed against: established aesthetic direction (no DESIGN_BRIEF.md found)  
Philosophy: Dark editorial / sacred-nature luxury — Cormorant Garamond serif, gold accent `#C4922A`, fixed jungle background, no card-over-card boxes  
Date: 2026-07-01

---

## Screenshots Captured

| Screenshot | Breakpoint | Description |
|---|---|---|
| `review-desktop-1280.png` | Desktop (1280×800) | Full page after scroll-through |
| `review-tablet-768.png` | Tablet (768×1024) | Full page after scroll-through |
| `review-mobile-375.png` | Mobile (375×812) | Full page after scroll-through |

---

## Summary

The site reads as a genuine premium product — the Effects editorial layout and Hero proof pill are standout moments. Three specific regressions need fixing: the Hero proof pill overflows on mobile (content math doesn't fit 327px), the WhatIsKambo quote was never updated to the requested "Освобождая тело..." text, and the Safety left-card note uses a brittle `.replace()` instead of parseBold.

---

## Must Fix

### 1. Hero proof pill overflows on mobile (375px)
`components/Hero.tsx` — proof pill bottom section  
At 375px, `paddingInline: clamp(24px, 6vw, 60px)` = 24px each side → 327px available for pill. Three stat items + 2 dividers (each 1px + 28px margin) total ≈ 300–320px of content inside `padding: '8px 20px'` = 287px of content area. It clips. The 10px label text is also below the 16px mobile minimum.  
**Fix:** On mobile, wrap pill to a 2×2 grid OR reduce to `flex-wrap: wrap` with `justify-content: center`. Alternatively show only 2 stats (most impactful: "350+ церемоний" + "20 лет практики") and drop the middle one at `< 480px`.

### 2. WhatIsKambo quote not updated
`lib/constants.ts:48` — `WHAT_KAMBO.quote`  
Still shows: `'Это древняя практика освобождения — от накопленного напряжения...'`  
User requested: `'Освобождая тело, Камбо помогает успокоить ум, вернуть внутреннюю устойчивость и восстановить глубинную связь с собой и силами природы.'`  
The stat changes (stats[2] → `{ value: '2', label: 'часа...' }`) were applied, but the quote and title edits were not persisted.  
**Fix:** Update `WHAT_KAMBO.quote` and `WHAT_KAMBO.title` (`'Что Такое Церемония Камбо'` — capital Т, no `?`) in constants.ts.

---

## Should Fix

### 3. Safety left card note uses `.replace()` — fragile
`components/Safety.tsx:150–156`  
The footer note uses `dangerouslySetInnerHTML` with a hardcoded `.replace('Перед записью обязательно...')`. If the text in constants.ts ever changes, the bold silently breaks.  
**Fix:** Add `**bold**` markers to `SAFETY.contraindicationsNote` in constants.ts and render via `parseBold()` (already imported in the file).

### 4. Effects single-column breakpoint is 720px, not 767px
`components/Effects.tsx:265` — `@media (max-width: 720px)`  
At exactly 768px (tablet), the 2-column editorial layout is still active. The columns are tight at that width — Roman numerals clip into body text on narrower tablets. All other responsive breakpoints in the project use 767px (Safety, WhatIsKambo, etc.).  
**Fix:** Change `max-width: 720px` → `max-width: 767px` for consistency, and retest the Effects layout at 768px.

### 5. WhatIsKambo title case + question mark
`lib/constants.ts:47` — `WHAT_KAMBO.title`  
Current: `'Что такое Церемония Камбо?'` (lowercase "такое", has "?")  
Requested: `'Что Такое Церемония Камбо'` (capital Т, no question mark — matches the uppercase title style of every other section).  
This is paired with issue #2 above — both need one edit to constants.ts.

---

## Could Improve

### 6. Hero: three subtitles stacking on mobile are wordy
`components/Hero.tsx:97–113`  
All three subtitle lines display simultaneously. At 375px they stack into a 3-line paragraph that competes with the CTA button and proof pill for bottom-of-hero space. The "scan value" of the hero is diluted.  
**Suggestion:** Show one rotating subtitle at a time (Framer Motion `AnimatePresence` with fade). Or pick the single strongest line and drop the other two.

### 7. Process section: 7 steps creates a very long mobile scroll
`components/Process.tsx`  
At 375px, 7 steps with `--section-py` padding makes this the longest section on the page. Users must scroll through ~2000px to reach Safety and Booking.  
**Suggestion:** Tighten `gap` between steps on mobile (currently inherited from desktop). A `@media (max-width: 767px)` override to `gap: 28px` instead of the current value would reduce the section height by ~150px.

### 8. Dead code in WHAT_KAMBO.paragraphs
`lib/constants.ts:54–68` — `paragraphs`, `listTitle`, `list` fields  
The new WhatIsKambo component renders only `title`, `quote`, and `stats`. The `paragraphs`, `listTitle`, and `list` fields are unused dead code.  
**Suggestion:** Remove them in the next cleanup pass to keep constants.ts as a source of truth (not a graveyard of prior iterations).

---

## What Works Well

1. **Effects editorial layout** — The two-column staggered grid with Roman numeral watermarks and no card backgrounds is the visual highpoint of the page. It reads as genuinely designed, not generated.

2. **Hero gradient technique** — Dark top (H1 readability) → transparent middle (frog breathes) → dark bottom (CTAs readable). Combined with `filter: brightness(0.72) saturate(0.9)` on the image, the balance is right.

3. **Glassmorphism proof pill** — Gold Cormorant numbers + uppercase muted labels + hairline gold dividers inside a frosted pill is a strong moment. Clear hierarchy within a small component.

4. **WhatIsKambo split** — Photo at 4/5 ratio on the right, text column left, horizontal 3-stat baseline below. The stat numbers at `clamp(52px–88px)` create genuine typographic scale.

5. **Safety right card bold formatting** — `parseBold()` rendering makes each item scannable. "**400+ проведённых церемоний**" reads as a credential, not a list item.

6. **Gold accent discipline** — `--kambo-accent: #C4922A` is used for exactly: rules, watermark text, pip dots, stat numbers, blockquote color, focus rings. No accidental creep into body text or backgrounds.

7. **Focus styles** — `*:focus-visible { outline: 2px solid var(--kambo-accent); }` applies globally. Keyboard navigation is styled and consistent.
