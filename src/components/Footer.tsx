import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="block w-full bg-white h-fit">
      <div className="container max-w-[1440px] mx-auto flex flex-row items-center justify-between py-[1.91rem]">
        <p>Privacy Policy</p>
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