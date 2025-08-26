import React from 'react'
import "./style.css"

const Home = ({props}) => {
const {title, description} = props;
    const hello={color:"red", fontSize:"18px"}
  return (
    <div>
      <h2 className='title  '> {title}    </h2>
      <p className='description'  style={hello}   > {description}    </p>
    
    </div>
  )
}

export default Home
