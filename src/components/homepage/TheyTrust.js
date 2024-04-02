import React from "react";
import { stars } from "../../assets";
import { SectionHeading } from "../utility";

const TheyTrust = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center mt-12 max-w-[1800px] ">
        <p className="text-lg font-medium flex">
          Trusted by 20,000+ Clients{" "}
          <img
            className="w-[77px] h-[13px] mt-[7px] ml-3"
            src={stars}
            alt=""
            srcSet=""
          />
        </p>
        <SectionHeading
          first="they"
          last="us."
          highlighted="trust"
          isCenter={true}
        ></SectionHeading>
        <div className="mt-10 flex flex-wrap justify-center">
          {Array.from({ length: 12 }, (_, index) => (
            <span
              key={index}
              className={`p-5 lg:p-10 rounded-full ${
                index % 2 === 0 && "client-shadow"
              } w-[120px] h-[80px] lg:w-[200px] lg:h-[120px] grid place-items-center m-4 lg:m-7 bg-white hover:client-shadow`}
            >
              <img
                className=""
                src={`/assets/clients/${index + 1}.png`}
                alt=""
                srcSet=""
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TheyTrust;
