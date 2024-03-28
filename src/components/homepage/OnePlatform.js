import React from "react";
import {
  earning,
  manage_online,
  track_progress,
  connections,
} from "../../assets";
import { SectionHeading } from "../utility";

const Platform = () => {
  const features = [
    {
      title: "appointments",
      discription:
        "Many desktop publishing packages and web page editors now use for them.",
    },
    {
      title: "class bookings",
      discription:
        "Many desktop publishing packages and web page editors now use for them.",
    },
    {
      title: "fast support",
      discription:
        "Many desktop publishing packages and web page editors now use for them.",
    },
  ];

  const achivements = [
    {
      title: "110+",
      discription:
        "Automation templates for creating your \n campaigns quickly",
    },
    {
      title: "40M",
      discription:
        "Automation templates for creating your \n campaigns quickly",
    },
    {
      title: "99.99%",
      discription:
        "Automation templates for creating your \n campaigns quickly",
    },
  ];

  const feature_explainations = [
    {
      first: "Manage your tasks",
      last: "easily.",
      highlighted: " online ",
      discription:
        "Pellentesque blandit augue facilisis malesuada interdum eleifend risus, commodo. Egestas senectus vehicula vel consectetur eu. Sit pulvinar urna diam lacus fringilla eu cursus.",
      image: manage_online,
    },
    {
      first: "keep ",
      last: "of all your progress.",
      highlighted: " Track ",
      discription:
        "Pellentesque blandit augue facilisis malesuada interdum eleifend risus, commodo. Egestas senectus vehicula vel consectetur eu. Sit pulvinar urna diam lacus fringilla eu cursus.",
      image: track_progress,
    },
    {
      first: "More",
      last: ", no more cancellations",
      highlighted: " connections ",
      discription:
        "Pellentesque blandit augue facilisis malesuada interdum eleifend risus, commodo. Egestas senectus vehicula vel consectetur eu. Sit pulvinar urna diam lacus fringilla eu cursus.",
      image: connections,
    },
  ];

  return (
    <div className="flex justify-center mt-8">
      <div className="container">
        <div className="mt-12 max-w-[1800px] ">
          <SectionHeading
            first="one"
            last="for any business"
            highlighted="platform"
            isCenter={true}
          ></SectionHeading>
          <div className="flex flex-wrap justify-center mt-14">
            <div className="lg:w-6/12 lg:pr-28">
              {features.map((item, index) => {
                return (
                  <div
                    className={`flex ${
                      index === 0 && "client-shadow"
                    } p-4 max-w-[500px] rounded-3xl mb-8`}
                  >
                    <span className="p-4 pt-0">
                      <img
                        className="h-12 min-w-12"
                        src={`/assets/icons/platform${index + 1}.png`}
                        alt=""
                        srcset=""
                      />
                    </span>
                    <span className="">
                      <h3 className="font-semibold capitalize text-xl lg:text-2xl font-primary">
                        {item.title}
                      </h3>
                      <p>{item.discription}</p>
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="lg:w-6/12">
              <img
                className="w-[1000px] relative -right-16"
                src={earning}
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
        <div className="bg-primary rounded-2xl p-10 flex justify-around flex-wrap text-white mt-20 m-5">
          {achivements.map((item) => (
            <div className="text-center m-7 ">
              <h4 className="text-5xl font-semibold">{item.title}</h4>
              <p className="font-medium mt-5 whitespace-pre">
                {item.discription}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-60">
          <ul>
            {feature_explainations.map((item, index) => {
              return (
                <li
                  className={`flex flex-col md:flex-row justify-center items-center ${
                    index % 2 === 1 && "md:flex-row-reverse"
                  } `}
                >
                  <div className="md:w-6/12 p-10 lg:pr-48 text-left">
                    <SectionHeading
                      first={item.first}
                      last={item.last}
                      highlighted={item.highlighted}
                      isCenter={false}
                    ></SectionHeading>
                    <p>{item.discription}</p>
                  </div>
                  <div className="md:w-6/12 p-10">
                    <img src={item.image} alt="" srcset="" />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Platform;
