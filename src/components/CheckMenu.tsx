import React from "react";
import menuBg from "../assets/menuBg.png";
import sectionStar from "../assets/svg/section_star.svg";
import MenuIcon from "../assets/svg/menu_icon.svg";
import BeetrootImg from "/fruit-images/beetroot.jpg";
import { Link } from "react-router-dom";
import Green from "/svg/Energy.svg";
const CheckMenu: React.FC = () => {
  return (
    <section
      className="block w-full bg-white h-fit max-sm:py-[2rem] max-sm:px-[2.5rem] max-md:py-[3.5rem] max-md:px-[2rem] md:py-[3.5rem] md:px-[2rem] lg:py-[8rem] lg:px-[2.5rem] bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${menuBg})` }}>
      <div className="container max-w-[1440px] mx-auto h-fit ">
        <div className="grid items-center max-lg:justify-center max-lg:col-span-1 max-lg:row-span-3 lg:col-span-3 max-sm:gap-6 max-md:gap-6 md:gap-2 lg:gap-6">
          <div
            className="max-lg:row-start-2 lg:col-start-1 rounded-[1rem] overflow-hidden h-fit"
            id="Card">
            <img
              src={BeetrootImg}
              alt="Image of a glass of Beetboost"
              className="h-[16rem] w-full object-cover align-middle"
            />
            <img
              src={Green}
              className="relative -top-[14.85rem] left-[.85rem]"
            />
            <div className="bg-white px-[1.5rem] py-[0.75rem] flex flex-col items-start justify-center gap-[0.15rem] -mt-[2.08rem]">
              <p className="font-bold uppercase text-[#E0B000] text-[.875rem] tracking-[.12rem]">
                Energy
              </p>
              <h5 className="text-[2rem] font-[700]">Beetboost</h5>

              <div className="text-[#787878]">
                <p>Watermelon, Beetroot, Banana, Pawpaw</p>
              </div>
            </div>
          </div>
          <div className="max-lg:row-start-1 lg:col-start-2 flex flex-col items-center justify-center gap-[1rem] max-md:max-w-[32rem]  md:max-w-[42rem] lg:max-w-[24rem] xl:max-w-[32rem] text-center justify-self-center">
            <div className="flex flex-col items-center justify-center">
              <img src={sectionStar} />
              <p className="font-medium text-slurppiespink">OUR MENU</p>
            </div>
            <h4 className="font-bold text-[3.5rem] text-headingtextblack text-center max-w-[41rem]">
              The{" "}
              <span className="text-slurppiespink font-[Pacifico]">Best </span>
              Menu Options
            </h4>
            <p className="">
              Discover the perfect blend of nature’s finest fruits in every
              refreshing sip. Your daily dose of happiness and great health in a
              glass.{" "}
            </p>
            <Link
              id="btn"
              to="/menu"
              className="flex flex-row gap-2 px-4 py-2 text-white hover:text-white font-normal rounded-full border-[.25rem] border-[#FFCCEB] bg-slurppiespink">
              Check Our Menu <img src={MenuIcon} />
            </Link>
          </div>
          <div
            className="max-lg:row-start-3 lg:col-start-3 rounded-[1rem] overflow-hidden h-fit"
            id="Card">
            <img
              src={BeetrootImg}
              alt="Image of a glass of Beetboost"
              className="h-[16rem] w-full object-cover align-middle"
            />
            <img
              src={Green}
              className="relative -top-[14.85rem] left-[.85rem]"
            />
            <div className="bg-white px-[1.5rem] py-[0.75rem] flex flex-col items-start justify-center gap-[0.15rem] -mt-[2.08rem]">
              <p className="uppercase text-[#E0B000] font-bold text-[.875rem] tracking-[.12rem]">
                Energy
              </p>
              <h5 className="text-[2rem] font-[700]">Beetboost</h5>
              <div className="text-[#787878]">
                <p>Watermelon, Beetroot, Banana, Pawpaw</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckMenu;
