import React from 'react'

const Card = (props) => {
    return (
        <div>
            <div>
                <img src="/vite.svg" alt="" />
            </div>
            <div>
                <h1>{props.heading}</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </div>

        </div>
    )
}

export default Card
