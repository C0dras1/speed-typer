import React from 'react';
import useGameLogic from './hooks/useGameLogic'
function App() {
  const {text, handleChange, isPlaying, textareaRef, timeRemaining, startGame, wordCount} = useGameLogic()
  
  return (
    <div>
      <h1>Speed Typer!</h1>
      <textarea
        value={text}
        onChange={handleChange}
        disabled={!isPlaying}
        ref={textareaRef}
      />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button 
        onClick={startGame} 
        disabled={isPlaying}
      >
        Start
      </button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;
