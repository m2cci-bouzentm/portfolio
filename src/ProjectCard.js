import React from 'react';

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({
  cardTitle,
  cardDescription,
  projectUrl,
  projectTitle,
  cardNote,
  additionalClasses,
  tech,
}) => {
  return (
    <div className="project-card font-bold flex flex-col justify-center items-center space-y-8 cursor-grab">
      <a
        href={projectUrl}
        target="_blank"
        className="flex text-[2rem] self-start items-center space-x-2"
        rel="noreferrer"
      >
        <FaGithub className="text-clr-2" />
        <span className="underline">{cardTitle}</span>
        <FaExternalLinkAlt className="text-[80%]" />
      </a>
      <div className="min-h-[200px]">
        <p>{cardDescription}</p>
        {cardNote && <p className="!m-2 text-[1.2rem]">{cardNote}</p>}
      </div>
      <iframe
        className={
          'scale-50 !-mt-28 w-[160%] h-[100vh] relative z-10 self-center border-4 border-clr-2 rounded-lg shadow-lg ' +
          additionalClasses || ''
        }
        src={projectUrl}
        title={projectTitle}
      ></iframe>
      <div className="project-tech flex flex-wrap justify-center items-center space-x-4 relative bottom-36 saturate-200">
        {Object.keys(tech).map((techName, index) => {
          console.log(techName);
          return (
            <img
              key={index}
              src={tech[techName]}
              alt={`${techName.replace(' ', '')}-icon`}
              title={techName}
              className={'w-[60px] ' + (techName === 'Express' ? 'invert' : '')}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
