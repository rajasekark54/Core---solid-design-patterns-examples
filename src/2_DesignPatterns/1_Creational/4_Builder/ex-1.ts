/* 
Intent
  To separate the construction of a complex object from its representation so that the same construction process can create different representations.
  To construct a complex object step by step, allowing for more control over the construction process.
Example: Building a Computer
  Imagine you need to create a computer with various components (CPU, GPU, RAM, Storage). Using the Builder pattern, you can construct a computer step by step.

Step-by-step Implementation in TypeScript
  Product: The complex object that is being built.
  Builder: The interface for creating parts of the Product.
  ConcreteBuilder: Constructs and assembles parts of the Product by implementing the Builder interface.
  Director: Constructs an object using the Builder interface.
*/

// Product
class Computer {
  public CPU: string | undefined;
  public GPU: string | undefined;
  public RAM: string | undefined;
  public Storage: string | undefined;

  public displaySpecs(): void {
    console.log(`Computer Specifications: 
        CPU: ${this.CPU}, 
        GPU: ${this.GPU}, 
        RAM: ${this.RAM}, 
        Storage: ${this.Storage}`);
  }
}

/*  -------  */
// Builder Interface
interface ComputerBuilder {
  setCPU(): void;
  setGPU(): void;
  setRAM(): void;
  setStorage(): void;
  getComputer(): Computer;
}

/*  -------  */
// Concrete Builder
class GamingComputerBuilder implements ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  public setCPU(): void {
    this.computer.CPU = 'High-end Gaming CPU';
  }

  public setGPU(): void {
    this.computer.GPU = 'High-end Gaming GPU';
  }

  public setRAM(): void {
    this.computer.RAM = '32GB';
  }

  public setStorage(): void {
    this.computer.Storage = '1TB SSD';
  }

  public getComputer(): Computer {
    return this.computer;
  }
}

class OfficeComputerBuilder implements ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  public setCPU(): void {
    this.computer.CPU = 'Mid-range Office CPU';
  }

  public setGPU(): void {
    this.computer.GPU = 'Integrated GPU';
  }

  public setRAM(): void {
    this.computer.RAM = '16GB';
  }

  public setStorage(): void {
    this.computer.Storage = '512GB SSD';
  }

  public getComputer(): Computer {
    return this.computer;
  }
}

/*  -------  */
// Director
class Director {
  private builder: ComputerBuilder | undefined;

  public setBuilder(builder: ComputerBuilder): void {
    this.builder = builder;
  }

  public buildBasicComputer(): void {
    if (this.builder) {
      this.builder.setCPU();
      this.builder.setRAM();
      this.builder.setStorage();
    }
  }

  public buildFullFeaturedComputer(): void {
    if (this.builder) {
      this.builder.setCPU();
      this.builder.setGPU();
      this.builder.setRAM();
      this.builder.setStorage();
    }
  }
}

/*  -------  */
// Client Code
function clientCode(director: Director) {
  const gamingBuilder = new GamingComputerBuilder();
  const officeBuilder = new OfficeComputerBuilder();

  director.setBuilder(gamingBuilder);
  director.buildFullFeaturedComputer();
  const gamingComputer = gamingBuilder.getComputer();
  gamingComputer.displaySpecs();
  // Output:
  // Computer Specifications:
  // CPU: High-end Gaming CPU,
  // GPU: High-end Gaming GPU,
  // RAM: 32GB,
  // Storage: 1TB SSD

  director.setBuilder(officeBuilder);
  director.buildBasicComputer();
  const officeComputer = officeBuilder.getComputer();
  officeComputer.displaySpecs();
  // Output:
  // Computer Specifications:
  // CPU: Mid-range Office CPU,
  // RAM: 16GB,
  // Storage: 512GB SSD
}

const director = new Director();
clientCode(director);

export {};
