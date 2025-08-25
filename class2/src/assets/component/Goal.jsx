import React from 'react'
import class2 from "../../media/pineapple.jpg"
const Goal = () => {
  const cars = ['Ford', 'BMW', 'Audi', "Mehran"];
  return (
    <>{
      cars.map((car, index) => {
        return (
          <h1 key={index}  >{car}</h1>
        )
      })
    }
      <h2></h2>
      <p>To learn React and build amazing applications!</p>
      <img src={class2} height={200} width={300} />


    </>
  )
}

export default Goal