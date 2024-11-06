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
      className="w-[90%] sm:w-[80%] lg:max-w-[55%] text-[1rem] md:text-[1.5rem] sm:text-[1.25rem] h-[90vh] space-y-6 sm:space-y-10 flex flex-col justify-start items-center text-justify mx-auto sm:font-bold relative z-10"
    >
      <h1 className="text-[2.5rem] md:text-[4rem] text-clr-2 !font-extrabold">
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
          href="https://github.com/m2cci-bouzentm"
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
