import React from 'react'

import {ReactComponent as ShoppingIcon} from '../../assets/11.2 shopping-bag.svg'
import {connect} from 'react-redux'
import './cart-items.styles.scss'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'

const CartIcon = ({toggleCartHidden, itemCount}) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})
const mapStateToProps =createStructuredSelector({
    itemCount : selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)