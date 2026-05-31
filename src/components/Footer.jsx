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
    <footer className="footer-dark relative pt-12 pb-8 border-t border-white/10">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-3 text-text-light">Adam.</h3>
            <p className="text-muted text-sm leading-relaxed">
              Frontend Web Developer passionate about creating beautiful and functional web experiences.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-text-light">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.toLowerCase());
                    }}
                    className="text-muted text-sm hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-text-light">Follow Me</h4>
            <div className="flex gap-3">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-icon social-icon-dark"
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-muted text-sm gap-4">
            <p>&copy; {new Date().getFullYear()} Adam Fitriyono. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
