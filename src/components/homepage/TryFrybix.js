import React, { useRef, useEffect, useState } from "react";
import {
  orangeAngle1,
  orangeAngle2,
  voiletAngle1,
  voiletAngle2,
} from "./../../assets";
import { SectionHeading } from "../utility";

const TryFrybix = () => {
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
      className={`bg-[#F9F9F9] mt-10 lg:mt-60 relative h-[519px] -z-20v transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      } `}
    >
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
          <button className="flex border-2 border-black rounded-full px-16 py-3 lg:px-24 lg:py-5 mt-5 hover:bg-black hover:text-white">
            Get Frybix App{" "}
            <img src="/assets/icons/dropdown.png" alt="" srcSet="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TryFrybix;
