import React from "react";
import BigLeaves from "../../assets/svg/coloured-leaves.svg";
import leaf from "../../assets/svg/leaf.svg";
import pawpaw from "../../assets/svg/pawpaw.svg";
import orange from "../../assets/svg/orange.svg";
import banana from "../../assets/svg/banana.svg";
import apple from "../../assets/svg/apple.svg";

/**
 * A strongly-typed functional component that renders a "Leaves" div.
 *
 * @returns {JSX.Element} A JSX element representing the Leaves div.
 */

const Leaves: React.FC = (): JSX.Element => {
  const fruitImages = [
    {
      src: pawpaw,
      alt: "pawpaw",
      className: "relative top-[0rem] right-[2.7rem]",
    },
    {
      src: leaf,
      alt: "leaf",
      className: "relative top-[0rem] right-[8.8rem]",
    },
    {
      src: apple,
      alt: "apple",
      className: "relative top-[1.7rem] right-[4.7rem]",
    },
    {
      src: orange,
      alt: "orange",
      className: "relative top-[12.4rem] right-[7.4rem]",
    },
    {
      src: banana,
      alt: "banana",
      className: "relative top-[13.7rem] right-[3.7rem]",
    },
  ];
  return (
    <div className="absolute right-0 space-x-2 top-5">
      {fruitImages.map((fruit, index) => (
        <img
          key={index}
          src={fruit.src}
          alt={fruit.alt}
          className={`${fruit.className} sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-16 lg:w-16`}
        />
      ))}
      <img
        src={BigLeaves}
        alt="Leaves"
        className="max-lg:hidden absolute top-[11.4rem] right-[0] sm:w-16 md:w-20 lg:w-40  xl:w-48 h-full max-w-none"
      />
    </div>
  );
};

export default Leaves;
