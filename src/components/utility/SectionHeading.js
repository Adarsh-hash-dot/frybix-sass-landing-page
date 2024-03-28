import React from "react";

const SectionHeading = ({ first, last, highlighted, isCenter }) => {
  return (
    <h2
      className={`font-primary text-3xl lg:text-5xl capitalize font-semibold my-5 lg:leading-10 text-wrap c ${
        isCenter ? "text-center" : ""
      }`}
      style={{ lineHeight: "60px" }}
    >
      {first}{" "}
      {highlighted && (
        <span className="bg-highlight relative pt-2">{highlighted}</span>
      )}{" "}
      {last}
    </h2>
  );
};

export default SectionHeading;
