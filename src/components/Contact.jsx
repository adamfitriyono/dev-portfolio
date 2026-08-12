import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  const socials = [
    { icon: faGithub, label: 'GitHub', url: '#' },
    { icon: faLinkedin, label: 'LinkedIn', url: '#' },
    { icon: faInstagram, label: 'Instagram', url: '#' },
  ];

  return (
    <section id="contact" className="section-base pt-10 md:pt-14 pb-14 md:pb-20">
      <div className="container">
        <div className="mx-auto max-w-[920px] rounded-[2.5rem] border border-white/15 bg-[#242424] px-6 py-12 md:px-10 md:py-14 text-center shadow-[0_18px_44px_rgba(0,0,0,0.24)]" data-aos="fade-up">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.4em] text-primary/90">Contact</p>
          <h3 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-text-light">
            Let&rsquo;s Work <span className="text-primary">together</span>
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-gray-400">I&rsquo;m available for freelance work, collaboration, and new digital product ideas.</p>

          <div className="mt-10 flex justify-center">
            <a href="mailto:adam@example.com" className="btn-primary min-w-[220px] px-8 py-3.5 text-lg shadow-none rounded-2xl">
              Get in touch
            </a>
          </div>

          <div className="mt-8 flex justify-center gap-3">
            {socials.map((social) => (
              <a key={social.label} href={social.url} className="social-icon social-icon-dark h-11 w-11 rounded-xl border-white/10 bg-white/5 text-gray-400" aria-label={social.label}>
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
