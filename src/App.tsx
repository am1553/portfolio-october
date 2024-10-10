import Header from "./components/Header";
import HomeIntro from "./components/HomeIntro";
import ProjectsOverview from "./components/ProjectsOverview";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="min-h-screen w-screen">
      <Header />
      <div className="flex flex-col  max-w-screen-2xl xl:mx-auto gap-24 lg:gap-40">
        <HomeIntro />
        <ProjectsOverview />
        <Technologies />
      </div>
    </div>
  );
}

export default App;
