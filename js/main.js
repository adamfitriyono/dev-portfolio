/**
 * Main JavaScript Entry Point
 * Handles initialization, theme toggle, and general functionality
 */

// ===========================
// Initialize on DOM Load
// ===========================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initScrollToTop();
  initAOS();
  initSkillsAnimation();
});

// ===========================
// Theme Management
// ===========================
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;

  // Check for saved theme preference or default to 'dark'
  const currentTheme = localStorage.getItem('theme') || 'dark';

  // Apply theme
  if (currentTheme === 'light') {
    body.classList.add('light-mode');
  } else {
    body.classList.remove('light-mode');
  }

  // Theme toggle click handler
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      // Add transition class for smooth theme change
      body.classList.add('theme-transition');

      // Toggle theme
      body.classList.toggle('light-mode');

      // Save preference
      const theme = body.classList.contains('light-mode') ? 'light' : 'dark';
      localStorage.setItem('theme', theme);

      // Remove transition class after animation
      setTimeout(() => {
        body.classList.remove('theme-transition');
      }, 500);
    });
  }
}

// ===========================
// Scroll to Top Button
// ===========================
function initScrollToTop() {
  const scrollTopBtn = document.getElementById('scrollTop');

  if (!scrollTopBtn) return;

  // Show/hide button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  // Scroll to top on click
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

// ===========================
// Initialize AOS (Animate On Scroll)
// ===========================
function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
      delay: 100,
    });
  }
}

// ===========================
// Skills Progress Bar Animation
// ===========================
function initSkillsAnimation() {
  const skillsSection = document.querySelector('.skills');
  const skillBars = document.querySelectorAll('.skill-progress');

  if (!skillsSection || skillBars.length === 0) return;

  let animated = false;

  const animateSkills = () => {
    if (animated) return;

    const sectionTop = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Trigger animation when skills section is in viewport
    if (sectionTop < windowHeight - 100) {
      skillBars.forEach((bar) => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = progress + '%';
      });
      animated = true;
    }
  };

  // Check on scroll
  window.addEventListener('scroll', animateSkills);

  // Check on load
  animateSkills();
}

// ===========================
// Smooth Scroll for Anchor Links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    // Ignore empty hash
    if (href === '#') return;

    e.preventDefault();

    const target = document.querySelector(href);

    if (target) {
      const headerOffset = 80; // Account for fixed navbar
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Close mobile menu if open
      const navMenu = document.getElementById('navMenu');
      const hamburger = document.getElementById('hamburger');

      if (navMenu && hamburger) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
      }
    }
  });
});

// ===========================
// Lazy Loading Images
// ===========================
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;

        // Load image if it has data-src
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }

        observer.unobserve(img);
      }
    });
  });

  // Observe all images with data-src
  document.querySelectorAll('img[data-src]').forEach((img) => {
    imageObserver.observe(img);
  });
}

// ===========================
// Utility Functions
// ===========================

/**
 * Debounce function to limit rate of function calls
 */
function debounce(func, wait = 10) {
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

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

/**
 * Get scroll percentage
 */
function getScrollPercentage() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  return (scrollTop / scrollHeight) * 100;
}

// ===========================
// Export functions for use in other modules
// ===========================
window.portfolioUtils = {
  debounce,
  isInViewport,
  getScrollPercentage,
};
