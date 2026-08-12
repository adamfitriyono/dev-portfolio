import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import heroImage from '../assets/images/foto_hero.webp';
import { scrollToSection } from '../hooks';
import TypewriterRole from './TypewriterRole';
import GridBackground from './GridBackground';

export default function Hero() {
  const handleNav = (e, section) => {
    e.preventDefault();
    scrollToSection(section);
  };

  return (
    <section id="home" className="section-base hero-section min-h-screen flex flex-col justify-center pt-28 md:pt-32 pb-10 md:pb-14 relative overflow-hidden">
      {/* Grid Background Component */}
      <GridBackground />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5 md:space-y-6 order-2 md:order-1" data-aos="fade-up">
            <span className="badge">Hello everyone 👋</span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight leading-tight text-text-dark dark:text-text-light">I'm Adam Fitriyono</h1>

            <TypewriterRole />

            <p className="text-muted leading-relaxed max-w-lg">Saya Machine Learning Engineer yang fokus menciptakan solusi digital yang adaptif, efisien, dan berbasis data.</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#projects" onClick={(e) => handleNav(e, 'projects')} className="btn-primary group">
                View My Work
                <FontAwesomeIcon icon={faArrowRight} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a href="#contact" onClick={(e) => handleNav(e, 'contact')} className="btn-outline group">
                Hire me
                <FontAwesomeIcon icon={faEnvelope} className="transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="150" className="flex justify-center order-1 md:order-2">
            <div className="photo-frame w-full max-w-xl md:max-w-[30rem] lg:max-w-[34rem] aspect-square">
              <img src={heroImage} alt="Developer Profile" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10 md:mt-12 lg:mt-14" data-aos="fade-up" data-aos-delay="200">
          <a href="#about" onClick={(e) => handleNav(e, 'about')} className="w-11 h-11 btn-icon hero-scroll-btn" aria-label="Scroll to about section">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
