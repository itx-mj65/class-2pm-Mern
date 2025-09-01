import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  console.log("reload")
  const [count, setCount] = useState(false)


  useEffect(() => {
    console.log("data is fetched")
  })
  return (
    <>
      {
        count && <h1>hello world</h1>
      }

      <button onClick={() => setCount(!count)}  >Click me
      </button>
    </>
  )
}

export default App
