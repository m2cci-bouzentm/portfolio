import React from 'react';
import jsIcon from './assets/skillset/javascript-original.svg';
import reactIcon from './assets/skillset/react-original.svg';
import nodeIcon from './assets/skillset/nodejs-original-wordmark.svg';
import expressIcon from './assets/skillset/express-original.svg';
import mongodbIcon from './assets/skillset/mongodb-original.svg';
import phpIcon from './assets/skillset/php-original.svg';
import mysqlIcon from './assets/skillset/mysql-original.svg';
import postgresqlIcon from './assets/skillset/postgresql-original.svg';
import tailwindcssIcon from './assets/skillset/tailwindcss-original.svg';
import jestIcon from './assets/skillset/jest-plain.svg';
import pythonIcon from './assets/skillset/python-original.svg';
import materialuiIcon from './assets/skillset/materialui-original.svg';
import gitIcon from './assets/skillset/git-original-wordmark.svg';
import firebaseIcon from './assets/skillset/firebase-original.svg';
import cIcon from './assets/skillset/c-original.svg';
import tsIcon from './assets/skillset/typescript-original.svg';
import JavaIcon from './assets/skillset/java-original.svg';
import springIcon from './assets/skillset/spring-original.svg';

//****** Icons by devicons github.com/devicons/devicon *******//

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

        <img src={jsIcon} alt="js-icon" title="javascript" />
        <img src={tsIcon} alt="ts-icon" title="typescript" />
        <img src={nodeIcon} alt="node-icon" title="Node" />
        <img src={phpIcon} alt="php-icon" title="PHP" />
        <img src={pythonIcon} alt="python-icon" title="Python" />
        <img src={cIcon} alt="c-icon" title="C" />
        <img src={JavaIcon} alt="Java-icon" title="Java" />

        <img src={reactIcon} alt="react-icon" title="React" />
        <img
          src={expressIcon}
          alt="express-icon"
          title="Express"
          className="invert"
        />
        <img src={springIcon} alt="spring-icon" title="Spring" />

        <img src={tailwindcssIcon} alt="tailwindcss-icon" title="Tailwindcss" />
        <img src={materialuiIcon} alt="materialui-icon" title="Materialui" />
        
        <img src={mongodbIcon} alt="mongodb-icon" title="MongoDB" />
        <img src={postgresqlIcon} alt="postgresql-icon" title="Postgresql" />
        <img src={mysqlIcon} alt="mysql-icon" title="MySQL" />
        <img src={firebaseIcon} alt="firebase-icon" title="Firebase" />



        <img src={gitIcon} alt="git-icon" title="GIT" />
        <img src={jestIcon} alt="jest-icon" title="jest" />



      </div>
    </div>
  );
};

export default Skillset;
