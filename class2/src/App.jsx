import React from 'react'
import Home from './assets/component/Home'
import Events from './assets/component/Events'
import Goal from './assets/component/Goal'

const App = () => {
  let isGoal = true;

  return (
    <div>
     {/* {
      isGoal ? <Goal /> : <h2>No Goal</h2>
     } */}
     {
      isGoal && <Goal />

     }
      <Home props={{ title: "Welcome to the Home Page", description: "This is the home page of our application." }} />

    </div>
  )
}

export default App
