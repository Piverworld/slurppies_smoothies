import React from "react";
import Fruits from "./design/Fruits";
import Leaves from "./design/Leaves";
import smallFlower from "../assets/svg/flower-small.svg";
import heroImg from "../assets/hero_img.png";

/**
 * A strongly-typed functional component that renders a "Hero" section.
 *
 * @returns {JSX.Element} A JSX element representing the Hero section.
 */
const Hero: React.FC = (): JSX.Element => {
  return (
    <section className="block w-full bg-white h-fit max-sm:py-[2rem] max-sm:px-[2.5rem] md:py-[3.5rem] md:pl-[2rem] max-md:py-[3.5rem] max-md:px-[2rem] lg:py-[8rem] lg:pl-[2.5rem] max-sm:pt-24 sm:pt-32 md:pt-24 lg:pt-28">
      <Fruits position="absolute top-24 left-0 max-[1672px]:hidden" />
      <Leaves position="absolute top-24 max-[1440px]:hidden" />
      <div className="relative container max-w-[1440px] mx-auto flex flex-col items-center justify-between">
        <div className="flex items-center max-lg:flex-row max-md:flex-col max-md:text-center">
          <div className="flex flex-col items-start justify-start gap-5 h-fit max-md:w-full max-md:items-center">
            <div className="flex flex-row items-center space-x-2 max-md:flex-col max-md:gap-3 max-md:justify-center max-md:w-full">
              <img
                src={smallFlower}
                alt="Small Flower"
              />
              <div className="bg-[#F9ECFF] rounded-full px-6 py-2 text-slurppiespink md:text-md max-md:text-sm">
                People's Choice for Smoothies
              </div>
            </div>
            <div className="max-w-[36rem] mb-3  max-md:max-w-3/5">
              <h1 className="font-bold max-md:text-4xl md:text-4xl lg:text-6xl text-headingtextblack">
                Enjoy a{" "}
                <span className="text-slurppiespink font-[Pacifico]">
                  refreshing blend of joy
                </span>{" "}
                in every glass today!
              </h1>
            </div>
            <div className="text-headingtextblack font-[Roboto] max-w-[26rem] max-md:max-w-3/5">
              <p>
                Discover the perfect blend of nature’s finest fruits in every
                refreshing sip. Your daily dose of happiness and great health in
                a glass.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center max-md:w-3/5">
            <img
              src={heroImg}
              alt="A cup of smoothies"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
