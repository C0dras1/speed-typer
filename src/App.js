import React, { useState } from 'react';

function App() {
  const [ words, setWords] = useState("")

  const handleChange = e => setWords(e.target.value)

  console.log(words)
  return (
    <div>
      <h1>Speed Typer!</h1>
      <textarea
        name="words" 
        value={words}
        onChange={handleChange}
      />
      <h4>Time Remaining: 5</h4>
      <button>Start</button>
      <h1>Word Count: {words}</h1>
    </div>
  );
}

export default App;
