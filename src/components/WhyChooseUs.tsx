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
    <section className="block w-full bg-gray-50 h-fit max-sm:py-[2rem] max-sm:px-[2.5rem] md:py-[3.5rem] md:px-[2rem] max-md:py-[3.5rem] max-md:px-[2rem] lg:py-[8rem] lg:px-[2.5rem] overflow-hidden">
      <Greenery />
      <div className="container max-w-[1440px] mx-auto flex flex-col items-start sm:items-center justify-between">
        <div className="flex flex-row items-center justify-between w-full max-lg:flex max-lg:flex-col max-lg:gap-6 max-sm:flex max-sm:flex-col sm:justify-self-center">
          <div className="flex flex-col items-start justify-start h-fit max-md:gap-4 max-lg:text-center">
            <div className="flex flex-row items-center justify-start w-full space-x-2 max-md:flex-col max-md:gap-2 max-lg:justify-center max-lg:items-center">
              <img
                src={sectionStar}
                alt="Pink Star"
              />
              <p className="font-medium text-slurppiespink">
                WHY CHOOSE SLURPPIES
              </p>
            </div>
            <div className="max-lg:max-w-md lg:max-w-3xl">
              <h2 className="font-bold max-md:text-4xl md:text-4xl lg:text-6xl text-headingtextblack">
                From first sip to the last,{" "}
                <span className="text-slurppiespink font-[Pacifico]">
                  You will love it
                </span>
              </h2>
            </div>
          </div>
          <div className="max-w-[26rem] max-lg:max-w-xl sm:text-lg lg:text-xl max-lg:text-center">
            <p className="text-paragraphtextgray">
              Discover the perfect blend of nature’s finest fruits in every
              refreshing sip. Your daily dose of happiness and great health in a
              glass.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between w-full h-fit lg:flex-row max-sm:flex-col sm:flex-col">
          <div className="flex flex-col items-start justify-center max-w-sm max-lg:max-w-full max-lg:flex max-lg:flex-row max-sm:flex-col h-fit">
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
          <div className="relative p-8">
            <img
              src={strawberryGlass}
              alt="A glass of strawberry smoothie"
              className=""
            />
            <div className="absolute right-0 max-sm:-right-4 top-10">
              <img
                src={PinkArrow}
                alt="A pink coloured Arrow"
                className="max-sm:h-16 max-sm:w-16"
              />
              <span className="absolute -top-[2.7rem] -right-4 font-[Caveat] font-bold max-sm:text-lg max-md:text-xl text-[1.25rem] text-slurppiespink rotate-[19deg]">
                Great Taste
              </span>
            </div>
            <div className="absolute left-0 max-sm:left-8 max-sm:bottom-8 bottom-10">
              <img
                src={GreenArrow}
                alt="A green coloured Arrow"
                className="max-sm:h-16 max-sm:w-16"
              />
              <p
                className="absolute right-0
             font-[Caveat] font-bold max-sm:text-lg max-md:text-xl text-[1.25rem] text-center text-[#387E32] w-max">
                100% Natural Fruits
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
