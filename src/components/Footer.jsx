import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { scrollToSection } from '../hooks';

export default function Footer() {
  const navLinks = ['Home', 'About', 'Projects', 'Skills', 'Contact'];
  const socials = [
    { icon: faGithub, url: '#', label: 'GitHub' },
    { icon: faLinkedin, url: '#', label: 'LinkedIn' },
    { icon: faTwitter, url: '#', label: 'Twitter' },
    { icon: faInstagram, url: '#', label: 'Instagram' },
  ];

  return (
    <footer className="footer-dark relative border-t border-white/10 py-6 md:py-8">
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-center">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-text-light">Adam Fitriyono</h3>
            <p className="mt-2 max-w-xl text-sm text-muted">Frontend Web Developer passionate about creating beautiful and functional web experiences.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-muted">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.toLowerCase());
                }}
                className="hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex justify-center gap-3">
            {socials.map((social, index) => (
              <a key={index} href={social.url} className="social-icon social-icon-dark" aria-label={social.label}>
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </div>

          <p className="text-xs text-muted">&copy; {new Date().getFullYear()} Adam Fitriyono. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
