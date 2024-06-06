/* 
What is the Command Pattern?
The    undoable operations.

Why and When to Use the Command Pattern
  Decoupling: To separate the object that sends a request from the object that handles the request.
  Parameterization: To pass different requests to methods.
  Queueing Operations: To delay or queue requests for later execution.
  Undo/Redo Operations: To support operations that can be undone or redone.
  Logging and Transaction Management: To log changes or manage complex transactions.
  Benefits of the Command Pattern
  Decoupling: Promotes loose coupling between sender and receiver.
  Extensibility: Easily add new commands without changing existing code.
  Undo/Redo Support: Simplifies implementation of undo/redo functionality.
  Composability: Commands can be combined into larger operations or transactions.

Real-Time Application Example: Text Editor
  Let's consider a simple text editor application where we can perform operations like typing text, deleting text, and undoing these operations.
*/

// Step 1: Define the Command Interface
// Command interface
interface Command {
  execute(): void;
  undo(): void;
}

// Step 2: Create Concrete Commands
// Receiver class
class TextEditor {
  private content: string = '';

  type(text: string): void {
    this.content += text;
    console.log(`Text Editor Content: "${this.content}"`);
  }

  delete(count: number): void {
    this.content = this.content.slice(0, -count);
    console.log(`Text Editor Content: "${this.content}"`);
  }

  getContent(): string {
    return this.content;
  }
}

// Concrete command classes
class TypeCommand implements Command {
  private editor: TextEditor;
  private text: string;

  constructor(editor: TextEditor, text: string) {
    this.editor = editor;
    this.text = text;
  }

  execute(): void {
    this.editor.type(this.text);
  }

  undo(): void {
    this.editor.delete(this.text.length);
  }
}

class DeleteCommand implements Command {
  private editor: TextEditor;
  private count: number;
  private deletedText: string = '';

  constructor(editor: TextEditor, count: number) {
    this.editor = editor;
    this.count = count;
  }

  execute(): void {
    this.deletedText = this.editor.getContent().slice(-this.count);
    this.editor.delete(this.count);
  }

  undo(): void {
    this.editor.type(this.deletedText);
  }
}

// Step 3: Create the Invoker
// Invoker class
class CommandManager {
  private commandHistory: Command[] = [];

  executeCommand(command: Command): void {
    command.execute();
    this.commandHistory.push(command);
  }

  undoCommand(): void {
    const command = this.commandHistory.pop();
    if (command) {
      command.undo();
    }
  }
}

// Step 4: Use the Command Pattern
// Client code
const editor = new TextEditor();
const commandManager = new CommandManager();

const typeCommand1 = new TypeCommand(editor, 'Hello, ');
const typeCommand2 = new TypeCommand(editor, 'world!');

commandManager.executeCommand(typeCommand1); // Output: Text Editor Content: "Hello, "
commandManager.executeCommand(typeCommand2); // Output: Text Editor Content: "Hello, world!"

commandManager.undoCommand(); // Output: Text Editor Content: "Hello, "
commandManager.undoCommand(); // Output: Text Editor Content: ""

/* 
Explanation
  Command Interface (Command): Defines the execute and undo methods.
  Concrete Commands: Implement the Command interface and contain the logic to perform and undo actions on the TextEditor.
  Invoker (CommandManager): Stores the command history and calls the command's execute and undo methods.
  Client Code: Sets commands on the invoker and triggers actions.
*/
