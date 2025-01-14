import React from "react";
import { useMediaQuery } from "react-responsive";
const Footer: React.FC = () => {

  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  })
  return (
    <footer className="block w-full bg-white h-fit">
      <div className="container max-w-[1440px] mx-auto flex flex-row items-center justify-between py-[1.91rem] px-2 sm:px-8 text-[.75rem] sm:text-[.7rem] lg:text-[1.12rem] ">
        {isDesktop ? <p>Privacy Policy</p> : " "}
        <p>&copy; 2024 Slurppies. All rights reserved.</p>
        <p>
          <span className="text-headingtextblack font-[Pacifico]">
            Made by{" "}
          </span>
          Piver World
        </p>
      </div>
    </footer>
  );
};

export default Footer;
