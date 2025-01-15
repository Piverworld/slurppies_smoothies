import avocado from "../../assets/svg/avocado.svg";
import React from "react";
import leaf from "../../assets/svg/leaf.svg";
import pawpaw from "../../assets/svg/pawpaw.svg";
import orange from "../../assets/svg/orange.svg";
import banana from "../../assets/svg/banana.svg";
import apple from "../../assets/svg/apple.svg";
import grapes from "../../assets/svg/grape.svg";

interface FruitProps {
  src: string;
  alt: string;
  className?: string;
}

/**
 * Fruits component renders a collection of fruit images.
 *
 * @returns {JSX.Element} A div containing fruit images.
 */
const Fruits: React.FC<{ position?: string }> = ({ position }): JSX.Element => {
  const fruitImages: FruitProps[] = [
    {
      src: orange,
      alt: "orange",
      className: "relative top-[0rem] left-[2.7rem] max-lg:",
    },
    {
      src: leaf,
      alt: "leaf",
      className: "relative top-[0rem] left-[8.8rem]",
    },
    {
      src: avocado,
      alt: "avocado",
      className: "relative top-[1.7rem] left-[4.7rem]",
    },
    {
      src: pawpaw,
      alt: "pawpaw",
      className: "relative top-[3.4rem] left-[1.4rem]",
    },
    {
      src: apple,
      alt: "apple",
      className: "relative top-[4.7rem] left-[5.7rem]",
    },
    {
      src: grapes,
      alt: "grapes",
      className: "relative top-[6rem] left-[2.7rem]",
    },
    {
      src: banana,
      alt: "banana",
      className: "relative top-[7.7rem] left-[5.7rem]",
    },
  ];

  return (
    <div className={`${position}`}>
      {fruitImages.map((fruit, index) => (
        <img
          key={index}
          src={fruit.src}
          alt={fruit.alt}
          className={`${fruit.className} sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-14 lg:w-14`}
        />
      ))}
    </div>
  );
};

export default Fruits;
