import React from 'react';
import ugaLogo from './assets/Logo_Université_Grenoble_Alpes_2020.svg.png';
import unicaenLogo from './assets/unicaen.svg';
import CareerCard from './CareerCard';

const grenobleInfo = {
  logo: ugaLogo,
  schoolName: 'Grenoble Alpes University',
  schoolDescription: 'Grenoble - France | (September 2024 - June 2025)',
  bio: "I am a student at Grenoble Alpes University, diligently pursuing my master's degree. Currently in my final year, and  eager to apply my skills and knowledge to real-world projects and make a meaningful impact.",
  website: 'https://www.univ-grenoble-alpes.fr/',
  websiteText: 'Visit The Official Grenoble Alpes University Website',
};
const unicaenInfo = {
  logo: unicaenLogo,
  schoolName: 'University Of Caen Normandy',
  schoolDescription: 'Caen - France | (September 2023 - June 2024)',
  bio: "I completed the first year of my Bachelor's degree at the University of Caen Normandy, where I learned the fundamentals of web development, algorithms, and object-oriented programming (OOP).",
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

      <CareerCard info={grenobleInfo} />
      {/* <CareerCard info={unicaenInfo} /> */}
      <div className="spacer py-2"></div>
    </div>
  );
};

export default Career;
