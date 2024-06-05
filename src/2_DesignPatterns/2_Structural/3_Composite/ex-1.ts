/* 
The Composite pattern is a structural design pattern that allows you to compose objects into tree structures to represent part-whole hierarchies. This pattern treats individual objects and compositions of objects uniformly, making it easier to work with complex hierarchical structures.

Real-Time Application Example in TypeScript
  Let's consider an example of a file system where files and directories can be represented as part of a hierarchy.
*/

// Step 1: Define the Component Interface
// Component interface
interface FileSystemComponent {
  getName(): string;
  getSize(): number;
  print(indent: string): void;
}

// Step 2: Create Leaf Classes
// Leaf class for files
class File implements FileSystemComponent {
  private name: string;
  private size: number;

  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }

  getName(): string {
    return this.name;
  }

  getSize(): number {
    return this.size;
  }

  print(indent: string = ''): void {
    console.log(`${indent}- File: ${this.name} (${this.size} KB)`);
  }
}

// Step 3: Create Composite Class

// Composite class for directories
class Directory implements FileSystemComponent {
  private name: string;
  private components: FileSystemComponent[] = [];

  constructor(name: string) {
    this.name = name;
  }

  add(component: FileSystemComponent): void {
    this.components.push(component);
  }

  remove(component: FileSystemComponent): void {
    const index = this.components.indexOf(component);
    if (index > -1) {
      this.components.splice(index, 1);
    }
  }

  getName(): string {
    return this.name;
  }

  getSize(): number {
    return this.components.reduce(
      (total, component) => total + component.getSize(),
      0
    );
  }

  print(indent: string = ''): void {
    console.log(`${indent}+ Directory: ${this.name}`);
    this.components.forEach((component) => component.print(indent + '  '));
  }
}

// Step 4: Use the Composite Pattern
// Now, we can create a file system hierarchy and use the composite pattern to work with it.

// Client code
const file1 = new File('File1.txt', 100);
const file2 = new File('File2.txt', 200);
const file3 = new File('File3.txt', 300);

const directory1 = new Directory('Directory1');
directory1.add(file1);
directory1.add(file2);

const directory2 = new Directory('Directory2');
directory2.add(file3);

const rootDirectory = new Directory('RootDirectory');
rootDirectory.add(directory1);
rootDirectory.add(directory2);

console.log('File system structure:');
rootDirectory.print();

// Output the total size of the root directory
console.log(`Total size: ${rootDirectory.getSize()} KB`);

export {};

/* 
Explanation
  Component Interface (FileSystemComponent): Defines the common interface for both leaf and composite objects. In this case, it includes methods for getting the name, size, and printing the structure.

  Leaf Class (File): Represents the leaf objects in the composition. Implements the FileSystemComponent interface and provides specific implementations for its methods.

  Composite Class (Directory): Represents the composite objects that can contain leaf or other composite objects. Implements the FileSystemComponent interface and provides methods to add, remove, and iterate over child components.

  Client Code: Creates a hierarchy of files and directories, treating individual files and directories uniformly. The print method displays the structure of the file system, and the getSize method calculates the total size of the files in a directory.

Benefits of Using Composite Pattern
  Uniformity: Treats individual objects and compositions uniformly, simplifying client code.
  Hierarchy Management: Makes it easy to manage complex hierarchical structures.
  Flexibility: Allows adding new types of components without changing existing code.
  Scalability: Facilitates scalable designs by allowing nested compositions of objects.
  This example demonstrates how the Composite pattern can be effectively used to manage part-whole hierarchies, providing a flexible and scalable design.
*/
