import React from "react";
import contactBg from "../assets/juicy-strawberries-white-background.png";
import sectionStar from "../assets/svg/section_star.svg";
import phoneIcon from "../assets/svg/phone_icon.svg";
import { Link } from "react-router-dom";
const Contact: React.FC = () => {
  return (
    <section
      className="block w-full bg-white h-fit max-sm:py-[2rem] max-sm:px-[4rem] max-md:py-[8rem] max-md:px-[10rem] max-lg:py-[8rem] max-lg:px-[2.5rem] lg:py-[8rem] lg:px-[2.5rem] bg-no-repeat bg-cover bg-left-bottom"
      style={{ backgroundImage: `url(${contactBg})` }}>
      <div className="container max-w-[1440px] mx-auto flex flex-row items-center justify-center h-fit overflow-hidden relative">
        <div className="w-fit rounded-full before:content-[url('/svg/contact_para_bg.svg')] before:absolute before:w-[20rem] before:h-[10rem] before:object-contain max-sm:w-full max-md:w-11/12">
          <div className="flex flex-col items-center justify-center gap-[1rem] text-center z-10 relative">
            <div className="flex flex-col items-center justify-center">
              <img src={sectionStar} />
            </div>
            <h4 className="font-bold max-md:text-4xl md:text-4xl lg:text-6xl text-headingtextblack text-center max-lg:max-w-[32rem] lg:max-w-[40rem]">
              <span className="text-slurppiespink font-[Pacifico]">
                Got Questions?{" "}
              </span>
              <br />
              We're Here to Help
            </h4>
            <p className="max-sm:text-[.9rem] max-w-xs  lg:max-w-[24rem]">
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
      </div>
    </section>
  );
};

export default Contact;
