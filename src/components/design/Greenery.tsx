import React from "react";
import SingleLeaf from "../../assets/singleLeaf.png";
import fullLeaves from "../../assets/full_leaves.png";
const Greenery: React.FC = (): JSX.Element => {
  return (
    <div className="h-full">
      <div className="relative h-full">
        <img
          src={SingleLeaf}
          alt="Single Leaf"
          className="absolute -left-24 top-5"
        />
        <img
          src={SingleLeaf}
          alt="Single Leaf"
          className="absolute top-[8rem] right-[50%] w-16 h-16"
        />
        <img
          src={fullLeaves}
          alt="Two leaves"
          className="absolute w-64 left-[98.4%] h-65 top-[28.6rem]"
        />
      </div>
    </div>
  );
};

export default Greenery;
