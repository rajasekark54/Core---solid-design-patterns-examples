/* 
Certainly! Let's consider a real-time application of the Adapter pattern in a more practical context. Imagine we're working on an application that interacts with different types of external payment systems. Each payment system has a different interface, but you want to integrate them into a single, unified interface within your application.

Scenario
  You have two payment processors:

  PayPal: Uses a method sendPayment().
  Stripe: Uses a method makePayment().
  You want to create a common interface for your application to handle payments, regardless of the processor.

Explanation
  PaymentProcessor: A common interface that defines a method processPayment().
  PayPal: Existing payment class with a method sendPayment().
  Stripe: Existing payment class with a method makePayment().
  PayPalAdapter: Implements the PaymentProcessor interface and adapts the PayPal class to fit this interface. It calls the sendPayment() method of PayPal.
  StripeAdapter: Implements the PaymentProcessor interface and adapts the Stripe class to fit this interface. It calls the makePayment() method of Stripe.
Benefits
  Uniform Interface: The adapters allow your application to interact with different payment systems using a single interface.
  Flexibility: You can easily add more payment processors by creating new adapters without changing the existing code.
  Separation of Concerns: The adapters encapsulate the conversion logic, keeping the payment processor classes untouched.
  This example demonstrates how the Adapter pattern can be applied to integrate different external systems into a unified interface, making the code more flexible and maintainable.
*/

// PaymentProcessor interface
interface PaymentProcessor {
  processPayment(amount: number): void;
}

// PayPal class with its own method
class PayPal {
  public sendPayment(amount: number): void {
    console.log(`PayPal: Processing payment of $${amount}`);
  }
}

// Stripe class with its own method
class Stripe {
  public makePayment(amount: number): void {
    console.log(`Stripe: Processing payment of $${amount}`);
  }
}

// PayPalAdapter class
class PayPalAdapter implements PaymentProcessor {
  private payPal: PayPal;

  constructor(payPal: PayPal) {
    this.payPal = payPal;
  }

  public processPayment(amount: number): void {
    this.payPal.sendPayment(amount);
  }
}

// StripeAdapter class
class StripeAdapter implements PaymentProcessor {
  private stripe: Stripe;

  constructor(stripe: Stripe) {
    this.stripe = stripe;
  }

  public processPayment(amount: number): void {
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
