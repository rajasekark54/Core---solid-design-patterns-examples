/* 
Open/Closed Principle (OCP)
Definition:
  This states that objects are open for extension and closed for modification.
*/

// Bad Design
class PaymentProcessor {
  processPayment(paymentMethod: string, amount: number): void {
    if (paymentMethod === 'CreditCard') {
      // process credit card payment
    } else if (paymentMethod === 'PayPal') {
      // process PayPal payment
    }
  }
}

/* ----------------- */

// Good Design
interface PaymentMethod {
  process(amount: number): void;
}

class CreditCardPayment implements PaymentMethod {
  process(amount: number): void {}
}

class PayPalPayment implements PaymentMethod {
  process(amount: number): void {}
}

class PaymentProcessor1 {
  processPayment(paymentMethod: PaymentMethod, amount: number): void {
    paymentMethod.process(amount);
  }
}
