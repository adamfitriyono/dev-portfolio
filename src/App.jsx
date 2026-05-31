import { useEffect, Fragment } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { scrollToSection, syncNavOffset } from './hooks';

export default function App() {
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    const hash = window.location.hash.replace('#', '');

    requestAnimationFrame(() => {
      syncNavOffset();

      if (!hash || hash === 'home') {
        window.scrollTo(0, 0);
      } else {
        scrollToSection(hash);
      }
    });

    AOS.init({
      duration: 600,
      easing: 'ease-out-quad',
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <Fragment>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <ScrollToTop />
    </Fragment>
  );
}
