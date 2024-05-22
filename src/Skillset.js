import React from 'react';
import htmlIcon from './assets/skillset/html5-original.svg';
import cssIcon from './assets/skillset/css3-plain-wordmark.svg';
import jsIcon from './assets/skillset/javascript-original.svg';
import reactIcon from './assets/skillset/react-original.svg';
import nodeIcon from './assets/skillset/nodejs-original-wordmark.svg';
import expressIcon from './assets/skillset/express-original.svg';
import mongodbIcon from './assets/skillset/mongodb-original.svg';
import phpIcon from './assets/skillset/php-original.svg';
import laravelIcon from './assets/skillset/laravel-original.svg';
import npmIcon from './assets/skillset/npm-original-wordmark.svg';
import webpackIcon from './assets/skillset/webpack-original.svg';
import tailwindcssIcon from './assets/skillset/tailwindcss-original.svg';
import jestIcon from './assets/skillset/jest-plain.svg';
import pythonIcon from './assets/skillset/python-original.svg';
import materialuiIcon from './assets/skillset/materialui-original.svg';
import gitIcon from './assets/skillset/git-original-wordmark.svg';
import firebaseIcon from './assets/skillset/firebase-original.svg';
import eslintIcon from './assets/skillset/eslint-original.svg';
import cIcon from './assets/skillset/c-original.svg';
import babelIcon from './assets/skillset/babel-original.svg';
import bootstrapIcon from './assets/skillset/bootstrap-original.svg';
import wordpressIcon from './assets/skillset/wordpress-plain.svg';
import tsIcon from './assets/skillset/typescript-original.svg';
import numpyIcon from './assets/skillset/numpy-original.svg';

// Icons by devicons github.com/devicons/devicon

const Skillset = () => {
  return (
    <div
      id="skills"
      className="w-[90%] sm:w-[80%] lg:max-w-[55%] text-[1rem] md:text-[1.5rem] sm:text-[1.25rem] space-y-6 sm:space-y-10 flex flex-col justify-center items-center text-justify mx-auto font-bold relative z-10"
    >
      <h1 className="self-start text-[2.5rem] md:text-[4rem] text-clr-2 !font-extrabold">
        Skillset
      </h1>

      <div className="grid xl:grid-cols-8 md:gap-[2.5rem] sm:grid-cols-6 grid-cols-4 sm:gap-[2rem] gap-[2.5rem] py-10 saturate-200">
        <img src={htmlIcon} alt="html-icon" title="HTML" />
        <img src={cssIcon} alt="css-icon" title="CSS" />
        <img src={jsIcon} alt="js-icon" title="javascript" />
        <img src={reactIcon} alt="react-icon" title="React" />
        <img src={tsIcon} alt="ts-icon" title="typescript" />
        <img src={tailwindcssIcon} alt="tailwindcss-icon" title="Tailwindcss" />
        <img src={bootstrapIcon} alt="bootstrap-icon" title="Bootstrap" />
        <img src={materialuiIcon} alt="materialui-icon" title="Materialui" />
        <img src={nodeIcon} alt="node-icon" title="Node" />
        <img
          src={expressIcon}
          alt="express-icon"
          title="Express"
          className="invert"
        />
        <img src={mongodbIcon} alt="mongodb-icon" title="MongoDB" />
        <img src={phpIcon} alt="php-icon" title="PHP" />
        <img src={laravelIcon} alt="laravel-icon" title="Laravel" />
        <img src={npmIcon} alt="npm-icon" title="NPM" />
        <img src={webpackIcon} alt="webpack-icon" title="Webpack" />
        <img src={babelIcon} alt="babel-icon" title="Babel" />
        <img src={gitIcon} alt="git-icon" title="GIT" />
        <img src={firebaseIcon} alt="firebase-icon" title="Firebase" />
        <img src={eslintIcon} alt="eslint-icon" title="ESlint" />
        <img src={jestIcon} alt="jest-icon" title="jest" />
        <img
          src={wordpressIcon}
          alt="wordpress-icon"
          title="Wordpress"
          className="invert"
        />
        <img src={pythonIcon} alt="python-icon" title="Python" />
        <img src={cIcon} alt="c-icon" title="C" />
        <img src={numpyIcon} alt="numpy-icon" title="Numpy" />
      </div>
    </div>
  );
};

export default Skillset;
