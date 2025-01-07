import React from "react";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import reactIcon from "./assets/skillset/react-original.svg";
import nodeIcon from "./assets/skillset/nodejs-original-wordmark.svg";
import expressIcon from "./assets/skillset/express-original.svg";
import tailwindcssIcon from "./assets/skillset/tailwindcss-original.svg";
import materialuiIcon from "./assets/skillset/materialui-original.svg";
import gitIcon from "./assets/skillset/git-original-wordmark.svg";
import prismaIcon from "./assets/skillset/prisma-original.svg";
import tsIcon from "./assets/skillset/typescript-original.svg";
import axiosIcon from "./assets/skillset/axios-plain-wordmark.svg";
import reactRouter from "./assets/skillset/reactrouter-original.svg";
import swiperIcon from "./assets/skillset/swiper-original.svg";
import figmaIcon from "./assets/skillset/figma-original.svg";
import jsIcon from "./assets/skillset/javascript-original.svg";
import phpIcon from "./assets/skillset/php-original.svg";
import mysqlIcon from "./assets/skillset/mysql-original.svg";
import postgresqlIcon from "./assets/skillset/postgresql-original.svg";
import mongodbIcon from "./assets/skillset/mongodb-original.svg";
import viteIcon from "./assets/skillset/vitejs-original.svg";
import socketioIcon from "./assets/skillset/socketio-original-wordmark.svg";
import JavaIcon from "./assets/skillset/java-original.svg";
import springIcon from "./assets/skillset/spring-original.svg";

//****** Icons by devicons github.com/devicons/devicon *******//

const demonicEmperor = {
   cardTitle: "🚀 Explore Demonic Emperor Reader",
   cardDescription: `📖 It's a web app for reading the Demonic Emperor manga. 🖥️ It offers a responsive
  easy-to-use interface to browse through different chapters 📚 and read
  the manga online. The app is built with React ⚛️ and uses React Router
  🚦 for navigation, Tailwinds for styling, plus it fetches all the necessary data from an API 🌐.`,
   projectUrl: "https://demonic-emperor-front.vercel.app",
   projectTitle: "Demonic Emperor",
   tech: {
      Js: jsIcon,
      React: reactIcon,
      "React Router": reactRouter,
      "Tailwind CSS": tailwindcssIcon,
      Node: nodeIcon,
      Express: expressIcon,
      MongoDb: mongodbIcon,
      Axios: axiosIcon,
      Git: gitIcon,
   },
};
const youtubeClone = {
   cardTitle: "🚀 Explore My Version Of Youtube !",
   cardDescription:
      "For this project, I used React ⚛️, Tailwind CSS 🎨, Firebase 🔐, React Context API 📋, React Router 🚦, React Icons 🖼️, Material UI 🛠️, and YouTube API v3 📺. Features include viewing popular videos 🌍, searching 🔍, watching ▶️, viewing statistics 📊, comments 💬, and related videos 📽️.",
   cardNote: "Note: It's not mobile-friendly 📱.",
   projectUrl: "https://m2cci-bouzentm.github.io/youtube-clone/",
   projectTitle: "Youtube Clone",
   tech: {
      Js: jsIcon,
      React: reactIcon,
      "React Router": reactRouter,
      "Tailwind CSS": tailwindcssIcon,
      "Material UI": materialuiIcon,
      Axios: axiosIcon,
      Git: gitIcon,
   },
};
const protfolio = {
   cardTitle: "🚀 My Portfolio",
   cardDescription:
      "My portfolio, built with React.js and Tailwind CSS, features Next UI and SwiperJS,  🚀. Prior to coding, I designed the UI in Figma for seamless frontend development. Although it's a single-page layout, it's dynamic and scalable, especially the projects section, ready to handle more data 💻.",
   projectUrl: "https://www.bouzentoutamohamed.online/",
   projectTitle: "Portfolio",
   tech: {
      Js: jsIcon,
      React: reactIcon,
      "Tailwind CSS": tailwindcssIcon,
      SwiperJS: swiperIcon,
      Git: gitIcon,
      Figma: figmaIcon,
   },
};

