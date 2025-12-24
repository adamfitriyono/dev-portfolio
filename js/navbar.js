/**
 * Navigation Bar Functionality
 * Handles mobile menu, scroll effects, and active state
 */

// ===========================
// Initialize Navigation
// ===========================
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initNavbarScroll();
  initActiveNavLink();
});

// ===========================
// Mobile Hamburger Menu
// ===========================
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!hamburger || !navMenu) return;

  // Toggle menu on hamburger click
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');

    // Prevent body scroll when menu is open
    if (navMenu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  // Close menu when clicking a nav link
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';

      // Enhanced smooth scroll
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const navbarHeight = document.getElementById('navbar').offsetHeight;
        const targetPosition = targetSection.offsetTop - navbarHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    const isClickInsideNav = navMenu.contains(e.target) || hamburger.contains(e.target);

    if (!isClickInsideNav && navMenu.classList.contains('active')) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Close menu on window resize (if viewport becomes larger)
  let previousWidth = window.innerWidth;

  window.addEventListener('resize', () => {
    const currentWidth = window.innerWidth;

    if (currentWidth > 768 && previousWidth <= 768) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    }

    previousWidth = currentWidth;
  });
}

// ===========================
// Navbar Scroll Effect
// ===========================
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');

  if (!navbar) return;

  let lastScrollTop = 0;
  let scrollThreshold = 50;

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add scrolled class when scrolled down
    if (scrollTop > scrollThreshold) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Optional: Hide navbar on scroll down, show on scroll up
    // Uncomment below if you want this behavior
    /*
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        */

    lastScrollTop = scrollTop;
  };

  // Use debounced scroll for better performance
  const debouncedScroll = window.portfolioUtils?.debounce(handleScroll, 10) || handleScroll;

  window.addEventListener('scroll', debouncedScroll);

  // Check on load
  handleScroll();
}

// ===========================
// Active Navigation Link
// ===========================
function initActiveNavLink() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  if (navLinks.length === 0 || sections.length === 0) return;

  const updateActiveLink = () => {
    const scrollPosition = window.pageYOffset + 100; // Offset for navbar height

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // Remove active class from all links
        navLinks.forEach((link) => link.classList.remove('active'));

        // Add active class to current section link
        const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });

    // Handle case when at top of page
    if (window.pageYOffset < 100) {
      navLinks.forEach((link) => link.classList.remove('active'));
      const homeLink = document.querySelector('.nav-link[href="#home"]');
      if (homeLink) {
        homeLink.classList.add('active');
      }
    }
  };

  // Use Intersection Observer for better performance (alternative method)
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('id');

          // Remove active class from all links
          navLinks.forEach((link) => link.classList.remove('active'));

          // Add active class to current section link
          const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    sections.forEach((section) => observer.observe(section));
  } else {
    // Fallback to scroll event
    const debouncedUpdate = window.portfolioUtils?.debounce(updateActiveLink, 50) || updateActiveLink;
    window.addEventListener('scroll', debouncedUpdate);
    updateActiveLink();
  }
}

// ===========================
// Navbar Brand Animation on Hover
// ===========================
const navBrand = document.querySelector('.nav-brand a');

if (navBrand) {
  navBrand.addEventListener('mouseenter', () => {
    const icon = navBrand.querySelector('i');
    if (icon) {
      icon.style.transform = 'rotate(360deg) scale(1.2)';
    }
  });

  navBrand.addEventListener('mouseleave', () => {
    const icon = navBrand.querySelector('i');
    if (icon) {
      icon.style.transform = 'rotate(0deg) scale(1)';
    }
  });
}

// ===========================
// Theme Toggle Enhanced Animation
// ===========================
const themeToggle = document.getElementById('themeToggle');

if (themeToggle) {
  themeToggle.addEventListener('click', function () {
    const icon = this.querySelector('i');
    if (icon) {
      // Rotate icon on click
      icon.style.transform = 'rotate(360deg) scale(1.2)';

      setTimeout(() => {
        icon.style.transform = 'rotate(0deg) scale(1)';
      }, 500);
    }

    // Add ripple effect
    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(59, 130, 246, 0.3);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.6s ease-out;
      pointer-events: none;
    `;

    this.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
}

// Add ripple animation to CSS dynamically
if (!document.querySelector('#ripple-animation')) {
  const style = document.createElement('style');
  style.id = 'ripple-animation';
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(2.5);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

// ===========================
// Sticky Navbar Shadow Effect
// ===========================
function initNavbarShadow() {
  const navbar = document.getElementById('navbar');

  if (!navbar) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      } else {
        navbar.style.boxShadow = 'none';
      }
    },
    { threshold: [0.9] }
  );

  const sentinel = document.createElement('div');
  sentinel.style.position = 'absolute';
  sentinel.style.top = '0';
  sentinel.style.height = '1px';
  document.body.prepend(sentinel);

  observer.observe(sentinel);
}

// ===========================
// Keyboard Navigation Accessibility
// ===========================
document.addEventListener('keydown', (e) => {
  const navMenu = document.getElementById('navMenu');
  const hamburger = document.getElementById('hamburger');

  // Close menu with Escape key
  if (e.key === 'Escape' && navMenu?.classList.contains('active')) {
    hamburger?.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// ===========================
// Export functions if needed
// ===========================
window.navbarUtils = {
  initMobileMenu,
  initNavbarScroll,
  initActiveNavLink,
};
