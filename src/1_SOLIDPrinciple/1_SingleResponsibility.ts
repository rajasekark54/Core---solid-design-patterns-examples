/* 
Single Responsibility Principle (SRP)
Definition:
   A class should have only one reason to change, meaning it should only have one job or responsibility.
*/

// Bad Design
class OrderService {
  createOrder(orderData: any): void {}

  calculateDiscount(orderData: any): number {
    return 10;
  }

  sendOrderConfirmation(orderData: any): void {}
}
