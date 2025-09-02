import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  console.log("reload")
  const [count, setCount] = useState(false)


  useEffect(() => {
    console.log("data is fetched")
  }, [count])


  const button = useRef(0)
  button.current = count


  return (
    <>
      {
        count && <h1>hello world  {button.current} </h1>
      }

      <button  ref={button} onClick={() => setCount(!count)}  >Click me
      </button>
    </>
  )
}

export default App
