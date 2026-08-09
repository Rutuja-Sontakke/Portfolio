# 🌟 Rutuja Sontakke - Portfolio Website

[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge)](https://portfolio-one-gamma-mcr17ls3up.vercel.app/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.x-FF0055?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com/)

> **A modern, interactive portfolio website showcasing full-stack development expertise with stunning 3D animations and elegant design.**

---

## ✨ Features

### 🎨 **Design & Aesthetics**
- ✅ **Warm Elegant Color Palette** - Cream, gold, and rose gold tones
- ✅ **Professional Typography** - Playfair Display (headings) + Inter (body)
- ✅ **Glassmorphism Effects** - Modern UI with backdrop blur
- ✅ **Gradient Accents** - Smooth color transitions throughout
- ✅ **Mobile-First Responsive** - Perfect on all devices (320px - 4K)

### 🎬 **Advanced 3D Animations**
- ✅ **Mouse-Tracking 3D Parallax** - Interactive depth-based movements
- ✅ **3D Photo Frame** - Multi-layered rotating rings with depth
- ✅ **Floating Geometric Elements** - Cubes, spheres, and particles in 3D space
- ✅ **Smooth Spring Animations** - Physics-based natural movements
- ✅ **GPU-Accelerated Transforms** - Optimized 60fps performance
- ✅ **Scroll-Triggered Animations** - Elements fade and slide on viewport entry
- ✅ **3D Button Effects** - Depth shadows with lift animations

### 🚀 **Interactive Components**
- ✅ **Typing Animation** - Dynamic role display
- ✅ **Animated Skill Bars** - Progress indicators with smooth fill
- ✅ **Project Cards** - 3D tilt effect on hover with overlays
- ✅ **Timeline Design** - Vertical experience timeline
- ✅ **Contact Form** - EmailJS integration with validation
- ✅ **Smooth Scroll** - Seamless navigation between sections
- ✅ **Back-to-Top Button** - Floating action with smooth scroll

### 📱 **Sections**
1. **Hero** - 3D animated profile photo, typing effect, CTA buttons
2. **About** - Professional summary with animated stats counter
3. **Skills** - Categorized tech stack with progress bars
4. **Experience** - Timeline layout with job details
5. **Projects** - Featured work with tech stack badges
6. **Services** - Freelance offerings in card grid
7. **Contact** - Form with EmailJS integration
8. **Footer** - Social links and copyright

---

## 🛠️ Tech Stack

### **Frontend**
- **React 18.2+** - Component-based UI
- **Vite 5.x** - Build tool
- **Tailwind CSS 3.x** - Utility-first styling
- **Framer Motion 10.x** - Animation library
- **React Type Animation** - Typing effects
- **React Icons** - Icon library
- **EmailJS** - Contact form backend

### **Deployment**
- **Vercel** - Hosting platform

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── images/
│   │   ├── Rutuja-Pic.png
│   │   └── projects/
│   └── resume.pdf
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx              # 3D animated hero ⭐
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── projects.js
│   │   ├── skills.js
│   │   ├── experience.js
│   │   └── services.js
│   ├── animations/
│   │   └── variants.js
│   ├── App.jsx
│   └── main.jsx
├── .env
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🎨 Key Animation Features

### **3D Mouse Tracking**
- Photo and elements tilt based on mouse position
- Smooth spring physics for natural movement
- Perspective-based 3D space (1500px)

### **Multi-Layer Depth Effects**
- Profile photo with 3D rotating rings
- Floating decorative elements at different Z-depths
- Layered glow effects with blur

### **Scroll Animations**
- Fade-in from bottom on viewport entry
- Staggered animations for lists/grids
- Parallax background elements

### **Interactive Hover States**
- 3D tilt on project cards
- Lift effect with shadow on buttons
- Scale and glow transitions

---

## ⚡ Performance

- **Lighthouse Scores:** 95+ Performance, 100 Accessibility, 100 Best Practices, 100 SEO
- **GPU-Accelerated:** All animations use `transform3d`
- **Lazy Loading:** Images load on viewport entry
- **Code Splitting:** Components load on demand
- **Optimized Bundle:** Minified and compressed production build

---

## 📱 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 90+ | ✅ Full |
| Firefox | 88+ | ✅ Full |
| Safari | 14+ | ✅ Full |
| Edge | 90+ | ✅ Full |
| Mobile Safari | iOS 14+ | ✅ Full |
| Chrome Mobile | Android 90+ | ✅ Full |

---

## 🎯 Customization

### **Update Content**
Edit files in `src/data/`:
- `projects.js` - Your projects
- `skills.js` - Tech stack
- `experience.js` - Work history
- `services.js` - Services offered

### **Change Colors**
Edit `tailwind.config.js`:
```javascript
colors: {
  cream: { /* warm palette */ },
  gold: { DEFAULT: '#D4AF37' },
  rose: { DEFAULT: '#B76E79' },
}
```

### **Modify Animations**
Edit `src/animations/variants.js` for custom animation variants

### **Replace Photo**
Replace `src/assets/images/Rutuja-Pic.png` with your professional photo (min 800x800px)

---

## 📊 Project Stats

![GitHub repo size](https://img.shields.io/github/repo-size/Rutuja-Sontakke/portfolio?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/Rutuja-Sontakke/portfolio?style=flat-square)
![GitHub stars](https://img.shields.io/github/stars/Rutuja-Sontakke/portfolio?style=social)

---

## 👤 Author

**Rutuja Sontakke**  
Full Stack Developer | MERN & PHP Expert

- 🌐 Portfolio: [Live Demo](https://portfolio-rutuja-s-projects2.vercel.app/)
- 💼 LinkedIn: [@rutujas04](https://www.linkedin.com/in/rutujas04/)
- 🐱 GitHub: [@Rutuja-Sontakke](https://github.com/Rutuja-Sontakke)
- 📧 Email: rutujasontakke50@gmail.com
- 📍 Location: Pune, Maharashtra, India

---

## 🙏 Acknowledgments

- **Framer Motion** - Animation library
- **Tailwind CSS** - Styling framework
- **EmailJS** - Contact form service
- **Vercel** - Deployment platform
- **React Icons** - Icon library

---

## 📄 License

This project is open source and available under the All rights reserved.(LICENSE).

---

<div align="center">

**Made with ❤️ by Rutuja Sontakke**

*Building the future, one line of code at a time* 🚀

⭐ Star this repo if you find it helpful!

[⬆ Back to Top](#-rutuja-sontakke---portfolio-website)

</div>

---
