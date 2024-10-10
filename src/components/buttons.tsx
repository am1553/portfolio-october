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

  React.useEffect(() => {
    handleShowNav(isOpen);
    const body = document.querySelector("body");
    if (isOpen) {
      body!.style.overflow = "hidden";
    } else {
      body!.style.overflow = "auto";
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
