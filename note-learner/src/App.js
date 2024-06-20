// src/App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import NewScreen from './SelectionScreen';
import { analytics } from './firebase-config';
import { logEvent } from "firebase/analytics";

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [transitioning, setTransitioning] = useState(false);

  const handleStart = () => {
    setTransitioning(true);
    const audio = new Audio('/chord.mp3');
    audio.play();
    setTimeout(() => {
      setCurrentScreen('newScreen');
    }, 1000);
  };

  useEffect(() => {
    if (currentScreen === 'newScreen') {
      setTimeout(() => {
        setTransitioning(false);
      }, 3000);
    }
    logEvent(analytics, 'page_view', { page_path: currentScreen });
  }, [currentScreen]);

  return (
    <div className={`App ${transitioning ? 'fade-to-new-screen' : ''}`}>
      {currentScreen === 'home' ? (
        <header className="App-header">
          <h1>Note Learner</h1>
          <p>Created by Alexander Corea & Lucas Sotomayor</p>
          <button className="start-button" onClick={handleStart}>
            <span className="text">Start</span>
          </button>
          <audio id="chord" src="~/public/chord.mp3"></audio>
        </header>
      ) : (
        <NewScreen />
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
