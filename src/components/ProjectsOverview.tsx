import { Link } from "react-router-dom";
import ManAtDeskImage from "../assets/man-at-desk.svg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
function ProjectsOverview() {
  return (
    <div className="px-6 flex flex-col gap-8 z-10 md:grid md:grid-cols-[auto_1fr]">
      <img
        src={ManAtDeskImage}
        alt="man at desk working"
        className="h-96 mx-auto lg:h-[34rem] xl:h-[42rem]"
      />
      <div className="flex flex-col items-center justify-center gap-4 md:items-start lg:gap-8">
        <p className="text-3xl font-semibold text-center md:text-left md:text-4xl lg:text-5xl xl:text-6xl max-w-4xl">
          <span className="opacity-70">Developed over</span>{" "}
          <span className="text-[#E74854]">30</span>{" "}
          <span className="opacity-70">
            projects using modern technologies, with a strong desire to continue
            learning and growing as a software engineer.
          </span>
        </p>
        <Link
          to="/projects"
          className="flex gap-2 pl-6 pr-4 h-10 rounded-full items-center bg-deep-purple text-desaturated-white"
        >
          <span className="font-semibold">View Projects</span>
          <KeyboardArrowRightIcon />
        </Link>
      </div>
    </div>
  );
}

export default ProjectsOverview;
