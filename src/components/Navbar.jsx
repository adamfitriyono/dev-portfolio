import { useState, useEffect, useRef, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useScrollActive, useTheme, syncNavOffset } from '../hooks';
import logoNavbar from '../assets/images/logo-navbar.svg';

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

  const islandClass = ['island pointer-events-auto flex items-center justify-between', isCompact ? 'island-compact' : '', isScrolled ? 'island-scrolled' : ''].join(' ');

  const linkInactive = 'nav-link text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-primary/10';

  const linkActive = 'nav-link bg-primary text-white';

  return (
    <nav className="fixed top-4 sm:top-5 left-0 right-0 z-50 flex flex-col items-center px-3 sm:px-4 md:px-6 pointer-events-none">
      <div data-nav-island className={islandClass} onTransitionEnd={handleIslandTransitionEnd}>
        <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center shrink-0">
          <img src={logoNavbar} alt="Adam Fitriyono" className="nav-logo-img" width={120} height={29} />
        </a>

        <ul className="hidden md:flex items-center gap-1 lg:gap-1.5">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link}`} onClick={(e) => handleNavClick(e, link)} className={activeSection === link ? linkActive : linkInactive}>
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button type="button" onClick={handleThemeToggle} aria-pressed={isDark} aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'} className="nav-icon-btn">
            <FontAwesomeIcon icon={isDark ? faSun : faMoon} className={iconSpinning ? 'animate-icon-spin' : ''} />
          </button>

          <div className="md:hidden">
            <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} className="nav-icon-btn" aria-label="Toggle menu" aria-expanded={isMenuOpen}>
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden pointer-events-auto mt-3 w-full max-w-xs sm:max-w-sm animate-slide-down px-3">
          <div className="bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-2xl shadow-soft dark:bg-surface-dark-elevated/90 dark:border-white/10 dark:shadow-soft-dark py-3 px-4">
            <ul className="flex flex-col gap-0.5 w-full">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link}`}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`block text-center capitalize text-sm font-medium px-3 py-2.5 rounded-lg transition-all duration-300 ${activeSection === link ? 'bg-primary text-white' : 'text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-primary/10'}`}
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
