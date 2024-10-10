import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function BackgroundImage() {
  return (
    <div className="h-72 bg-home-intro bg-center bg-no-repeat bg-cover lg:h-[40rem] lg:col-start-2 lg:max-w-[542px]" />
  );
}

function IntroText() {
  return (
    <div className="flex flex-col gap-2 lg:gap-4 max-lg:max-w-lg mx-auto lg:text-left">
      <span className="font-heading text-4xl lg:text-5xl xl:text-7xl font-bold">
        Full Stack Developer
      </span>
      <p className="text-xl lg:text-2xl opacity-60 max-w-xl font-semibold">
        With expertise in frontend development, I build scalable and robust
        applications, integrating UI/UX principles to deliver an optimal user
        experience and drive engagement.
      </p>
    </div>
  );
}

function ButtonWrapper() {
  return (
    <div className="flex gap-6 max-lg:mx-auto">
      <button
        type="button"
        className="flex gap-2 pl-6 pr-4 bg-deep-purple h-10 rounded-full items-center text-desaturated-white"
      >
        <span className="font-semibold">Let's Connect</span>
        <LinkedInIcon />
      </button>
      <button
        type="button"
        className="flex gap-2 pl-6 pr-4 h-10 rounded-full items-center text-deep-purple"
      >
        <span className="font-semibold">View CV</span>
        <KeyboardArrowRightIcon />
      </button>
    </div>
  );
}

function HomeIntro() {
  return (
    <div className="rounded-3xl overflow-clip text-center flex flex-col bg-pale-silver text-desaturated-black relative lg:grid lg:grid-cols-[auto_542px] lg:grid-rows-1">
      <BackgroundImage />
      <div className="flex flex-col gap-8 py-10 lg:col-start-1 lg:row-start-1 px-6 lg:px-12 justify-center w-fit">
        <IntroText />
        <ButtonWrapper />
      </div>
    </div>
  );
}

export default HomeIntro;
