import { GitHub, LinkedIn } from "@mui/icons-material";
import FooterImage from "../assets/footer-image.svg";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-gray w-full relative flex flex-col py-20 items-center mt-24 lg:mt-40 xl:mt-52 md:justify-center md:flex-row lg:gap-20 xl:gap-28 rounded-t-[4rem] shadow-lg">
      <img src={FooterImage} alt="" className="h-72 md:h-94 lg:h-96" />
      <div className="flex flex-col gap-4">
        <nav className="flex gap-2 list-none items-center justify-center text-xl md:text-2xl">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          {/* <div className="h-1 w-1 rounded-full bg-desaturated-white" />
          <Link to={"/about-me"}>
            <li>About Me</li>
          </Link> */}
          <div className="h-1 w-1 rounded-full bg-desaturated-white" />
          <Link to={"/projects"}>
            <li>Projects</li>
          </Link>
        </nav>
        <div className="flex gap-4 items-center justify-center">
          <div className="">
            <a
              href="https://www.linkedin.com/in/aryanmehta-dev/"
              target="_blank"
            >
              <LinkedIn style={{ fontSize: "2rem" }} />
            </a>
          </div>
          <div className="">
            <a href="https://github.com/am1553" target="_blank">
              <GitHub style={{ fontSize: "2rem" }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
