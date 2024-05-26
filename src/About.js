import React, { useEffect, useState } from 'react';
import ShowText from './ShowText';

const About = ({ showText }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      id="about"
      className="hero-sect xl:px-48 lg:px-[7%] sm:px-[8%] px-[5%] py-20 space-y-20 font-extrabold relative z-10"
    >
      <div className="hero-text my-8 relative pt-8 sm:pt-0 text-[2.5rem] sm:text-[3rem] lg:text-[5rem]">
        <span
          style={
            isLoaded
              ? { animation: 'leftToRightAnimation 1s ease-in-out' }
              : { transform: 'translate(-300%)' }
          }
          className="inline-block"
        >
          Hello, I'm&nbsp;
        </span>
        <span
          style={
            isLoaded
              ? {
                animation: 'leftToRightAnimation 1s ease-in-out 0.4s',
                transform: 'translate(0)',
                transitionDelay: '0.4s',
              }
              : { transform: 'translate(-300%)' }
          }
          className="inline-block "
        >
          <span className="text-clr-2"> MOHAMED</span> !
        </span>
      </div>
      <div
        style={
          isLoaded
            ? {
              animation: 'rightToLeftAnimation 1s ease-in-out 0.8s',
              transform: 'translate(0)',
              transitionDelay: '0.8s',
            }
            : { transform: 'translate(-300%)' }
        }
        className="hero-desc"
      >
        <div className="my-6">A developer who </div>
        <div className="md:text-[3rem] text-[1.5rem] sm:text-[2.5rem]">
          Bridges the gap between
        </div>
        <div className="md:text-[3rem] text-[1.5rem] sm:text-[2.5rem]">
          code & <span className="text-clr-2">creativity</span> ...
        </div>
        <div className="my-6">
          <span className="text-clr-2">Aesthetics</span> matter! doesn't it ?
        </div>
      </div>
      <div
        style={
          isLoaded
            ? {
              animation: 'rightToLeftAnimation 1s ease-in-out 1.2s',
              transform: 'translate(0)',
              transitionDelay: '1.2s',
            }
            : { transform: 'translate(-300%)' }
        }
        className="text-[1.25rem] md:text-[2rem] sm:text-[1.5rem] text-clr-2 space-x-2 flex"
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
