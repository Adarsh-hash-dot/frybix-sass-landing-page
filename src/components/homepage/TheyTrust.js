import React, { useRef, useState, useEffect } from "react";
import { stars } from "../../assets";
import { SectionHeading } from "../utility";

const TheyTrust = () => {
  const componentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the component is intersecting the viewport
        console.log("inEntry");
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
      className={`flex justify-center transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      } `}
    >
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
              } w-[120px] h-[80px] lg:w-[200px] lg:h-[120px] grid place-items-center m-4 lg:m-7 bg-white hover:client-shadow hover:scale-110 transition-all duration-150 cursor-pointer`}
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
