import React, { useState, useEffect, useRef } from 'react';

function App() {
  const STARTING_TIME = 5
  
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
  const [isPlaying, setIsPlaying] = useState(false)
  const [wordCount, setWordCount] = useState(0)

  const textareaRef = useRef(null)

  const handleChange = e => setText(e.target.value)


  function calculateWordCount (text) {
    const wordsArr = text.trim().split(' ')
    return wordsArr.filter(word => word !== "").length
  }

  function startGame() {
    setTimeRemaining(STARTING_TIME)
    setIsPlaying(true)
    setText('')
    textareaRef.current.disabled = false
    textareaRef.current.focus()
  }

  function endGame() {
    setWordCount(calculateWordCount(text))
    setIsPlaying(false)
  }

  useEffect(() => {
    if (timeRemaining > 0 && isPlaying) {
      setTimeout(() => {
        setTimeRemaining(prevTime => prevTime - 1)
      }, 1000)
    } else if (timeRemaining === 0) {
      endGame()
    }
  }, [timeRemaining, isPlaying])

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
