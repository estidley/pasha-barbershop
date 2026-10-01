---
name: Pasha Barbershop
description: A black and gold shopfront with a large serif name and precise linework.
colors:
  ink: "#0b0b0b"
  gold: "#d7b869"
  paper: "#f7efe4"
  muted: "#cabfab"
  line: "#8b7847"
  gold-hover: "#ead18f"
  black-hover: "#29251b"
typography:
  display:
    fontFamily: "Ibarra Real Nova, Georgia, serif"
    fontSize: "clamp(100px, 19.55vw, 352px)"
    fontWeight: 700
    lineHeight: 0.83
    letterSpacing: "0.045em"
  headline:
    fontFamily: "Ibarra Real Nova, Georgia, serif"
    fontSize: "clamp(44px, 4.5vw, 72px)"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "Ibarra Real Nova, Georgia, serif"
    fontSize: "clamp(26px, 2.35vw, 38px)"
    fontWeight: 400
    lineHeight: 1.25
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
  button:
    fontFamily: "Ibarra Real Nova, Georgia, serif"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.2
spacing:
  gutter: "clamp(20px, 3.9vw, 72px)"
  small: "12px"
  medium: "24px"
components:
  button-gold:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    padding: "9px 30px"
  button-gold-hover:
    backgroundColor: "{colors.gold-hover}"
    textColor: "{colors.ink}"
  button-black:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.gold}"
    typography: "{typography.button}"
    padding: "9px 30px"
  button-black-hover:
    backgroundColor: "{colors.black-hover}"
    textColor: "{colors.paper}"
  service-row:
    textColor: "{colors.paper}"
    typography: "{typography.title}"
    padding: "10px 0"
---

# Design System: Pasha Barbershop

## Overview

**Creative North Star: "The Pasha Shopfront"**

The approved world puts the shop's name in large Roman serif letters against near-black. Matte gold fills the welcome band and marks the controls, rules, and geometric ornament. Warm white keeps the service menu readable.

The page stays compact and direct. Open rows and a pointed arch give services and contact details their own shapes without turning them into cards. This records the implemented world selected in mockup D; the page-specific composition remains in `.impeccable/surfaces/index-html.md`.

**Key Characteristics:**

- Large serif lettering with plain sans-serif supporting text.
- Black and matte gold fields with warm white text.
- Thin rules, a small angular knot, and a double pointed arch.
- Open service rows and square booking controls.

## Colors

Gold supplies both the strongest field and the finest linework.

### Primary

- **Gold:** the shop name, welcome band, booking control, arch, and emphasized rules.
- **Gold hover:** the lighter state of the gold booking control.
- **Line:** the quieter brass tone for service separators and the footer rule.

### Neutral

- **Ink:** the main background and booking control within the gold band.
- **Paper:** readable text on dark surfaces.
- **Muted:** package descriptions, price notes, and secondary links.
- **Black hover:** the warmer dark state of the black booking control.

**The Gold Field Rule.** Gold can occupy a full band; do not reduce it to a tiny accent throughout this world.

## Typography

Ibarra Real Nova, with Georgia and serif fallbacks, carries the name, headings, service rows, desktop navigation, and booking buttons. Manrope, with a sans-serif fallback, carries supporting copy, addresses, and disclosures. Both families are self-hosted with `font-display: swap`; the serif has regular and bold files, and Manrope has regular, medium, and semibold files.

The frontmatter records the core roles, not a modular scale. The welcome heading has its own fluid scale (`clamp(36px, 5.6vw, 94px)`) and tight leading (1.08). The visit heading is smaller (48px). The masthead's uppercase wordmark and spaced shop descriptor are identity lettering, not a pattern for introducing every section.

The desktop navigation uses regular serif type (24px). Supporting copy stays in sentence case. Prices use tabular numerals; “from” is subordinate to the price. Package prose is limited to 62ch.

## Layout

The centered shell stops at 1800px and uses the fluid gutter in the frontmatter. Desktop service and visit columns use a 1.64:1 ratio with a 5.8% gap. The gold band places copy and booking side by side; the visit column has a fine vertical gold divider.

At 1150px and below, the columns move to 1.4:1 with a 4% gap, and the band and visit type shrink. At 750px and below, the header becomes 76px tall, a Menu control replaces desktop navigation, and the header booking label shortens to “Book” while retaining its accessible Booksy label. The masthead becomes 21vw with leading of 1, and the knot is hidden. The gold band, services, and visit area stack. The visit divider disappears and the arch centers within a 370px maximum width. Service rows use 28px type with a 65px minimum height; at 360px and below the type becomes 25px.

The mobile band heading wraps, its supporting copy stops at 34ch, and its booking control stays content-width. Footer items stack. Keep these mobile adjustments specific to this world rather than borrowing Fresh Me Up's full-width booking control or hexagon.

## Elevation & Depth

No shadows or gradients are used. Contrast between the black ground and gold band defines the major layers. Thin borders separate information; the double arch frames the address without creating a raised panel.

## Shapes

Controls have square corners. Borders are generally thin (1px), with stronger gold strokes for the arch and knot. The arch is inline SVG; the knot is three rotated outlined squares. Arrow icons and the disclosure plus are inline SVG, not text glyphs.

## Components

**Booking controls.** The base control has a 48px minimum height, serif text, and square edges. The welcome-band version grows to an 84px minimum height and 32px type on desktop, then a 58px minimum height and 24px type on mobile. Gold and black variants invert their surrounding field. Background and text transitions take 0.2s with ease timing.

**Service rows.** Each entire row links to Booksy, pairing a service with a right-aligned price. A quiet brass rule becomes gold on hover; link text also becomes gold. Rows have a 69px desktop minimum height and no filled container. Their color and border transitions take 0.18s.

**More services.** A native `details`/`summary` disclosure holds packages and extras. Its inline SVG plus rotates 45 degrees when open. The summary has a 48px minimum height; definition-list rows align names and prices. Do not replace the disclosure with a scripted imitation.

**Navigation.** The mobile Menu button toggles `aria-expanded` and the hidden navigation, changes its label to Close, closes after a link selection, and closes on Escape while returning focus. Resizing to desktop also closes it.

**Visit arch.** A double pointed SVG outline surrounds the address, phone, and directions. Its desktop frame is at most 400px wide; the current-hours link sits below it. Contact details are text and real links, not part of an image.

All links, buttons, and summaries have a current-color focus outline (3px, offset 6px). Reduced-motion preference disables transitions and smooth scrolling. There are no forms, generic cards, or chips in the current implementation.

## Do's and Don'ts

### Do:

- **Do** keep large serif identity lettering, open service rows, and the pointed arch distinct from Fresh Me Up's hexagonal world.
- **Do** use gold for both broad fields and precise linework.
- **Do** keep booking, contact details, and disclosure controls as accessible HTML.

### Don't:

- **Don't** add a fez, red accents, invented shop photographs, or invented reviews.
- **Don't** replace the square controls and open rows with rounded cards or shadowed panels.
- **Don't** turn the masthead's spaced identity lettering into repeated section eyebrows.
