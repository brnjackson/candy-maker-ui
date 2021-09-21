import React, { useState } from 'react'

const Title = () => {
    const [ candy, setCandy ] = useState('')
    return (
        <div className="title">
            <h1>Candy Makers</h1>
            <input type="text" className="search" name="search" onChange = {event => setCandy(event.target.value)} />
            <div className="result">
                <p>{ candy }</p>
            </div>
        </div>
    )

}

export default Title