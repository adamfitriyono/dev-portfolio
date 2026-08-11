import { useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faExternalLink } from '@fortawesome/free-solid-svg-icons';
import SectionHeader from './SectionHeader';

function CertificationCard({ year, title, issuer, description, certificate }) {
  return (
    <div className="rounded-2xl border border-gray-300/80 bg-white/60 p-4 md:p-5 dark:border-white/10 dark:bg-white/5">
      <div className="flex flex-col gap-3">
        {/* Title and Issuer */}
        <div>
          <h3 className="text-base md:text-lg font-semibold text-text-dark dark:text-text-light">{title}</h3>
          <p className="text-sm font-medium text-primary">{issuer}</p>
        </div>

        {/* Year and Certificate Button */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-text-muted dark:text-gray-400">{year}</span>
          {certificate && (
            <a
              href={certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center sm:justify-start gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-primary-hover dark:hover:bg-primary-hover"
            >
              View Certificate
              <FontAwesomeIcon icon={faExternalLink} className="text-[0.7rem]" />
            </a>
          )}
        </div>

        {/* Description */}
        <p className="text-sm md:text-[0.95rem] leading-relaxed text-text-muted dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}

function TimelineItem({ year, title, organization, description, isLast = false }) {
  return (
    <div className="relative pl-7 md:pl-8">
      <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full bg-primary shadow-[0_0_0_6px_rgba(232,80,2,0.14)] z-10" />
      {!isLast && <div className="absolute left-[0.4375rem] top-5 w-0.5 min-h-28 bg-gradient-to-b from-primary/60 via-primary/40 to-transparent" />}
      <div className="flex flex-col gap-1.5 md:flex-row md:items-start md:justify-between md:gap-4">
        <div>
          <h3 className="text-base md:text-lg font-semibold text-text-dark dark:text-text-light">{title}</h3>
          <p className="text-sm font-medium text-primary">{organization}</p>
        </div>
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-text-muted dark:text-gray-400 md:pt-1">{year}</span>
      </div>
      <p className="mt-2 text-sm md:text-[0.95rem] leading-relaxed text-text-muted dark:text-gray-400">{description}</p>
    </div>
  );
}

export default function About() {
  const [activeTab, setActiveTab] = useState('education');

  const timeline = useMemo(
    () => ({
      // Education data
      education: [
        {
          year: '2023 - Now',
          title: 'Universitas Dian Nuswantoro',
          organization: 'Informatics Engineering',
          description: 'Focused on software engineering, web development fundamentals, machine learning and deep learning',
        },
        {
          year: '2020 - 2023',
          title: 'SMK Negeri 8 Semarang',
          organization: 'Multimedia',
        },
      ],

      // Experience data
      experience: [
        {
          year: '2024 - Present',
          title: 'Senior Frontend Developer',
          organization: 'Creative Studio Indonesia',
          description: 'Leading the development of modern marketing websites and internal dashboards, with a focus on performance, accessibility, and scalable UI systems.',
        },
        {
          year: '2022 - 2024',
          title: 'Frontend Developer',
          organization: 'Freelance & Remote Clients',
          description: 'Built portfolio sites, landing pages, and admin interfaces for clients across different industries, translating business goals into polished interfaces.',
        },
      ],
    }),
    [],
  );

  // Certifications data
  const certifications = useMemo(
    () => [
      {
        year: '2026 [5 Bulan]',
        title: 'Coding Camp 2026 - Dicoding X DBS Foundation',
        issuer: 'Fullstack Web Developer',
        description: 'Validated skills in responsive UI development, component-based architecture, and modern frontend workflow practices.',
        certificate: 'https://www.dicoding.com/certificates',
      },
      {
        year: '2023',
        title: 'Responsive Web Design',
        issuer: 'freeCodeCamp',
        description: 'Completed a structured certification covering semantic HTML, accessibility basics, and responsive layouts for production-ready interfaces.',
        certificate: 'https://freecodecamp.org/certificates',
      },
    ],
    [],
  );

  const activeItems = timeline[activeTab];

  return (
    <section id="about" className="section-alt">
      <div className="container">
        <SectionHeader title="About Me" subtitle="Education and work experience at a glance" />

        <div className="mx-auto max-w-5xl" data-aos="fade-up">
          <div className="section-alt-card overflow-hidden rounded-[2rem] border border-gray-300/80 p-4 md:p-5 shadow-soft-lg dark:border-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-[1.5rem] bg-black/5 p-2 dark:bg-white/5">
              <button
                type="button"
                onClick={() => setActiveTab('education')}
                className={`h-14 rounded-2xl text-sm md:text-base font-semibold transition-all duration-300 ${
                  activeTab === 'education' ? 'bg-primary text-white' : 'bg-white/10 text-text-muted hover:bg-white/15 hover:text-text-light dark:bg-white/15 dark:text-gray-300 dark:hover:bg-white/20'
                }`}
                aria-pressed={activeTab === 'education'}
              >
                Education
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('experience')}
                className={`h-14 rounded-2xl text-sm md:text-base font-semibold transition-all duration-300 ${
                  activeTab === 'experience' ? 'bg-primary text-white' : 'bg-white/10 text-text-muted hover:bg-white/15 hover:text-text-light dark:bg-white/15 dark:text-gray-300 dark:hover:bg-white/20'
                }`}
                aria-pressed={activeTab === 'experience'}
              >
                Work Experience
              </button>
            </div>

            <div className="mt-5 rounded-[1.75rem] bg-surface-light/90 p-5 md:p-7 dark:bg-surface-dark-elevated/90">
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">{activeTab === 'education' ? 'Learning Path' : 'Professional Journey'}</p>
                    <h3 className="mt-2 text-2xl md:text-3xl font-bold text-text-dark dark:text-text-light">{activeTab === 'education' ? 'Formal study' : 'Roles and responsibilities'}</h3>
                  </div>
                </div>

                <div className="space-y-6">
                  {activeItems.map((item, index) => (
                    <TimelineItem key={`${item.year}-${item.title}`} {...item} isLast={index === activeItems.length - 1} />
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a href="/resume.pdf" download className="btn-primary inline-flex group">
                    <FontAwesomeIcon icon={faDownload} className="transition-transform duration-300 group-hover:translate-y-0.5" />
                    Download Resume
                  </a>
                </div>

                <div className="pt-4 md:pt-5 border-t border-gray-200/80 dark:border-white/10">
                  <div className="mb-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Certification</p>
                    <h3 className="mt-2 text-2xl md:text-3xl font-bold text-text-dark dark:text-text-light">Selected certificates</h3>
                  </div>

                  <div className="space-y-4">
                    {certifications.map((item) => (
                      <CertificationCard key={`${item.year}-${item.title}`} {...item} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
