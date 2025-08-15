Alright — you want your **CourseCatalyst README** in a clean, well-formatted **GitHub README.md** style, so it looks like those polished profile READMEs but with all your project details.

Here’s the **full code block** version you can literally copy-paste into `README.md` in your repo:

````markdown
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
✅ **Ocean Theme** – Animated SVG waves + tsParticles bubbles  
✅ **Responsive Design** – Mobile-first with hamburger nav  
✅ **Dark Mode** – Auto-detect + toggle with persistence  
✅ **Accessible** – WCAG AA, screen reader & keyboard support  
✅ **Dynamic Course Pages** – URL-based loading  
✅ **Contact Form** – EmailJS integration with validation  
✅ **Optimized** – Lazy loading, reduced motion, mobile-friendly  
✅ **SEO Ready** – Semantic HTML, meta tags, best practices  

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
````

---

## 📧 EmailJS Setup

Easily enable contact form submissions without a backend.

1. **Sign up** at [EmailJS](https://www.emailjs.com/) & verify your email
2. **Create an Email Service** → Get your `SERVICE_ID`
3. **Create a Template** with variables:

   ```text
   From: {{from_name}} <{{from_email}}>
   Subject: {{subject}}
   Message: {{message}}
   ```
4. **Get your User ID** from Account > API Keys
5. **Update `main.js`**:

   ```javascript
   const EMAILJS_USER_ID = 'your_user_id_here';
   const EMAILJS_SERVICE_ID = 'your_service_id_here';
   const EMAILJS_TEMPLATE_ID = 'your_template_id_here';
   ```
6. Test the form on the `/contact.html` page

---

## 📚 Course Data

Courses are stored in `main.js`:

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

To add a new course:

1. Add the thumbnail image in `assets/`
2. Add the course data to `courses` in `main.js`
3. (Optional) Add notes to `assets/notes/`

---

## 🌍 Deployment

### **GitHub Pages**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/eswarsaikiran15/coursecatalyst.git
git push -u origin main
```

* Go to **Settings > Pages**
* Set **Source** to `main` branch, root folder
* Access your site at:
  `https://eswarsaikiran15.github.io/coursecatalyst`

### **Netlify**

* Drag and drop the project folder into [Netlify](https://app.netlify.com/)
* Or link your GitHub repo for auto-deployments

### **Vercel**

```bash
npm i -g vercel
vercel
```

---

## ♿ Accessibility

* **WCAG AA Compliant**
* Semantic HTML, proper headings, alt text
* High color contrast
* Keyboard navigation & focus indicators
* Respects `prefers-reduced-motion`

---

## ⚡ Performance

* Lazy loading images
* Reduced animations on mobile & slow connections
* Minimal external dependencies
* Optimized CSS selectors & compressed images

---

## 🎨 Customization

### Change Theme Colors

Edit in `style.css`:

```css
:root {
  --color-primary: #0066cc;
  --color-secondary: #00a8cc;
  --color-ocean-1: #001f3f;
}
```

---

## 🤝 Contributing

1. Fork the repo
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m "Add feature"`
4. Push branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

**CourseCatalyst** – Learn smarter, build faster 🚀

```

---

If you want, I can also **add screenshot/GIF placeholders** at the top so your GitHub page instantly pops visually.  
Do you want me to include those preview image sections? That’ll make it *really* look like a portfolio project.
```
