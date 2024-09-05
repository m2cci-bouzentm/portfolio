import React from 'react';
import ProjectCard from './ProjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import reactIcon from './assets/skillset/react-original.svg';
import nodeIcon from './assets/skillset/nodejs-original-wordmark.svg';
import expressIcon from './assets/skillset/express-original.svg';
import tailwindcssIcon from './assets/skillset/tailwindcss-original.svg';
import materialuiIcon from './assets/skillset/materialui-original.svg';
import gitIcon from './assets/skillset/git-original-wordmark.svg';
import firebaseIcon from './assets/skillset/firebase-original.svg';
import tsIcon from './assets/skillset/typescript-original.svg';
import axiosIcon from './assets/skillset/axios-plain-wordmark.svg';
import reactRouter from './assets/skillset/reactrouter-original.svg';
import swiperIcon from './assets/skillset/swiper-original.svg';
import figmaIcon from './assets/skillset/figma-original.svg';
import jsIcon from './assets/skillset/javascript-original.svg';
import phpIcon from './assets/skillset/php-original.svg';
import mysqlIcon from './assets/skillset/mysql-original.svg';
import mongodbIcon from './assets/skillset/mongodb-original.svg';



const demonicEmperor = {
  cardTitle: '🚀 Explore Demonic Emperor Reader',
  cardDescription: `📖 It's a web app for reading the Demonic Emperor manga. 🖥️ It offers a responsive
  easy-to-use interface to browse through different chapters 📚 and read
  the manga online. The app is built with React ⚛️ and uses React Router
  🚦 for navigation, Tailwinds for styling, plus it fetches all the necessary data from an API 🌐.`,
  projectUrl: 'https://demonic-emperor-front.vercel.app',
  projectTitle: 'Demonic Emperor',
  tech: {
    Js: jsIcon,
    React: reactIcon,
    'React Router': reactRouter,
    'Tailwind CSS': tailwindcssIcon,
    Node: nodeIcon,
    Express: expressIcon,
    MongoDb: mongodbIcon,
    Axios: axiosIcon,
    Git: gitIcon,
  },
};
const youtubeClone = {
  cardTitle: '🚀 Explore My Version Of Youtube !',
  cardDescription:
    'For this project, I used React ⚛️, Tailwind CSS 🎨, Firebase 🔐, React Context API 📋, React Router 🚦, React Icons 🖼️, Material UI 🛠️, and YouTube API v3 📺. Features include viewing popular videos 🌍, searching 🔍, watching ▶️, viewing statistics 📊, comments 💬, and related videos 📽️.',
  cardNote: "Note: It's not mobile-friendly 📱.",
  projectUrl: 'https://mohamed-24-03-2022.github.io/youtube-clone/',
  projectTitle: 'Youtube Clone',
  tech: {
    Js: jsIcon,
    React: reactIcon,
    'React Router': reactRouter,
    'Tailwind CSS': tailwindcssIcon,
    'Material UI': materialuiIcon,
    Axios: axiosIcon,
    Git: gitIcon,
  },
};
const photoTaggingApp = {
  cardTitle: "🚀 Where's Waldo? Photo Tagging App",
  cardDescription:
    "This project turns the classic Where's Waldo? game into a web adventure! Users hunt for specific characters in a bustling image. Click to select characters, get instant feedback, and race against the clock. Developed with HTML, CSS, JavaScript, React.js, Tailwind and firebase, it's a fun, interactive experience! 🎯🔍",
  cardNote: "Note: It's not mobile-friendly 📱.",
  projectUrl: 'https://mohamed-24-03-2022.github.io/photo-tagging-app/',
  projectTitle: 'Photo Tagging App',
  tech: {
    Js: jsIcon,
    React: reactIcon,
    'Tailwind CSS': tailwindcssIcon,
    Firebase: firebaseIcon,
    Git: gitIcon,
  },
};

