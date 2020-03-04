import React from 'react'
import styled from 'styled-components'
import Button from './Button'


const CardStyled = styled.div `
    
        width: 368px;
        box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
        margin: 0 auto;

        .card-content {
            padding: 15px;

            .title {
                font-size: 24px;
                margin-bottom: 10px;
            }

            .text {
                text-align: left;
            }

            .button {
                margin: 30px 0;
            }
        }
    
`


const Card = () => {
    return (
      <CardStyled className='card'>
        <img src='https://via.placeholder.com/368x280' alt='placeholder image' />
        <div className='card-content'>
          <h5 className="title">Card title</h5>
          <p className="text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Button className='button' color='orange' text='Go somewhere' />
        </div>
      </CardStyled>
    )
}

export default Card
