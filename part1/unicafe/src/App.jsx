import { useState } from 'react'
import './App.css'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      
      <div className='buttons'>
        <button onClick={() => setGood (good + 1)}>good</button>
        <button onClick={() => setNeutral (neutral + 1)}>neutral</button>
        <button onClick={() => setBad (bad + 1)}>bad</button>
      </div>
      <h1>Statistics</h1>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>        
    </div>
  )
}

export default App