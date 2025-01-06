import React from "react";
import Mango from "../assets/svg/mango.svg";
import mangoSectionImg from "../assets/mango_section_img.png";
import "../index.css";
const MangoSection: React.FC = () => {
  return (
    <section className="block w-full bg-white py-[4.5rem] px-[15rem]">
      <div className="container max-w-[1440px] mx-auto flex flex-row items-center justify-start lg:h-[550px]">
        <div className="flex flex-col items-start justify-start w-7/12">
          <img
            src={mangoSectionImg}
            alt="An Image of a glass of mango smoothie"
          />
        </div>
        <div className="flex flex-col items-start justify-center w-2/6">
          <img
            src={Mango}
            alt="An icon of a Mango"
          />
          <h4 className="font-bold text-[1.5rem] text-headingtextblack">
            People's Choice
          </h4>
          <p>
            Mangoes are known as the “king of fruits” and contain over 20
            different vitamins and minerals! This makes them a powerhouse for
            nutrition.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};
export default MangoSection;
