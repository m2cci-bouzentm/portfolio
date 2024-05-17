import { useState } from 'react';
import { FaGithub, FaLaptopCode } from 'react-icons/fa';

const Nav = () => {
  const [scrollTop, SetScrollTop] = useState(
    window.scrollY
  );
  const [isNav, setIsNav] = useState(true)

  const scrollHandler = (e) => {
    const currentScrollTop = window.scrollY;

    if (currentScrollTop > scrollTop) {
      setIsNav(false)

    } else {
      setIsNav(true)
    }
    SetScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);

  };
  document.addEventListener('scroll', scrollHandler);


  return (
    <nav className={"flex py-4 px-56 items-center justify-between font-[600] opacity-95 w-full fixed z-20 text-white bg-clr-1 transition-transform duration-300 " + (isNav ? "" : "hiddenNav")}>
      <div className="my-logo">
        <FaLaptopCode className="text-[40px] hover:scale-95" />
      </div>
      <div className="menu-items flex-shrink-0 w-[50%]">
        <ul className="flex justify-around">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#biography">Biography</a>
          </li>
          <li>
            <a href="#career">Career</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="github-logo">
        <a
          href="https://github.com/Mohamed-24-03-2022"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="text-[40px] hover:scale-95" />
        </a>
      </div>
    </nav >
  );
};

export default Nav;
