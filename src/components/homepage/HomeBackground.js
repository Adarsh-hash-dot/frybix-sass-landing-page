import React from "react";

const HomeBackground = () => {
  return (
    <>
      <div className="w-full h-full overflow-hidden -z-50 absolute opacity-0 lg:opacity-100">
        <div className="absolute -z-50  w-[140vh] h-[60vw] rotate-[40deg] rounded-[10vw] bg-primary right-[-21vw] top-[-25vw]">
          <div className="w-full h-full relative">
            <div className="absolute bottom-[-50px] right-0 bg-gradient-to-br from-primary via-secondary to-secondary w-1/2 h-1/2 rounded-[10vw]"></div>
            <div className="absolute top-0 left-0  w-[60vw] h-[60vh] rounded-[10vw] bgcblue"></div>
          </div>
        </div>
        <div className="absolute -z-50 w-[60vw] h-[60vw] rotate-45 rounded-[10vw] bg-cblue right-[-42vw] top-[-38vw]"></div>
      </div>
    </>
  );
};

export default HomeBackground;
