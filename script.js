// ==================== Global Variables ====================
let currentLang = 'en';

// ==================== Typing Effect ====================
let typingText;
let textArray = [
    'Full Stack Web Developer (Laravel)',
    'web Developer',
    'Web Application Developer'
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    if (!typingText) return; // Safety check
    
    const currentText = textArray[textIndex];
    
    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 50 : 100);
    }
}

// ==================== Navigation ====================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const navbarHeight = navbar.offsetHeight;
        if (window.pageYOffset >= sectionTop - navbarHeight - 50) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ==================== Smooth Scrolling ====================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            // Get scroll-padding-top value from CSS
            const scrollPadding = parseInt(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
            const targetPosition = targetSection.offsetTop - scrollPadding;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== Scroll Animations ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 1s ease-out forwards';
            
            // Animate skill bars
            if (entry.target.classList.contains('skill-card')) {
                const progressBar = entry.target.querySelector('.skill-progress');
                const progress = progressBar.getAttribute('data-progress');
                setTimeout(() => {
                    progressBar.style.width = progress + '%';
                }, 200);
            }
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.skill-card, .project-card, .contact-card, .about-text, .about-image').forEach(el => {
    observer.observe(el);
});

// ==================== Scroll to Top Button ====================
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== Contact Form ====================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (name && email && subject && message) {
            // Show success message
            alert('Terima kasih! Pesan Anda telah dikirim. Saya akan segera menghubungi Anda.');
            
            // Reset form
            contactForm.reset();
            
            // In a real application, you would send this data to a server
            console.log({
                name,
                email,
                subject,
                message
            });
        } else {
            alert('Mohon lengkapi semua field!');
        }
    });
}

// ==================== Parallax Effect ====================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-content');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ==================== Project Cards Tilt Effect ====================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ==================== Skill Cards Hover Effect ====================
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'all 0.3s ease';
    });
});

// ==================== Animated Counter ====================
function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '%';
            clearInterval(timer);
        } else {
            element.textContent = Math.ceil(start) + '%';
        }
    }, 16);
}

