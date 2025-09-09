import React, { useContext } from 'react'
import MyContext from '../api/context'

const Nested = () => {
    const value = useContext(MyContext)
  return (
    <div>
      <h1>{value.name}</h1>
      <p>{value.age}</p>
    </div>
  )
}

export default Nested
