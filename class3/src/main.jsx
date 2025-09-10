import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyContext from './api/context.js'
import { BrowserRouter } from 'react-router'

const obj = {
  name: "hello",
  age: 22
}

createRoot(document.getElementById('root')).render(

  <BrowserRouter >
    <MyContext.Provider value={obj}>
      <StrictMode>
        <App />
      </StrictMode>
    </MyContext.Provider>

  </BrowserRouter>,
)
