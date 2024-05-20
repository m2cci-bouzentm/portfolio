import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const EsgiCard = ({ esgiLogo }) => {
  return (
    <div
      className="career-card font-[600] sm:font-[700] text-[1rem] sm:text-[1.25rem] lg:text-[1.5rem] h-[350px] text-justify flex flex-col relative overflow-hidden outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-offset-2 shadow-md rounded-lg motion-reduce:transition-none"
      tabIndex="-1"
    >
      <div className="p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-lg flex gap-3">
        <div
          className="relative shadow-none rounded-lg"
          style={{ maxWidth: 'fit-content' }}
        >
          <img
            src={esgiLogo}
            className="relative z-10 opacity-0 data-[loaded=true]:opacity-100 shadow-none motion-reduce:transition-none !duration-300 rounded-lg w-[80px]"
            alt="esgi-logo"
            data-loaded="true"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-[1] sm:text[1.25rem] md:text-[1.5rem] lg:text-[2rem] text-[#11071F] font-[700]">
            Ecole Supérieure de Génie Informatique
          </p>
          <p className="text-base text-black font-[700]">
            Lille - France | (September 2024 - Future Student)
          </p>
        </div>
      </div>
      <hr className="border-clr-5" />
      <div className="relative w-full p-3 flex-auto flex-col align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased flex justify-center">
        <p className="career-bio-text text-justify">
          Admitted to the 2nd year apprenticeship program in computer science,
          pursuing a Bachelor's degree, starting in September 2024.
        </p>
      </div>
      <hr className="border-clr-5" />
      <div className="p-3 h-auto text-base flex w-full items-center overflow-hidden subpixel-antialiased rounded-b-lg">
        <a
          className="relative inline-flex items-center outline-none text-black"
          tabIndex="0"
          href="https://www.esgi.fr/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Visit The Official ESGI School Website{' '}
          <FaExternalLinkAlt className="mx-2" />
        </a>
      </div>
    </div>
  );
};

export default EsgiCard;
