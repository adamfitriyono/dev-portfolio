import { useTypewriter } from '../hooks';

const ROLES = ['Fullstack Web Developer', 'Machine Learning Engineer', 'Keep Learning.'];

export default function TypewriterRole() {
  const text = useTypewriter(ROLES);

  return (
    <p className="text-lg md:text-xl font-semibold text-primary min-h-8 md:min-h-9 flex items-center">
      <span aria-live="polite">{text}</span>
      <span className="inline-block w-0.5 h-[1.15em] bg-primary ml-1.5 rounded-full animate-cursor-blink" aria-hidden="true" />
    </p>
  );
}