const phpRestfulApi = {
   cardTitle: "🚀 PHP restful API",
   cardDescription: `🎉 Welcome to my PHP Restful API project! 🛍️ It's a responsive single-page app where you can browse, add, edit, or delete bands, albums, and music tracks with ease. The frontend is built with React (create vite) ⚛️, TypeScript 📝, and Tailwind CSS 🎨, while React Router 🚦 ensures smooth navigation. The backend API is crafted using vanilla PHP 🐘 and MySQL 🛢️, handling various HTTP verbs to interact with the data efficiently.`,
   // cardNote: "Note: The API uses HTTP, so you may need to enable unsafe content in your browser to get access to the data 🔐.",
   // tutorial: ['See how to do it', 'https://stackoverflow.com/a/24434461'],
   projectUrl: "https://php-restful-api.vercel.app/",
   projectTitle: "PHP restful API",
   tech: {
      Js: jsIcon,
      React: reactIcon,
      TypeScript: tsIcon,
      "Tailwind CSS": tailwindcssIcon,
      "React Router": reactRouter,
      Git: gitIcon,
      PHP: phpIcon,
      mySql: mysqlIcon,
   },
};
const blogWebsite = {
   cardTitle: "📝 Blog Website",
   cardDescription: `🌟 Welcome to the Blog Website project! This project consists of two separate applications: one for authors to manage blog posts and another for users to view and comment on posts. The backend API has two implementations that achieve the same functionality:<br>
  - The original implementation was built using Node.js and Express 🚀, with Prisma for database management and JWT for authentication.<br>
  - A second version was created using Java, Spring Boot, and Hibernate for a robust and scalable alternative.<br>

The frontend, built with React ⚛️, TypeScript 📝, and Tailwind CSS 🎨, works seamlessly with either backend implementation, ensuring flexibility and consistency.<br>
React Router 🚦 handles smooth navigation across pages.`,
   projectUrl: "https://blog-api-front-author.vercel.app",
   projectTitle: "Blog Website",
   tech: {
      React: reactIcon,
      TypeScript: tsIcon,
      "Tailwind CSS": tailwindcssIcon,
      "React Router": reactRouter,
      Node: nodeIcon,
      Express: expressIcon,
      PostgreSQL: postgresqlIcon,
      Prisma: prismaIcon,
      Java: JavaIcon,
      SpringBoot: springIcon,
      Git: gitIcon,
   },
};

const nodeMessagingApp = {
   cardTitle: "💬 Node Messaging App",
   cardDescription: `📱 Welcome to the Node Messaging App project! This is a messaging application built with a React frontend and a Node.js backend. The frontend uses TypeScript and Vite for a fast development experience, while the backend uses Prisma for database management. Key features include real-time messaging with socket.io, user authentication, group and individual conversations, file uploads, and message notifications. The UI is mobile-friendly and built with Tailwind CSS and Material UI.`,
   projectUrl: "https://node-messaging-app.vercel.app",
   projectTitle: "Node Messaging App",
   tech: {
      React: reactIcon,
      TypeScript: tsIcon,
      Vite: viteIcon,
      "Tailwind CSS": tailwindcssIcon,
      "Material UI": materialuiIcon,
      Node: nodeIcon,
      Express: expressIcon,
      PostgreSQL: postgresqlIcon,
      Prisma: prismaIcon,
      "Socket.io": socketioIcon,
      Git: gitIcon,
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
               delay: 6000,
               disableOnInteraction: true,
            }}
            loop={true}
         >
            <SwiperSlide>
               <ProjectCard
                  cardTitle={nodeMessagingApp.cardTitle}
                  cardDescription={nodeMessagingApp.cardDescription}
                  projectUrl={nodeMessagingApp.projectUrl}
                  projectTitle={nodeMessagingApp.projectTitle}
                  cardNote={nodeMessagingApp.cardNote}
                  tutorial={nodeMessagingApp.tutorial}
                  additionalClasses="bg-white"
                  tech={nodeMessagingApp.tech}
               />
            </SwiperSlide>
            <SwiperSlide>
               <ProjectCard
                  cardTitle={blogWebsite.cardTitle}
                  cardDescription={blogWebsite.cardDescription}
                  projectUrl={blogWebsite.projectUrl}
                  projectTitle={blogWebsite.projectTitle}
                  cardNote={blogWebsite.cardNote}
                  additionalClasses="bg-white"
                  tech={blogWebsite.tech}
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
                  cardTitle={protfolio.cardTitle}
                  cardDescription={protfolio.cardDescription}
                  projectUrl={protfolio.projectUrl}
                  projectTitle={protfolio.projectTitle}
                  tech={protfolio.tech}
               />
            </SwiperSlide>
         </Swiper>
      </div>
   );
};

export default Projects;
