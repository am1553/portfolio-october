import HomeIntro from "../components/HomeIntro";
import ProjectsOverview from "../components/ProjectsOverview";
import Technologies from "../components/Technologies";
import ProblemSolving from "../components/ProblemSolving";

function Home() {
  return (
    <div className="flex flex-col  max-w-screen-2xl xl:mx-auto gap-24 lg:gap-40 relative">
      <HomeIntro />
      <ProjectsOverview />
      <Technologies />
      <ProblemSolving />
    </div>
  );
}

export default Home;
