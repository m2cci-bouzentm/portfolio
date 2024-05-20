import React from 'react';
import { MdOutlineFileDownload } from 'react-icons/md';
import myCV from './assets/CV_BOUZENTOUTA_Mohamed.pdf';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div
      id="contact"
      className="lg:max-w-[55%] md:text-[1.5rem] w-[80%] text-[1.25rem] flex flex-col justify-center items-center text-justify h-[100vh] mx-auto space-y-10 relative z-10"
    >
      <h1 className="self-start text-[4rem] font-extrabold text-clr-2 mx-auto">
        Contact
      </h1>

      <p className="underline"> bouzentoutamohamed@gmail.com</p>
      <p className="underline"> +33 6 02 53 83 32</p>
      <a
        download
        target="_blank"
        href={myCV}
        className="flex justify-center items-center border-4 rounded-lg border-clr-2 py-4 px-2 font-bold text-[1rem] md:text-[1.2rem]"
        rel="noreferrer"
      >
        Download CV - FR{' '}
        <MdOutlineFileDownload className="scale-[2] ml-4 inline" />
      </a>
      <div className="flex space-x-4 text-clr-2 text-[2rem]">
        <a
          target="_blank"
          href="https://github.com/Mohamed-24-03-2022"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/mohamedbz__/"
          rel="noreferrer"
        >
          <FaInstagramSquare />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/mohbznt/"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Contact;
