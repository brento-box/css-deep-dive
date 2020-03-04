import React from 'react'

function BEM() {
    return (
        <div className='content bem'>
            <h1 className='title'>Card and buttons styled with BEM CSS</h1>
            <p>Using BEM makes it easier to block out your CSS. This prevents styling conflicts and makes for cleaner code that's easier to maintain.</p>
            <Button className='top-button' color='green' text='Click here' />
            <Card />
        </div>
    )
}

function Button(props) {
    return (
        <button type='button' className={`btn btn--${props.color ? props.color : ''} ${props.className}`}>
            <span>{props.text}</span>
        </button>
    )
}

const Card = () => {
    return (
      <div className='card'>
        <img src='https://via.placeholder.com/368x280' alt='placeholder image' />
        <div className='card__internal-content'>
          <h5 className="card__title">Card title</h5>
          <p className="card__text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Button className='card__btn card__btn--left-align' color='orange' text='Go somewhere' />
        </div>
      </div>
    )
  }

export default BEM
