import React from "react";
import { HamburgerBtn } from "./buttons";

function Nav() {
  return (
    <nav className="fixed top-20 left-0 right-0 list-none text-2xl p-6 bg-desaturated-black z-50">
      <li>Home</li>
      <li>About Me</li>
      <li>Projects</li>
    </nav>
  );
}

function MobileNav() {
  const [showNav, setShowNav] = React.useState<boolean>(false);

  const handleShowNav = (value: boolean) => {
    setShowNav(value);
  };

  return (
    <div className="relative md:hidden">
      <HamburgerBtn handleShowNav={handleShowNav} />
      {showNav && <Nav />}
    </div>
  );
}

function DesktopNav() {
  return (
    <div className="max-md:hidden">
      <nav className="list-none flex gap-4 text-lg lg:text-xl lg:gap-14 uppercase tracking-wider font-heading">
        <li>Home</li>
        <li>About Me</li>
        <li>Projects</li>
      </nav>
    </div>
  );
}

function Header() {
  return (
    <header className="h-20 md:h-32 w-full flex items-center justify-between max-w-screen-2xl mx-auto px-8 lg:px-12">
      <span className="font-body text-3xl md:text-4xl lg:text-5xl font-bold">
        aryan mehta
      </span>
      <MobileNav />
      <DesktopNav />
    </header>
  );
}

export default Header;
