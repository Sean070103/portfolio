import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaGithub,
  FaNodeJs,
  FaRobot,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiEthereum,
} from "react-icons/si";

export const AboutIcons = {
  python: <FaPython className="text-foreground" title="Python" size={24} />,
  html: <FaHtml5 className="text-foreground" title="HTML5" size={24} />,
  css: <FaCss3Alt className="text-foreground" title="CSS3" size={24} />,
  js: <FaJs className="text-foreground" title="JavaScript" size={24} />,
  ts: <SiTypescript className="text-foreground" title="TypeScript" size={24} />,
  react: <FaReact className="text-foreground" title="React" size={24} />,
  next: <SiNextdotjs className="text-foreground" title="Next.js" size={24} />,
  tailwind: (
    <SiTailwindcss className="text-foreground" title="Tailwind CSS" size={24} />
  ),
  figma: <FaFigma className="text-foreground" title="Figma" size={24} />,
  yolov8: (
    <FaRobot
      className="text-foreground"
      title="AI / Object Detection"
      size={24}
    />
  ),
  github: <FaGithub className="text-foreground" title="GitHub" size={24} />,
  node: <FaNodeJs className="text-foreground" title="Node.js" size={24} />,
  mongodb: <SiMongodb className="text-foreground" title="MongoDB" size={24} />,
  sepolia: <SiEthereum className="text-foreground" title="Sepolia" size={24} />,
};