const protfolio = {
  cardTitle: '🚀 My Portfolio',
  cardDescription:
    "My portfolio, built with React.js and Tailwind CSS, features Next UI and SwiperJS,  🚀. Prior to coding, I designed the UI in Figma for seamless frontend development. Although it's a single-page layout, it's dynamic and scalable, especially the projects section, ready to handle more data 💻.",
  projectUrl: 'https://www.bouzentoutamohamed.online/',
  projectTitle: 'Portfolio',
  tech: {
    Js: jsIcon,
    React: reactIcon,
    'Tailwind CSS': tailwindcssIcon,
    SwiperJS: swiperIcon,
    Git: gitIcon,
    Figma: figmaIcon,
  },
};

const phpRestfulApi = {
  cardTitle: '🚀 PHP restful API',
  cardDescription: `🎉 Welcome to my PHP Restful API project! 🛍️ It's a responsive single-page app where you can browse, add, edit, or delete bands, albums, and music tracks with ease. The frontend is built with React (create vite) ⚛️, TypeScript 📝, and Tailwind CSS 🎨, while React Router 🚦 ensures smooth navigation. The backend API is crafted using vanilla PHP 🐘 and MySQL 🛢️, handling various HTTP verbs to interact with the data efficiently.`,
  cardNote: "Note: The API uses HTTP, so you may need to enable unsafe content in your browser to get access to the data 🔐.",
  tutorial: ['See how to do it', 'https://stackoverflow.com/a/24434461'],
  projectUrl: 'https://php-restful-api.vercel.app/',
  projectTitle: 'PHP restful API',
  tech: {
    Js: jsIcon,
    React: reactIcon,
    TypeScript: tsIcon,
    'Tailwind CSS': tailwindcssIcon,
    'React Router': reactRouter,
    Git: gitIcon,
    PHP: phpIcon,
    mySql: mysqlIcon
  },
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-[90%] sm:w-[80%] lg:max-w-[55%] text-[1rem] md:text-[1.5rem] sm:text-[1.25rem] space-y-6 sm:space-y-10 flex flex-col justify-center items-center text-justify mx-auto font-bold relative z-10"
    >
      <h1 className="self-start text-[2.5rem] md:text-[4rem] text-clr-2 !font-extrabold">
        Projects
      </h1>
      <Swiper
        className="w-full"
        spaceBetween={50}
        slidesPerView={1}
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        <SwiperSlide>
          <ProjectCard
            cardTitle={demonicEmperor.cardTitle}
            cardDescription={demonicEmperor.cardDescription}
            projectUrl={demonicEmperor.projectUrl}
            projectTitle={demonicEmperor.projectTitle}
            tech={demonicEmperor.tech}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            cardTitle={protfolio.cardTitle}
            cardDescription={protfolio.cardDescription}
            projectUrl={protfolio.projectUrl}
            projectTitle={protfolio.projectTitle}
            tech={protfolio.tech}
          />
        </SwiperSlide>


        <SwiperSlide>
          {/* TODO Add my python project to the projects section */}
          {/* TODO Add node scrapper */}
          <ProjectCard
            cardTitle={youtubeClone.cardTitle}
            cardDescription={youtubeClone.cardDescription}
            projectUrl={youtubeClone.projectUrl}
            projectTitle={youtubeClone.projectTitle}
            cardNote={youtubeClone.cardNote}
            additionalClasses="bg-white"
            tech={youtubeClone.tech}
          />
        </SwiperSlide>


        <SwiperSlide>
          <ProjectCard
            cardTitle={photoTaggingApp.cardTitle}
            cardDescription={photoTaggingApp.cardDescription}
            projectUrl={photoTaggingApp.projectUrl}
            projectTitle={photoTaggingApp.projectTitle}
            cardNote={photoTaggingApp.cardNote}
            additionalClasses="bg-white"
            tech={photoTaggingApp.tech}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            cardTitle={phpRestfulApi.cardTitle}
            cardDescription={phpRestfulApi.cardDescription}
            projectUrl={phpRestfulApi.projectUrl}
            projectTitle={phpRestfulApi.projectTitle}
            cardNote={phpRestfulApi.cardNote}
            tutorial={phpRestfulApi.tutorial}
            additionalClasses="bg-white"
            tech={phpRestfulApi.tech}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;
