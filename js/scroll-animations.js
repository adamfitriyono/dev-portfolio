/**
 * Scroll Animations
 * Handles scroll-triggered animations and reveals using Intersection Observer
 */

// ===========================
// Initialize Scroll Animations
// ===========================
document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initParallaxEffect();
  initCounterAnimation();
});

// ===========================
// Scroll Reveal Animation
// ===========================
function initScrollReveal() {
  // Check if Intersection Observer is supported
  if (!('IntersectionObserver' in window)) {
    // Fallback: just show all elements
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((el) => {
      el.classList.add('active');
    });
    return;
  }

  const revealOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15,
  };

  const revealCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');

        // Optional: Stop observing after reveal (for once-only animation)
        // observer.unobserve(entry.target);
      }
    });
  };

  const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

  // Observe all reveal elements
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  revealElements.forEach((el) => revealObserver.observe(el));
}

// ===========================
// Parallax Effect (Subtle)
// ===========================
function initParallaxEffect() {
  const parallaxElements = document.querySelectorAll('.parallax');

  if (parallaxElements.length === 0) return;

  const handleParallax = () => {
    const scrollTop = window.pageYOffset;

    parallaxElements.forEach((element) => {
      const speed = element.dataset.speed || 0.5;
      const yPos = -(scrollTop * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  };

  // Use requestAnimationFrame for smooth animation
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleParallax();
        ticking = false;
      });
      ticking = true;
    }
  });
}

// ===========================
// Counter Animation (for stats)
// ===========================
function initCounterAnimation() {
  const counterElements = document.querySelectorAll('.stat-item h4');

  if (counterElements.length === 0) return;

  const animateCounter = (element) => {
    const target = parseInt(element.textContent);

    // Skip if not a number
    if (isNaN(target)) return;

    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60 FPS
    let current = 0;

    const updateCounter = () => {
      current += increment;

      if (current < target) {
        element.textContent = Math.floor(current) + '+';
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target + '+';
      }
    };

    updateCounter();
  };

  // Use Intersection Observer to trigger animation when visible
  const counterObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counterElements.forEach((el) => counterObserver.observe(el));
}

// ===========================
// Stagger Animation Helper
// ===========================
function initStaggerAnimation(selector, delay = 100) {
  const elements = document.querySelectorAll(selector);

  if (elements.length === 0) return;

  const staggerObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const children = entry.target.children;

          Array.from(children).forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('stagger-item');
            }, index * delay);
          });

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => staggerObserver.observe(el));
}

// Initialize stagger animations for specific sections
document.addEventListener('DOMContentLoaded', () => {
  initStaggerAnimation('.projects-grid', 100);
  initStaggerAnimation('.skills-grid', 80);
});

// ===========================
// Progress Bar Animation
// ===========================
function animateProgressBars() {
  const progressBars = document.querySelectorAll('.skill-progress');

  if (progressBars.length === 0) return;

  const progressObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progress = entry.target;
          const targetWidth = progress.getAttribute('data-progress');

          // Animate to target width
          setTimeout(() => {
            progress.style.width = targetWidth + '%';
          }, 200);

          observer.unobserve(progress);
        }
      });
    },
    { threshold: 0.5 }
  );

  progressBars.forEach((bar) => progressObserver.observe(bar));
}

// Initialize progress bar animations
document.addEventListener('DOMContentLoaded', animateProgressBars);

// ===========================
// Fade In Elements on Scroll
// ===========================
function initFadeInOnScroll() {
  const fadeElements = document.querySelectorAll('.fade-in-scroll');

  if (fadeElements.length === 0) return;

  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeElements.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(el);
  });
}

// ===========================
// Scroll Progress Indicator (Optional)
// ===========================
function initScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: var(--primary-color);
        z-index: 9999;
        transition: width 0.1s ease;
    `;

  document.body.appendChild(progressBar);

  const updateProgress = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = scrollPercentage + '%';
  };

  window.addEventListener('scroll', updateProgress);
}

// Optional: Uncomment to enable scroll progress bar
// document.addEventListener('DOMContentLoaded', initScrollProgress);

// ===========================
// Section Transition Detection
// ===========================
function initSectionTransition() {
  const sections = document.querySelectorAll('section');

  if (sections.length === 0) return;

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;

          // Dispatch custom event for section change
          const event = new CustomEvent('sectionChange', {
            detail: { sectionId },
          });
          document.dispatchEvent(event);
        }
      });
    },
    { threshold: 0.3 }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

// Initialize section transition detection
document.addEventListener('DOMContentLoaded', initSectionTransition);

// Listen for section changes
document.addEventListener('sectionChange', (e) => {
  // console.log('Section changed to:', e.detail.sectionId);
  // You can add custom logic here when sections change
});

// ===========================
// Mouse Parallax Effect (Optional)
// ===========================
function initMouseParallax() {
  const parallaxContainer = document.querySelector('.hero-image');

  if (!parallaxContainer) return;

  document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    const moveX = (mouseX - 0.5) * 20;
    const moveY = (mouseY - 0.5) * 20;

    parallaxContainer.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
}

// Optional: Uncomment to enable mouse parallax
// document.addEventListener('DOMContentLoaded', initMouseParallax);

// ===========================
// Export functions
// ===========================
window.scrollAnimations = {
  initScrollReveal,
  initParallaxEffect,
  initCounterAnimation,
  animateProgressBars,
  initFadeInOnScroll,
  initScrollProgress,
};
