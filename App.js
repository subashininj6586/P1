/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

import React, { useState } from 'react'

const Condition = ({good,neutral,bad,total,average,positive})=>
{
  if(total===0){
  return(
  <div>
<h2> Statistics</h2>
</div>)
}
return(
<div>
<Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      />

</div>)
}
const Statistics = ({good,neutral,bad,total,average,positive}) => {
 return(
<div>
<h2> Statistics</h2>

      <p>Good = {good}</p>
      <p>Bad = {bad}</p>
      <p>Neutral = {neutral}</p>
      <p>All = {total}</p>
      <p>Average = {average}</p>
      <p>Positive={positive}</p>
</div>
 )
}


const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good+bad+neutral
  const average=(good*1+bad*-1+neutral*0)/total
  const positive=(good/total *100 )+"%"
  
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
     
      <Condition good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive}/>
     
      
    </div>
  )
}


export default App