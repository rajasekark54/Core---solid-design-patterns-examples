/* 
What is the Mediator Pattern?
  The Mediator pattern is a behavioral design pattern that encapsulates how a set of objects interact. This pattern promotes loose coupling by keeping objects from referring to each other explicitly and lets you vary their interaction independently. The mediator object centralizes complex communications and control logic between objects in the system.
  
Why and When to Use the Mediator Pattern
  * Complex Interactions: When a system involves complex interactions between multiple objects, making direct communication complex and hard to maintain.
  * Centralized Control: To centralize control and reduce the dependencies between communicating objects.
  * Loose Coupling: When you want to achieve loose coupling between components by preventing direct references between them.
  * Maintainability: To improve the maintainability and scalability of the system by encapsulating the interaction logic.

Benefits of the Mediator Pattern
  * Reduces Dependencies: Decouples the components, reducing the dependencies between them.
  * Centralized Control: Centralizes the control logic, making it easier to manage and maintain.
  * Flexibility: Makes it easier to change the interaction between components by modifying the mediator rather than the components.
  * Improved Code Organization: Helps organize code better by separating concerns related to communication.
*/

// Real-Time Application Example: Chat Room
// Let's consider a chat room application where users can send messages to each other through a central mediator (the chat room).

// Step 1: Define the Mediator Interface
// Mediator interface
interface ChatRoomMediator {
  showMessage(user: User, message: string): void;
}

// Step 2: Create the Concrete Mediator
// Concrete mediator class
class ChatRoom implements ChatRoomMediator {
  showMessage(user: User, message: string): void {
    const time = new Date().toLocaleTimeString();
    const sender = user.getName();
    console.log(`[${time}] ${sender}: ${message}`);
  }
}

// Step 3: Create the User Class
// Colleague class
class User {
  private name: string;
  private chatRoom: ChatRoomMediator;

  constructor(name: string, chatRoom: ChatRoomMediator) {
    this.name = name;
    this.chatRoom = chatRoom;
  }

  getName(): string {
    return this.name;
  }

  sendMessage(message: string): void {
    this.chatRoom.showMessage(this, message);
  }
}

// Step 4: Use the Mediator Pattern
// Client code
const chatRoom = new ChatRoom();

const user1 = new User('Alice', chatRoom);
const user2 = new User('Bob', chatRoom);

user1.sendMessage('Hi Bob!');
user2.sendMessage('Hello Alice!');

/* 
Explanation
  Mediator Interface (ChatRoomMediator): Defines a method for communication between users (showMessage).
  Concrete Mediator (ChatRoom): Implements the mediator interface, handling the communication between users.
  Colleague Class (User): Represents a user in the chat room, interacting with the chat room mediator to send messages.
  Client Code: Creates instances of the chat room and users, allowing users to send messages through the chat room mediator.
Summary
  The Mediator pattern centralizes complex communications and control logic between objects, promoting loose coupling and making the system more maintainable. This chat room example demonstrates how to use the Mediator pattern to manage interactions between users in a TypeScript application. The pattern is useful for reducing dependencies and organizing code related to communication.
*/
