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

const Statistics = (props) => {
 return(
<div>
<h2> Statistics</h2>
      <p>Good = {props.good}</p>
      <p>Bad = {props.bad}</p>
      <p>Neutral = {props.neutral}</p>
      <p>All = {props.good+props.bad+props.neutral}</p>
      <p>Average = {(props.good*1+props.bad*-1+props.neutral*0)/(props.good+props.bad+props.neutral)}</p>
      <p>Positive={props.good/(props.good+props.bad+props.neutral)*100}%</p>
</div>
 )
}
const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1> Give Feedback</h1>
      <button onClick={()=>setGood(good+1)}>Good</button>
      <button onClick={()=>setNeutral(neutral+1)}>Neutral</button>
      <button onClick={()=>setBad(bad+1)}>Bad</button>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}


export default App