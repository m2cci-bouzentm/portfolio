import React, { useEffect, useState } from 'react';
import Biography from './Biography';
import HeroSect from './HeroSect';
import Career from './Career';
import Skillset from './Skillset';
import Projects from './Projects';

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
      <HeroSect showText={showText} />
      <Biography />
      <Career />
      <Skillset />
      <Projects />
    </div>
  );
};

export default Main;
