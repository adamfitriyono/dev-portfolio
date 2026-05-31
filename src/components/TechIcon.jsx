import htmlIcon from '../assets/icons/html.svg';
import cssIcon from '../assets/icons/css-3.svg';
import jsIcon from '../assets/icons/js.svg';
import pythonIcon from '../assets/icons/python.svg';
import streamlitIcon from '../assets/icons/icons8-streamlit.svg';
import geminiIcon from '../assets/icons/gemini-api.svg';
import yoloIcon from '../assets/icons/yolo.svg';

const techIconMap = {
  HTML: htmlIcon,
  CSS: cssIcon,
  CSS3: cssIcon,
  JavaScript: jsIcon,
  Python: pythonIcon,
  Streamlit: streamlitIcon,
  'Gemini API': geminiIcon,
  YOLOv8: yoloIcon,
};

export default function TechIcon({ tech, className = 'w-4 h-4 mr-1 inline-block align-text-bottom' }) {
  const src = techIconMap[tech];
  if (!src) return null;
  return <img src={src} alt={tech + ' icon'} className={className} />;
}
