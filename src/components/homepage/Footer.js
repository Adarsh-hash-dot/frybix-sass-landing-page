import React from "react";
import { logoName } from "../../assets";

const Footer = () => {
  return (
    <div className="grid place-items-center mt-28">
      <div className="container bg-white grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-4 font-medium p-4">
        <div class="footer-column">
          <div className="cursor-pointer flex">
            {/* <Link href="/" className=""> */}
            <img src={logoName} className="w-32 h-10" alt="" />
            {/* </Link> */}
          </div>
          <ul>
            <li className="my-3">
              <img src="" alt="" srcset="" /> help@frybix.com
            </li>
            <li className="my-3">
              <img src="" alt="" /> +1 234 456 678 89
            </li>
          </ul>
        </div>
        <div class="footer-column">
          <h5 className="text-3xl font-primary font-semibold capitalize">
            {" "}
            Links{" "}
          </h5>
          <ul>
            <li className="my-3">
              <img src="" alt="" srcset="" /> Home
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
        <div class="footer-column">
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
        <div class="footer-column">
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
        <div class="footer-column">
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
