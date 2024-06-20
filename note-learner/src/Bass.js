import React, { useState, useEffect } from 'react';
import './App.css';
import { ReactSVG } from 'react-svg';

const bassNotes = [
  { note: 'C2BASS', svg: '/BASSC2.svg' },    
  { note: 'D2BASS', svg: '/B3.svg' },    
  { note: 'E2BASS', svg: '/C4.svg' },    
  { note: 'F2BASS', svg: '/D4.svg' },    
  { note: 'G2BASS', svg: '/E4.svg' },   
  { note: 'A2BASS', svg: '/F4.svg' },   
  { note: 'B2BASS', svg: '/G4.svg' },   
  { note: 'C3BASS', svg: '/A4.svg' },   
  { note: 'D3BASS', svg: '/B4.svg' }, 
  { note: 'E3BASS', svg: '/C5.svg' },     
  { note: 'F3BASS', svg: '/D5.svg' },   
  { note: 'G3BASS', svg: '/E5.svg' }, 
  { note: 'A3BASS', svg: '/F5.svg' },    
  { note: 'B3BASS', svg: '/G5.svg' },   
  { note: 'C4BASS', svg: '/A5.svg' },   
];

const getRandomNote = () => {
  return bassNotes[Math.floor(Math.random() * bassNotes.length)];
};

const BassScreen = () => {
  const [currentNote, setCurrentNote] = useState(getRandomNote());
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleGuess = () => {
    const trimmedGuess = userGuess.trim().toUpperCase();
    const noteLetter = currentNote.note.charAt(0); 

    console.log('User guess:', trimmedGuess);
    console.log('Current note letter:', noteLetter);

    if (trimmedGuess === noteLetter) {
      setFeedback('Correct!');
      setCurrentNote(getRandomNote());
    } else {
      setFeedback('Incorrect, try again!');
    }
    setUserGuess('');
  };

  useEffect(() => {
    setCurrentNote(getRandomNote());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>BASS</h1>
        <p>Created by Alexander Corea & Lucas Sotomayor</p>
        <div className="note-display">
          <ReactSVG src={currentNote.svg} />
        </div>
        <input
          type="text"
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
          placeholder="Enter your guess"
        />
        <button onClick={handleGuess}>Guess</button>
        {feedback && <p className="feedback">{feedback}</p>}
      </header>
    </div>
  );
};

export default BassScreen;
