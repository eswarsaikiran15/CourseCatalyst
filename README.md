# 🌊 CourseCatalyst
> **Empowering developers with curated programming courses & resources**  
> Responsive • Accessible • Ocean-themed • Static HTML/CSS/JS

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-netlify-badge/deploy-status)](https://coursecatalystapp.netlify.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
![GitHub Repo stars](https://img.shields.io/github/stars/eswarsaikiran15/coursecatalyst?style=social)

🔗 **Live Demo:** [coursecatalystapp.netlify.app](https://coursecatalystapp.netlify.app/)

---

## 📖 Table of Contents
- [✨ Features](#-features)
- [🚀 Quick Start](#-quick-start)
- [📧 EmailJS Setup](#-emailjs-setup)
- [📚 Course Data](#-course-data)
- [🌍 Deployment](#-deployment)
- [♿ Accessibility](#-accessibility)
- [⚡ Performance](#-performance)
- [🎨 Customization](#-customization)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Features
- 🌊 **Ocean Theme** – Animated SVG waves + tsParticles bubbles  
- 📱 **Responsive Design** – Mobile-first with hamburger nav  
- 🌙 **Dark Mode** – Auto-detect + toggle with persistence  
- ♿ **Accessible** – WCAG AA, screen reader & keyboard support  
- 📂 **Dynamic Course Pages** – URL-based loading  
- ✉ **Contact Form** – EmailJS integration with validation  
- ⚡ **Optimized** – Lazy loading, reduced motion, mobile-friendly  
- 🔍 **SEO Ready** – Semantic HTML, meta tags, best practices  

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/your-username/coursecatalyst.git
cd coursecatalyst

# Serve locally (choose one)
python -m http.server 8000      # Python 3
npx http-server                 # Node.js
# Or use VSCode Live Server extension

# Visit in browser
http://localhost:8000

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/your-username/coursecatalyst.git
cd coursecatalyst

# Serve locally (choose one)
python -m http.server 8000      # Python 3
npx http-server                 # Node.js
# Or use VSCode Live Server extension

# Visit in browser
http://localhost:8000
````

---

## 📧 EmailJS Setup

1. Sign up at [EmailJS](https://www.emailjs.com/) and verify your email
2. Create an Email Service → Get your **SERVICE\_ID**
3. Create a Template with variables:

   ```text
   From: {{from_name}} <{{from_email}}>
   Subject: {{subject}}
   Message: {{message}}
   ```
4. Get your **USER\_ID** from Account → API Keys
5. Update `main.js`:

   ```javascript
   const EMAILJS_USER_ID = 'your_user_id_here';
   const EMAILJS_SERVICE_ID = 'your_service_id_here';
   const EMAILJS_TEMPLATE_ID = 'your_template_id_here';
   ```
6. Test the form on `/contact.html`

---

## 📚 Course Data

```javascript
const courses = {
  "python": {
    id: "python",
    title: "Python Basics",
    short: "Beginner-friendly Python crash course",
    description: "Learn the fundamentals of Python programming...",
    thumbnail: "assets/python-thumb.jpg",
    notes: [{ title: "Notes", url: "assets/notes/python-basics.pdf" }],
    videos: [{ title: "Video Playlist", url: "https://youtube.com/..." }],
    hindiResources: [{ title: "Hindi Tutorial", url: "https://youtube.com/..." }],
    interviewQuestions: "https://drive.google.com/..."
  }
};
```

To add a course:

1. Add thumbnail to `assets/`
2. Add data to `main.js`
3. (Optional) Add notes to `assets/notes/`

---

## 🌍 Deployment

### GitHub Pages

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/eswarsaikiran15/coursecatalyst.git
git push -u origin main
```

* Go to **Settings > Pages**
* Source: `main` branch → root folder
* Access: `https://eswarsaikiran15.github.io/coursecatalyst`

### Netlify

* Drag & drop folder to [Netlify](https://app.netlify.com/)
* Or connect repo for auto deploys

### Vercel

```bash
npm i -g vercel
vercel
```

---

## ♿ Accessibility

* WCAG AA compliant
* Semantic HTML + headings
* Alt text for all images
* Keyboard navigation + focus states
* Respects `prefers-reduced-motion`

---

## ⚡ Performance

* Lazy load images
* Reduce animations on mobile/slow network
* Minimal dependencies
* Optimized assets

---

## 🎨 Customization

Change theme colors in `style.css`:

```css
:root {
  --color-primary: #0066cc;
  --color-secondary: #00a8cc;
  --color-ocean-1: #001f3f;
}
```

---

## 🤝 Contributing

1. Fork repo
2. Create branch: `git checkout -b feature/your-feature`
3. Commit: `git commit -m "Add feature"`
4. Push: `git push origin feature/your-feature`
5. Open PR

---

## 📄 License

Licensed under the [MIT License](LICENSE).

---

**CourseCatalyst** – Learn smarter, build faster 🚀

```

This will now render **perfectly formatted** on GitHub — badges inline, headings clean, lists aligned, and code blocks readable.  

I can also add **a hero banner image and screenshots section** so it visually pops when someone lands on your repo.  
Do you want me to add those? That will make it look more like a portfolio-grade README.
```

