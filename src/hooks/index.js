import { useEffect, useLayoutEffect, useState, useCallback, useRef } from 'react';
import { flushSync } from 'react-dom';

const SECTIONS = ['home', 'about', 'projects', 'skills', 'contact'];
const NAV_GAP = 20;

function readCssNavOffset() {
  const value = getComputedStyle(document.documentElement).getPropertyValue('--nav-offset').trim();
  return parseInt(value, 10) || 112;
}

export function getNavOffset() {
  const island = document.querySelector('[data-nav-island]');
  if (island) {
    return Math.ceil(island.getBoundingClientRect().bottom + NAV_GAP);
  }
  return readCssNavOffset();
}

export function syncNavOffset() {
  document.documentElement.style.setProperty('--nav-offset', `${getNavOffset()}px`);
}

function getSectionTop(element) {
  return element.getBoundingClientRect().top + window.scrollY;
}

export function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (!element) return;

  syncNavOffset();
  const offset = getNavOffset();
  const top = getSectionTop(element) - offset;

  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  window.history.replaceState(null, '', `#${sectionId}`);
}

function detectActiveSection() {
  const offset = getNavOffset();
  const reference = window.scrollY + offset;

  for (let i = SECTIONS.length - 1; i >= 0; i -= 1) {
    const element = document.getElementById(SECTIONS[i]);
    if (!element) continue;

    if (getSectionTop(element) <= reference + 1) {
      return SECTIONS[i];
    }
  }

  return SECTIONS[0];
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function setThemeOrigin(event) {
  const x = event?.clientX ?? window.innerWidth / 2;
  const y = event?.clientY ?? window.innerHeight / 2;
  const r = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y),
  );

  document.documentElement.style.setProperty('--theme-x', `${x}px`);
  document.documentElement.style.setProperty('--theme-y', `${y}px`);
  document.documentElement.style.setProperty('--theme-r', `${r}px`);
}

function getInitialTheme() {
  if (typeof window === 'undefined') return false;
  const stored = localStorage.getItem('theme');
  if (stored === 'dark') return true;
  if (stored === 'light') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function useTheme() {
  const [isDark, setIsDark] = useState(getInitialTheme);
  const fallbackTimerRef = useRef(null);

  useLayoutEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = useCallback((event) => {
    const apply = () => {
      flushSync(() => setIsDark((prev) => !prev));
    };

    if (prefersReducedMotion()) {
      apply();
      return;
    }

    setThemeOrigin(event);

    if (typeof document.startViewTransition === 'function') {
      document.startViewTransition(apply);
      return;
    }

    document.documentElement.classList.add('theme-transitioning');
    apply();

    if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current);
    fallbackTimerRef.current = setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning');
    }, 350);
  }, []);

  return { isDark, toggleTheme };
}

export function useScrollActive() {
  const [activeSection, setActiveSection] = useState('home');
  const scrollTargetRef = useRef(null);
  const scrollEndTimerRef = useRef(null);

  const updateActiveSection = useCallback(() => {
    if (scrollTargetRef.current) return;
    setActiveSection(detectActiveSection());
  }, []);

  const finishScroll = useCallback((sectionId) => {
    scrollTargetRef.current = null;
    setActiveSection(sectionId ?? detectActiveSection());
  }, []);

  useEffect(() => {
    syncNavOffset();
    updateActiveSection();

    const handleScroll = () => updateActiveSection();
    const handleResize = () => {
      syncNavOffset();
      updateActiveSection();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    const onScrollEnd = () => {
      if (scrollTargetRef.current) {
        finishScroll(scrollTargetRef.current);
      } else {
        updateActiveSection();
      }
    };

    window.addEventListener('scrollend', onScrollEnd);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scrollend', onScrollEnd);
      if (scrollEndTimerRef.current) clearTimeout(scrollEndTimerRef.current);
    };
  }, [updateActiveSection, finishScroll]);

  const navigateToSection = useCallback(
    (sectionId) => {
      scrollTargetRef.current = sectionId;
      setActiveSection(sectionId);
      scrollToSection(sectionId);

      if (scrollEndTimerRef.current) clearTimeout(scrollEndTimerRef.current);

      scrollEndTimerRef.current = setTimeout(() => {
        if (scrollTargetRef.current === sectionId) {
          finishScroll(sectionId);
        }
      }, 900);
    },
    [finishScroll],
  );

  return { activeSection, navigateToSection };
}

export function useScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.replaceState(null, '', '#home');
  };

  return { isVisible, scrollToTop };
}

export function useCountUp(target, suffix = '', duration = 1500) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStartedRef.current) {
          hasStartedRef.current = true;
          const numericTarget = parseInt(target, 10);
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * numericTarget));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  return { display: `${count}${suffix}`, ref: elementRef };
}

export function useTypewriter(
  words,
  { typingDelay = 85, deletingDelay = 45, pauseDelay = 2200 } = {},
) {
  const [displayText, setDisplayText] = useState('');
  const wordIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const charIndexRef = useRef(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!words.length) return;

    if (prefersReducedMotion()) {
      setDisplayText(words[0]);
      return;
    }

    const tick = () => {
      const currentWord = words[wordIndexRef.current];
      const isDeleting = isDeletingRef.current;
      let charIndex = charIndexRef.current;

      if (!isDeleting) {
        charIndex += 1;
        setDisplayText(currentWord.slice(0, charIndex));

        if (charIndex === currentWord.length) {
          isDeletingRef.current = true;
          charIndexRef.current = charIndex;
          timerRef.current = setTimeout(tick, pauseDelay);
          return;
        }
      } else {
        charIndex -= 1;
        setDisplayText(currentWord.slice(0, charIndex));

        if (charIndex === 0) {
          isDeletingRef.current = false;
          wordIndexRef.current = (wordIndexRef.current + 1) % words.length;
          charIndexRef.current = 0;
          timerRef.current = setTimeout(tick, typingDelay);
          return;
        }
      }

      charIndexRef.current = charIndex;
      timerRef.current = setTimeout(tick, isDeleting ? deletingDelay : typingDelay);
    };

    timerRef.current = setTimeout(tick, typingDelay);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [words, typingDelay, deletingDelay, pauseDelay]);

  return displayText;
}
