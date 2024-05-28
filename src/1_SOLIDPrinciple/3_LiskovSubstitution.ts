/* 
Liskov Substitution Principle (LSP)
Definition:
  Objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program.
*/

// Bad Design
class Vehicle {
  startEngine(): void {
    console.log('Engine started');
  }
}

class Bicycle extends Vehicle {
  startEngine(): void {
    throw new Error("Bicycles don't have engines");
  }
}

/* ----------------- */

// Good Design

abstract class Vehicle1 {
  abstract start(): void;
}

class Car1 extends Vehicle1 {
  start(): void {
    console.log('Car engine started');
  }
}

class Bicycle1 extends Vehicle1 {
  start(): void {
    console.log('Bicycle ready to ride');
  }
}
