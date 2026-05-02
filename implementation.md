## 1. Project Overview

**Goal:** Create a 100% exact, pixel-perfect replica of the live portfolio website located at **`https://rhythmdoshi.xyz/`**.
**Crucial Constraint:** DO NOT reference any GitHub repositories or invent any design elements. The live website is the absolute and only source of truth.
**Key Requirements:**

1. Exact same UI/UX, layouts, and scroll animations as the live site.
2. **High Priority:** The Light/Dark mode toggle must be a 1:1 exact replica of the live site. The animation, the icon transition, the button shape, and the global color palette swap must be flawlessly executed.
3. Built completely in React (Vite) + Tailwind CSS.
4. **Data Handling:** Hardcode all of Rhythm Doshi's original text, images, and project details directly into the JSX components. The user will manually update this text to their own later.

## 2. Tech Stack & Dependencies

- **Framework:** React 18 (via Vite)
- **Styling:** Tailwind CSS
- **Icons:** `lucide-react` or `react-icons` (match the exact SVGs used on the live site for the sun/moon toggle)
- **Animations:** `framer-motion` (CRITICAL for replicating the smooth theme toggle and scroll reveals)

## 3. Directory Structure

```text
src/
├── assets/             # Placeholders for images from the live site
├── components/
│   ├── ui/
│   │   └── ThemeToggle.jsx # The exact dark/light mode button replica
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── context/
│   └── ThemeContext.jsx # Handles Light/Dark mode logic and Tailwind 'dark' class
├── App.jsx
├── index.css           # Global styles, font imports, and custom Tailwind base
└── main.jsx

4. The Theme System & Toggle (Highest Priority)
The user specifically requested this toggle to be perfect.

ThemeContext.jsx: Create a Context that manages a theme state ('light' or 'dark'). It must update the <html class="dark"> element and save the preference to localStorage.
ThemeToggle.jsx:
Inspect the live site's toggle at https://rhythmdoshi.xyz/.
Replicate the exact shape, background color, padding, and positioning.
Use framer-motion to replicate the exact animation when switching between the Sun and Moon icons (e.g., rotation, spring physics, or fade/slide).
Ensure the background transition of the entire website is smooth (add transition-colors duration-300 to the main App wrapper).

5. Component-by-Component Execution Steps

Step 1: Initialization & Global Styles
Initialize Vite + React + Tailwind.
Import the exact Google Fonts used on the live site.
Set up the precise background colors and text colors for both Light and Dark modes in tailwind.config.js by extracting the hex codes from the live site.

Step 2: Navbar & Theme Toggle
Build the Navbar. Match the exact height, blur effect (backdrop-filter), and layout.
Hardcode the logo/name text.
Integrate the ThemeToggle component built in the previous phase.

Step 3: Hero Section
Replicate the Hero layout.
Hardcode the greeting, name ("Rhythm Doshi"), and exact descriptions.
Match the exact styling, border-radius, and hover states of the Call-to-Action buttons.

Step 4: About & Skills Sections
Replicate the layout for the About section. Hardcode the exact paragraphs.
For Skills, replicate the exact grid, icons, and hover effects (scale, shadow, or border changes) from the live site.

Step 5: Projects Section
Build the Project cards. Hardcode Rhythm's exact project titles, tags, and descriptions.
Match the exact card layout, including how images are displayed, the border colors, and the dark mode inversion of the cards.

Step 6: Contact & Footer
Replicate the Contact area exactly as it appears on the live URL. Hardcode the email and links.
Replicate the Footer layout and copyright text.

6. AI Agent Instructions
When executing this plan:

Analyze the Live URL: If you have web browsing capabilities, visit https://rhythmdoshi.xyz/ and scrape the DOM, CSS, and animations. If you cannot browse, ask the user to provide screenshots of the specific sections and the toggle button.
No Inventing: Do not use your own default Tailwind designs. Every margin, padding, text size, and color must attempt to perfectly mimic the live website.
Toggle Focus: Spend extra time on ThemeToggle.jsx. Make sure the transition between dark and light mode is buttery smooth using framer-motion and Tailwind transition utility classes.
```
