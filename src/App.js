import Nav from './Nav';
import Main from './Main';
import { useEffect, useState } from 'react';

function App() {
  const [mouseCoor, setMouseCoor] = useState({ x: -100, y: -100 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const hoverHandler = (e) => {
    const { pageX, pageY } = e;

    // to enhance a lil bit the performance
    if (
      pageX + 10 > mouseCoor.x ||
      pageX - 10 < mouseCoor.x ||
      pageY + 10 > mouseCoor.y ||
      pageY - 10 < mouseCoor.y
    ) {
      setMouseCoor({ x: Number(pageX), y: Number(pageY) });
    }
  };


  return (
    <div onMouseMove={hoverHandler}>
      <div
        className="hovering-effect-div absolute z-10 duration-0"
        style={{ top: `${mouseCoor.y}px`, left: `${mouseCoor.x}px` }}
      ></div>
      <Nav isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <div className={isMobileMenuOpen ? "blur-sm -mx-[5px] pointer-events-none" : "blured-main-animation"}>
        <Main />
      </div>
      <footer className='mt-auto pt-8 w-full text-center text-[0.8rem] bg-clr-5 text-white text-opacity-60'>© 2024 Bouzentouta Mohamed.</footer>
    </div>
  );
}

export default App;
