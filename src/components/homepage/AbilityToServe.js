import React from "react";
import { SectionHeading } from "../utility";

const AbilityToServe = () => {
  const abilities = [
    {
      title: "education system",
      discription:
        "Many desktop publishing packages and web page editors now use for them.",
    },
    {
      title: "sports & fitness",
      discription:
        "Many desktop publishing packages and web page editors now use for them.",
    },
    {
      title: "beauty & wellness",
      discription:
        "Many desktop publishing packages and web page editors now use for them.",
    },
    {
      title: "officials & financial",
      discription:
        "Many desktop publishing packages and web page editors now use for them.",
    },
    {
      title: "medical services",
      discription:
        "Many desktop publishing packages and web page editors now use for them.",
    },
    {
      title: "events & entertainment",
      discription:
        "Many desktop publishing packages and web page editors now use for them.",
    },
  ];

  return (
    <div className="grid place-items-center">
      <div className="container">
        <SectionHeading
          first={"Frybix has the ability to serve any \n"}
          highlighted={"business segment"}
          isCenter={true}
        ></SectionHeading>
        <div className="flex flex-wrap justify-around mt-24">
          {abilities.map((item, index) => (
            <span
              key={index}
              className="lg:w-[480px] flex p-4 m-4 client-shadow bg-white rounded-3xl"
            >
              <span className="px-5">
                <img
                  className="min-w-12 h-12"
                  src={`/assets/icons/ablity${1 + index}.png`}
                  alt=""
                  srcSet=""
                />
              </span>

              <span>
                <h4 className="font-primary font-semibold text-xl lg:text-2xl capitalize">
                  {item.title}
                </h4>
                <p className="mt-1">{item.discription}</p>
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AbilityToServe;
