// Mobile Menu Toggle Logic
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Navbar Scroll Effect & ScrollSpy
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

// Scroll Event Listener
window.addEventListener('scroll', function() {
    // 1. Navbar Glass Effect
    // Adds a shadow and background blur when scrolling down
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg');
    } else {
        navbar.classList.remove('shadow-lg');
    }

    // 2. ScrollSpy: Highlight active menu item
    // Detects which section is currently in view
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Check if we have scrolled to this section (minus offset for navbar)
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    // Update the active state in the navbar
    navLinks.forEach(link => {
        link.classList.remove('text-accent');
        link.classList.add('text-gray-300');
        
        // Strict check to ensure we match the correct anchor ID
        if (link.getAttribute('href') === '#' + current) {
            link.classList.remove('text-gray-300');
            link.classList.add('text-accent');
        }
    });
});

// 3. Smooth Scroll for "Scroll Down" Mouse Icon (Home Section)
// This ensures the mouse animation in the CSS is clickable
const scrollDownBtn = document.querySelector('.scroll-downs');
if (scrollDownBtn) {
    scrollDownBtn.addEventListener('click', () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}
