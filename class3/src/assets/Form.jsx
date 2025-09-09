import React, { useState } from 'react'

const Form = () => {

    const [name, setname] = useState("")

    const handlesubmit = (e)=>{
        e.preventDefault()
        console.log(name)
    }
    return (
        <div>

            <form action=""  onSubmit={handlesubmit}>

                <input type="text" value={name}  onChange={(e)=>setname(e.target.value)} />
                <button type='submit'>Sumit</button>
            </form>



        </div>
    )
}

export default Form
