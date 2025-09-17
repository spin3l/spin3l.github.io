import AngularIcon from "../components/icons/AngularIcon.astro";
import Css3Icon from "../components/icons/Css3Icon.astro";
import DjangoIcon from "../components/icons/DjangoIcon.astro";
import Html5Icon from "../components/icons/Html5Icon.astro";
import JavaIcon from "../components/icons/JavaIcon.astro";
import PythonIcon from "../components/icons/PythonIcon.astro";
import ReactIcon from "../components/icons/ReactIcon.astro";
import SpringIcon from "../components/icons/SpringIcon.astro";
import TailwindIcon from "../components/icons/TailwindIcon.astro";
import TypescriptIcon from "../components/icons/TypescriptIcon.astro";

const TAGS = {
  DJANGO: {
    name: "Django",
    class: "bg-[#145A32] text-white",
    icon: DjangoIcon,
  },
  PYTHON: {
    name: "Python",
    class: "bg-[#1E4B73] text-white",
    icon: PythonIcon,
  },
  JAVA: {
    name: "Java",
    class: "bg-[#204080] text-white", // improved contrast for readability
    icon: JavaIcon,
  },
  TYPESCRIPT: {
    name: "TypeScript",
    class: "bg-[#007ACC] text-white",
    icon: TypescriptIcon,
  },
  HTML: {
    name: "HTML5",
    class: "bg-[#E44D26] text-white",
    icon: Html5Icon,
  },
  CSS: {
    name: "CSS3",
    class: "bg-[#264de4] text-white",
    icon: Css3Icon,
  },
  TAILWIND: {
    name: "TailwindCSS",
    class: "bg-[#1e293b] text-white",
    icon: TailwindIcon,
  },
  ANGULAR: {
    name: "AngularJS",
    class: "bg-[#B52E31] text-white",
    icon: AngularIcon,
  },
  CVAT: {
    name: "CVAT",
    class: "bg-[#CC7A1E] text-white",
    icon: undefined,
  },
  SPRING: {
    name: "Spring",
    class: "bg-[#3A6F22] text-white",
    icon: SpringIcon,
  },
  PYTORCH: {
    name: "PyTorch",
    class: "bg-[#EE4C2C] text-white",
    icon: undefined,
  },
  SKLEARN: {
    name: "Scikit-Learn",
    class: "bg-[#C76A0E] text-white",
    icon: undefined,
  },
  TKINTER: {
    name: "Tkinter",
    class: "bg-[#CC9A06] text-white",
    icon: undefined,
  },
  BOOTSTRAP: {
    name: "Bootstrap",
    class: "bg-[#7952B3] text-white",
    icon: undefined,
  },
  REACT: {
    name: "React",
    class: "bg-[#222] text-white",
    icon: ReactIcon,
  },
  DRF: {
    name: "Django Rest Framework",
    class: "bg-[#3A6F22] text-white",
    icon: DjangoIcon,
  },
};

export default TAGS;
