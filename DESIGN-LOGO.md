# Design System Document: The Precision Editorial

## 1. Overview & Creative North Star: "The Architectural Utility"
This design system moves beyond the generic "utility tool" aesthetic to embrace a **High-End Editorial** philosophy. While the core functionality is unit conversion and data retrieval, the visual delivery is rooted in **The Architectural Utility**. 

The Creative North Star is characterized by:
*   **Intentional Asymmetry:** Breaking the rigid 12-column grid to create focus.
*   **Tonal Authority:** Using depth and layering rather than lines to define space.
*   **Hyper-Legibility:** Leveraging a dramatic contrast between the technical `Inter` and the sophisticated `Manrope`.

The goal is to make the user feel they are interacting with a precision instrument—one that is as beautiful as it is accurate. We avoid the "bootstrap" look by eliminating borders and relying on surface-on-surface nesting.

---

## 2. Colors & Surface Philosophy
The palette is anchored in Professional Blue and Clean White, but it is executed through a sophisticated Material 3-inspired tonal scale.

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders to section content. Boundaries must be defined solely through background color shifts or subtle tonal transitions.
*   *Example:* A `surface-container-low` section sitting on a `surface` background provides all the definition needed.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, physical layers.
*   **Base:** `surface` (#f8f9fa)
*   **The Floor (Sections):** `surface-container-low` (#f3f4f5)
*   **The Object (Cards):** `surface-container-lowest` (#ffffff)
*   **The Highlight (Floating):** `surface-bright` (#f8f9fa)

### The Glass & Gradient Rule
To prevent the UI from feeling "flat" or "cheap," use **Glassmorphism** for floating elements (e.g., navigation bars or tooltips) using semi-transparent `surface` colors with a 20px backdrop-blur. 
*   **Signature Textures:** Apply a subtle linear gradient from `primary` (#005bbf) to `primary_container` (#1a73e8) on primary action buttons and hero backgrounds to provide "visual soul."

---

## 3. Typography: The Dual-Type Strategy
We use a two-font system to balance editorial elegance with functional clarity.

*   **Display & Headlines (Manrope):** This is our "Editorial" voice. `display-lg` through `headline-sm` use Manrope with tighter letter-spacing (-0.02em) to feel authoritative and modern.
*   **Body & Labels (Inter):** This is our "Functional" voice. Inter is used for all conversion inputs, data results, and UI labels. It ensures that complex numbers are readable at any size.

**Key Scales:**
*   **Display-LG (3.5rem / Manrope):** Used for primary conversion hero headers.
*   **Title-MD (1.125rem / Inter):** Used for input labels to ensure maximum clarity.
*   **Label-SM (0.6875rem / Inter):** Used for unit symbols (e.g., "KG", "LBS") in a semi-bold weight.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are largely replaced by **Tonal Layering**.

*   **The Layering Principle:** Depth is achieved by "stacking" surface tiers. Place a `surface-container-lowest` card on a `surface-container-low` background to create a soft, natural lift.
*   **Ambient Shadows:** For floating modals, use an extra-diffused shadow: `box-shadow: 0 10px 40px rgba(25, 28, 29, 0.06)`. The color is a tinted version of `on-surface` to mimic natural light.
*   **The "Ghost Border" Fallback:** If a divider is mandatory for accessibility, use the `outline-variant` token at **15% opacity**. Never use 100% opaque lines.

---

## 5. Components

### Buttons
*   **Primary:** Linear gradient (`primary` to `primary_container`), `xl` (0.75rem) corner radius. Use `on_primary` (#ffffff) for text.
*   **Secondary:** `surface-container-high` background with `primary` text. No border.
*   **States:** On hover, primary buttons should scale 102% with a soft glow using the `surface_tint`.

### Conversion Inputs (Unique Component)
*   **Styling:** Use `surface-container-highest` backgrounds with a subtle `primary` bottom-accent (2px) that activates on focus. 
*   **Typography:** The input text should use `title-lg` (Inter) for high visibility of numerical data.

### Cards & Lists
*   **Forbid Dividers:** Use vertical white space (32px or 48px) to separate list items. 
*   **List Item Hover:** Transition the background to `surface-container-low` on hover to indicate interactivity.

### Chips (Unit Selectors)
*   **Style:** Pill-shaped (`full` roundedness). 
*   **Unselected:** `surface-container-high` background.
*   **Selected:** `primary` background with `on_primary` text.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical layouts (e.g., a left-aligned header with a right-offset conversion card).
*   **Do** utilize `surface-container` tiers to create depth.
*   **Do** use `tertiary` (#9e4300) sparingly for "Warning" or "Complex Info" callouts to break the blue/grey monotony.
*   **Do** ensure all interactive elements have a minimum 48px hit target.

### Don’t:
*   **Don’t** use black (#000000) for text; use `on_surface` (#191c1d) for a softer, premium feel.
*   **Don’t** use 1px borders to separate units or table rows; use alternating tonal backgrounds (zebra striping) with `surface-container-low`.
*   **Don’t** use standard "drop shadows" on every card. Reserve elevation for elements that actually "float" over the content.
*   **Don’t** crowd the interface. If a conversion tool feels cramped, increase the padding using the `xl` (0.75rem) scale as a baseline.