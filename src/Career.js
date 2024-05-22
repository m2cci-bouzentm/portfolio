import React from 'react';
import esgiLogo from './assets/esgi.webp';
import unicaenLogo from './assets/unicaen.svg';
import CareerCard from './CareerCard';

const esgiInfo = {
  logo: esgiLogo,
  schoolName: 'Ecole Supérieure de Génie Informatique',
  schoolDescription: 'Lille - France | (September 2024 - Current)',
  bio: "Admitted to the 2nd year apprenticeship program in computer science, pursuing a Bachelor's degree, starting in September 2024.",
  website: 'https://www.esgi.fr/',
  websiteText: 'Visit The Official ESGI School Website',
};
const unicaenInfo = {
  logo: unicaenLogo,
  schoolName: 'University Of Caen Normandy',
  schoolDescription: 'Caen - France | (September 2023 - June 2024)',
  bio: "I am a student at the University of Caen Normandy, diligently pursuing my Bachelor's degree. I am currently in my first year and already gathering an interesting skillset !",
  website: 'https://www.unicaen.fr/',
  websiteText: 'Visit The University Website',
};

const Career = () => {
  return (
    <div
      id="career"
      className="lg:max-w-[55%] md:text-[1.5rem] w-[80%] text-[1.25rem] flex flex-col justify-center items-center text-justify mx-auto space-y-10 font-extrabold relative z-10"
    >
      <h1 className="self-start text-[2.5rem] md:text-[4rem] text-clr-2">
        Career
      </h1>

      <CareerCard info={esgiInfo} />
      <CareerCard info={unicaenInfo} />
      <div className="spacer py-2"></div>
    </div>
  );
};

export default Career;
