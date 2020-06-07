import React from 'react'

import './checkout-items.styles.scss'

import {connect} from 'react-redux'
import {removeItem,addToCart,reduceItem} from '../../redux/cart/cart.actions'

const CheckoutItem = ({cartItem, clearItem ,addItem , reduceItem }) => {
    const {name, imageUrl , price , quantity} = cartItem
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item'></img>
            </div>
            <span className='name'> {name}</span>
            <span className='quantity'>
                <div className='arrow' onClick = {()=> reduceItem(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick= {()=> addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => clearItem(cartItem)}> &#10005; </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem : item => dispatch(removeItem(item)),
    reduceItem : item => dispatch (reduceItem(item)),
    addItem : item => dispatch(addToCart(item)) 
})

export default connect(null,mapDispatchToProps)(CheckoutItem)