/* 
The Observer pattern is a behavioral design pattern that defines a one-to-many dependency between objects so that when one object (the subject) changes state, all its dependents (observers) are notified and updated automatically. This pattern is useful for implementing distributed event-handling systems.

Why and When to Use the Observer Pattern
  * Event Handling: When you need to create a system where objects need to be notified about changes in another object's state.
  * Decoupling: To achieve loose coupling between the objects that produce events and the objects that consume them.
  * Dynamic Relationships: When relationships between objects need to be defined at runtime.
  * Consistency: To ensure that the state of dependent objects remains consistent with the state of the subject.

Benefits of the Observer Pattern
  * Loose Coupling: Reduces the coupling between the subject and its observers.
  * Scalability: Makes it easy to add, remove, or change observers without modifying the subject.
  * Flexibility: Allows multiple observers to be notified about changes in the subject's state.
*/

// Real-Time Application Example: Stock Price Update System
// Let's consider an example of a stock price update system where multiple observers (e.g., investors) are notified whenever the stock price changes.

// Step 1: Define the Observer and Subject Interfaces
// Observer interface
interface Observer {
  update(stockPrice: number): void;
}

// Step 1: Define the Observer and Subject Interfaces
// Subject interface
interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}

// Step 2: Create the Concrete Subject
// Concrete subject class
class Stock implements Subject {
  private observers: Observer[] = [];
  private price: number = 0;

  registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.price);
    }
  }

  setPrice(price: number): void {
    this.price = price;
    this.notifyObservers();
  }

  getPrice(): number {
    return this.price;
  }
}

// Step 3: Create the Concrete Observers
// Concrete observer classes
class Investor implements Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(stockPrice: number): void {
    console.log(
      `Investor ${this.name} is notified about stock price change: $${stockPrice}`
    );
  }
}

class StockBroker implements Observer {
  private brokerName: string;

  constructor(brokerName: string) {
    this.brokerName = brokerName;
  }

  update(stockPrice: number): void {
    console.log(
      `StockBroker ${this.brokerName} is notified about stock price change: $${stockPrice}`
    );
  }
}

// Step 4: Use the Observer Pattern
// Client code
const stock = new Stock();

const investor1 = new Investor('Alice');
const investor2 = new Investor('Bob');
const broker = new StockBroker('XYZ Brokerage');

stock.registerObserver(investor1);
stock.registerObserver(investor2);
stock.registerObserver(broker);

stock.setPrice(100); // Notifies all observers about the stock price change
stock.setPrice(150); // Notifies all observers about the stock price change

stock.removeObserver(investor1);

stock.setPrice(200); // Notifies remaining observers about the stock price change
