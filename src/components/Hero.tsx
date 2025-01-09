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
    <section className="block w-full bg-white h-fit py-[4.5rem] px-[15rem]">
      <div className="container max-w-[1440px] mx-auto flex flex-row items-center justify-between">
        <Fruits position="absolute top-24 left-0" />
        <Leaves position="absolute top-24" />
        <div className="flex flex-col items-start justify-start gap-5 h-fit">
          <div className="flex flex-row items-center justify-center space-x-2">
            <img
              src={smallFlower}
              alt="Small Flower"
            />
            <div className="bg-[#F9ECFF] rounded-full px-6 py-2 text-slurppiespink">
              People's Choice for Smoothies
            </div>
          </div>
          <div className="font-bold text-[1.5rem] text-headingtextblack max-w-[45rem] mb-3 ">
            <h1>
              Enjoy a{" "}
              <span className="text-slurppiespink font-[Pacifico]">
                refreshing blend of joy
              </span>{" "}
              in every glass today!
            </h1>
          </div>
          <div className="text-headingtextblack font-[Roboto] max-w-[26rem]">
            <p>
              Discover the perfect blend of nature’s finest fruits in every
              refreshing sip. Your daily dose of happiness and great health in a
              glass.{" "}
            </p>
          </div>
        </div>
        <div>
          <img
            src={heroImg}
            alt="A cup of smoothies"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
