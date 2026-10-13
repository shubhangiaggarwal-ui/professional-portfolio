# Shubhangi Aggarwal - Personal Portfolio Website

An elegant, modern, responsive personal portfolio website designed for **Shubhangi Aggarwal**, a first-year **B.Tech Computer Science and Engineering (Core)** student at **JECRC University**.

Built with a refined minimalist aesthetic using **Navy Blue, Off-White, Muted Blue, and Warm Beige**, featuring smooth scrolling, interactive skill filtering, responsive mobile navigation, client-side contact validation, and verified links to GitHub and LinkedIn.

---

## 🎨 Color Palette & Design System

| Element | Color Name | Hex Code | Purpose |
| :--- | :--- | :--- | :--- |
| **Primary Navy** | Deep Navy Blue | `#0B192C` | Hero text, header branding, primary buttons |
| **Navy Surface** | Slate Navy | `#12233B` | Terminal window headers, dark footer |
| **Background** | Soft Off-White | `#F9FAFB` | Primary page canvas |
| **Secondary Accent** | Muted Blue | `#486581` | Subtitles, icon fills, meta text |
| **Warm Accent** | Sand / Beige | `#E8DFD8` | Highlight bars, pill badges, card borders |
| **Light Beige** | Sand Tint | `#F5EFE9` | Button hover states, category pill fills |

- **Typography**: Google Fonts pairing with `Plus Jakarta Sans` for modern headings and `Inter` for clean, readable body copy.
- **Architecture**: 100% pure vanilla HTML5, CSS3, and ES6+ JavaScript with zero dependencies or build steps.

---

## 📁 Project Structure

```
shubhangi-portfolio/
├── index.html          # Semantic HTML5 markup (Home, About, Education, Skills, Projects, Certs, Contact)
├── css/
│   └── styles.css      # Design tokens, responsive grid/flexbox, animations, media queries
├── js/
│   └── main.js         # Mobile drawer toggle, scroll spy, skill filters, copy-email, form validation
└── README.md           # Documentation & update guide
```

---

## 🚀 Quick Start / How to Run Locally

Because this project requires no Node.js or build steps, you can run it immediately:

### Option 1: Direct File Launch
Double-click `index.html` to open it in any web browser (Chrome, Edge, Safari, Firefox).

### Option 2: VS Code Live Server (Recommended)
1. Open the folder `shubhangi-portfolio` in Visual Studio Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and click **"Open with Live Server"**.
4. The site will open at `http://127.0.0.1:5500/` with live reloading on every edit.

---

## ✏️ How to Update as You Gain Experience Throughout College

Every section in `index.html` is modular and commented for effortless updates:

### 1. Adding a New Project
In `index.html`, locate the `<section id="projects">` section and duplicate an `<article class="project-card">` block:
```html
<article class="project-card">
  <div class="project-card-header">
    <div class="project-type-tag">Full-Stack / Python</div>
    <div class="project-actions">
      <a href="https://github.com/shubhangiaggarwal-ui/new-repo" target="_blank" class="project-link-btn" title="GitHub Repo">...</a>
    </div>
  </div>
  <div class="project-card-body">
    <h3 class="project-title">Your Project Name</h3>
    <p class="project-description">Detailed 2-line summary of what the project solves.</p>
    <div class="project-tech-stack">
      <span class="tech-tag">React</span>
      <span class="tech-tag">Node.js</span>
    </div>
  </div>
</article>
```

### 2. Updating Semester Grades & Coursework
In `index.html`, locate `<section id="education">`. You can add your SGPA/CGPA or add advanced subjects (e.g., *Operating Systems, DBMS, Design & Analysis of Algorithms*) directly inside `<div class="course-tags">`.

### 3. Adding New Skills & Categories
In `index.html`, locate `<section id="skills">`. Each card has a `data-category` attribute (`languages`, `web`, `tools`, `core`). Adding a new skill with the corresponding category automatically connects it to the interactive filter buttons at the top of the section!

### 4. Adding Certifications or Hackathon Wins
In `index.html`, locate `<section id="certifications">` and add a `<div class="cert-card">` card with the title, issuing organization, year, and tags.

---

## 🌐 Free Deployment to GitHub Pages

Since your GitHub account is already connected ([shubhangiaggarwal-ui](https://github.com/shubhangiaggarwal-ui)), you can host this live for free in 3 minutes:

1. Create a new public repository on GitHub named `shubhangiaggarwal-ui.github.io` (or `portfolio`).
2. Open a terminal inside the `shubhangi-portfolio` folder and run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Shubhangi Aggarwal personal portfolio website"
   git branch -M main
   git remote add origin https://github.com/shubhangiaggarwal-ui/shubhangiaggarwal-ui.github.io.git
   git push -u origin main
   ```
3. Go to **Settings** > **Pages** in your repository.
4. Set Source to `Deploy from a branch`, choose branch `main` and folder `/ (root)`, then click **Save**.
5. Your portfolio will be live at `https://shubhangiaggarwal-ui.github.io/`!

---

## 🔗 Connected Profiles
- **GitHub**: [github.com/shubhangiaggarwal-ui](https://github.com/shubhangiaggarwal-ui)
- **LinkedIn**: [linkedin.com/in/shubhangi-aggarwal-134b50418](https://www.linkedin.com/in/shubhangi-aggarwal-134b50418?utm_source=share_via&utm_content=profile&utm_medium=member_android)
