import React from "react";
import sectionStar from "../assets/svg/section_star.svg";
import strawberryGlass from "../assets/glass-pink-strawberry-milkshake.png";
import Greenery from "./design/Greenery";
import PinkArrow from "../assets/svg/Arrow 6-1.svg";
import GreenArrow from "../assets/svg/Arrow 6.svg";
/**
 * A strongly-typed functional component that renders a "Why Choose Us" section.
 *
 * @returns {JSX.Element} A JSX element representing the "Why Choose Us" section.
 */
const WhyChooseUs: React.FC = (): JSX.Element => {
  return (
    <section className="block w-full bg-white h-fit py-[4.5rem] px-[15rem]">
      <Greenery />
      <div className="container max-w-[1440px] mx-auto flex flex-col items-start justify-between">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-col items-start justify-start h-fit">
            <div className="flex flex-row items-center justify-center space-x-2">
              <img
                src={sectionStar}
                alt="Pink Star"
              />
              <p className="font-medium text-slurppiespink">
                WHY CHOOSE SLURPPIES
              </p>
            </div>
            <div className="">
              <h2 className="font-bold text-[3.5rem] text-headingtextblack max-w-[41rem]">
                From first sip to the last,{" "}
                <span className="text-slurppiespink font-[Pacifico]">
                  You will love it
                </span>
              </h2>
            </div>
          </div>
          <div className=" max-w-[26rem] font-">
            <p className="text-paragraphtextgray max-w-[26rem]">
              Discover the perfect blend of nature’s finest fruits in every
              refreshing sip. Your daily dose of happiness and great health in a
              glass.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between w-full lg:flex-row sm:flex-col-reverse">
          <div className="flex flex-col items-start justify-center max-w-[26rem] h-fit">
            <div className="p-8 ">
              <h4 className="font-bold text-[1.5rem] text-headingtextblack">
                People's Choice
              </h4>
              <p className="text-paragraphtextgray">
                Blueberries are one of the healthiest fruits because they are
                rich in antioxidants, which help fight free radicals and improve
                brain health!
              </p>
            </div>
            <div className="p-8 ">
              <h4 className="font-bold text-[1.5rem] text-headingtextblack">
                People's Choice
              </h4>
              <p className="text-paragraphtextgray">
                Spinach in smoothies is virtually tasteless but adds a healthy
                dose of iron, vitamin K, and fiber, making it perfect for a
                guilt-free green drink!
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={strawberryGlass}
              alt="A glass of strawberry smoothie"
            />
            <div className="absolute -right-16 top-10">
              <img
                src={PinkArrow}
                alt="A pink coloured Arrow"
              />
              <span className="absolute -top-[2.7rem] -right-4 font-[Caveat] font-bold text-[1.7rem] text-slurppiespink rotate-[19deg]">
                Great Taste
              </span>
            </div>
            <div className="absolute left-0 bottom-10">
              <img
                src={GreenArrow}
                alt="A green coloured Arrow"
              />
              <span
                className="absolute right-0
             font-[Caveat] font-bold text-[1.25rem] text-center text-[#387E32]">
                100% Natural Fruits
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
