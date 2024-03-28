import React from "react";
import {
  Navbar,
  HomeBackground,
  IntroSection,
  TheyTrust,
  OnePlatform,
  WhatClientThink,
} from "./components/homepage";

const homePage = () => {
  return (
    <div className="overflow-hidden font-secondary">
      <HomeBackground></HomeBackground>
      <Navbar></Navbar>
      <IntroSection></IntroSection>
      <TheyTrust></TheyTrust>
      <OnePlatform></OnePlatform>
    </div>
  );
};

export default homePage;
