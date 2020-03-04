import React from 'react'

const Button = props => {
    return (
        <button type='button' className={`btn ${props.color ? props.color : 'primary'} ${props.className}`}>
            <span>{props.text}</span>
        </button>
    )
}

export default Button