/* 
What is the Visitor Pattern?
  The Visitor pattern is a behavioral design pattern that lets you separate algorithms from the objects on which they operate. By using this pattern, you can add new operations to existing object structures without modifying those structures. This pattern is particularly useful when you need to perform operations across a collection of objects with different types.


Why and When to Use the Visitor Pattern
  * Separation of Concerns: When you want to separate algorithms from the objects on which they operate.
  * Adding Operations: When you need to add new operations to a class hierarchy without changing the existing classes.
  * Complex Object Structures: When you have complex object structures, and you want to perform operations on these structures.

Benefits of the Visitor Pattern
  * Extensibility: Allows you to add new operations without modifying existing object structures.
  * Single Responsibility Principle: Separates the operation logic from the object structure.
  * Ease of Maintenance: Centralizes operations that apply to various objects, making the system easier to maintain.
*/

// Real-Time Application Example: Employee Structure with Annual Review
// Let's consider an example of an employee structure in a company where we want to perform an annual review. Employees can be of different types, such as engineers and managers, and we want to apply different review operations to each type.

// Step 1: Define the Element Interface
// Element interface
interface Employee {
  accept(visitor: EmployeeVisitor): void;
}

// Step 2: Create Concrete Element Classes
// Concrete element classes
class Engineer implements Employee {
  private name: string;
  private codeQuality: number;

  constructor(name: string, codeQuality: number) {
    this.name = name;
    this.codeQuality = codeQuality;
  }

  getName(): string {
    return this.name;
  }

  getCodeQuality(): number {
    return this.codeQuality;
  }

  accept(visitor: EmployeeVisitor): void {
    visitor.visitEngineer(this);
  }
}

class Manager implements Employee {
  private name: string;
  private teamPerformance: number;

  constructor(name: string, teamPerformance: number) {
    this.name = name;
    this.teamPerformance = teamPerformance;
  }

  getName(): string {
    return this.name;
  }

  getTeamPerformance(): number {
    return this.teamPerformance;
  }

  accept(visitor: EmployeeVisitor): void {
    visitor.visitManager(this);
  }
}

// Step 3: Define the Visitor Interface
// Visitor interface
interface EmployeeVisitor {
  visitEngineer(engineer: Engineer): void;
  visitManager(manager: Manager): void;
}

// Step 4: Create Concrete Visitor Classes
// Concrete visitor classes
class AnnualReviewVisitor implements EmployeeVisitor {
  visitEngineer(engineer: Engineer): void {
    console.log(
      `Reviewing code quality for engineer ${engineer.getName()}: ${engineer.getCodeQuality()}`
    );
  }

  visitManager(manager: Manager): void {
    console.log(
      `Reviewing team performance for manager ${manager.getName()}: ${manager.getTeamPerformance()}`
    );
  }
}

// Step 5: Use the Visitor Pattern
// Client code
const employees: Employee[] = [
  new Engineer('Alice', 85),
  new Engineer('Bob', 90),
  new Manager('Charlie', 75),
];

const reviewVisitor = new AnnualReviewVisitor();

for (const employee of employees) {
  employee.accept(reviewVisitor);
}

export {};

/* 
Explanation
  Element Interface (Employee): Defines the accept method to accept a visitor.
  Concrete Element Classes (Engineer, Manager): Implements the Employee interface and defines specific properties and behaviors for each type of employee.
  Visitor Interface (EmployeeVisitor): Defines methods for visiting each type of concrete element.
  Concrete Visitor Class (AnnualReviewVisitor): Implements the EmployeeVisitor interface and defines operations to perform on each type of employee.
  Client Code: Creates a list of employees and an instance of the visitor, and then iterates over the employees to perform the annual review operation.
Summary
  The Visitor pattern allows you to add new operations to existing object structures without modifying the structures. It is useful for separating algorithms from the objects they operate on, making the system more extensible and easier to maintain. The employee review example demonstrates how to use the Visitor pattern in a TypeScript application to perform different operations on various types of employees.
*/
