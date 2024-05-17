import React from 'react';

const Biography = () => {
  return (
    <div
      id="biography"
      className="felx flex-col justify-center items-center text-justify h-[100vh] max-w-[55%] mx-auto space-y-10 text-[1.5rem] font-extrabold relative z-10"
    >
      <h1 className="text-[4rem] text-clr-2">Biography</h1>
      <p>
        I'm a 22 years old full-stack developer & a software engineer hooked on
        mastering the latest in web tech and currently interested in Web
        Development. 💡☁️
      </p>
      <p>
        Kickstarted coding at a tender age of 18 with C, now I craft
        cutting-edge web projects, using the most trending web technologies.🚀
      </p>

      <p>
        I have a deep sense of curiosity and an insatiable desire for knowledge.
        I strive to expand my skills in every field I encounter.🌟
      </p>

      <p className='text-center'>
        📄Feel free to grab a pdf version of my CV for more ! (Contact Section)
        <a href="#contact">👇</a>
      </p>
    </div>
  );
};

export default Biography;
