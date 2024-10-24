import React from "react";
import { HamburgerBtn } from "./buttons";
import { Link } from "react-router-dom";
import DesktopNav from "./DesktopNav";

function Nav({ closeNav }: { closeNav: () => void }) {
  return (
    <nav className="fixed top-20 left-0 right-0 list-none text-2xl p-6 bg-desaturated-black z-50">
      <Link to={"/"} onClick={closeNav}>
        <li>Home</li>
      </Link>
      {/* <Link to={"/about-me"} onClick={closeNav}>
        <li>About Me</li>
      </Link> */}
      <Link to={"/projects"} onClick={closeNav}>
        <li>Projects</li>
      </Link>
    </nav>
  );
}

function MobileNav() {
  const [showNav, setShowNav] = React.useState<boolean>(false);

  const handleShowNav = (value: boolean) => {
    setShowNav(value);
  };

  const closeNav = () => setShowNav(false);

  return (
    <div className="relative md:hidden">
      <HamburgerBtn showNav={showNav} handleShowNav={handleShowNav} />
      {showNav && <Nav closeNav={closeNav} />}
    </div>
  );
}

function Header() {
  return (
    <header className="h-20 md:h-32 w-full flex items-center justify-between max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-0">
      <Link
        className="font-body text-3xl md:text-4xl lg:text-5xl font-bold text-white"
        to={"/"}
      >
        aryan mehta
      </Link>
      <MobileNav />
      <DesktopNav />
    </header>
  );
}

export default Header;
