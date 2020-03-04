import React from 'react'
import Button from './../components/Button'

function Vanilla() {
    return (
        <div className='content vanilla'>
            <h1>Button styled with Vanilla CSS</h1>
            <p>For this section we will focus on basic CSS styles.<br />How can we move the button to the left of the card?</p>
            <Button className='top-button' color='orange' text='Click here' />
            <Card />
        </div>
    )
}

const Card = () => {
  return (
    <div className='card'>
      <img src='https://via.placeholder.com/368x280' alt='placeholder image' />
      <div className='internal-content'>
        <h5 className="title">Card title</h5>
        <p className="text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Button text='Go somewhere' />
      </div>
    </div>
  )
}

export default Vanilla
