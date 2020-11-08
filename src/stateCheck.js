import React, { useState } from 'react'

function StateCheck() {

    const initialState = 5
    const [state, setstate] = useState(initialState)

    function number() {
        const nu = setstate('10')
        console.log(nu)
    }

    return (
        <div>
            <h1>number: {state} </h1>
            <button onClick={() => { number() }}>Click Me</button>
        </div>
    )
}

export default StateCheck
