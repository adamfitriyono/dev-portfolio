import { useState, useEffect, useRef, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faBars, faTimes, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useScrollActive, useTheme, syncNavOffset } from '../hooks';

const SCROLL_IDLE_MS = 420;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const [iconSpinning, setIconSpinning] = useState(false);
  const scrollIdleTimerRef = useRef(null);
  const isCompactRef = useRef(false);
  const { activeSection, navigateToSection } = useScrollActive();
  const { isDark, toggleTheme } = useTheme();

  const navLinks = ['home', 'about', 'projects', 'skills', 'contact'];

  const setCompact = useCallback((value) => {
    if (isCompactRef.current === value) return;
    isCompactRef.current = value;
    setIsCompact(value);
  }, []);

  useEffect(() => {
    syncNavOffset();

    const releaseCompact = () => {
      setCompact(false);
    };

    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 20);

      if (y > 8) {
        setCompact(true);
      }

      if (scrollIdleTimerRef.current) clearTimeout(scrollIdleTimerRef.current);
      scrollIdleTimerRef.current = setTimeout(releaseCompact, SCROLL_IDLE_MS);
    };

    const handleScrollEnd = () => {
      if (scrollIdleTimerRef.current) clearTimeout(scrollIdleTimerRef.current);
      releaseCompact();
    };

    const handleResize = () => {
      syncNavOffset();
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('scrollend', handleScrollEnd);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scrollend', handleScrollEnd);
      window.removeEventListener('resize', handleResize);
      if (scrollIdleTimerRef.current) clearTimeout(scrollIdleTimerRef.current);
    };
  }, [setCompact]);

  const handleIslandTransitionEnd = (e) => {
    if (e.propertyName === 'transform') {
      syncNavOffset();
    }
  };

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setIsMenuOpen(false);
    navigateToSection(link);
  };

  const handleThemeToggle = (e) => {
    setIconSpinning(true);
    toggleTheme(e);
    setTimeout(() => setIconSpinning(false), 450);
  };

  const islandClass = [
    'island pointer-events-auto flex items-center justify-between',
    isCompact ? 'island-compact' : '',
    isScrolled ? 'island-scrolled' : '',
  ].join(' ');

  const linkInactive =
    'nav-link text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-primary/10';

  const linkActive = 'nav-link bg-primary text-white';

  return (
    <nav className="fixed top-5 left-0 right-0 z-50 flex flex-col items-center px-4 sm:px-6 pointer-events-none">
      <div
        data-nav-island
        className={islandClass}
        onTransitionEnd={handleIslandTransitionEnd}
      >
        <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center gap-2 shrink-0">
          <FontAwesomeIcon icon={faCode} className="nav-logo-icon text-primary" />
          <span className="nav-logo-text">Adam.</span>
        </a>

        <ul className="hidden md:flex items-center gap-1 lg:gap-1.5">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                onClick={(e) => handleNavClick(e, link)}
                className={activeSection === link ? linkActive : linkInactive}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleThemeToggle}
            aria-pressed={isDark}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="nav-icon-btn"
          >
            <FontAwesomeIcon
              icon={isDark ? faSun : faMoon}
              className={iconSpinning ? 'animate-icon-spin' : ''}
            />
          </button>

          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="nav-icon-btn"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden pointer-events-auto mt-2 w-full max-w-xs sm:max-w-sm animate-slide-down">
          <div className={`${islandClass} flex-col items-stretch py-3`}>
            <ul className="flex flex-col gap-1 w-full px-2">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link}`}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`block ${activeSection === link ? linkActive : linkInactive}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
