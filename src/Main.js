import React, { useEffect, useState } from 'react';
import Biography from './Biography';
import About from './About';
import Career from './Career';
import Skillset from './Skillset';
import Projects from './Projects';
import Contact from './Contact';
import { FaAnglesDown } from 'react-icons/fa6';

const DownArrow = ({ nextSection }) => (
  <div className="flex justify-center items-center text-4xl sm:text-6xl pt-4 text-clr-2 ">
    <a href={'#' + nextSection}>
      <FaAnglesDown className="down-arrow" />
    </a>
  </div>
);

const Main = () => {
  const [showText, setShowText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (showText >= 2) setShowText(0);
      else setShowText(showText + 1);
    }, 4500);

    return () => clearInterval(interval);
  }, [showText]);

  return (
    <div className="text-white bg-clr-5">
      <About showText={showText} />
      <DownArrow nextSection="biography" />
      <Biography />
      <DownArrow nextSection="career" />
      <Career />
      <DownArrow nextSection="skills" />
      <Skillset />
      <DownArrow nextSection="projects" />
      <Projects />
      <DownArrow nextSection="contact" />
      <Contact />
    </div>
  );
};

export default Main;
