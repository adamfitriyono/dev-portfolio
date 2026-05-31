import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faVuejs, faNodeJs, faGolang, faGitAlt, faGithub, faDocker } from '@fortawesome/free-brands-svg-icons';
import SectionHeader from './SectionHeader';

export default function Skills() {
  const coreSkills = [
    { name: 'HTML5', icon: faHtml5, color: 'text-orange-400' },
    { name: 'CSS3', icon: faCss3Alt, color: 'text-blue-400' },
    { name: 'JavaScript', icon: faJs, color: 'text-yellow-400' },
    { name: 'React', icon: faReact, color: 'text-cyan-400' },
    { name: 'Vue.js', icon: faVuejs, color: 'text-green-400' },
    { name: 'Node.js', icon: faNodeJs, color: 'text-green-500' },
  ];

  const otherSkills = [
    { name: 'Express.js', icon: faNodeJs, color: 'text-green-500' },
    { name: 'MongoDB', icon: null, color: 'text-green-500', label: 'MongoDB' },
    { name: 'PostgreSQL', icon: null, color: 'text-blue-400', label: 'PostgreSQL' },
    { name: 'Firebase', icon: null, color: 'text-orange-400', label: 'Firebase' },
    { name: 'Git', icon: faGitAlt, color: 'text-red-400' },
    { name: 'GitHub', icon: faGithub, color: 'text-gray-300' },
    { name: 'Docker', icon: faDocker, color: 'text-blue-400' },
    { name: 'Go', icon: faGolang, color: 'text-cyan-400' },
    { name: 'Tailwind CSS', icon: null, color: 'text-primary', label: 'Tailwind' },
    { name: 'GraphQL', icon: null, color: 'text-pink-400', label: 'GraphQL' },
    { name: 'REST API', icon: null, color: 'text-primary', label: 'REST' },
    { name: 'TypeScript', icon: null, color: 'text-blue-400', label: 'TypeScript' },
  ];

  const renderSkill = (skill, index) => (
    <div key={skill.name} className="skill-card" data-aos="fade-up" data-aos-delay={index * 40} tabIndex={0} aria-label={skill.name}>
      {skill.icon ? (
        <FontAwesomeIcon icon={skill.icon} className={`skill-card-icon text-3xl md:text-4xl ${skill.color}`} />
      ) : (
        <div className={`skill-card-icon text-3xl md:text-4xl ${skill.color} font-bold`}>{skill.label?.substring(0, 2).toUpperCase()}</div>
      )}
      <p className="skill-card-name">{skill.name}</p>
    </div>
  );

  return (
    <section id="skills" className="section-alt">
      <div className="container">
        <SectionHeader title="Skills & Technologies" subtitle="Tools and technologies I use to bring ideas to life" />

        <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-4 border-l-4 border-primary pl-3" data-aos="fade-up">
          Core Stack
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-10">{coreSkills.map((skill, index) => renderSkill(skill, index))}</div>

        <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-4 border-l-4 border-primary/60 pl-3" data-aos="fade-up">
          Also Proficient In
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">{otherSkills.map((skill, index) => renderSkill(skill, index + coreSkills.length))}</div>
      </div>
    </section>
  );
}
