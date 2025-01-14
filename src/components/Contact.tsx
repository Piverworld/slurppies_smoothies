import React from "react";
import contactBg from "../assets/juicy-strawberries-white-background.png";
import sectionStar from "../assets/svg/section_star.svg";
import phoneIcon from "../assets/svg/phone_icon.svg";
import { Link } from "react-router-dom";
const Contact: React.FC = () => {
  return (
    <section
      className="block w-full bg-white h-fit max-sm:py-[2rem] max-sm:px-[4rem]  md:py-[8rem] md:px-[10rem] lg:py-[11.5rem] lg:px-[15rem] bg-no-repeat bg-left-top bg-cover"
      style={{ backgroundImage: `url(${contactBg})` }}>
      <div className="container max-w-[1440px] mx-auto flex flex-row items-center justify-center sm:w-3/4 md:w-4/5 lg:w-5/12 h-fit before:absolute before:lg:content-[url('src/assets/svg/contact_para_bg.svg')] before:max-sm:bg-transparent before:backdrop-blur-[.170rem] before:max-sm:h-[15rem] before:max-sm:w-[24rem]">
        <div className="flex flex-col items-center justify-center gap-[1rem] text-center z-10">
          <div className="flex flex-col items-center justify-center">
            <img src={sectionStar} />
          </div>
          <h4 className="font-bold max-sm:text-[1.2rem] text-[2.5rem] text-headingtextblack text-center lg:max-w-[41rem]">
            <span className="text-slurppiespink font-[Pacifico]">
              Got Questions?{" "}
            </span>
            <br />
            We're Here to Help
          </h4>
          <p className="max-sm:text-[.9rem]">
            Discover the perfect blend of nature’s finest fruits in every
            refreshing sip. Your daily dose of happiness and great health in a
            glass.
          </p>
          <Link
            id="btn"
            to="/contact-us"
            className="flex flex-row gap-2 px-4 py-2 text-white hover:text-white font-normal rounded-full border-[.25rem] border-[#FFCCEB] bg-slurppiespink">
            <img src={phoneIcon} /> Contact us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
