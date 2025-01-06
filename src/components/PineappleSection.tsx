import React from "react";
import pineappleBG from "../assets/pineappleBG.png";
import pineapple from "../assets/svg/pineapple.svg";
const PineappleSection: React.FC = () => {
  return (
    <section
      className="block w-full bg-white py-[4.5rem] px-[15rem] bg-no-repeat bg-center bg-cover bg-fixed"
      style={{ backgroundImage: `url(${pineappleBG})` }}>
      <div className="container max-w-[1440px] mx-auto flex flex-row items-center justify-start lg:h-[550px]">
        <div className="flex flex-col items-start justify-start w-4/12 px-6 py-5 bg-white rounded-xl">
          <img
            src={pineapple}
            alt=""
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
