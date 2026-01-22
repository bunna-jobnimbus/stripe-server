const express = require('express');
const app = express();
const PORT = 4242;

const stripe = require('stripe')('sk_test_51Ss7JtCf72FcZg5qyDBPLX42DXpLIo2nBnwDgtQKeLpJUjbvkgHXnzROcRzQ8gGuI7JpnyWlkqnhajOCfSCvzTNY00dO4gdVMW');
// This example sets up an endpoint using the Express framework.

app.post('/payment-sheet', async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'usd',
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter
    // is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.json({
    paymentIntent: paymentIntent.client_secret,
    publishableKey: 'pk_test_51Ss7JtCf72FcZg5q0X6ESpDPwQRxW969cbeiod00z8EDslWWrRFeRFhHmP2bWsMfvYxLFgJ7rJPORrbm5n8NDYtz005enswfQO'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