// ==================== Lazy Loading Images ====================
const images = document.querySelectorAll('img');

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            
            // Check if image is already loaded
            if (img.complete && img.naturalHeight !== 0) {
                img.style.opacity = '1';
            } else {
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';
                
                img.addEventListener('load', () => {
                    img.style.opacity = '1';
                });
            }
            
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// ==================== Cursor Trail Effect (Optional) ====================
document.addEventListener('mousemove', (e) => {
    // Create a subtle gradient following cursor on hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        const rect = hero.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        hero.style.background = `
            radial-gradient(circle at ${x}px ${y}px, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
            linear-gradient(135deg, #0f172a 0%, #1e293b 100%)
        `;
    }
});

// ==================== Preloader (Optional) ====================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ==================== Dynamic Year in Footer ====================
const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer-content p');
if (footerText) {
    footerText.textContent = `© ${currentYear} Web Developer Portfolio. All rights reserved.`;
}

// ==================== Accessibility: Keyboard Navigation ====================
document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ==================== Performance Optimization ====================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
const debouncedScroll = debounce(() => {
    // Your scroll logic here
}, 10);

window.addEventListener('scroll', debouncedScroll);

console.log('Portfolio website loaded successfully! 🚀');

// ==================== Language Switcher (Simplified) ====================
function switchLanguage(lang) {
    console.log('🌐 Switching language to:', lang);
    currentLang = lang;
    
    // Update body data-lang attribute for CSS to handle show/hide
    document.body.setAttribute('data-lang', lang);
    console.log('✓ Body data-lang set to:', document.body.getAttribute('data-lang'));
    
    // Update typing text array based on language
    if (lang === 'id') {
        textArray[0] = 'Full Stack Web Developer (Laravel)';
        textArray[1] = 'Web Developer';
        textArray[2] = 'Pengembang Aplikasi Web';
    } else {
        textArray[0] = 'Full Stack Web Developer (Laravel)';
        textArray[1] = 'Web Developer';
        textArray[2] = 'Web Application Developer';
    }
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang-btn') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Save preference to localStorage
    localStorage.setItem('preferredLanguage', lang);
    console.log('✓ Language switched successfully!');
    
    return false; // Prevent default action
}

// Initialize language switcher when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 DOM Content Loaded');
    
    // Initialize typing text element with multiple attempts
    setTimeout(() => {
        typingText = document.querySelector('.typing-text');
        console.log('📝 Typing element found:', typingText);
        console.log('📝 Typing element class:', typingText?.className);
        console.log('📝 Typing element parent:', typingText?.parentElement?.className);
        
        // Start typing effect
        if (typingText) {
            console.log('✅ Starting typing effect...');
            type();
        } else {
            console.error('❌ Typing text element not found!');
            // Try alternative selector
            const subtitle = document.querySelector('.hero-subtitle span');
            if (subtitle) {
                console.log('⚠️ Found alternative element');
                typingText = subtitle;
                type();
            }
        }
    }, 100);
    
    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    console.log('💾 Loading saved language:', savedLang);
    switchLanguage(savedLang);
});

// ==================== Project Gallery Modal ====================
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const galleryGrid = document.getElementById('galleryGrid');
const closeModal = document.getElementById('closeModal');
const viewButtons = document.querySelectorAll('.project-view-btn');

// Project data with gallery images
const projectData = {
    1: {
        title: 'Government Agency Website',
        images: [
            'img/lks admin.png',
            'img/lks.kepaladinas.png',
            'img/lks.petugas.png',
            'img/user.png'
            
        ]
    },
    2: {
        title: 'Company Profile Website - Wisata Karanganyar',
        images: [
            'img/wisata5.png',
            'img/wisata2.png',
            'img/wisata3.png',
            'img/wisata4.png'
        ]
    },
    3: {
        title: 'Website HRIS',
        images: [
            'img/hris1.png',
            'img/hris2.png',
            'img/hris3.png',
            'img/hris4.png',
            'img/hris5.png'
        ]
    },
    4: {
        title: 'Aplikasi Unity AR 3D',
        images: [
            'img/unity2.jpeg',
            'img/unity3.jpeg',
            'img/unity4.jpeg',
            'img/ar1.jpg',
            'img/ar2.jpg',
            'img/ar3.jpg',
            'img/ar4.jpg',
            'img/ar5.jpg'
        ]
    },
    5: {
        title: '3D Design - VW Custom Coffee Van',
        images: [
            'img/vw 1.png',
            'img/vw2.png',
            'img/vw3.png'
        ]
    }
};

// Open modal when clicking view button
viewButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const projectId = btn.getAttribute('data-project');
        openProjectModal(projectId);
    });
});

// Also trigger modal when clicking the project card
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.getAttribute('data-project');
        openProjectModal(projectId);
    });
});

// This function is now defined later in the code after lightbox setup

function closeProjectModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal events
closeModal.addEventListener('click', closeProjectModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeProjectModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeProjectModal();
    }
});

// ==================== Lightbox for Full Image View ====================
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCounter = document.getElementById('lightboxCounter');
const closeLightbox = document.getElementById('closeLightbox');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let currentImages = [];
let currentImageIndex = 0;

function openLightbox(images, index) {
    currentImages = images;
    currentImageIndex = index;
    showLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function showLightboxImage() {
    lightboxImage.src = currentImages[currentImageIndex];
    lightboxCounter.textContent = `${currentImageIndex + 1} / ${currentImages.length}`;
}

function closeLightboxView() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'hidden'; // Keep modal scroll locked
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % currentImages.length;
    showLightboxImage();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
    showLightboxImage();
}

// Close lightbox events
closeLightbox.addEventListener('click', closeLightboxView);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightboxView();
    }
});

// Navigation
lightboxNext.addEventListener('click', nextImage);
lightboxPrev.addEventListener('click', prevImage);

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeLightboxView();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        } else if (e.key === 'ArrowLeft') {
            prevImage();
        }
    }
});

// Update openProjectModal to add click handlers to gallery items
function openProjectModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;
    
    modalTitle.textContent = project.title;
    galleryGrid.innerHTML = '';
    
    project.images.forEach((imageSrc, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `<img src="${imageSrc}" alt="${project.title} - Image ${index + 1}">`;
        
        // Add click event to open lightbox
        galleryItem.addEventListener('click', () => {
            openLightbox(project.images, index);
        });
        
        galleryGrid.appendChild(galleryItem);
    });
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ==================== Custom Cursor ====================
const cursorDot = document.getElementById('cursorDot');
const cursorOutline = document.getElementById('cursorOutline');

document.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
    
    // Move cursor dot immediately
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    cursorDot.style.opacity = '1';
    
    // Move cursor outline with slight delay
    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;
    cursorOutline.style.opacity = '1';
});

// Add hover effect on interactive elements
const hoverElements = document.querySelectorAll('a, button, input, textarea, select, .project-card, .skill-card, .nav-link, .social-link, .whatsapp-card');

hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-hover');
    });
    
    element.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-hover');
    });
});

// Hide cursor when leaving the window
document.addEventListener('mouseleave', () => {
    cursorDot.style.opacity = '0';
    cursorOutline.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
    cursorDot.style.opacity = '1';
    cursorOutline.style.opacity = '1';
});

