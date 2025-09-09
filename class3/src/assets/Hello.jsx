import React, { useContext } from 'react'
import MyContext from '../api/context'
import Nested from './Nested'

const Hello = () => {
  return (
    <div>
        <Nested />
    </div>
  )
}

export default Hello
