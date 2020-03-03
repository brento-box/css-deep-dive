import React from 'react'

function Vanilla() {
    return (
        <div className='content vanilla'>
            <h1>Button styled with Vanilla CSS</h1>
            <hr />
            <Button text='Click me!'/>
            <Button text='Warning button' color='orange' />
            <Button text='Alert button! Something is wrong!' color='red' />
        </div>
    )
}

function Button(props) {
    return (
        <button type='button' className={`btn ${props.color ? props.color : ''}`}>
            <span>{props.text}</span>
        </button>
    )
}

export default Vanilla
