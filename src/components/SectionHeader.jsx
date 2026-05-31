export default function SectionHeader({ badge, title, subtitle, align = 'center', className = '' }) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  const lineClass = align === 'center' ? 'mx-auto' : '';

  return (
    <div className={`mb-8 md:mb-10 ${alignClass} ${className}`} data-aos="fade-up">
      {badge && <span className="badge mb-4 inline-block">{badge}</span>}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 heading-accent">{title}</h2>
      {subtitle && (
        <p className={`text-muted max-w-2xl font-medium ${align === 'center' ? 'mx-auto' : ''} mb-4`}>
          {subtitle}
        </p>
      )}
      <div className={`accent-line ${lineClass}`} />
    </div>
  );
}
