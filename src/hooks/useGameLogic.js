import { useState, useRef, useEffect } from 'react';


function useGameLogic(startingTime = 10) {
  const textareaRef = useRef(null)
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(startingTime)
  const [isPlaying, setIsPlaying] = useState(false)
  const [wordCount, setWordCount] = useState(0)

  const handleChange = e => setText(e.target.value)


  function calculateWordCount (text) {
    const wordsArr = text.trim().split(' ')
    return wordsArr.filter(word => word !== "").length
  }

  function startGame() {
    setTimeRemaining(startingTime)
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

  return {text, handleChange, isPlaying, textareaRef, timeRemaining, startGame, wordCount}
}

export default useGameLogic;