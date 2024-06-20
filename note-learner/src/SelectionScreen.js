import React, { useState, useEffect } from 'react';
import './App.css';
import TrebleScreen from './Treble'; 
import BassScreen from './Bass'; 

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [transitioning, setTransitioning] = useState(false);

  const TrebleStart = () => {
    setTransitioning(true);
    const audio = new Audio(process.env.PUBLIC_URL + 'chord.mp3');
    audio.play();
    setTimeout(() => {
      setCurrentScreen('TrebleScreen');
    }, 1000); 
  };

  const BassStart = () => {
    setTransitioning(true);
    const audio = new Audio(process.env.PUBLIC_URL + 'chord.mp3');
    audio.play();
    setTimeout(() => {
      setCurrentScreen('BassScreen');
    }, 1000); 
  };

  useEffect(() => {
    if (currentScreen === 'TrebleScreen' || currentScreen === 'BassScreen') {
      setTimeout(() => {
        setTransitioning(false);
      }, 3000); 
    }
  }, [currentScreen]);

  return (
    <div className={`App ${transitioning ? 'fade-to-new-screen' : ''}`}>
      {currentScreen === 'home' ? (
        <header className="App-header">
          <h1>Notation</h1>
          <div className="button-container">
            <button className="notation-button" onClick={TrebleStart}>
              <span className="text">Treble Clef</span>
            </button>
            <button className="notation-button" onClick={BassStart}> 
              <span className="text">Bass Clef</span>
            </button>
          </div>
        </header>
      ) : (
        currentScreen === 'TrebleScreen' ? <TrebleScreen /> : <BassScreen />
      )}
      {transitioning && (
        <div className={`bartender ${transitioning ? 'show' : ''}`}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      )}
    </div>
  );
}

export default App;