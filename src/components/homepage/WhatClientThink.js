import React, { useRef, useEffect, useState } from "react";
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
      { threshold: 0.5 }
    ); // Trigger when 50% of the component is visible

    const currentRef = componentRef.current;

    if (currentRef) {
      observer.observe(componentRef.current);
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
      className={`grid place-items-center mt-28 lg:mt-32  transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      } `}
    >
      <div className="container flex flex-col justify-center items-center">
        <p className="text-lg font-medium flex">
          Trusted by 20,000+ Clients{" "}
          <img
            className="w-[77px] h-[13px] mt-[7px] ml-3"
            src={stars}
            alt=""
            srcSet=""
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
          srcSet=""
        />
        <img
          className="absolute top-[18vw] left-[40vw]  lg:top-[23%] lg:left-[42%] -z-0 w-[7vw] h-[7vw] v lg:w-auto lg:h-auto"
          src={person2}
          alt=""
          srcSet=""
        />
        <img
          className="absolute top-[5vw] left-[60vw]  lg:top-[30%] lg:left-[65%] w-[7vw] h-[7vw] lg:w-auto lg:h-auto"
          src={person3}
          alt=""
          srcSet=""
        />
        <img
          className="absolute top-[30vw] left-[70vw] lg:top-[60%] lg:left-[75%] w-[7vw] h-[7vw] lg:w-auto lg:h-auto"
          src={person4}
          alt=""
          srcSet=""
        />
        <img
          className="absolute right-[6vw] -z-50"
          src={map}
          alt=""
          srcSet=""
        />
        <img
          className="absolute top-[20vw] left-[10vw] lg:top-1/4 lg:left-1/4 -z-40 w-2/3 md:w-1/2 lg:w-auto"
          src={girlTaking}
          alt=""
          srcSet=""
        />
      </div>
    </div>
  );
};

export default WhatClientThink;
