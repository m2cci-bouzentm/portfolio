import React from 'react';

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({
  cardTitle,
  cardDescription,
  projectUrl,
  projectTitle,
  cardNote,
  tutorial,
  additionalClasses,
  tech,
}) => {
  return (
    <div className="project-card font-bold flex flex-col justify-center items-center space-y-8 cursor-grab">
      <a className="project-title flex text-[1rem] sm:text-[2rem] self-start items-center space-x-2"
        href={projectUrl}
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub className="text-clr-2" />
        <span className="underline">
          {cardTitle}
          <FaExternalLinkAlt className="inline-block no-underline mx-2 text-[80%]" />
        </span>
      </a>
      <div className="project-description text-[1rem] sm:text-[1.25rem]">
        <p>{cardDescription}</p>
        {cardNote && <p className="!m-2 text-[1rem] sm:text-[1.2rem]">{cardNote}</p>}
        {tutorial && <a href={tutorial[1]} target='_blank' className="!m-4 sm:text-[1.1rem] underline" rel="noreferrer">{tutorial[0]}</a>}
      </div>
      <iframe
        className={
          'scale-50 !-mt-20 w-[160%] h-[80vh] sm:h-[100vh] relative z-10 self-center border-4 border-clr-2 rounded-lg shadow-lg ' +
          additionalClasses || ''
        }
        src={projectUrl}
        title={projectTitle}
      ></iframe>
      <div className="project-tech flex flex-wrap justify-center items-center !mb-6 space-x-4 saturate-200">
        {Object.keys(tech).map((techName, index) => {
          return (
            <img
              key={index}
              src={tech[techName]}
              alt={`${techName.replace(' ', '')}-icon`}
              title={techName}
              className={'w-[40px] md:w-[60px] ' + (techName === 'Express' || techName === 'Socket.io' ? 'invert' : '')}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
