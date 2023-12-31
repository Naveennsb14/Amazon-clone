import React from 'react'
import "./checkoutproduct.css"
import { useStateValue } from '../../StateProvider'

const Checkoutproduct = ({id, title, price, rating, image}) => {
    const [{basket}, dispatch]=useStateValue()

    const removeFromBasket=()=>{
        //remove items from basket...
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        })
 
    }
  return (
    <div className='checkoutProduct'>
    <img className='checkoutProduct__image' src={image} alt="" />
    <div className="checkoutProduct__info">
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
            <small>₹</small>
            <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
            {Array(rating).fill().map((i)=>(
                <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from cart</button>
    </div>
      
    </div>
  )
}

export default Checkoutproduct
