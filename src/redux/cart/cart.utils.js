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