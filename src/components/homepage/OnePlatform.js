import React, { useEffect, useRef, useState } from "react";
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
        "Easily schedule, reschedule, and manage appointments with ease and efficiency.",
    },
    {
      title: "class bookings",
      discription:
        "Effortlessly coordinate and manage class schedules for seamless organization and participation.",
    },
    {
      title: "fast support",
      discription:
        "Receive quick and reliable assistance from our dedicated team, ensuring minimal disruption and maximum satisfaction.",
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
        "Organize your tasks effortlessly with our intuitive online task management system, ensuring efficient productivity and seamless collaboration. Stay on top of your to-do list with ease and streamline your workflow for maximum efficiency.",
      image: manage_online,
    },
    {
      first: "keep ",
      last: "of all your progress.",
      highlighted: " Track ",
      discription:
        "Monitor your progress comprehensively with our advanced tracking system, allowing you to analyze your performance, set goals, and track your achievements with ease. Stay informed about your progress in real-time and make informed decisions to reach your objectives efficiently.",
      image: track_progress,
    },
    {
      first: "More",
      last: ", no more cancellations",
      highlighted: " connections ",
      discription:
        "Expand your network effortlessly and eliminate cancellations with our seamless connectivity solutions, ensuring uninterrupted communication and collaboration. Strengthen your connections and minimize disruptions to achieve your goals effectively.",
      image: connections,
    },
  ];

  //section reveal
  const componentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the component is intersecting the viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    ); // Trigger when 50% of the component is visible

    const currentRef = componentRef.current;

    if (currentRef) {
      console.log("observing");
      observer.observe(componentRef.current);
    } else {
      console.log("not console.log(observing);");
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Cleanup when component unmounts
      }
    };
  }, []);

  return (
    <div
      ref={componentRef}
      className={`flex justify-center mt-8 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      } `}
    >
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
                    key={index}
                    className={`flex ${
                      index === 0 && "client-shadow"
                    } p-4 max-w-[500px] rounded-3xl mb-8 hover:scale-110 transition-all duration-150 hover:client-shadow`}
                  >
                    <span className="p-4 pt-0">
                      <img
                        className="h-12 min-w-12"
                        src={`/assets/icons/platform${index + 1}.png`}
                        alt=""
                        srcSet=""
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
                srcSet=""
              />
            </div>
          </div>
        </div>
        <div className="bg-primary rounded-2xl p-10 flex justify-around flex-wrap text-white mt-20 m-5">
          {achivements.map((item, index) => (
            <div key={index} className="text-center m-7 ">
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
                  key={index}
                  className={`flex flex-col md:flex-row justify-center items-center  ${
                    index % 2 === 1 && "md:flex-row-reverse"
                  } `}
                >
                  <div
                    className={`md:w-6/12 p-10 lg:pr-48 text-left  animate__animated animation-delay-2s`}
                  >
                    <SectionHeading
                      first={item.first}
                      last={item.last}
                      highlighted={item.highlighted}
                      isCenter={false}
                    ></SectionHeading>
                    <p>{item.discription}</p>
                  </div>
                  <div className="md:w-6/12 p-10">
                    <img src={item.image} alt="" srcSet="" />
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
