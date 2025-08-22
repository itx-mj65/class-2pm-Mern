import React from 'react'

const Events = () => {

    const handleClick=()=>{
        alert("button is clicked")
    }
   
  return (
    <>
    <button  onClick={handleClick}  >Click me </button>
    
    
    </>

  )
}

export default Events