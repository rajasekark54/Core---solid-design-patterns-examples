/* 
What is the Strategy Pattern?
  The Strategy pattern is a behavioral design pattern that defines a family of algorithms, encapsulates each one, and makes them interchangeable. The strategy pattern lets the algorithm vary independently from clients that use it. This pattern is useful for situations where you have multiple ways of performing a task, and you want to choose the appropriate one at runtime.

Why and When to Use the Strategy Pattern
  * Algorithm Variations: When you have multiple algorithms for a specific task, and you want to make them interchangeable.
  * Runtime Decision: When the algorithm that should be used is determined at runtime.
  * Avoiding Conditional Logic: When you want to avoid excessive conditional statements for choosing an algorithm.

Benefits of the Strategy Pattern
  * Flexibility: Allows you to change the algorithm used at runtime.
  * Code Reusability: Encapsulates algorithms in separate classes, promoting code reuse.
  * Maintainability: Simplifies code maintenance by segregating different algorithms into their own classes.
*/

// Real-Time Application Example: Payment Processing
// Let's consider a payment processing system where you can pay using different methods such as credit card, PayPal, or cryptocurrency.

// Step 1: Define the Strategy Interface
// Strategy interface
interface PaymentStrategy {
  pay(amount: number): void;
}

// Step 2: Create Concrete Strategy Classes
// Concrete strategy classes
class CreditCardPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Credit Card`);
  }
}

class PayPalPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount} using PayPal`);
  }
}

class CryptoPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Cryptocurrency`);
  }
}

// Step 3: Create the Context Class
// Context class
class PaymentContext {
  private strategy: any;

  setStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }

  executePayment(amount: number): void {
    this.strategy.pay(amount);
  }
}

// Step 4: Use the Strategy Pattern
// Client code
const paymentContext = new PaymentContext();

paymentContext.setStrategy(new CreditCardPayment());
paymentContext.executePayment(100);

paymentContext.setStrategy;

export {};
