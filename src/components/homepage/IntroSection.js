import React from "react";
import { Link } from "react-router-dom";
import {
  dashboard,
  insta_illustration,
  customer,
  arrowImg,
  avatars,
  stars,
} from "../../assets";
import "animate.css";

const IntroSection = () => {
  return (
    <div className="lg:flex container mx-auto px-4 ">
      <div className="lg:w-6/12">
        <h1 className="font-primary text-3xl md:text-5xl lg:text-7xl font-semibold  mt-24 lg:pr-72">
          Simplified productivity app for all.
        </h1>
        <p className="font-secondary text-lg mt-7 lg:pr-72">
          Frybix is hub for managing productivity tasks professionaly and
          efficiently
        </p>
        <div className="flex items-center mt-7">
          <input
            className="border border-gray-300 rounded-full p-5 w-96 font-secondary font-medium"
            type="text"
            defaultValue={"connect@frybix.com"}
          />
          <button className="bg-primary w-16 h-16 grid place-items-center ml-6 rounded-full">
            <img src={arrowImg} alt="" srcSet="" />
          </button>
        </div>
        <div className="mt-6 lg:mt-12">
          <p className="text-slate-400">
            Already using frybix?{" "}
            <Link className="text-primary font-bold text-lg">Sign In</Link>
          </p>
        </div>
        <div className="mt-8 flex animate__animated animate__fadeInLeft animate__delay-1s">
          <img src={avatars} alt="" srcSet="" />
          <span className="ml-5">
            <p className="font-bold text-3xl">2,291</p>
            <p className="text-base text-slate-500 font-medium">
              Happy Customers
            </p>
          </span>
          <span className="ml-5">
            <p className="font-bold text-3xl">4.8/5</p>
            <p className="flex text-base text-slate-500 font-medium">
              <span>
                {" "}
                <img
                  className="w-[77px] h-[13px] mt-[5px] mr-2"
                  src={stars}
                  alt=""
                  srcSet=""
                />{" "}
              </span>
              Ratings
            </p>
          </span>
        </div>
      </div>
      <div className="lg:w-6/12 animate__animated animate__backInDown">
        <div className="w-full h-full relative mt-20 right-[50px]">
          <div className="lg:w-[1000px]">
            <img className="w-full h-full" src={dashboard} alt="" srcSet="" />
          </div>
          <img
            className="absolute top-[-50px] right-[70px] lg:top-[-50px] lg:right-[-140px] w-[212px] h-[206px] lg:w-[312px] lg:h-[306px]"
            src={customer}
            alt=""
            srcSet=""
          />
          <img
            className="absolute bottom-[-50px] left-[70px] lg:bottom-[70px] lg:left-[150px] w-[200px] h-[180px] lg:w-[362px] lg:h-[366px]"
            src={insta_illustration}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
