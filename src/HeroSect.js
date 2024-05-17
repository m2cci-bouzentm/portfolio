import React from 'react';
import ShowText from './ShowText';

const HeroSect = ({ showText }) => {
  return (
    <div id='about' className="hero-sect h-[150vh] py-20 px-52 space-y-20 font-extrabold relative z-10">
      <div className="hero-text text-[5rem] my-8">
        Hello, I'm <span className="text-clr-2">MOHAMED</span> !
      </div>
      <div className="hero-desc">
        <div className="my-6">A developer who </div>
        <div className="text-[3rem]">Bridges the gap between</div>
        <div className="text-[3rem]">
          code & <span className="text-clr-2">creativity</span> ...
        </div>
        <div className="my-6">
          <span className="text-clr-2">Aesthetics</span> matter! doesn't it ?
        </div>
      </div>
      <div className="text-[2rem] text-clr-2 space-x-2 flex">
        <div className="text-white min-w-max">I'm a </div>
        <div className="typed-out-container inline-block">
          <ShowText showText={showText} />
        </div>
      </div>
    </div>
  );
};

export default HeroSect;
