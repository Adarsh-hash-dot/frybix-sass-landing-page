import React, { useRef, useState, useEffect } from "react";
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
      className={`grid place-items-center transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
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
