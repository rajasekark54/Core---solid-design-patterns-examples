// ex-1 approach in javascript

// PaymentProcessor interface
class PaymentProcessor {
  processPayment(amount) {
    throw new Error('This method should be implemented by subclasses');
  }
}

// PayPal class with its own method
class PayPal {
  sendPayment(amount) {
    console.log(`PayPal: Processing payment of $${amount}`);
  }
}

// Stripe class with its own method
class Stripe {
  makePayment(amount) {
    console.log(`Stripe: Processing payment of $${amount}`);
  }
}

// PayPalAdapter class
class PayPalAdapter extends PaymentProcessor {
  payPal: any;

  constructor(payPal) {
    super();
    this.payPal = payPal;
  }

  processPayment(amount) {
    this.payPal.sendPayment(amount);
  }
}

// StripeAdapter class
class StripeAdapter extends PaymentProcessor {
  stripe: any;

  constructor(stripe) {
    super();
    this.stripe = stripe;
  }

  processPayment(amount) {
    this.stripe.makePayment(amount);
  }
}

// Usage
const payPal = new PayPal();
const stripe = new Stripe();

const payPalAdapter = new PayPalAdapter(payPal);
const stripeAdapter = new StripeAdapter(stripe);

const amount = 100;

payPalAdapter.processPayment(amount); // PayPal: Processing payment of $100
stripeAdapter.processPayment(amount); // Stripe: Processing payment of $100

export {};
