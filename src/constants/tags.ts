import AngularIcon from "../components/icons/AngularIcon.astro";
import DjangoIcon from "../components/icons/DjangoIcon.astro";
import JavaIcon from "../components/icons/JavaIcon.astro";
import PythonIcon from "../components/icons/PythonIcon.astro";
import ReactIcon from "../components/icons/ReactIcon.astro";
import SpringIcon from "../components/icons/SpringIcon.astro";
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
    class: "bg-[#d6dba4] text-white",
    icon: JavaIcon,
  },
  TYPESCRIPT: {
    name: "TypeScript",
    class: "bg-[#007ACC] text-white",
    icon: TypescriptIcon,
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
