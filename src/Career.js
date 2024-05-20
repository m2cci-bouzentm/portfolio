import React from 'react';
import EsgiCard from "./EsgiCard"
import UnicaenCard from "./UnicaenCard"
import esgiLogo from './assets/esgi.webp';
import unicaenLogo from './assets/unicaen.svg';

const Career = () => {
  return (
    <div id="career" className="lg:max-w-[55%] md:text-[1.5rem] w-[80%] text-[1.25rem] flex flex-col justify-center items-center text-justify mx-auto space-y-10 font-extrabold relative z-10">
      <h1 className="self-start text-[4rem] text-clr-2">Career</h1>

      <EsgiCard esgiLogo={esgiLogo} />
      <UnicaenCard unicaenLogo={unicaenLogo} />
      <div className='spacer py-2'></div>


    </div>
  );
};

export default Career;
