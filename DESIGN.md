---
name: Frente Perlandés por la Libertad
description: Manifesto site drawn as a civil-works plan sheet; twelve numbered láminas, one title block, one plan of Perland.
colors:
  paper: "#f1ede2"
  paper-deep: "#e6e0d0"
  ink: "#1b2330"
  ink-soft: "#3d4757"
  rule: "#1b233033"
  signal-orange: "#c9461a"
  rail-teal: "#226582"
typography:
  display:
    fontFamily: "'Big Shoulders Display', 'Barlow Condensed', sans-serif"
    fontSize: "clamp(2.5rem, 6.4vw, 5.5rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.005em"
  headline:
    fontFamily: "'Big Shoulders Display', 'Barlow Condensed', sans-serif"
    fontSize: "clamp(2rem, 4.2vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "normal"
  title:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "0.01em"
  body:
    fontFamily: "'Barlow', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.55
    letterSpacing: "0.08em"
rounded:
  none: "0px"
spacing:
  hairline: "6px"
  cell-y: "14px"
  row: "18px"
  block: "24px"
  gutter: "clamp(16px, 3vw, 40px)"
components:
  stamp-button:
    backgroundColor: "{colors.signal-orange}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "18px 20px 20px"
  lamina-row:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "18px 40px 20px"
  lamina-row-hover:
    backgroundColor: "{colors.paper-deep}"
  group-header:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    padding: "10px 40px"
  title-block-cell:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "14px 40px 16px"
  revision-header:
    backgroundColor: "{colors.paper-deep}"
    textColor: "{colors.ink-soft}"
    typography: "{typography.label}"
    padding: "10px 40px"
  signature-box:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "18px 40px 14px"
---

# Design System: Frente Perlandés por la Libertad

## Overview

**Creative North Star: "The Plan Sheet"**

The site is a civil-works drawing, not a campaign page. One hairline-framed sheet of warm paper holds a title block, a plan of the nation, a register of twelve numbered láminas, a revision note, and a signature box. Every surface is a cell of that drawing; nothing floats off it. Ink is a single near-black blue, with two working colors that each mean one thing: signal orange for the wall and the approval, rail teal for the railway.

Density is that of technical documentation: ruled cells, tabular numerals, condensed drawing lettering, line weights doing the work that cards and shadows do elsewhere. The page is a document to be read and checked, in the voice of a movement addressing neighbours. Linework is drawn at 45 and 90 degrees only, and the plan draws itself on load (wall first, railway second).

**Key Characteristics:**
- One framed sheet on a slightly deeper paper desk; ruled cells instead of cards.
- Ink for structure and text, orange and teal reserved for plan meaning.
- Condensed uppercase lettering for everything that is "drawn", plain humanist Barlow for reading.
- Zero radius everywhere; the only tilt is a rubber-stamp gesture.
- Information is shown as plan geometry first; hover on a lámina highlights its feature in the drawing.

## Colors

A restrained plan-room palette: warm paper, blue-black ink, and two signal colors used as meaning, never as decoration.

### Primary
- **Signal Orange** (`{colors.signal-orange}`): the wall in the plan, the approval stamp, the "Falso" mark, focus outline and text selection, and the numerals of the Nación group. At about 4.1:1 on paper it is used only for large type (3rem numerals, 1.6rem stamp text) and for lines.

### Secondary
- **Rail Teal** (`{colors.rail-teal}`): the railway line and the numerals of the Obras group. Used for nothing else.

### Neutral
- **Plan Paper** (`{colors.paper}`): the sheet; also the text color on ink and orange fills and the fill of stations and capital symbol.
- **Desk Paper** (`{colors.paper-deep}`): the page background outside the frame, table header fill, row hover, figure wells.
- **Delineator Ink** (`{colors.ink}`): text, frame, rules, group headers, plan linework.
- **Soft Ink** (`{colors.ink-soft}`): labels, secondary paragraphs, secondary plan lettering.
- **Hairline** (`{colors.rule}`): ink at 20% for dividers between láminas inside a group.

### Named Rules
**The Meaning-Only Color Rule.** Orange means wall or approval; teal means railway. A new color is added only when the plan gains a new kind of thing to draw.

**The One Ink Rule.** Every line, border and text block is Delineator Ink or Soft Ink. No tints of other hues for structure.

## Typography

**Display Font:** Big Shoulders Display (with Barlow Condensed, sans-serif)
**Body Font:** Barlow (with system-ui)
**Label/Mono Font:** Barlow Condensed (with Arial Narrow)

**Character:** Condensed, uppercase, drawing-sheet lettering for titles, labels and numerals, paired with an open humanist body that stays readable at paragraph length. Numerals are tabular across the sheet.

### Hierarchy
- **Display** (800, clamp(2.5rem, 6.4vw, 5.5rem), 0.92): the party name in the title block; uppercase, balanced wrap.
- **Headline** (800, clamp(2rem, 4.2vw, 3.5rem) for section heads; 1.8-2.75rem for the communiqué; 2.2-4rem for the signature box, 0.95-1): section titles; uppercase.
- **Title** (Barlow Condensed 600, 1.5rem, 1.1): lámina titles; uppercase. Title-block values at 1.35rem, signature values at 1.5rem.
- **Body** (Barlow 400, 1.0625rem, 1.55): paragraphs capped at 46ch (láminas), 58ch (section lead), 62ch (communiqué). The pitch is 1.2rem at 1.45, 36ch.
- **Label** (Barlow Condensed 600, 0.8125rem, 0.08em, uppercase): title-block field names, legend heading, revision table header; group headers at 0.875rem.

