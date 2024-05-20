import React, { useEffect, useState } from 'react';
import ShowText from './ShowText';

const About = ({ showText }) => {
  const [textAnimation, setTextAnimation] = useState(false);
  const [descriptionAnimation, setDescriptionAnimation] = useState(false);
  const [showTextAnimation, setShowTextAnimation] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setTextAnimation(true);
    }, 500);
    const timeout2 = setTimeout(() => {
      setDescriptionAnimation(true);
    }, 1000);
    const timeout3 = setTimeout(() => {
      setShowTextAnimation(true);
    }, 1500);

    return () => {
      setTextAnimation(false);
      setDescriptionAnimation(false);
      setShowTextAnimation(false);

      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  return (
    <div
      id="about"
      className="xl:px-48 lg:px-[7%] sm:px-[8%] px-[10%] hero-sect py-20 space-y-20 font-extrabold relative z-10"
    >
      <div className="hero-text my-8 relative text-[3rem] lg:text-[5rem]">
        <span className="inline-block translate-x-[-300%] animate-text">Hello, I'm&nbsp;</span>
        <span
          className={
            'translate-x-[-300%] inline-block ' +
            (textAnimation ? 'animate-text' : '')
          }
        >
          <span className="text-clr-2"> MOHAMED</span> !
        </span>
      </div>
      <div
        className={
          'hero-desc translate-x-[300%] ' +
          (descriptionAnimation ? 'animate-description' : '')
        }
      >
        <div className="my-6">A developer who </div>
        <div className="md:text-[3rem] text-[2.5rem]">Bridges the gap between</div>
        <div className="md:text-[3rem] text-[2.5rem]">
          code & <span className="text-clr-2">creativity</span> ...
        </div>
        <div className="my-6">
          <span className="text-clr-2">Aesthetics</span> matter! doesn't it ?
        </div>
      </div>
      <div
        className={
          'md:text-[2rem] text-[1.5rem] text-clr-2 space-x-2 flex translate-x-[-300%] ' +
          (showTextAnimation ? 'animate-text' : '')
        }
      >
        <div className="text-white min-w-max">I'm a </div>
        <div className="typed-out-container inline-block">
          <ShowText showText={showText} />
        </div>
      </div>
    </div>
  );
};

export default About;