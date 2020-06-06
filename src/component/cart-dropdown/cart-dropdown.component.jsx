import React from 'react'

import CustomButton from '../custom-button/custom-button.component'
import Cart from '../cart/cart.component'
import {connect} from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss'

const CartDropdown = ({cartItems}) => {
    return (
        <div className='cart-dropdown'> 
            <div className='cart-items'>
               { cartItems.map(cartItems => (
                    <Cart key={cartItems.id} item = {cartItems}></Cart>
               )) }
            </div>
            <CustomButton>CHECKOUT </CustomButton>
        </div>
    )
}
const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
  });
export default connect (mapStateToProps)(CartDropdown)