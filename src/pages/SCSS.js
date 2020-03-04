import React from 'react'

function SCSS() {
    return (
        <div className='content bem'>
            <h1 className='title'>Card and buttons styled with SCSS</h1>
            <p>Placeholder text</p>
            <Button className='top-button' color='green' text='Click here' />
            <Card />
        </div>
    )
}

function Button(props) {
    return (
        <button type='button' className={`btn ${props.color ? props.color : ''} ${props.className}`}>
            <span>{props.text}</span>
        </button>
    )
}

const Card = () => {
    return (
      <div className='card'>
        <img src='https://via.placeholder.com/368x280' alt='placeholder image' />
        <div className='card-content'>
          <h5 className="title">Card title</h5>
          <p className="text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Button className='button' color='orange' text='Go somewhere' />
        </div>
      </div>
    )
}

export default SCSS
