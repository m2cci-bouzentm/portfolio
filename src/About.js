import React, { useEffect, useState } from 'react';
import ShowText from './ShowText';

const About = ({ showText }) => {
  const [textAnimation, setTextAnimation] = useState(false);
  const [descriptionAnimation, setDescriptionAnimation] = useState(false);
  const [showTextAnimation, setShowTextAnimation] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setTextAnimation(true);
    }, 400);
    const timeout2 = setTimeout(() => {
      setDescriptionAnimation(true);
    }, 600);
    const timeout3 = setTimeout(() => {
      setShowTextAnimation(true);
    }, 900);

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
      className="hero-sect xl:px-48 lg:px-[7%] sm:px-[8%] px-[5%] py-20 space-y-20 font-extrabold relative z-10"
    >
      <div className="hero-text my-8 relative pt-8 sm:pt-0 text-[2.5rem] sm:text-[3rem] lg:text-[5rem]">
        <span className="inline-block translate-x-[-300%] animate-text">Hello, I'm&nbsp;</span>
        <span
          className={
            'inline-block translate-x-[-300%] ' +
            (textAnimation ? 'animate-text' : '')
          }
        >
          <span className="text-clr-2"> MOHAMED</span> !
        </span>
      </div>
      <div
        className={
          'hero-desc translate-x-[300%] ' +
          (descriptionAnimation ? 'animate-description' : 'opacity-0 blur-lg')
        }
      >
        <div className="my-6">A developer who </div>
        <div className="md:text-[3rem] text-[1.5rem] sm:text-[2.5rem]">Bridges the gap between</div>
        <div className="md:text-[3rem] text-[1.5rem] sm:text-[2.5rem]">
          code & <span className="text-clr-2">creativity</span> ...
        </div>
        <div className="my-6">
          <span className="text-clr-2">Aesthetics</span> matter! doesn't it ?
        </div>
      </div>
      <div
        className={
          'text-[1.25rem] md:text-[2rem] sm:text-[1.5rem] text-clr-2 space-x-2 flex translate-x-[-300%] ' +
          (showTextAnimation ? 'animate-text' : 'opacity-0 blur-lg')
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
