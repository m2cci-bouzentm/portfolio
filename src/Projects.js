import React from 'react';
import ProjectCard from './ProjectCard';

const demonicEmperor = {
  cardTitle: '🚀 Explore Demonic Emperor Reader',
  cardDescription: `📖 It's a web app for reading the Demonic Emperor manga. 🖥️ It offers a responsive
  easy-to-use interface to browse through different chapters 📚 and read
  the manga online. The app is built with React ⚛️ and uses React Router
  🚦 for navigation, Tailwinds for styling, plus it fetches all the necessary data from an API 🌐.`,
  projectUrl: 'https://demonic-emperor-front.vercel.app',
  projectTitle: 'Demonic Emperor',
};

const youtubeClone = {
  cardTitle: '🚀 Explore My Version Of Youtube !',
  cardDescription:
    'For this project, I used React ⚛️, Tailwind CSS 🎨, Firebase 🔐, React Context API 📋, React Router 🚦, React Icons 🖼️, Material UI 🛠️, and YouTube API v3 📺. Features include viewing popular videos 🌍, searching 🔍, watching ▶️, viewing statistics 📊, comments 💬, and related videos 📽️.',
  cardNote: "Note: It's not mobile-friendly 📱.",
  projectUrl: 'https://mohamed-24-03-2022.github.io/youtube-clone/',
  projectTitle: 'Youtube Clone',
};

const photoTaggingApp = {
  cardTitle: "🚀 Where's Waldo? Photo Tagging App",
  cardDescription:
    "This project turns the classic Where's Waldo? game into a web adventure! Users hunt for specific characters in a bustling image. Click to select characters, get instant feedback, and race against the clock. Developed with HTML, CSS, JavaScript, React.js, Tailwind and firebase, it's a fun, interactive experience! 🎯🔍",
  cardNote: "Note: It's not mobile-friendly 📱.",
  projectUrl: 'https://mohamed-24-03-2022.github.io/photo-tagging-app/',
  projectTitle: 'Photo Tagging App',
};

const shoppingCart = {
  cardTitle: '🚀 Shopping Cart',
  cardDescription:
    'Welcome to my React Shopping Cart app! 🎉 Browse, add to cart, and purchase with ease in this responsive single-page app. 🛍️ Features TypeScript for the first time, Tailwind for quick styling, and react-router-dom for seamless navigation. 🚀',
  projectUrl: 'https://mohamed-24-03-2022.github.io/react-ts-shopping-cart/',
  projectTitle: 'Shopping Cart',
};

const protfolio = {
  cardTitle: '🚀 My Portfolio',
  cardDescription:
    "My portfolio, built with React.js and Tailwind CSS, features Next UI, SwiperJS, and Framer Motion 🚀. Prior to coding, I designed the UI in Figma for seamless frontend development. Although it's a single-page layout, it's dynamic and scalable, especially the projects section, ready to handle more data 💻.",
  projectUrl: 'http://localhost:3000/', //TODO: Update the URL
  projectTitle: 'Portfolio',
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col justify-center items-center text-justify max-w-[55%] mx-auto space-y-10 text-[1.5rem] font-extrabold relative z-10"
    >
      <h1 className="self-start text-[4rem] text-clr-2">Projects</h1>

      <ProjectCard
        cardTitle={demonicEmperor.cardTitle}
        cardDescription={demonicEmperor.cardDescription}
        projectUrl={demonicEmperor.projectUrl}
        projectTitle={demonicEmperor.projectTitle}
      />

      <ProjectCard
        cardTitle={youtubeClone.cardTitle}
        cardDescription={youtubeClone.cardDescription}
        projectUrl={youtubeClone.projectUrl}
        projectTitle={youtubeClone.projectTitle}
        cardNote={youtubeClone.cardNote}
        additionalClasses="bg-white"
      />

      {/* TODO fix youtube video pages */}

      <ProjectCard
        cardTitle={photoTaggingApp.cardTitle}
        cardDescription={photoTaggingApp.cardDescription}
        projectUrl={photoTaggingApp.projectUrl}
        projectTitle={photoTaggingApp.projectTitle}
        cardNote={photoTaggingApp.cardNote}
        additionalClasses="bg-white"
      />

      <ProjectCard
        cardTitle={shoppingCart.cardTitle}
        cardDescription={shoppingCart.cardDescription}
        projectUrl={shoppingCart.projectUrl}
        projectTitle={shoppingCart.projectTitle}
      />

      <ProjectCard
        cardTitle={protfolio.cardTitle}
        cardDescription={protfolio.cardDescription}
        projectUrl={protfolio.projectUrl}
        projectTitle={protfolio.projectTitle}
      />
    </div>
  );
};

export default Projects;
