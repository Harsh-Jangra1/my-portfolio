/* ==================== PARTICLES BACKGROUND ==================== */
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const particleCount = window.innerWidth > 768 ? 30 : 15;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        particlesContainer.appendChild(particle);
    }
}

createParticles();

/* ==================== SCROLL REVEAL ANIMATIONS ==================== */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.about, .skills, .projects, .experience, .contact, .footer').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

/* ==================== NAVBAR INTERACTIONS ==================== */
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container') && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

/* ==================== THEME TOGGLE (DARK MODE) ==================== */
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

/* ==================== PROJECT MODAL ==================== */
function openProjectModal(button) {
    const card = button.closest('.project-card');
    const title = card.querySelector('.project-title').textContent;
    const desc = card.querySelector('.project-desc').textContent;
    const image = card.querySelector('.project-image img').src;

    const modal = document.getElementById('projectModal');
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDescription').textContent = desc;
    document.getElementById('modalImage').src = image;
    modal.classList.add('active');
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
}

document.getElementById('projectModal').addEventListener('click', (e) => {
    if (e.target.id === 'projectModal') {
        closeProjectModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});

/* ==================== SCROLL TO TOP BUTTON ==================== */
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/* ==================== CONTACT FORM HANDLING ==================== */
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = {
        name: contactForm.querySelector('input[type="text"]').value,
        email: contactForm.querySelector('input[type="email"]').value,
        subject: contactForm.querySelector('input[placeholder="Subject"]').value,
        message: contactForm.querySelector('textarea').value
    };

    if (!data.name || !data.email || !data.message) {
        alert('Please fill in all required fields!');
        return;
    }

    const mailtoLink = `mailto:harshjangra021@gmail.com?subject=${encodeURIComponent(data.subject || 'New Message')}&body=${encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`)}`;
    window.location.href = mailtoLink;

    contactForm.reset();
});

/* ==================== SKILL PROGRESS ANIMATION ==================== */
const skillProgressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target.querySelector('.progress-bar');
            const width = progressBar.style.width;
            progressBar.style.width = '0';

            setTimeout(() => {
                progressBar.style.transition = 'width 1.5s ease';
                progressBar.style.width = width;
            }, 100);

            skillProgressObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-card').forEach(card => {
    skillProgressObserver.observe(card);
});

/* ==================== SMOOTH SCROLL FOR ANCHOR LINKS ==================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

/* ==================== NAVBAR BACKGROUND ON SCROLL ==================== */
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
});

/* ==================== HANDLE RESUME DOWNLOAD ==================== */

function createResumePDF() {
    const link = document.querySelector('a[download="resume.pdf"]');
    if (!link) return;

    link.addEventListener('click', (e) => {
        const resumeContent = `
HARSH - BCA STUDENT & WEB DEVELOPER
===================================

Contact Information:
Email: harshjangra021@gmail.com
Phone: +91 9050293435
Location: Jhajjar, Haryana, India

OBJECTIVE:
To secure a position as a Web Developer where I can utilize my technical skills 
and passion for creating user-friendly digital experiences.

EDUCATION:
Bachelor of Computer Applications (BCA)
Jagannath University
2024 - Present

TECHNICAL SKILLS:
- HTML5
- CSS3
- JavaScript
- Responsive Design
- UI/UX Design
- Git & GitHub
- WordPress
- Microsoft Office

SOFT SKILLS:
- Problem Solving
- Communication
- Teamwork
- Time Management

PROJECTS:
1. Landing Page - Modern responsive website with animations
2. Todo App - Task management application with local storage
3. Calculator - Functional calculator with beautiful UI
4. Tic Tac Toe Game - Interactive game with AI opponent

EXPERIENCE:
Web Development Learning - Self-Paced (2023-Present)
- 1+ year dedicated learning
- 100% commitment to skill development
- Built 4+ complete projects

KEY ACHIEVEMENTS:
- Completed 1+ year of dedicated web development learning
- Created 4 fully functional web projects
- Mastered HTML, CSS, and JavaScript
- Strong foundation in responsive design

INTERESTS:
Web Development, UI/UX Design, Problem Solving, 
Continuous Learning, Technology Innovation
        `;

        const blob = new Blob([resumeContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Harsh_Resume.txt';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    });
}

createResumePDF();

/* ==================== SCROLL INDICATOR CLICK ==================== */
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

/* ==================== ACTIVE NAV LINK ==================== */
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            const id = section.getAttribute('id');
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`a[href="#${id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
});

/* ==================== FORM VALIDATION ==================== */
const contactInputs = contactForm.querySelectorAll('input, textarea');

contactInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                input.style.borderColor = '#ff6b6b';
            } else {
                input.style.borderColor = '#00b894';
            }
        } else if (input.value.trim() === '') {
            input.style.borderColor = '#ff6b6b';
        } else {
            input.style.borderColor = '#00b894';
        }
    });

    input.addEventListener('focus', () => {
        input.style.borderColor = '#6c5ce7';
    });
});

/* ==================== ADAPTIVE PARTICLES ==================== */
window.addEventListener('resize', () => {
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer && particlesContainer.children.length === 0) {
        createParticles();
    }
});

/* ==================== PERFORMANCE OPTIMIZATION ==================== */

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

/* ==================== ACCESSIBILITY ==================== */

document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});
