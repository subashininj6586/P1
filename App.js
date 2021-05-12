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
      <h2> Statistics</h2>
      <p>Good = {good}</p>
      <p>Bad = {bad}</p>
      <p>Neutral = {neutral}</p>
      <p>All = {good+bad+neutral}</p>
      <p>Average = {(good*1+bad*-1+neutral*0)/(good+bad+neutral)}</p>
      <p>Positive={good/(good+bad+neutral)*100}%</p>
    </div>
  )
}


export default App