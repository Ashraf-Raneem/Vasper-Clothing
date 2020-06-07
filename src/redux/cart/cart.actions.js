import {CartActionTypes} from './cart.types'

export const toggleCartHidden = () => ({
    type : CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addToCart = (items) => ({
    type : CartActionTypes.ADD_ITEMS,
    payload : items
})

export const reduceItem = (items) => ({
    type: CartActionTypes.REDUCE_ITEMS,
    payload: items
})

export const removeItem = (items) => ({
    type : CartActionTypes.REMOVE_ITEMS_FROM_CART,
    payload : items
})