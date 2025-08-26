import React, { useState } from 'react'
import Home from './assets/component/Home'
import Events from './assets/component/Events'
import Goal from './assets/component/Goal'
import Card from './assets/component/Card'

const App = () => {
  const [show, setshow] = useState()
  const headings = ["this is heading 1", "this is heading 2", "this is heading 3", "this is heading 4"]

  let isGoal = true;

  return (
    <div>

      {
        headings.map((item, index) => {
          return (
            <Card key={index} heading={item} />
          )
        })
      }






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
