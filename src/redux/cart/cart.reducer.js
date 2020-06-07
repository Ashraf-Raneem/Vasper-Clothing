import {CartActionTypes} from './cart.types'
import {addItem , reduceItem} from './cart.utils'

const INITIAL_STATE = {
    hidden : true,
    cartItems : []
}
const cartReducer = (state = INITIAL_STATE , action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN :
            return {
                ...state , 
                hidden : ! state.hidden
            }
        case CartActionTypes.ADD_ITEMS :
            return {
                ...state,
                cartItems : addItem(state.cartItems , action.payload)
            }
        case CartActionTypes.REDUCE_ITEMS :
            return {
                ...state, 
                cartItems : reduceItem(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEMS_FROM_CART :
            return {
                ...state, 
                cartItems : state.cartItems.filter(cartItems => cartItems.id !== action.payload.id)
            }

        default : 
            return state ; 
    } 
}
export default cartReducer