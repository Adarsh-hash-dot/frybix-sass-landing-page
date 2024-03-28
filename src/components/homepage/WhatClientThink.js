import React from "react";
import {
  stars,
  person1,
  person2,
  person3,
  person4,
  map,
  girlTaking,
} from "../../assets";
import { SectionHeading } from "../utility";

const WhatClientThink = () => {
  return (
    <div className="grid place-items-center mt-28 lg:mt-32">
      <div className="container flex flex-col justify-center items-center">
        <p className="text-lg font-medium flex">
          Trusted by 20,000+ Clients{" "}
          <img
            className="w-[77px] h-[13px] mt-[7px] ml-3"
            src={stars}
            alt=""
            srcset=""
          />
        </p>
      </div>

      <SectionHeading
        first="what our"
        last={`think \n about us?`}
        highlighted="client"
        isCenter={true}
      ></SectionHeading>
      <div className="relative w-full h-[60vh] lg:h-[70vh] container">
        <img
          className="absolute top-[10vw] left-[20vw] lg:top-[32%] lg:left-[32%] -z-0 w-[7vw] h-[7vw] lg:w-auto lg:h-auto"
          src={person1}
          alt=""
          srcset=""
        />
        <img
          className="absolute top-[18vw] left-[40vw]  lg:top-[23%] lg:left-[42%] -z-0 w-[7vw] h-[7vw] v lg:w-auto lg:h-auto"
          src={person2}
          alt=""
          srcset=""
        />
        <img
          className="absolute top-[5vw] left-[60vw]  lg:top-[30%] lg:left-[65%] w-[7vw] h-[7vw] lg:w-auto lg:h-auto"
          src={person3}
          alt=""
          srcset=""
        />
        <img
          className="absolute top-[30vw] left-[70vw] lg:top-[60%] lg:left-[75%] w-[7vw] h-[7vw] lg:w-auto lg:h-auto"
          src={person4}
          alt=""
          srcset=""
        />
        <img
          className="absolute right-[6vw] -z-50"
          src={map}
          alt=""
          srcset=""
        />
        <img
          className="absolute top-[20vw] left-[10vw] lg:top-1/4 lg:left-1/4 -z-40 w-2/3 md:w-1/2 lg:w-auto"
          src={girlTaking}
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
};

export default WhatClientThink;
