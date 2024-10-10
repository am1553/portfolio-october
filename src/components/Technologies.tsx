import TechnologyCard from "./TechnologyCard";
import HTMLIcon from "../assets/html-5.png";
import CSSIcon from "../assets/css-3.png";
import JSIcon from "../assets/java-script.png";
import PythonIcon from "../assets/python.png";
import ReactIcon from "../assets/reacticon.png";
import NodeJSIcon from "../assets/nodejs.png";
import PostgresSQLIcon from "../assets/postgressql.png";
import MongoDBIcon from "../assets/mongodb.svg";
const data = [
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
    description:
      "A good understanding of OOP principles to solve complex problems and build RESTful APIs.",
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
    icon: NodeJSIcon,
    description: "",
    coverPosition: "bottom",
    cover: "bg-graphic-two",
  },
  {
    label: "PostgresSQL",
    icon: PostgresSQLIcon,
    description: "",
    coverPosition: "bottom",
    cover: "bg-graphic-three",
  },
  {
    label: "MongoDB",
    icon: MongoDBIcon,
    description: "",
    coverPosition: "bottom",
    cover: "bg-graphic-four",
  },
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
];

function Technologies() {
  return (
    <div className="px-8 flex flex-col gap-8 z-10 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((tech, i) => {
        return <TechnologyCard key={i} data={tech} />;
      })}
    </div>
  );
}

export default Technologies;
