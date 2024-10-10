import { GitHub, LinkedIn } from "@mui/icons-material";
import FooterImage from "../assets/footer-image.svg";
function Footer() {
  return (
    <footer className="bg-gray w-full relative flex flex-col gap-6 py-20 items-center mt-24">
      <img src={FooterImage} alt="" className="w-3/5" />
      <nav className="flex gap-2 list-none items-center justify-center text-xl">
        <li>Home</li>
        <div className="h-1 w-1 rounded-full bg-desaturated-white" />
        <li>About Me</li>
        <div className="h-1 w-1 rounded-full bg-desaturated-white" />
        <li>Projects</li>
      </nav>
      <div className="flex gap-4 items-center justify-center">
        <div className="">
          <button type="button">
            <LinkedIn style={{ fontSize: "2rem" }} />
          </button>
        </div>
        <div className="">
          <button type="button">
            <GitHub style={{ fontSize: "2rem" }} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
