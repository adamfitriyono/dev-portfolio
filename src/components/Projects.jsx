import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import elgamalImg from '../assets/projects/elgamal_crypto.webp';
import chatbotImg from '../assets/projects/chatbot_sungkang.webp';
import objectDetectionImg from '../assets/projects/object_detection.webp';
import SectionHeader from './SectionHeader';
import TechIcon from './TechIcon';

const techColorMap = {
  HTML: 'bg-white/80 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-400 dark:border-orange-500/30',
  CSS: 'bg-white/80 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-400 dark:border-blue-500/30',
  CSS3: 'bg-white/80 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-400 dark:border-blue-500/30',
  JavaScript: 'bg-white/80 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border border-yellow-400 dark:border-yellow-500/30',
  React: 'bg-white/80 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border border-cyan-400 dark:border-cyan-500/30',
  Python: 'bg-white/80 dark:bg-blue-600/20 text-blue-700 dark:text-blue-400 border border-blue-500 dark:border-blue-600/30',
  Streamlit: 'bg-white/80 dark:bg-red-500/20 text-red-600 dark:text-red-400 border border-red-400 dark:border-red-500/30',
  'Gemini API': 'bg-white/80 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 border border-purple-400 dark:border-purple-500/30',
  YOLOv8: 'bg-white/80 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border border-indigo-400 dark:border-indigo-500/30',
  ElGamal: 'bg-white/80 dark:bg-green-500/20 text-green-600 dark:text-green-400 border border-green-400 dark:border-green-500/30',
  'Node.js': 'bg-white/80 dark:bg-green-600/20 text-green-700 dark:text-green-400 border border-green-500 dark:border-green-600/30',
  NLP: 'bg-white/80 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400 border border-violet-400 dark:border-violet-500/30',
  Cryptography: 'bg-white/80 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400 border border-pink-400 dark:border-pink-500/30',
  OpenCV: 'bg-white/80 dark:bg-blue-700/20 text-blue-800 dark:text-blue-300 border border-blue-500 dark:border-blue-700/30',
};

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'ElGamal Image Encryption',
      description: 'Aplikasi web untuk enkripsi dan dekripsi gambar menggunakan algoritma ElGamal dengan analisis kualitas citra berbasis metrik MSE & PSNR.',
      image: elgamalImg,
      tech: ['HTML', 'CSS', 'JavaScript', 'ElGamal'],
      live: 'https://elgamal-crypto-image.vercel.app/',
      github: 'https://github.com/adamfitriyono/project-elgamal-crypto-Image',
    },
    {
      id: 2,
      title: 'Chatbot Showroom Sungkang',
      description: 'Aplikasi web interaktif untuk layanan Chatbot AI showroom mobil Sungkang menggunakan teknologi Google Gemini API.',
      image: chatbotImg,
      tech: ['Gemini API', 'Python', 'Streamlit'],
      live: 'https://showroomsungkang.streamlit.app/',
      github: 'https://github.com/adamfitriyono/chatbot-showroom-sungkang',
    },
    {
      id: 3,
      title: 'Pothole Detection YOLOv8',
      description: 'Aplikasi web yang menggunakan teknologi YOLOv8 (framework object detection) untuk mendeteksi dan mengidentifikasi lubang jalan secara otomatis.',
      image: objectDetectionImg,
      tech: ['HTML', 'CSS', 'JavaScript', 'YOLOv8'],
      live: 'https://object-detect-comvis.vercel.app/',
      github: 'https://github.com/adamfitriyono/object-detect-comvis',
    },
  ];

  return (
    <section id="projects" className="section-base">
      <div className="container">
        <SectionHeader title="Featured Projects" subtitle="Selected works showcasing my skills and passion for building great products" />

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
                    <span key={idx} className={`px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap flex items-center ${techColorMap[tech] || 'bg-gray-500/20 text-gray-400 border border-gray-500/30'}`}>
                      <TechIcon tech={tech} />
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
