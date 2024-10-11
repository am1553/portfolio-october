import { GitHub } from "@mui/icons-material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
function ProjectCard({
  data,
}: {
  data: {
    img: string;
    title: string;
    description: string;
    tags: string[];
    live: string;
    code: string;
  };
}) {
  return (
    <div className="project-card bg-gray shadow-lg rounded-2xl overflow-clip flex flex-col gap-8 pb-8 h-full">
      <div className="relative">
        <img src={data.img} alt="" />
        <div className="absolute h-1/3 bg-gradient-to-b from-[#ffffff00] to-gray w-full left-0 right-0 bottom-0 z-10"></div>
      </div>
      <div className="px-6 flex flex-col gap-4 flex-1">
        <div className="flex flex-col gap-1">
          <span className="text-2xl font-heading font-semibold">
            {data.title}
          </span>
          <p className="">{data.description}</p>
        </div>
        <div className="flex flex-wrap gap-2 text-desaturated-white">
          {data.tags.map((tag, i) => (
            <label
              className="px-3 py-1 text-sm bg-desaturated-black rounded-full"
              key={i}
            >
              {tag}
            </label>
          ))}
        </div>
      </div>
      <div className="flex gap-4 justify-end px-6 ">
        <a
          href={data.code}
          target="_blank"
          className="h-10 w-10 bg-gray-700 hover:bg-gray-800 focus:bg-gray-800 hover:scale-105 rounded-full text-desaturated-white flex items-center justify-center transition-all overflow-clip"
        >
          <GitHub style={{ fontSize: "32px" }} />
        </a>
        <a
          href={data.live}
          target="_blank"
          className="relative flex gap-2 pl-6 pr-4 h-10 rounded-full bg-gray-700 text-desaturated-white items-center shadow-md transition-transform duration-500 before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:bg-gradient-to-r before:from-[#00000080] before:to-[#00000050] before:scale-x-0 hover:before:scale-x-100 before:-z-10 before:transition-transform before:duration-500 before:rounded-full before:origin-left scale-100 overflow-hidden"
        >
          <span>View</span>
          <ChevronRightIcon />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
