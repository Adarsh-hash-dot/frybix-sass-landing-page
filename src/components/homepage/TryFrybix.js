import React from "react";
import {
  orangeAngle1,
  orangeAngle2,
  voiletAngle1,
  voiletAngle2,
} from "./../../assets";
import { SectionHeading } from "../utility";

const TryFrybix = () => {
  return (
    <div className="bg-[#F9F9F9] mt-10 lg:mt-60 relative h-[519px] -z-20v">
      <img
        className="absolute right-0 bottom-0 w-[166px] lg:w-auto"
        src={orangeAngle1}
        alt=""
        srcSet=""
      />
      <img
        className="absolute right-0 bottom-0 w-[82px] lg:w-auto"
        src={orangeAngle2}
        alt=""
        srcSet=""
      />
      <img
        className="absolute left-0 top-0 w-[181px] lg:w-auto"
        src={voiletAngle1}
        alt=""
        srcSet=""
      />
      <img
        className="absolute left-0 top-0 w-[85px] lg:w-auto"
        src={voiletAngle2}
        alt=""
        srcSet=""
      />
      <div className="w-full h-full grid place-items-center">
        <div className="flex flex-col items-center z-10">
          <SectionHeading
            first={"try"}
            last={"for free"}
            highlighted={"Frybix"}
          ></SectionHeading>

          <p className="text-xl font-medium text-center whitespace-pre">
            {`Frybix is hub for managing productivity \n tasks professionaly and efficiently`}
          </p>
          <button className="flex border-2 border-black rounded-full px-16 py-3 lg:px-24 lg:py-5 mt-5">
            Get Frybix App{" "}
            <img src="/assets/icons/dropdown.png" alt="" srcSet="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TryFrybix;
