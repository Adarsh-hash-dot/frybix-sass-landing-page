import React from "react";
import {
  Navbar,
  HomeBackground,
  IntroSection,
  TheyTrust,
  OnePlatform,
  AbilityToServe,
  WhatClientThink,
  TryFrybix,
  Footer,
} from "./../components/homepage";

const homePage = () => {
  return (
    <div className="overflow-hidden font-secondary">
      <HomeBackground></HomeBackground>
      <Navbar></Navbar>
      <IntroSection></IntroSection>
      <TheyTrust></TheyTrust>
      <OnePlatform></OnePlatform>
      <AbilityToServe></AbilityToServe>
      <WhatClientThink></WhatClientThink>
      <TryFrybix></TryFrybix>
      <Footer></Footer>
    </div>
  );
};

export default homePage;
