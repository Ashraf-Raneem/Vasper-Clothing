import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import Icon from '../../assets/4.1 favicon.ico.ico'
const StripeButton  = ({price}) => {
    const stripePrice = price * 100
    const publishableKey = 'pk_test_51Gssm1ARzowWCD17Wsg0JhmgM7l1aEZCKFGIZFFKlGi3JUDGIQiJAyE88yCNdeaWSNmlSbZzPumvnkZtNLApEtbg00dN0gdFgD'
    const token = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
        label = 'Pay now'
        name = 'Vasper Clothing Ltd'
        billingAddress
        shippingAddress
        image = {Icon}
        description = {`Your total Price is $ ${price}`}
        amount ={stripePrice}
        panelLabel= 'Pay now'
        token ={token}
        stripeKey = {publishableKey}
        />
    )
}
export default StripeButton