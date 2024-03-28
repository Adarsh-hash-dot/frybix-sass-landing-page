import React from "react";
import { Link } from "react-router-dom";
import { logo } from "./../../assets";

const Navbar = () => {
  return (
    <nav className="flex justify-between py-7 container mx-auto px-4">
      <div className="cursor-pointer">
        {/* <Link href="/" className=""> */}
        <img src={logo} className="w-32 h-10" alt="" />
        {/* </Link> */}
      </div>
      <div className="tailwind-class hidden md:inline-block">
        <ul className="flex justify-center items-center text-primary lg:text-white cursor-pointer">
          {["Home", "About Us", "Pricing", "Contact Us"].map((item) => {
            return (
              <li>
                <Link
                  className="font-secondary first:pr-4 px-4"
                  href="/"
                  rel="noopener noreferrer"
                >
                  {item}
                </Link>
              </li>
            );
          })}
          <li>
            <button className="bg-primary text-white lg:bg-white lg:text-primary font-bold px-10 py-4 rounded-full mx-4">
              Sign In
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
