import React, { useEffect, useState } from 'react';
import Biography from './Biography';
import HeroSect from './HeroSect';
import Career from './Career';
import Skillset from './Skillset';


const Main = () => {

  const [showText, setShowText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {

      if (showText >= 2)
        setShowText(0)
      else
        setShowText(showText + 1);

    }, 4500);

    return () => clearInterval(interval);

  }, [showText]);


  return (
    <div className='text-white bg-clr-5'>
      <HeroSect showText={showText} />
      <div className="spacing h-[200px]"></div>
      <Biography />
      <div className="spacing h-[300px]"></div>

      <Career />

      <div className="spacing h-[200px]"></div>

      <Skillset />

      <div className="spacing h-[200px]"></div>


    </div>
  );
};

export default Main;
