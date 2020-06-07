export const addItem = (cartItems , cartItemsToAdd) => {
    const existingCartItems = cartItems.find(
        cartItems => cartItems.id === cartItemsToAdd.id
    )
    if (existingCartItems) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemsToAdd.id 
            ? {...cartItem , quantity : cartItem.quantity +1} : cartItem
            )
    }
    return [...cartItems , {...cartItemsToAdd , quantity : 1 }]
}

export const reduceItem = (cartItems, cartItemsToRemove) => {
    const existingCartItems = cartItems.find(
        cartItems => cartItems.id === cartItemsToRemove.id
    )
    if(existingCartItems.quantity === 1){
        return cartItems.filter( cartItems => cartItems.id !== cartItemsToRemove.id)
    }
    return cartItems.map( cartItems => 
        cartItems.id === cartItemsToRemove.id ?
        {...cartItems , quantity : cartItems.quantity -1 } : cartItems
        )
}