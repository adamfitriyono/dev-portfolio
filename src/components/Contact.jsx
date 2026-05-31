import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarker, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import SectionHeader from './SectionHeader';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contacts = [
    { icon: faEnvelope, label: 'Email', value: 'adam@example.com' },
    { icon: faPhone, label: 'Phone', value: '+62 812 3456 7890' },
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
        <SectionHeader badge="Contact" title="Get In Touch" subtitle="Have a project in mind? Let's talk about it" />

        <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
          <div data-aos="fade-right">
            <p className="text-muted mb-8 leading-relaxed">
              I'd love to hear from you! Whether you have a question about my work or just want to say hello, feel free to reach out. I usually respond within 24 hours.
            </p>

            <div className="space-y-4 mb-8">
              {contacts.map((contact, index) => (
                <div key={index} className="card flex items-center gap-4 p-4 md:p-5">
                  <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-primary-light text-primary dark:bg-primary/20">
                    <FontAwesomeIcon icon={contact.icon} className="text-base" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-dark dark:text-text-light">{contact.label}</p>
                    <p className="text-muted text-sm">{contact.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="font-semibold text-text-dark dark:text-text-light mb-4">Follow Me</p>
              <div className="flex gap-3">
                {socials.map((social, index) => (
                  <a key={index} href={social.url} className="social-icon" aria-label={social.label}>
                    <FontAwesomeIcon icon={social.icon} className="text-lg" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="card p-6 md:p-8 space-y-5" data-aos="fade-left">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2 text-text-dark dark:text-text-light">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2 text-text-dark dark:text-text-light">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-text-dark dark:text-text-light">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Project Inquiry"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2 text-text-dark dark:text-text-light">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="input-field resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button type="submit" disabled={isSubmitting} className="btn-primary w-full">
              {isSubmitting ? (
                <>
                  <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
