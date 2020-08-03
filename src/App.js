import React, { useState, useEffect } from 'react';

function App() {
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(3)
  const [isPlaying, setIsPlaying] = useState(false)
  const [wordCount, setWordCount] = useState()

  const handleChange = e => setText(e.target.value)


  function calculateWordCount (text) {
    const wordsArr = text.trim().split(' ')
    setWordCount(wordsArr.filter(word => word !== "").length)
  }

  useEffect(() => {
    if (timeRemaining > 0 && isPlaying) {
      setTimeout(() => {
        setTimeRemaining(prevTime => prevTime - 1)
      }, 1000)
    } else if (timeRemaining === 0) {
      calculateWordCount(text)
      setIsPlaying(false)
    }
  }, [timeRemaining, isPlaying])

  return (
    <div>
      <h1>Speed Typer!</h1>
      <textarea
        value={text}
        onChange={handleChange}
      />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button onClick={() => setIsPlaying(true)}>Start</button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;
