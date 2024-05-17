import Nav from './Nav';
import Main from './Main';
import { useEffect, useState } from 'react';

function App() {
  const [mouseCoor, setMouseCoor] = useState({ x: -100, y: -100 });

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
        className="hovering-effect-div absolute z-10"
        style={{ top: `${mouseCoor.y}px`, left: `${mouseCoor.x}px` }}
      ></div>
      <Nav />
      <Main />
    </div>
  );
}

export default App;
