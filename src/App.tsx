import { GitHub, LinkedIn } from "@mui/icons-material";
import Header from "./components/Header";
import HomeIntro from "./components/HomeIntro";
import Lines from "./components/Lines";
import ProblemSolving from "./components/ProblemSolving";
import ProjectsOverview from "./components/ProjectsOverview";
import Technologies from "./components/Technologies";
import FooterImage from "./assets/footer-image.svg";
function Footer() {
  return (
    <footer className="bg-gray w-full relative flex flex-col gap-6 py-12 items-center">
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

function App() {
  return (
    <div className="w-screen overflow-hidden max-h-fit relative">
      <Lines />
      <Header />
      <div className="flex flex-col  max-w-screen-2xl xl:mx-auto gap-24 lg:gap-40">
        <HomeIntro />
        <ProjectsOverview />
        <Technologies />
        <ProblemSolving />
        <Footer />
      </div>
    </div>
  );
}

export default App;
