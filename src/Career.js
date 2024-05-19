import React from 'react';
import EsgiCard from "./EsgiCard"
import UnicaenCard from "./UnicaenCard"
import esgiLogo from './assets/esgi.webp';
import unicaenLogo from './assets/unicaen.svg';

const Career = () => {
  return (
    <div id="career" className="flex flex-col justify-center items-center text-justify h-[150vh] max-w-[55%] mx-auto space-y-10 text-[1.5rem] font-extrabold relative z-10">
      <h1 className="self-start text-[4rem] text-clr-2">Career</h1>

      <EsgiCard esgiLogo={esgiLogo} />
      <UnicaenCard unicaenLogo={unicaenLogo} />


    </div>
  );
};

export default Career;
