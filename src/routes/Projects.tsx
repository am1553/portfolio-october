import KanbanBoardImage from "../assets/kanban-board.png";
import InvoicesImage from "../assets/invoices.png";
import PhotoSnapImage from "../assets/photosnap.png";
import EntertainmentImage from "../assets/entertainment.png";
import AudioPhileImage from "../assets/audiophile.png";
import PersonalFinanceImage from "../assets/personal-finance.png";
import NotesAppImage from "../assets/notes-app-project.png";
import ProjectCard from "../components/ProjectCard";
const data = [
  {
    img: NotesAppImage,
    title: "Notes",
    description:
      "A full-stack notes management web application developed with React and Express, leveraging TypeScript for robustness and PostgreSQL for enhanced performance and scalability. The project showcases a strong understanding of UI layout design, database optimization, and efficient data management practices.",
    tags: [
      "React.js",
      "Express.js",
      "TypeScript",
      "PostgresSQL",
      "Unit Testing",
      "TailwindCSS",
      "JWT Authentication",
    ],
    live: "https://notesapp-react-akzo.onrender.com/",
    code: "https://github.com/am1553/notesapp-react",
  },
  {
    img: PersonalFinanceImage,
    title: "Personal Finance",
    description:
      "A personal finance dashboard application to manage budget and transactions. Built using Next.js and unit testing done using vitest. Currently undergoing backend development where Docker and ECS will be used on AWS. Clerk is used for user authentication.",
    tags: [
      "Next.js",
      "TypeScript",
      "Vitest",
      "TailwindCSS",
      "Shadcn",
      "Docker",
      "AWS",
      "Clerk",
    ],
    live: "https://www.personal-finance.dev",
    code: "https://github.com/am1553/personal-finance",
  },

  {
    img: KanbanBoardImage,
    title: "Kanban Board",
    description:
      "A Full Stack productivity tool built using the PERN stack with JWT authentication and authorization.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgresSQL",
      "TypeScript",
      "TailwindCSS",
    ],
    live: "https://kanban-react-app.onrender.com/auth",
    code: "https://github.com/am1553/kanban-client",
  },
  {
    img: InvoicesImage,
    title: "Invoice Management",
    description:
      "A CRUD web app to keep a record of invoices integrated with Google Firebase.",
    tags: ["React.js", "TailwindCSS", "Firebase"],
    live: "https://am1553.github.io/invoice-app/",
    code: "https://github.com/am1553/invoice-app",
  },
  {
    img: AudioPhileImage,
    title: "Audiophile E-commerce",
    description:
      "A complete e-commerce CRUD web app made to be responsive across all devices. ",
    tags: ["React.js", "TypeScript", "Redux", "TailwindCSS"],
    live: "https://am1553.github.io/audiophile/",
    code: "https://github.com/am1553/audiophile",
  },
  {
    img: EntertainmentImage,
    title: "Entertainment",
    description:
      "A SPA for entertainment platform showcasing movies and shows.",
    tags: ["React.js", "SCSS"],
    live: "https://am1553.github.io/entertainment-web-app/",
    code: "https://github.com/am1553/entertainment-web-app",
  },

  {
    img: PhotoSnapImage,
    title: "PhotoSnap Art Gallery",
    description:
      "A landing page for art gallery with animations for better user experience. ",
    tags: ["React.js", "GSAP", "SCSS"],
    live: "https://am1553.github.io/photosnap/",
    code: "https://github.com/am1553/photosnap",
  },
];
function Projects() {
  return (
    <div className="px-6">
      <ul className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
        {data.map((project, i) => (
          <li>
            <ProjectCard data={project} key={i} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
