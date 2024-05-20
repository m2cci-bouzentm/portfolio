import { useEffect, useState } from 'react';
import { FaGithub, FaLaptopCode } from 'react-icons/fa';

const MenuItems = ({ classes, setIsMobileMenuOpen }) => {
  const menuClick = (e) => {
    setIsMobileMenuOpen(false);
  };
  return (
    <ul className={classes}>
      <li onClick={menuClick}>
        <a href="#about">About</a>
      </li>
      <li onClick={menuClick}>
        <a href="#biography">Biography</a>
      </li>
      <li onClick={menuClick}>
        <a href="#career">Career</a>
      </li>
      <li onClick={menuClick}>
        <a href="#skills">Skills</a>
      </li>
      <li onClick={menuClick}>
        <a href="#projects">Projects</a>
      </li>
      <li onClick={menuClick}>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
};
const HamburgerMenu = ({ openMobileMenu, isMobileMenuOpen }) => (
  <div
    onClick={openMobileMenu}
    className="mobile-menu-button flex flex-col gap-[1rem] cursor-pointer"
  >
    <div
      className={
        'bar w-6 h-[1px] bg-white opacity-90 ' +
        (isMobileMenuOpen ? 'rotated-bar1' : '')
      }
    ></div>
    <div
      className={
        'bar w-6 h-[1px] bg-white opacity-90 ' +
        (isMobileMenuOpen ? 'rotated-bar2' : '')
      }
    ></div>
  </div>
);

const Nav = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const [scrollTop, SetScrollTop] = useState(window.scrollY);
  const [isNav, setIsNav] = useState(true);

  const scrollHandler = (e) => {
    const currentScrollTop = window.scrollY;

    if (currentScrollTop > scrollTop) {
      setIsNav(false);
    } else {
      setIsNav(true);
    }
    SetScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
  };
  document.addEventListener('scroll', scrollHandler);

  const openMobileMenu = (e) => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(true);
    }
  };
  return (
    <nav
      className={
        'md:px-[10%] sm:px-[5%] px-0 py-4 flex flex-wrap items-center justify-between font-[600] opacity-95 w-full fixed z-30 text-white bg-clr-1 transition-transform duration-300 ' +
        (isNav ? '' : 'hiddenNav') +
        (isMobileMenuOpen ? '!items-start' : '')
      }
    >
      <div className="flex items-center space-x-4 mx-2 sm:mx-0">
        {/********************  mobile-menu *********************/}
        <div className="mobile-menu block sm:hidden h-full ">
          <HamburgerMenu
            openMobileMenu={openMobileMenu}
            isMobileMenuOpen={isMobileMenuOpen}
          />
        </div>
        {/************************************************************ */}
        <div className="my-logo">
          <a href="#about">
            <FaLaptopCode className="text-[40px] hover:scale-95" />
          </a>
        </div>
      </div>

      <div className="menu-items hidden sm:block">
        <MenuItems classes={'flex justify-around space-x-6'} />
      </div>

      <div className="github-logo mx-2 sm:mx-0">
        <a
          href="https://github.com/Mohamed-24-03-2022"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="text-[40px] hover:scale-95" />
        </a>
      </div>

      <div
        className={
          'mobile-menu-items bg-clr-1 bg- bg-opacity-80 absolute h-[100vh] w-full top-[60px] overflow-hidden ' +
          (isMobileMenuOpen ? 'show-mobile-menu' : 'hide-mobile-menu')
        }
      >
        <MenuItems
          classes={'text-[1.125rem] p-6 space-y-2 text-clr-2 relative z-10'}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      </div>
    </nav>
  );
};

export default Nav;
