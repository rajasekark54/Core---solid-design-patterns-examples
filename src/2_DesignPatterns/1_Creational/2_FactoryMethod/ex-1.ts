/* 
We have different types of employees in a company, such as Developer, Manager, and Tester, each with its own specific roles and responsibilities. We'll use the Factory Method pattern to create instances of these employees.
*/

// Employee interface
interface Employee {
  work(): void;
}

// Developer implementation
class Developer implements Employee {
  work() {
    console.log('Developer is coding.');
  }
}

// Manager implementation
class Manager implements Employee {
  work() {
    console.log('Manager is managing the team.');
  }
}

// Tester implementation
class Tester implements Employee {
  work() {
    console.log('Tester is testing the software.');
  }
}

// Employee Factory interface
interface EmployeeFactory {
  createEmployee(): Employee;
}

// Developer Factory
class DeveloperFactory implements EmployeeFactory {
  createEmployee() {
    return new Developer();
  }
}

// Manager Factory
class ManagerFactory implements EmployeeFactory {
  createEmployee() {
    return new Manager();
  }
}

// Tester Factory
class TesterFactory implements EmployeeFactory {
  createEmployee() {
    return new Tester();
  }
}

// Usage
function clientCode(factory: EmployeeFactory) {
  const employee = factory.createEmployee();
  employee.work();
}

// Create instances using factories
const developerFactory = new DeveloperFactory();
const managerFactory = new ManagerFactory();
const testerFactory = new TesterFactory();

// Use factories to create employees
clientCode(developerFactory); // Output: Developer is coding.
clientCode(managerFactory); // Output: Manager is managing the team.
clientCode(testerFactory); // Output: Tester is testing the software.
