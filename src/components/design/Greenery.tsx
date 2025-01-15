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
          className="absolute w-64 left-[86.8%] h-65 top-[28.6rem] max-sm:left-[72.8%] max-sm:top-[38rem] max-md:left-[69.8%] max-md:top-[36rem] max-lg:top-96 max-lg:left-[78.5%] "
        />
      </div>
    </div>
  );
};

export default Greenery;
