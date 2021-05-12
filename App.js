import React, { useState } from 'react'

const Statistics = (props) => {
 return(
<div>
<h2> Statistics</h2>
      <tr><td>Good  </td><td> {props.good}</td></tr>
      <tr><td>Bad </td><td> {props.bad}</td></tr>
      <tr><td>Neutral </td><td> {props.neutral}</td></tr>
      <tr><td>All </td><td> {props.good+props.bad+props.neutral}</td></tr>
      <tr><td>Average </td><td>{(props.good*1+props.bad*-1+props.neutral*0)/(props.good+props.bad+props.neutral)}</td></tr>
      <tr><td>Positive</td><td>{props.good/(props.good+props.bad+props.neutral)*100}%</td></tr>
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