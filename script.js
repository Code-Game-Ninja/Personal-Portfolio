// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Hero section GSAP animation
gsap.from("#hero-title", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out"
});

gsap.from("#hero-subtitle h2", {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.5,
    ease: "power3.out"
});

gsap.from("#hero-button", {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 1,
    ease: "power3.out"
});

// Animate skill bars when they come into view
const skillBars = document.querySelectorAll('.skill-bar');

const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
            const width = bar.getAttribute('data-width');
            gsap.to(bar, {
                width: width,
                duration: 1.5,
                ease: "power3.out"
            });
        }
    });
};

// Initialize skill bars with 0 width
document.addEventListener('DOMContentLoaded', () => {
    skillBars.forEach(bar => {
        bar.style.width = '0%';
    });

    // Then animate them when scrolled into view
    window.addEventListener('scroll', animateSkillBars);
    animateSkillBars(); // Check on load in case some are already in view
});

// Text animation for about section
const aboutText = document.querySelector('#about p');
gsap.from(aboutText, {
    scrollTrigger: {
        trigger: aboutText,
        start: "top 80%",
        toggleActions: "play none none none"
    },
    duration: 1,
    y: 30,
    opacity: 0,
    ease: "power3.out"
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.add('hidden');

            // Scroll to target
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Floating animation for profile image
gsap.to(".floating", {
    y: -15,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

// Animated text gradient
const heroTitle = document.querySelector('#hero-title span');
gsap.to(heroTitle, {
    duration: 3,
    backgroundPosition: '100% 0%',
    repeat: -1,
    yoyo: true,
    ease: "none"
});