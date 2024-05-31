/* 
Intent
  To specify the kinds of objects to create using a prototypical instance.
  To create new objects by copying existing objects (prototypes).
Real-Time Example: Document Cloning System
  Imagine you have a document management system where different types of documents (e.g., Word documents, Excel spreadsheets) can be created. Using the Prototype pattern, you can clone existing documents to create new ones quickly and efficiently.
Step-by-step Implementation in TypeScript
  1. Prototype: The interface that declares the cloning method.
  2. Concrete Prototype: The class that implements the cloning method.
  3. Client: The class that uses the Prototype interface to clone objects.
*/

//Prototype Interface
interface DocumentPrototype {
  clone(): DocumentPrototype;
  getInfo(): void;
}

// Concrete Prototype: WordDocument
class WordDocument implements DocumentPrototype {
  private content: string;

  constructor(content: string) {
    this.content = content;
  }

  clone(): DocumentPrototype {
    return new WordDocument(this.content);
  }

  getInfo(): void {
    console.log(`WordDocument with content: ${this.content}`);
  }
}

// Concrete Prototype: ExcelDocument
class ExcelDocument implements DocumentPrototype {
  private data: string;

  constructor(data: string) {
    this.data = data;
  }

  clone(): DocumentPrototype {
    return new ExcelDocument(this.data);
  }

  getInfo(): void {
    console.log(`ExcelDocument with data: ${this.data}`);
  }
}

// Client code that uses the Prototype pattern
function clientCode() {
  // Create initial prototypes
  const originalWordDocument = new WordDocument('This is a Word document.');
  const originalExcelDocument = new ExcelDocument(
    'This is an Excel spreadsheet.'
  );

  // Clone the prototypes
  const clonedWordDocument = originalWordDocument.clone();
  const clonedExcelDocument = originalExcelDocument.clone();

  // Display info for original and cloned documents
  originalWordDocument.getInfo(); // Output: WordDocument with content: This is a Word document.
  clonedWordDocument.getInfo(); // Output: WordDocument with content: This is a Word document.

  originalExcelDocument.getInfo(); // Output: ExcelDocument with data: This is an Excel spreadsheet.
  clonedExcelDocument.getInfo(); // Output: ExcelDocument with data: This is an Excel spreadsheet.
}

clientCode();

export {};
