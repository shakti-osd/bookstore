import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButtonCheckout = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_qM63BrISySaqEDQ2a56V6jWm';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButtonCheckout;
