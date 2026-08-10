import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import SectionHeader from './SectionHeader';

export default function Contact() {
  const contacts = [
    { icon: faEnvelope, label: 'Email', value: 'adam@example.com' },
    { icon: faMapMarker, label: 'Location', value: 'Indonesia' },
  ];

  const socials = [
    { icon: faGithub, label: 'GitHub', url: '#' },
    { icon: faLinkedin, label: 'LinkedIn', url: '#' },
    { icon: faTwitter, label: 'Twitter', url: '#' },
    { icon: faInstagram, label: 'Instagram', url: '#' },
  ];

  return (
    <section id="contact" className="section-base">
      <div className="container">
        <SectionHeader title="Get In Touch" subtitle="Open to freelance work and new project discussions" />

        <div className="mx-auto max-w-4xl" data-aos="fade-up">
          <div className="rounded-[2rem] border border-gray-300/80 bg-surface-dark-elevated p-8 md:p-14 text-center shadow-none dark:border-white/10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Contact</p>
            <h3 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-text-light">
              Let&rsquo;s work <span className="text-primary">together.</span>
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm md:text-lg leading-relaxed text-gray-400">I&rsquo;m available for freelance work, collaboration, and new digital product ideas.</p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="mailto:adam@example.com" className="btn-primary inline-flex">
                Get in touch
              </a>
              <a href="#projects" className="btn-outline inline-flex">
                See projects
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {contacts.map((contact) => (
                <span key={contact.label} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
                  <FontAwesomeIcon icon={contact.icon} className="text-primary" />
                  {contact.value}
                </span>
              ))}
            </div>

            <div className="mt-8 flex justify-center gap-3">
              {socials.map((social, index) => (
                <a key={index} href={social.url} className="social-icon social-icon-dark" aria-label={social.label}>
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>

            <p className="mt-8 text-xs text-muted">Adam Fitriyono · Frontend Web Developer · Indonesia</p>
          </div>
        </div>
      </div>
    </section>
  );
}
