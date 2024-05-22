import React, { useRef, useEffect, useState } from 'react';

const Biography = () => {
  const [isVisible, setIsVisible] = useState(false);
  const myRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    });

    observer.observe(myRef.current);
  }, []);

  useEffect(() => {
    if (isVisible) {
      // console.log(myRef.current);
      [...myRef.current.children].forEach((p, index) => {
        setTimeout(p.classList.add('animate-text'), index * 100);
      });
    }
  }, [isVisible]);

  return (
    <div
      ref={myRef}
      id="biography"
      className="w-[90%] sm:w-[80%] lg:max-w-[55%] text-[1rem] md:text-[1.5rem] sm:text-[1.25rem] space-y-6 sm:space-y-10 flex flex-col justify-center items-center text-justify mx-auto font-bold relative z-10"
    >
      <h1 className="self-start text-[2.5rem] md:text-[4rem] text-clr-2 !font-extrabold">
        Biography
      </h1>
      <p className="translate-x-[-300%]">
        I'm a 22 years old full-stack developer & a software engineer hooked on
        mastering the latest in web tech and currently interested in Web
        Development. 💡☁️
      </p>
      <p className="translate-x-[-300%]">
        Kickstarted coding at a tender age of 18 with C, now I craft
        cutting-edge web projects, using the most trending web technologies.🚀
      </p>
      <p className="translate-x-[-300%]">
        I have a deep sense of curiosity and an insatiable desire for knowledge.
        I strive to expand my skills in every field I encounter.🌟
      </p>
      <p className="text-center translate-x-[-300%]">
        📄Feel free to grab a pdf version of my CV for more ! (Contact Section)
        <a href="#contact">👇</a>
      </p>
      <div className="spacer py-2"></div>
    </div>
  );
};

export default Biography;
