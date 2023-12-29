import Stripe from 'stripe';
const stripe = new Stripe('sk_test_...');

const customer = await stripe.customers.create({
  email: 'customer@example.com',
});

console.log(customer.id);

// Create a new customer and then create an invoice item then invoice it:
stripe.customers
  .create({
    email: 'customer@example.com',
  })
  .then((nextCustomer) => {
    // have access to the customer object
    return stripe.invoiceItems
      .create({
        customer: nextCustomer.id, // set the customer id
        amount: 2500, // 25
        currency: 'usd',
        description: 'One-time setup fee',
      })
      .then((invoiceItem) => {
        console.log(invoiceItem)
        // return stripe.invoices.create({
        //   collection_method: 'send_invoice',
        //   customer: invoiceItem.customer,
        // });
      })
      .then((invoice) => {
        // New invoice created on a new customer
      })
      .catch((err) => {
        // Deal with an error
      });
  });