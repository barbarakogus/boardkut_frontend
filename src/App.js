import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/header/Header';
import MobileHeader from './components/MobileHeader/MobileHeader';
import BoardgameContainer from './components/boardgameContainer/BoardgameContainer';
import BoardgameContainerMobile from './components/boardgameContainerMobile/BoardgameContainerMobile';

function App() {

  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    })
  };

  useEffect(() => {
    window.addEventListener('resize', setDimension);
    return (() => {
      window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])

  return (
    <div className="App">
      {screenSize.dynamicWidth < 768 ? <MobileHeader /> : <Header />}
      {screenSize.dynamicWidth < 768 ? <BoardgameContainerMobile /> : <BoardgameContainer />}
    </div>
  );
};

export default App;
