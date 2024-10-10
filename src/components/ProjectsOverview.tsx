import ManAtDeskImage from "../assets/man-at-desk.svg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
function ProjectsOverview() {
  return (
    <div className="px-8 flex flex-col gap-8 z-10">
      <img
        src={ManAtDeskImage}
        alt="man at desk working"
        className="h-96 mx-auto"
      />
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-2xl font-semibold text-center">
          Developed over <span className="text-[#E74854]">30</span> projects
          using modern technologies, with a strong desire to continue learning
          and growing as a software engineer.
        </p>
        <button
          type="button"
          className="flex gap-2 pl-6 pr-4 h-10 rounded-full items-center bg-deep-purple text-desaturated-white"
        >
          <span className="font-semibold">View Projects</span>
          <KeyboardArrowRightIcon />
        </button>
      </div>
    </div>
  );
}

export default ProjectsOverview;
