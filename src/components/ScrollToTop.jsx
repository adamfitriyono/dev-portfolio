import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useScrollToTop } from '../hooks';

export default function ScrollToTop() {
  const { isVisible, scrollToTop } = useScrollToTop();

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 btn-primary !p-0 w-11 h-11 rounded-full shadow-soft-lg z-40 animate-fade-up group"
      aria-label="Scroll to top"
    >
      <FontAwesomeIcon icon={faArrowUp} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  );
}
