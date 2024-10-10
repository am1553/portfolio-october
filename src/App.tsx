import Header from "./components/Header";
import HomeIntro from "./components/HomeIntro";
import ProblemSolving from "./components/ProblemSolving";
import ProjectsOverview from "./components/ProjectsOverview";
import Technologies from "./components/Technologies";

function Lines() {
  return (
    <div className="absolute top-20 flex flex-row justify-evenly w-full z-0 opacity-5">
      {Array.from({ length: 5 }).map((_, i) => {
        console.log(i);
        return (
          <div className="flex flex-col gap-8" key={i}>
            {Array.from({ length: 100 }).map((_, j) => {
              return (
                <div key={j} className="w-[1px] h-8 bg-desaturated-white" />
              );
            })}
          </div>
        );
      })}
    </div>
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
      </div>
    </div>
  );
}

export default App;
