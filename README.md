# Harsh - Professional Portfolio Website

A modern, fully responsive, and animated personal portfolio website built with pure HTML, CSS, and JavaScript. Showcasing skills, projects, and professional experience with a beautiful, recruiter-ready design.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [How to Use](#how-to-use)
- [Customization](#customization)
- [GitHub Workflow](#github-workflow)
- [Technologies Used](#technologies-used)
- [Browser Support](#browser-support)

---

## ✨ Features

### Design & User Experience
- **Modern Gradient Design**: Professional gradient color schemes with glassmorphism effects
- **Fully Responsive**: Works flawlessly on mobile, tablet, and desktop devices
- **Smooth Animations**: CSS animations + JavaScript Intersection Observer for scroll reveals
- **Dark Mode Toggle**: Easy switch between light and dark themes with localStorage persistence
- **Professional Typography**: Custom Google Fonts (Poppins, Playfair Display)
- **Interactive Elements**: Hover effects, button ripple animations, and smooth transitions
- **Accessible**: ARIA labels and semantic HTML for better accessibility

### Interactive Features
- **Typed Text Animation**: Dynamic typing effect in hero section
- **Animated Particles**: Floating background particles for visual depth
- **Animated Skill Progress Bars**: Progress bars animate on scroll reveal
- **Project Modal**: Click projects to view detailed information
- **Smooth Scroll Navigation**: Jump to sections with smooth scrolling
- **Contact Form**: Fully functional form with validation
- **Mobile Menu**: Hamburger menu for mobile navigation
- **Scroll-to-Top Button**: Quick return to top of page

### Sections Included
1. **Hero Section**: Eye-catching introduction with typing animation
2. **About Me**: Personal background and soft skills showcase
3. **Skills Section**: 8+ technical skills with animated progress bars
4. **Projects Showcase**: 4 featured projects with hover effects and modal preview
5. **Experience Timeline**: Interactive timeline of learning journey
6. **Contact Section**: Contact info cards and working contact form
7. **Footer**: Links, social media, and copyright information

---

## 📁 Project Structure

```
harsh-portfolio/
├── index.html              # Main HTML file
├── css/
│   ├── style.css          # Main stylesheet with animations
│   └── responsive.css      # Responsive design breakpoints (optional)
├── js/
│   └── script.js          # Interactive JavaScript features
├── assets/
│   ├── resume.pdf         # Resume file (optional)
│   └── images/            # Project and profile images
└── README.md              # This file
```

---

## 🚀 Installation & Setup

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Git (for version control)
- A code editor (VS Code recommended)

### Local Setup

1. **Clone or Download the Repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/harsh-portfolio.git
   cd harsh-portfolio
   ```

2. **Open in Browser**
   - Double-click `index.html` OR
   - Right-click → Open with → Browser OR
   - Use VS Code Live Server extension

3. **View in Browser**
   - Open `http://localhost:5500` (if using Live Server)
   - Or simply open the HTML file directly

---

## 💻 How to Use

### Viewing the Portfolio
1. Open `index.html` in your web browser
2. Navigate through sections using the navbar
3. Hover over projects to see details
4. Click projects to open modal with more information
5. Toggle dark mode using the moon icon in navbar
6. Fill contact form to send email (opens email client)
7. Download resume by clicking the resume button

### Mobile Usage
1. Site is fully responsive on all screen sizes
2. Hamburger menu appears on screens < 768px
3. Touch-friendly buttons and links
4. All features work on mobile devices

---

## 🎨 Customization Guide

### Update Personal Information

**File: `index.html`**

```html
<!-- Hero Section -->
<h1 class="hero-title">Hi, I'm <span class="gradient-text">YOUR_NAME</span></h1>

<!-- About Section -->
<p class="about-intro">I'm YOUR_NAME, a BCA student...</p>

<!-- Contact Section -->
<p><a href="mailto:YOUR_EMAIL@gmail.com">YOUR_EMAIL@gmail.com</a></p>
<p><a href="tel:+919XXXXXXXXXX">+91 9XXXXXXXXXX</a></p>
```

### Update Skills

Add/Remove skill cards in the Skills section:
```html
<div class="skill-card">
    <div class="skill-icon"><i class="fab fa-icon-name"></i></div>
    <h3 class="skill-name">Skill Name</h3>
    <div class="skill-progress">
        <div class="progress-bar" style="width: 85%"></div>
    </div>
    <p class="skill-level">85%</p>
</div>
```

### Update Projects

Modify project cards in Projects section:
```html
<div class="project-card">
    <div class="project-image">
        <img src="your-image-url" alt="Project Name">
        <div class="project-overlay">
            <button class="btn-view" onclick="openProjectModal(this)">
                <i class="fas fa-eye"></i> View Details
            </button>
        </div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Project Name</h3>
        <p class="project-desc">Description...</p>
        <div class="project-tags">
            <span class="tag">Technology</span>
        </div>
    </div>
</div>
```

### Change Color Scheme

**File: `css/style.css`**

Modify the CSS variables:
```css
:root {
    --primary-color: #6c5ce7;      /* Main color */
    --primary-light: #a29bfe;      /* Light variant */
    --accent-color: #00b894;       /* Accent color */
    --text-dark: #1a1a2e;          /* Text color */
    --bg-light: #ffffff;           /* Background color */
}
```

### Update Social Links

Find the social icons section and update links:
```html
<a href="https://github.com/YOUR_USERNAME" target="_blank" class="social-icon">
    <i class="fab fa-github"></i>
</a>
```

### Add Resume File

1. Place your resume PDF in `assets/` folder
2. Update the download link in HTML:
   ```html
   <a href="assets/your-resume.pdf" class="btn btn-outline" download>
       <i class="fas fa-download"></i> Resume
   </a>
   ```

---

## 📝 GitHub Workflow Guide

### Initial Setup (One Time)

1. **Create GitHub Repository**
   - Go to github.com and create new repository
   - Name it: `harsh-portfolio` or `portfolio`
   - Add description: "My professional portfolio website"
   - Don't add README/gitignore yet

2. **Initialize Git Locally**
   ```bash
   cd harsh-portfolio
   git init
   ```

3. **Add All Files**
   ```bash
   git add .
   ```

4. **Create First Commit**
   ```bash
   git commit -m "Initial portfolio website - HTML CSS JS"
   ```

5. **Add Remote Repository**
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/harsh-portfolio.git
   ```

6. **Push to GitHub**
   ```bash
   git push -u origin main
   ```

### Regular Updates

#### After Making Changes:

1. **Check Status**
   ```bash
   git status
   ```

2. **Add Changes**
   ```bash
   git add .
   ```

3. **Commit Changes**
   ```bash
   git commit -m "Updated portfolio - [describe changes]"
   ```

   Examples:
   - `git commit -m "Added new project - Calculator App"`
   - `git commit -m "Updated skills section"`
   - `git commit -m "Improved mobile responsiveness"`
   - `git commit -m "Fixed dark mode toggle"`

4. **Push to GitHub**
   ```bash
   git push
   ```

### Sample Commit Messages
```
- "Added new project card - E-commerce Store"
- "Updated About section with achievements"
- "Improved mobile navigation"
- "Fixed dark mode styling"
- "Added resume PDF"
- "Enhanced animations performance"
- "Updated social links and contact info"
```

### Deploy to GitHub Pages (Optional)

1. Go to repository Settings
2. Scroll to "GitHub Pages"
3. Select branch: `main`
4. Select folder: `/(root)`
5. Click Save
6. Your site will be live at: `https://YOUR_USERNAME.github.io/harsh-portfolio`

---

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Semantic markup and accessibility
- **CSS3**: Modern styling with variables, grid, flexbox
- **JavaScript (Vanilla)**: No frameworks, pure JS for interactivity

### Libraries & Resources
- **Font Awesome**: Icon library (6.4.0)
- **Google Fonts**: Poppins & Playfair Display
- **Intersection Observer API**: For scroll animations

### Key Features
- Pure CSS animations (no external animation libraries)
- Vanilla JavaScript (no jQuery or frameworks)
- Responsive design (Mobile-first approach)
- Local storage for theme persistence

---

## 📱 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome  | Latest  | ✅ Full |
| Firefox | Latest  | ✅ Full |
| Safari  | Latest  | ✅ Full |
| Edge    | Latest  | ✅ Full |
| IE 11   | -       | ❌ Not Supported |

---

## 🎯 Best Practices Implemented

### Performance
- Optimized CSS and minimal JavaScript
- Lazy loading for images (optional)
- Efficient animation using CSS transforms
- No external frameworks for faster loading

### Accessibility
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast text for readability
- Form validation and error messages

### SEO
- Proper meta tags in HTML head
- Semantic heading structure
- Image alt text
- Structured content

### Security
- No external API calls
- Client-side form handling
- Safe link opening with target="_blank"

---

## 🚧 Future Enhancements

Consider adding:
- Blog section with articles
- Client testimonials carousel
- Skills filter for projects
- Download PDF resume automatically
- Multi-language support
- Backend for form submission
- Analytics integration
- More interactive games/demos

---

## 📧 Contact & Support

- **Email**: harshjangra021@gmail.com
- **Phone**: +91 9050293435
- **Location**: Jhajjar, Haryana, India
- **GitHub**: [Your GitHub Profile]
- **LinkedIn**: [Your LinkedIn Profile]

---

## 📄 License

This project is open source and available under the MIT License.

---

## ✅ Checklist Before Deployment

- [ ] Update all personal information
- [ ] Add your projects with images
- [ ] Test on mobile devices
- [ ] Test dark mode toggle
- [ ] Check all social links
- [ ] Verify contact form works
- [ ] Test on different browsers
- [ ] Check loading speed
- [ ] Optimize images
- [ ] Push to GitHub
- [ ] Enable GitHub Pages

---

## 🎓 Learning Resources

Learn more about web development:
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)
- [Web.dev](https://web.dev/)

---

## 🌟 Show Your Support

If you found this portfolio template helpful:
- ⭐ Star the repository
- 🍴 Fork and customize for yourself
- 📢 Share with your network
- 💬 Provide feedback and suggestions

---

Made with ❤️ by Harsh | BCA Student at Jagannath University

## 🛠️ Technology Stack

### Frontend
- **HTML5**: Semantic markup, BEM naming convention, accessibility attributes
- **CSS3**: CSS Variables, Flexbox/Grid layouts, advanced animations
- **JavaScript (Vanilla)**: ES6+, no dependencies, Intersection Observer API

### Libraries & Resources
- **Font Awesome**: Icon library (6.4.0)
- **Google Fonts**: Poppins & Playfair Display
- **Typed.js**: Typewriter effect animation

### Key Features
- Pure CSS animations (no external animation libraries)
- Vanilla JavaScript (no jQuery or frameworks)
- Responsive design (Mobile-first approach)
- Local storage support for theme persistence

## 🎬 Animations & Effects

### CSS Animations
- **slideInLeft/Right**: Hero section entrance
- **fadeInUp**: Sections reveal on scroll
- **progressBar**: Skill bars animate to percentage
- **rotate**: Gradient circle background effect
- **bounce**: Scroll indicator animation
- **float**: Floating particle effects

### Interactive Effects
- Hover lift on cards and buttons
- Ripple effect on button clicks
- Smooth scroll between sections
- Modal fade in/out
- Form validation feedback

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Large Phone**: 640px - 767px
- **Small Phone**: 480px - 639px
- **Extra Small**: Below 480px
- **Landscape**: Special handling for landscape orientation



## 🚀 Getting Started

### Installation
1. Clone or download the project
2. Ensure all files are in the correct directories
3. Open `index.html` in a modern web browser

### Browser Support
- Chrome/Edge: Latest versions
- Firefox: Latest versions
- Safari: Latest versions
- Mobile browsers: iOS Safari, Chrome for Android

### No Build Process Required
This is a pure HTML, CSS, and JavaScript project with no build tools needed. Just open and use!

## ⚙️ JavaScript Features

### Core Functionality
- **Smooth Navigation**: Auto-scroll to sections with header offset
- **Form Validation**: Real-time validation with visual feedback
- **Typing Animation**: Dynamic typing effect using Typed.js
- **Theme Toggle**: Dark mode with localStorage persistence
- **Scroll Animations**: Elements reveal on scroll using CSS
- **Modal System**: Project details modal with smooth animations
- **Mobile Menu**: Hamburger menu for responsive navigation
- **Scroll to Top**: Smooth scroll button appears on page scroll

## 🎨 Customization

### CSS Variables (in style.css)
```css
:root {
    /* Primary Colors */
    --primary-color: #6c5ce7;
    --primary-dark: #5f3dc4;
    --accent-color: #00b894;
    
    /* Spacing */
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem;
    --spacing-lg: 2rem;
    --spacing-xl: 3rem;
    
    /* Transitions */
    --transition-fast: 0.2s ease;
    --transition-base: 0.3s ease;
    --transition-slow: 0.5s ease;
}
```

## 📊 Performance Optimization

- **CSS**: Minified and optimized
- **JavaScript**: Vanilla (no dependencies)
- **Images**: Lazy loading support
- **Animations**: GPU-accelerated transforms
- **Throttling**: Event handler optimization
- **Debouncing**: Scroll and resize handlers

## ♿ Accessibility Features

- ARIA labels on interactive elements
- Semantic HTML structure
- Keyboard navigation support
- Focus visible states
- Color contrast compliance
- Screen reader optimization
- Reduced motion support

## 🔒 Security

- No external dependencies
- No tracking or analytics
- Client-side only (no server needed)
- Form submission can be easily integrated with backend
- No sensitive data stored

## 📈 SEO Optimization

- Semantic HTML structure
- Meta tags for social sharing
- Open Graph tags ready
- Schema.org structured data ready
- Mobile-friendly design
- Fast loading times

## 🐛 Troubleshooting

### Animations not working?
- Check browser support (use modern browser)
- Verify CSS files are loaded
- Check browser DevTools console for errors

### Scroll effects not triggering?
- Ensure scroll.js is loaded
- Check if elements have correct data attributes
- Verify JavaScript is enabled

### Mobile menu not opening?
- Mobile menu toggle is prepared for future implementation
- Currently uses responsive nav that reflows on smaller screens

## 🔄 Future Enhancements

- [ ] Mobile menu toggle button
- [ ] Dark/Light theme switcher
- [ ] Blog section
- [ ] Project filtering
- [ ] Contact form backend integration
- [ ] Newsletter signup
- [ ] Social media integration
- [ ] Multi-language support

## 📝 Customization

### Change Colors
Edit CSS variables in `style.css` `:root` section

### Add New Sections
1. Add HTML section with unique ID
2. Add link to navigation
3. Add matching CSS styling
4. Add scroll animations if desired

### Modify Animations
- Adjust timing: Change duration in keyframes
- Change effects: Modify transform properties
- Add new: Create new @keyframes rule

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Harsh Jangra**
- Frontend Developer
- Focus on modern, responsive design
- Building user-friendly web applications

## 📞 Contact

- Email: harshjangra021@gmail.com
- Phone: +91 90502 93435
- Location: Jhajjar, Haryana, India

## 🙏 Credits

- Google Fonts for typography
- Font Awesome for icons
- Typed.js for typewriter effect

---

Made with ❤️ for modern web experiences
