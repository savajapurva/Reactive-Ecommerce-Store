import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*1000;
    const publishableKey = 'pk_test_VXlF33L2VnKiBfzlIbUMW1Ar00YJwx7Hq0';

    const onToken = (token) => {
        console.log('Token is:', token);
        alert('Payment Successful');
    };
    
    return ( 
        <StripeCheckout
            label = 'Pay Now'
            name = "Shoppers Store"
            billingAddress
            shippingAddress
            image = 'https://sendeyo.com/up/d/f3eb2117da'
            description = {`Your total is $${price}`}
            amount = {priceForStripe}
            panellabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
        />
     );
}
 
export default StripeCheckoutButton;