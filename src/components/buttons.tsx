import React from "react";

export const HamburgerBtn = ({
  handleShowNav,
}: {
  handleShowNav: (value: boolean) => void;
}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => setIsOpen(false);

  React.useEffect(() => {
    handleShowNav(isOpen);
    const body = document.querySelector("body");
    const root = document.getElementById("root");
    const overlay = document.createElement("div");
    overlay!.style.position = "absolute";
    overlay!.style.top = "80px";
    overlay!.style.bottom = "0";
    overlay!.style.left = "0";
    overlay!.style.right = "0";
    overlay!.style.backgroundColor = "#00000080";
    overlay!.style.zIndex = "10";
    overlay!.style.height = "100vh";
    overlay!.style.width = "100vw";
    overlay.id = "overlay";
    if (isOpen) {
      body!.style.overflow = "hidden";
      root!.appendChild(overlay);
      overlay.addEventListener("click", handleClose);
    } else {
      body!.style.overflow = "auto";
      overlay.removeEventListener("click", handleClose);
      document.getElementById("overlay")?.remove();
    }
  }, [isOpen]);

  return (
    <button
      type="button"
      onClick={toggleOpen}
      className={`relative h-7 w-6 origin-center ${
        isOpen
          ? "after:transition-transform before:origin-center after:origin-center before:transition-transform before:h-[2px] after:h-[2px] before:bg-desaturated-white after:bg-desaturated-white before:w-full after:w-full before:absolute after:absolute before:top-2/4 after:top-2/4 before:rotate-45 after:-rotate-45 before:left-0 after:left-0"
          : "after:transition-transform before:origin-center after:origin-center before:transition-transform before:h-[2px] after:h-[2px] before:w-full after:w-full before:bg-desaturated-white after:bg-desaturated-white before:absolute after:absolute before:top-2 after:bottom-2 before:left-0 after:left-0"
      }`}
    />
  );
};
