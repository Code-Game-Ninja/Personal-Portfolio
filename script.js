// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Side-drawer Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
const mobileMenuClose = mobileMenu ? mobileMenu.querySelector('.close-btn') : null;
if (mobileMenuButton && mobileMenu && mobileMenuOverlay) {
  function openMenu() {
    console.log('Hamburger clicked: opening menu');
    mobileMenu.classList.add('active');
    mobileMenuOverlay.classList.add('active');
    console.log('Classes after open:', mobileMenu.className, mobileMenuOverlay.className);
  }
  function closeMenu() {
    mobileMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    console.log('Menu closed');
  }
  mobileMenuButton.addEventListener('click', openMenu);
  if (mobileMenuClose) mobileMenuClose.addEventListener('click', closeMenu);
  mobileMenuOverlay.addEventListener('click', closeMenu);
  // Close menu when a link is clicked
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

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

// Scroll Progress Bar
window.addEventListener('scroll', () => {
  const scrollProgress = document.getElementById('scroll-progress');
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = scrollPercent + '%';
});

// Ripple Effect for Buttons
function createRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
  circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
  circle.classList.add('ripple-effect');
  button.appendChild(circle);
  setTimeout(() => circle.remove(), 600);
}
document.querySelectorAll('.ripple').forEach(btn => {
  btn.addEventListener('click', createRipple);
});

// Typing Animation for Hero Subtitle
function typeText(element, text, speed = 60) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  element.textContent = '';
  typing();
}
document.addEventListener('DOMContentLoaded', () => {
  const subtitle = document.querySelector('#hero-subtitle h2');
  if (subtitle) {
    typeText(subtitle, 'Frontend Web Developer');
  }
});

// Animate Skill Bars with IntersectionObserver
const skillBars = document.querySelectorAll('.skill-bar');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const width = bar.getAttribute('data-width');
      bar.style.width = width;
      bar.style.transition = 'width 1.5s cubic-bezier(.4,0,.2,1)';
      skillObserver.unobserve(bar);
    }
  });
}, { threshold: 0.5 });
skillBars.forEach(bar => {
  bar.style.width = '0%';
  skillObserver.observe(bar);
});

// Card Entrance Animation
const cards = document.querySelectorAll('.project-card, .material-card');
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('card-in-view');
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
cards.forEach(card => {
  card.classList.remove('card-in-view');
  cardObserver.observe(card);
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
gsap.registerPlugin(ScrollTrigger);