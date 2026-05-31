import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import aboutImage from '../assets/images/foto_about.webp';
import SectionHeader from './SectionHeader';
import { useCountUp } from '../hooks';

function StatCard({ number, suffix, label }) {
  const { display, ref } = useCountUp(number, suffix);

  return (
    <div ref={ref} className="section-alt-card section-alt-card-hover text-center p-5 md:p-6">
      <div className="text-2xl md:text-3xl font-bold text-primary">{display}</div>
      <div className="text-sm font-medium text-muted mt-1">{label}</div>
    </div>
  );
}

export default function About() {
  const stats = [
    { number: '5', suffix: '+', label: 'Years Experience' },
    { number: '50', suffix: '+', label: 'Projects Done' },
    { number: '30', suffix: '+', label: 'Happy Clients' },
  ];

  return (
    <section id="about" className="section-alt">
      <div className="container">
        <SectionHeader badge="About" title="About Me" subtitle="Passionate about crafting exceptional digital experiences" />

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div data-aos="fade-right">
            <div className="photo-frame aspect-square">
              <img src={aboutImage} alt="About Me" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="space-y-6" data-aos="fade-left">
            <p className="text-muted leading-relaxed">
              I'm a passionate Frontend Web Developer with 5+ years of experience in creating stunning and functional web applications. My journey in web development started with a curiosity about how things work, and it has evolved into a career dedicated to crafting exceptional user experiences.
            </p>

            <p className="text-muted leading-relaxed">
              I specialize in building responsive, interactive interfaces using modern technologies like React, Vue, and Tailwind CSS. I believe in writing clean, maintainable code and following best practices in web development.
            </p>

            <p className="text-muted leading-relaxed">
              When I'm not coding, I enjoy learning new technologies, contributing to open-source projects, and sharing knowledge with the developer community.
            </p>

            <div className="grid grid-cols-3 gap-3 md:gap-4 py-2">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>

            <a href="/resume.pdf" download className="btn-primary inline-flex w-fit group">
              <FontAwesomeIcon icon={faDownload} className="transition-transform duration-300 group-hover:translate-y-0.5" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
