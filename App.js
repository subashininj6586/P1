

import React, { useState } from 'react'

const Condition = ({ good, neutral, bad, total, average, positive }) => {
  if (total === 0) {
    return (
      <div>
        <h2> Statistics</h2>
      </div>)
  }
  return (
    <div>
     <p> <Statistics text="Good" value={good} /></p>
     <p> <Statistics text="Neutral" value={neutral} /></p>
     <p><Statistics text="Bad" value={bad} /></p>
     <p><Statistics text="All" value={total} /></p>
     <p> <Statistics text="Average" value={average} /></p>
     <p><Statistics text="Positive" value={positive} /></p>
    </div>)
}
const Statistics = ({text , value }) => {
  return (
    <div>
      {text} : {value}
    </div>
  )
}


const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + bad + neutral
  const average = (good * 1 + bad * -1 + neutral * 0) / total
  const positive = (good / total * 100) + "%"

  const handleGoodClick = () => {

    setGood(good + 1)
  }
  const handleBadClick = () => {

    setBad(bad + 1)
  }
  const handleNeutralClick = () => {

    setNeutral(neutral + 1)
  }
  return (
    <div>
      <h1> Give Feedback</h1>

      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>

      <Condition good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />


    </div>
  )
}


export default App