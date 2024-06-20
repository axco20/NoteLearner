import React, { useState, useEffect } from 'react';
import './App.css';
import { ReactSVG } from 'react-svg';

const trebleNotes = [
  { note: 'A3', svg: '/A3.svg' },  
  { note: 'B3', svg: '/B3.svg' },  
  { note: 'C4', svg: '/C4.svg' },  
  { note: 'D4', svg: '/D4.svg' },  
  { note: 'E4', svg: '/E4.svg' },  
  { note: 'F4', svg: '/F4.svg' },  
  { note: 'G4', svg: '/G4.svg' },  
  { note: 'A4', svg: '/A4.svg' },  
  { note: 'B4', svg: '/B4.svg' },  
  { note: 'C5', svg: '/C5.svg' },  
  { note: 'D5', svg: '/D5.svg' },  
  { note: 'E5', svg: '/E5.svg' },  
  { note: 'F5', svg: '/F5.svg' },  
  { note: 'G5', svg: '/G5.svg' },  
  { note: 'A5', svg: '/A5.svg' },  
  { note: 'B5', svg: '/B5.svg' },  
  { note: 'C6', svg: '/C6.svg' }, 
  { note: 'D6', svg: '/D6.svg' }   
];

const getRandomNote = () => {
  return trebleNotes[Math.floor(Math.random() * trebleNotes.length)];
};

const TrebleScreen = () => {
  const [currentNote, setCurrentNote] = useState(getRandomNote());
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleGuess = () => {
    const trimmedGuess = userGuess.trim().toUpperCase();
    const noteLetter = currentNote.note.charAt(0); // Extract the letter part of the note (e.g., 'E' from 'E4')

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
        <h1>TREBLE</h1>
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
        {feedback && <p className='feedback'>{feedback}</p>}
      </header>
    </div>
  );
};

export default TrebleScreen;
