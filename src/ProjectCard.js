import React from 'react';

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({
  cardTitle,
  cardDescription,
  projectUrl,
  projectTitle,
  cardNote,
  additionalClasses,
}) => {
  return (
    <div className="project-card font-bold flex flex-col justify-center items-start space-y-8 cursor-grab">
      <a
        href={projectUrl}
        target="_blank"
        className="flex text-[2rem] items-center space-x-2"
        rel="noreferrer"
      >
        <FaGithub className="text-clr-2" />
        <span className="underline">{cardTitle}</span>
        <FaExternalLinkAlt className="text-[80%]" />
      </a>
      <p>{cardDescription}</p>
      {cardNote && <p className="!m-2 text-[1.2rem]">{cardNote}</p>}
      <iframe
        className={
          'scale-50 !-mt-28 w-[160%] h-[100vh] relative z-10 self-center border-4 border-clr-2 rounded-lg shadow-lg ' +
          additionalClasses || ''
        }
        src={projectUrl}
        title={projectTitle}
      ></iframe>
    </div>
  );
};

export default ProjectCard;
