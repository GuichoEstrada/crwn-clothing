import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JCIYXChH5SLvfjdhZlZWyNfVMbjiL01QIeEuzRGcnwrb1sY2D7VD3PjVj5GHhHtu930Dwwb8QzbR9IR3wQ8xX4e00F76M5tM8';

    const onToken = () => {
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            label = 'Pay Now'
            name = 'CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image = 'https://svgshare.com/i/CUz.svg'
            description = {`Your total is $${price}.`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    )
}

export default StripeCheckoutButton;