/* 
Managing different types of animals in a zoo. In this scenario, we want to be able to clone animals to create new instances of them quickly.

Real-Time Example: Zoo Animal Management System
Step-by-step Implementation in TypeScript
  Prototype: The interface that declares the cloning method.
  Concrete Prototype: The class that implements the cloning method.
  Client: The class that uses the Prototype interface to clone objects.
*/

interface AnimalPrototype {
  clone(): AnimalPrototype;
  getInfo(): void;
}

// Concrete Prototype: Lion
class Lion implements AnimalPrototype {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  clone(): AnimalPrototype {
    return new Lion(this.name, this.age);
  }

  getInfo(): void {
    console.log(`Lion named ${this.name}, Age: ${this.age}`);
  }
}

// Concrete Prototype: Elephant
class Elephant implements AnimalPrototype {
  private name: string;
  private weight: number;

  constructor(name: string, weight: number) {
    this.name = name;
    this.weight = weight;
  }

  clone(): AnimalPrototype {
    return new Elephant(this.name, this.weight);
  }

  getInfo(): void {
    console.log(`Elephant named ${this.name}, Weight: ${this.weight}kg`);
  }
}

// Client code that uses the Prototype pattern
function clientCode() {
  // Create initial prototypes
  const originalLion = new Lion('Simba', 5);
  const originalElephant = new Elephant('Dumbo', 1200);

  // Clone the prototypes
  const clonedLion = originalLion.clone();
  const clonedElephant = originalElephant.clone();

  // Display info for original and cloned animals
  originalLion.getInfo(); // Output: Lion named Simba, Age: 5
  clonedLion.getInfo(); // Output: Lion named Simba, Age: 5

  originalElephant.getInfo(); // Output: Elephant named Dumbo, Weight: 1200kg
  clonedElephant.getInfo(); // Output: Elephant named Dumbo, Weight: 1200kg
}

clientCode();

export {};
