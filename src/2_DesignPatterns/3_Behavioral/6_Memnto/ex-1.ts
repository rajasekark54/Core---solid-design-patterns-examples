/* 
What is the Memento Pattern?
  The Memento pattern is a behavioral design pattern that allows you to capture and externalize an object's internal state without violating encapsulation, so the object can be restored to this state later. This pattern is useful for implementing undo mechanisms.
Why and When to Use the Memento Pattern
  * Undo/Redo Functionality: When you need to implement undo and redo functionality in your application.
  * State Restoration: When you need to save and restore an object's state without exposing its internal structure.
  * Snapshot Mechanism: When you want to take snapshots of an object's state at various points in time.
Benefits of the Memento Pattern
  * Encapsulation: Preserves encapsulation boundaries by not exposing an object's internal state.
  * State Management: Provides a straightforward way to manage state history and restoration.
  * Undo/Redo: Facilitates the implementation of undo and redo operations.
*/

// Real-Time Application Example: Text Editor with Undo Functionality
// Let's consider a simple text editor that supports undo functionality.

// Step 1: Define the Memento Class
// Memento class
class EditorMemento {
  private content: string;

  constructor(content: string) {
    this.content = content;
  }

  getContent(): string {
    return this.content;
  }
}

// Step 2: Create the Originator Class
// Originator class
class TextEditor {
  private content: string = '';

  type(words: string): void {
    this.content += words;
  }

  getContent(): string {
    return this.content;
  }

  save(): EditorMemento {
    return new EditorMemento(this.content);
  }

  restore(memento: EditorMemento): void {
    this.content = memento.getContent();
  }
}

// Step 3: Create the Caretaker Class
// Caretaker class
class History {
  private mementos: EditorMemento[] = [];

  push(memento: EditorMemento): void {
    this.mementos.push(memento);
  }

  pop(): EditorMemento | undefined {
    return this.mementos.pop();
  }
}

// Step 4: Use the Memento Pattern
// Client code
const editor = new TextEditor();
const history = new History();

editor.type('Hello, ');
history.push(editor.save());

editor.type('world!');
history.push(editor.save());

console.log(editor.getContent()); // Output: "Hello, world!"

editor.restore(history.pop()!);
console.log(editor.getContent()); // Output: "Hello, "

editor.restore(history.pop()!);
console.log(editor.getContent()); // Output: ""

export {};

/* 
Explanation
  Memento Class (EditorMemento): Stores the internal state of the TextEditor. Provides a method to get the stored state.
  Originator Class (TextEditor): Creates a memento containing its current state and can restore its state from a memento.
  Caretaker Class (History): Manages the memento objects and is responsible for saving and restoring the editor's state.
  Client Code: Uses the TextEditor and History classes to implement undo functionality.
Summary
  The Memento pattern provides a way to capture and restore an object's state, facilitating undo and redo operations while preserving encapsulation. This text editor example demonstrates how to use the Memento pattern to implement undo functionality in a TypeScript application. The pattern is useful for managing state history and restoration in a clean and encapsulated manner.
*/
