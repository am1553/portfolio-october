import { Link } from "react-router-dom";

function DesktopNav() {
  return (
    <div className="max-md:hidden">
      <nav className="list-none flex gap-4 text-lg lg:text-xl lg:gap-14 uppercase tracking-wider font-heading">
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/about-me"}>
          <li>About Me</li>
        </Link>
        <Link to={"/projects"}>
          <li>Projects</li>
        </Link>
      </nav>
    </div>
  );
}

export default DesktopNav;
