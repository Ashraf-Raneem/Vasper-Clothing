import React from 'react'

import './checkOut.styles.scss'

import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors'

import CheckoutItem from '../../component/checkout-items/checkout-items.component'
import StripeButton from '../../component/stripe-button/stripe-button.component'

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
           <div className='test-warning'>
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
            </div>
           <StripeButton price = {total}></StripeButton>
        </div>
    )
}

const mapStateToProps =  createStructuredSelector ({
    cartItems : selectCartItems,
    total : selectCartTotal
})
export default connect(mapStateToProps)(CheckOutPage)