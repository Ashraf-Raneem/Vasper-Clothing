import React from 'react'

import CustomButton from '../custom-button/custom-button.component'
import Cart from '../cart/cart.component'

import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect'
import {toggleCartHidden} from '../../redux/cart/cart.actions'

import './cart-dropdown.styles.scss'

const CartDropdown = ({cartItems,history ,dispatch}) => {
    return (
        <div className='cart-dropdown'> 
            <div className='cart-items'>
               {cartItems.length ?  
               (cartItems.map(cartItems => (
                    <Cart key={cartItems.id} item = {cartItems}></Cart>
               ))) : 
                <span className='.empty-message'>Your cart is empty</span>
                }
            </div>
            <CustomButton onClick= {()=> {history.push('/checkOut'); dispatch(toggleCartHidden())}}>CHECKOUT </CustomButton>
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
  });
export default withRouter(connect(mapStateToProps)(CartDropdown))