import React from "react";
import menuBg from "../assets/menuBg.png";
import sectionStar from "../assets/svg/section_star.svg";
import MenuIcon from "../assets/svg/menu_icon.svg";
import BeetrootImg from "../assets//fruit-images/beetroot.jpg";
import Energy from "../assets/svg/Energy.svg";
import { Link } from "react-router-dom";
import Green from "../assets/svg/Green.svg";
const CheckMenu: React.FC = () => {
  return (
    <section
      className="block w-full bg-white h-fit py-[4.5rem] px-[15rem] bg-no-repeat bg-center bg-cover bg-fixed"
      style={{ backgroundImage: `url(${menuBg})` }}>
      <div className="container max-w-[1440px] mx-auto flex flex-row items-center justify-start h-fit px-[15rem] py-[11.8rem]">
        <div
          className=""
          id="Card">
          <img
            src={BeetrootImg}
            alt="Image of a glass of Beetboost"
            height={15}
          />
          <img
            src={Green}
            className="absolute top-[.75rem] left-[.75rem]"
          />
          <div className="bg-white px-[1.5rem] py-[0.75rem] flex flex-col items-start justify-center gap-[0.35rem]">
            <p>Energy</p>
            <h5>Beetboost</h5>
            <div className="">
              <div className="text-[]"></div>
            </div>{" "}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[1rem]">
          <div className="flex flex-col items-center justify-center">
            <img src={sectionStar} />
            <p className="font-medium text-slurppiespink">OUR MENU</p>
          </div>
          <h4 className="font-bold text-[3.5rem] text-headingtextblack text-center max-w-[41rem]">
            The{" "}
            <span className="text-slurppiespink font-[Pacifico]">Best </span>
            Menu Options
          </h4>
          <p>
            Discover the perfect blend of nature’s finest fruits in every
            refreshing sip. Your daily dose of happiness and great health in a
            glass.{" "}
          </p>
          <button className="flex flex-row gap-2 px-4 py-2 text-white font-normal rounded-full border-[.25rem] border-[#FFCCEB] bg-slurppiespink">
            <Link to="/menu" />
            Check Our Menu <img src={MenuIcon} />
          </button>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default CheckMenu;
