import React from "react";
import pineappleBG from "../assets/pineappleBG.png";
import pineapple from "../assets/svg/pineapple.svg";
const PineappleSection: React.FC = () => {
  return (
    <section
      className="block w-full bg-white max-sm:py-[2rem] max-sm:px-[2.5rem] sm:py-7 sm:px-5 md:py-[3.5rem] md:px-[2rem] lg:py-[8rem] lg:px-[2.5rem] bg-no-repeat bg-center bg-cover bg-fixed"
      style={{ backgroundImage: `url(${pineappleBG})` }}>
      <div className="container max-w-[1440px] mx-auto flex flex-row items-center justify-start lg:h-[550px]">
        <div className="flex flex-col items-start justify-start px-6 py-5 bg-white md:3/5 lg:w-4/12 rounded-xl">
          <img
            src={pineapple}
            alt="image of a pineapple"
          />
          <h4 className="font-bold text-[1.5rem] text-headingtextblack">
            People's Choice
          </h4>
          <p>
            Pineapples are packed with vitamin C for a healthy immune boost.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PineappleSection;
