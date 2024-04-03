import React, { useRef, useEffect, useState } from "react";
import { logoName } from "../../assets";

const Footer = () => {
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
      className={`grid place-items-center mt-28 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      } `}
    >
      <div className="container bg-white grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-4 font-medium p-4 cursor-pointer">
        <div className="footer-column">
          <div className="cursor-pointer flex">
            {/* <Link href="/" className=""> */}
            <img src={logoName} className="w-32 h-10" alt="" />
            {/* </Link> */}
          </div>
          <ul>
            <li className="my-3">
              <img src="" alt="" srcSet="" /> help@frybix.com
            </li>
            <li className="my-3">
              <img src="" alt="" /> +1 234 456 678 89
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h5 className="text-3xl font-primary font-semibold capitalize">
            {" "}
            Links{" "}
          </h5>
          <ul>
            <li className="my-3">
              <img src="" alt="" srcSet="" /> Home
            </li>
            <li className="my-3">
              <img src="" alt="" /> About Us
            </li>
            <li className="my-3">
              <img src="" alt="" /> Booking
            </li>
            <li className="my-3">
              <img src="" alt="" /> Blog
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h5 className="text-3xl font-primary font-semibold capitalize">
            {" "}
            legal{" "}
          </h5>
          <ul>
            <li className="my-3">Terms of use</li>
            <li className="my-3">Privacy policy</li>
            <li className="my-3">Cookie policy</li>
          </ul>
        </div>
        <div className="footer-column">
          <h5 className="text-3xl font-primary font-semibold capitalize">
            {" "}
            product{" "}
          </h5>
          <ul>
            <li className="my-3">Take Tour</li>
            <li className="my-3">Live Chat</li>
            <li className="my-3">Reveiws</li>
          </ul>
        </div>
        <div className="footer-column">
          <h5 className="text-3xl font-primary font-semibold capitalize">
            {" "}
            Newsletter{" "}
          </h5>
          <ul>
            <li className="my-3">Stay up to date</li>
            <li>
              <span className="relative">
                <input
                  className="p-5 border-2 rounded-full pr-24"
                  placeholder="your email"
                  type="text"
                />
                <button className="absolute right-[10px] top-[-13px] bg-primary rounded-full p-3 text-white px-6">
                  Subscribe
                </button>
              </span>
            </li>
          </ul>
        </div>
        <div className="mt-14"></div>
      </div>
    </div>
  );
};

export default Footer;