### Named Rules
**The Drawn-or-Read Rule.** Anything that labels, numbers or titles is condensed and uppercase; anything meant to be read as a sentence is Barlow in sentence case.

**The Halo Lettering Rule.** Text laid over linework in the plan gets a 5px paper stroke painted underneath so it stays legible across lines.

## Layout

A single sheet, max-width 1440px, centered, framed in a 2px ink border with a 9px strip of registration ticks (1px every 40px at 55% opacity) along top and bottom edges. Inside, bands stack top to bottom, each separated by a 2px ink rule, and subdivide with 1px ink rules into cells. Grids are rule-divided columns, not gapped cards: the title block is four cells (2.6fr / 1fr / 1.2fr / 1.2fr), the plan band is 2fr drawing + a 280px-minimum aside, the register is two columns, the communiqué is 1fr / 1.4fr, the signature box 1.2fr / 1fr.

Horizontal rhythm comes from one gutter token, `clamp(16px, 3vw, 40px)`, used as cell inline padding everywhere. Vertical rhythm is cell padding in the 10-28px range with section heads taking `clamp(40px, 6vw, 72px)` above.

Responsive: below 960px every band collapses to one column; the plan band reorders to pitch, stamp, drawing, legend so the action precedes the drawing; the title block becomes three columns with the name spanning. Below 520px the title block is two columns, the secondary plan labels hide and primary plan labels grow to 26px, and láminas shrink their numeral column to 56px.

## Elevation & Depth

Flat by default. Depth is conveyed by rules and by the paper-on-deeper-paper step between the sheet and the page background. Row hover is a paper-deep fill, not a lift.

### Shadow Vocabulary
- **Stamp lift** (`box-shadow: 0 8px 16px -8px #1b2330a0`, hover `0 12px 20px -8px #1b2330b0`): the single object that sits above the sheet, the approval stamp, which also straightens from -1.5deg to 0 and rises 2px on hover or focus.

### Named Rules
**The One Raised Object Rule.** Only the approval stamp lifts off the sheet. Everything else is printed on it.

## Shapes

Square. Radius is 0 everywhere; boxes are ruled rectangles, symbols are squares, circles, and octagons drawn at 45/90 degrees. Borders come in two weights: a 2px frame for band boundaries and the outer edge, and a 1px ink hairline for cell and row boundaries. Fill-in fields use a 1px dashed ink underline. Rubber-stamp marks (the orange "Falso" box, 3px orange border rotated -3deg; the approval stamp with an offset 2px orange outline) are the only tilted shapes.

## Components

### Buttons
- **Shape:** square, 2px ink border plus a 2px orange outline offset 4px (0px radius).
- **Primary (approval stamp):** orange fill, paper text, Big Shoulders 800 uppercase at 2rem; padding 18px 20px 20px; rotated -1.5deg. The one call to action on the page.
- **Hover / Focus:** straightens, rises 2px, shadow deepens, 0.25s on `cubic-bezier(.16,1,.3,1)`. Global focus ring is 3px orange outline, 3px offset. Transition is removed under reduced motion.

### Title Block
Four ruled cells across the top of the sheet: the name cell (display type) and three field cells, each a Label over a 1.35rem condensed value.

### Lámina (program item)
- **Style:** a two-column row, 72px numeral column plus text; numeral in Big Shoulders 800 at 3rem colored by group (ink, orange, teal), title in condensed uppercase 1.5rem, one 46ch sentence in soft ink; 1px hairline below.
- **State:** hover fills paper-deep; items tied to the drawing (`data-plano`) are focusable and dim all other plan features to 25% while theirs stays full.

### Group Header
Full-width ink bar, paper label text at 0.875rem, with a 28x8px swatch of the group color outlined in paper.

### Plan Drawing (signature)
Inline SVG on an 800x520 grid pattern: octagonal wall in orange with dashes, railway as teal line with paper dashes and ringed stations, dashed ink outline for territories, capital as a square with four windows and a ringed dot, x-marks for scattered points. The wall and railway draw in via pathLength dash animation (1.6s and 2s with 0.9s delay). A legend of 56x18 line swatches sits beside it as the index.

### Revision Table
Condensed table in ink rules: paper-deep header row with Label type, one row per revision letter. Followed by the orange "Falso" rubber-stamp mark and optional framed evidence figures with condensed captions on a paper-deep well.

### Signature Box
Stack of ruled cells, each a Label over a 1.5rem condensed value on a dashed ink underline, 104px minimum height.

## Do's and Don'ts

### Do:
- **Do** divide space with ink rules (2px for bands, 1px for cells) instead of gaps, shadows or cards.
- **Do** draw new features in the plan at 45 or 90 degrees, in ink unless they are a wall (orange) or a railway (teal).
- **Do** set titles, numerals and field names in condensed uppercase; set sentences in Barlow.
- **Do** keep orange text at 1.6rem or larger, or as line and fill only.
- **Do** keep body copy at or under 62ch.
- **Do** run decorative motion through `prefers-reduced-motion` handling.

### Don't:
- **Don't** add border radius, gradients for decoration, or blur.
- **Don't** introduce a third signal color without a new kind of plan feature to carry it.
- **Don't** raise anything other than the approval stamp.
- **Don't** convert láminas into cards, a hero with tagline and CTA row, or an icon grid.
- **Don't** hard-code new hex values in SVG; add or reuse a named color.
