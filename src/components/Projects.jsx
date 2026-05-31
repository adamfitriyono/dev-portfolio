import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import elgamalImg from '../assets/projects/elgamal_crypto.webp';
import chatbotImg from '../assets/projects/chatbot_sungkang.webp';
import objectDetectionImg from '../assets/projects/object_detection.webp';
import SectionHeader from './SectionHeader';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'ElGamal Encryption System',
      description: 'A comprehensive web-based implementation of ElGamal cryptographic algorithm with interactive visualization.',
      image: elgamalImg,
      tech: ['React', 'JavaScript', 'Cryptography'],
      live: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Chatbot Sungkang',
      description: 'An intelligent chatbot application built with NLP capabilities for customer support and engagement.',
      image: chatbotImg,
      tech: ['React', 'Node.js', 'NLP'],
      live: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'Pothole Detection YOLOv8',
      description: 'Computer vision project using YOLOv8 for detecting and mapping potholes on roads with high accuracy.',
      image: objectDetectionImg,
      tech: ['Python', 'YOLOv8', 'OpenCV'],
      live: '#',
      github: '#',
    },
  ];

  return (
    <section id="projects" className="section-base">
      <div className="container">
        <SectionHeader badge="Portfolio" title="Featured Projects" subtitle="Selected works showcasing my skills and passion for building great products" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <article key={project.id} className="group project-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="project-card-media">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />

                <div className="absolute inset-0 bg-surface-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.live} className="social-icon !bg-white !text-primary !border-white translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                    <FontAwesomeIcon icon={faExternalLink} />
                  </a>
                  <a href={project.github} className="social-icon !bg-white/15 !text-white !border-white/30 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-150">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>

              <div className="project-card-body">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
