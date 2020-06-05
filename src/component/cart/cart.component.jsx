import React from 'react'
import './cart.styles.scss'

const Cart = ({item : { imageUrl , name , price , quantity}}) => {
    return (
        <div className='cart'>
            <img src= {imageUrl} alt='item'></img>
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>${price} x {quantity}</span>
            </div>
        </div>
    )
}
export default Cart