import React from 'react'
import Home from './assets/component/Home'

const App = () => {
  return (
    <div>
      <Home  props={{ title: "Welcome to the Home Page", description: "This is the home page of our application." }} />

    </div>
  )
}

export default App
