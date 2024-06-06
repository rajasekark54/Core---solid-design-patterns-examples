/* 
The Facade pattern is a structural design pattern that provides a simplified interface to a complex subsystem. 
It hides the complexities of the system and provides a single interface through which clients can interact with the system.

Let's consider another example of a Facade pattern in the context of an online shopping system. In this example, we'll have multiple subsystems for different parts of the order process, such as inventory, payment, and shipping. The Facade will provide a simplified interface for placing an order.
*/

// Example: Online Shopping System
// Step 1: Define the Subsystem Components
class InventorySystem {
  checkStock(productId: string): boolean {
    console.log(`Checking stock for product: ${productId}`);
    // Simulate stock checking
    return true;
  }

  reduceStock(productId: string, quantity: number): void {
    console.log(`Reducing stock for product: ${productId} by ${quantity}`);
  }
}

class PaymentSystem {
  processPayment(amount: number): boolean {
    console.log(`Processing payment of $${amount}`);
    // Simulate payment processing
    return true;
  }
}

class ShippingSystem {
  arrangeShipping(productId: string, address: string): void {
    console.log(
      `Arranging shipping for product: ${productId} to address: ${address}`
    );
  }
}

// Step 2: Create the Facade Class
class OrderFacade {
  private inventory: InventorySystem;
  private payment: PaymentSystem;
  private shipping: ShippingSystem;

  constructor() {
    this.inventory = new InventorySystem();
    this.payment = new PaymentSystem();
    this.shipping = new ShippingSystem();
  }

  placeOrder(
    productId: string,
    quantity: number,
    amount: number,
    address: string
  ): void {
    console.log('Placing order...');

    if (this.inventory.checkStock(productId)) {
      if (this.payment.processPayment(amount)) {
        this.inventory.reduceStock(productId, quantity);
        this.shipping.arrangeShipping(productId, address);
        console.log('Order placed successfully!');
      } else {
        console.log('Payment failed!');
      }
    } else {
      console.log('Product out of stock!');
    }
  }
}

// Step 3: Use the Facade Pattern
// Now, we can use the OrderFacade to place an order in a simplified manner.

// Client code
const orderFacade = new OrderFacade();
const productId = '12345';
const quantity = 1;
const amount = 100.0;
const address = '123 Main St, Anytown, USA';

orderFacade.placeOrder(productId, quantity, amount, address);
// Output:
// Placing order...
// Checking stock for product: 12345
// Processing payment of $100
// Reducing stock for product: 12345 by 1
// Arranging shipping for product: 12345 to address: 123 Main St, Anytown, USA
// Order placed successfully!

export {};

/* 
Explanation
  Subsystem Components:
    InventorySystem: Handles checking and updating the stock.
    PaymentSystem: Manages the payment processing.
    ShippingSystem: Arranges the shipping of the product.
  Facade Class (OrderFacade): 
    Provides a simplified interface for placing an order. It handles the interactions between the subsystems (InventorySystem, PaymentSystem, and ShippingSystem), making it easier for the client code to use.

  Client Code: 
    Uses the OrderFacade to place an order without needing to interact with each subsystem individually. This simplifies the client code and abstracts away the complexity of the order process.

Benefits of Using Facade Pattern
  Simplification: Provides a simplified interface to a complex subsystem, making it easier to use.
  Decoupling: Decouples the client code from the subsystem, reducing dependencies and making the system more modular.
  Maintainability: Makes the code easier to maintain and extend by centralizing the interaction logic in the facade.
  Improved Usability: Enhances usability by providing a higher-level interface that is more intuitive and easier to understand.
 
This example demonstrates how the Facade pattern can be effectively used to simplify interactions with a complex subsystem, providing a more accessible and maintainable design in the context of an online shopping system.  
*/
