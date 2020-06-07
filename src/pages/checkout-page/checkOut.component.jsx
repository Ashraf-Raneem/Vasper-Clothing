import React from 'react'

import './checkOut.styles.scss'

import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors'

import CheckoutItem from '../../component/checkout-items/checkout-items.component'

const CheckOutPage = ({cartItems,total}) => {
    return (
        <div className='checkout-page'>
           <div className='checkout-header'>
               <div className='header-block'>
                   <span>Product</span>
               </div>
               <div className='header-block'>
                   <span>Description</span>
               </div>
               <div className='header-block'>
                   <span>Quantity</span>
               </div>
               <div className='header-block'>
                   <span>Price</span>
               </div>
               <div className='header-block'>
                   <span>Remove</span>
               </div>
           </div>
           {
              cartItems.map(cartItem => 
                <CheckoutItem  key ={cartItem.id} cartItem={cartItem}></CheckoutItem>)
           }
           <div className='total'>
                <span>TOTAL: ${total}</span>
           </div>
        </div>
    )
}

const mapStateToProps =  createStructuredSelector ({
    cartItems : selectCartItems,
    total : selectCartTotal
})
export default connect(mapStateToProps)(CheckOutPage)