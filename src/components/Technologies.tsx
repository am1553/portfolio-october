import TechnologyCard from "./TechnologyCard";
import HTMLIcon from "../assets/html-5.png";
import CSSIcon from "../assets/css-3.png";
import JSIcon from "../assets/java-script.png";
import PythonIcon from "../assets/python.png";
import ReactIcon from "../assets/reacticon.png";
const data = [
  {
    label: "HTML",
    icon: HTMLIcon,
    description:
      "Strong understanding of semantic markup to enhance SEO, with a focus on building and submitting accessible forms.",
    coverPosition: "top",
    cover: "bg-graphic-one",
  },
  {
    label: "CSS",
    icon: CSSIcon,
    description:
      "Experienced in building responsive designs with media queries, and proficient in flexbox and grid for efficient layout structuring.",
    coverPosition: "top",
    cover: "bg-graphic-two",
  },
  {
    label: "JavaScript",
    icon: JSIcon,
    description:
      "Strong functional programming skills and a solid grasp of the event loop for efficient asynchronous handling. ",
    coverPosition: "top",
    cover: "bg-graphic-three",
  },
  {
    label: "Python",
    icon: PythonIcon,
    description: "",
    coverPosition: "top",
    cover: "bg-graphic-four",
  },
  {
    label: "ReactJS",
    icon: ReactIcon,
    description: "",
    coverPosition: "bottom",
    cover: "bg-graphic-one",
  },
  {
    label: "NodeJS",
    icon: "",
    description: "",
    coverPosition: "bottom",
    cover: "bg-graphic-two",
  },
  {
    label: "PostgresSQL",
    icon: "",
    description: "",
    coverPosition: "bottom",
    cover: "bg-graphic-three",
  },
  {
    label: "MongoDB",
    icon: "",
    description: "",
    coverPosition: "bottom",
    cover: "bg-graphic-four",
  },
];

function Technologies() {
  return (
    <div className="bg-gray px-8 py-20 flex flex-col gap-8 ">
      {data.map((tech, i) => {
        return <TechnologyCard key={i} data={tech} />;
      })}
    </div>
  );
}

export default Technologies;
