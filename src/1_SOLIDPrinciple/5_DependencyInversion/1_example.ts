/* 
Dependency Inversion Principle (DIP)
Definition:
  High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions.

Explanation
  High-level modules should not depend on low-level modules. Both should depend on abstractions.
    High-level modules: These are modules that contain complex logic and business rules.
    Low-level modules: These are modules that deal with simple and detailed operations like reading a file, connecting to a database, etc.
    By ensuring that both high-level and low-level modules depend on abstractions (interfaces or abstract classes), you can reduce the coupling between the modules. This makes the system more modular and easier to change.
    Abstractions should not depend on details. Details should depend on abstractions.

Abstractions: These are the interfaces or abstract classes that define how modules should interact.
  Details: These are the concrete implementations of those interfaces.
  By ensuring that details depend on abstractions, you create a flexible design where the high-level policy doesn’t change when the low-level implementation changes.
  Benefits
  Decoupling: It reduces the coupling between high-level and low-level modules.
  Maintainability: It makes the code easier to maintain and extend.
  Testability: It improves the testability of the code since high-level modules can be tested independently of the low-level module implementations.
  Flexibility: It allows for the interchangeability of components without affecting the higher-level logic.
*/

// Bad Design
class EmailService {
  sendEmail(message: string): void {
    console.log(`Sending email: ${message}`);
  }
}

class Notification {
  private emailService: EmailService;

  constructor() {
    this.emailService = new EmailService();
  }

  send(message: string): void {
    this.emailService.sendEmail(message);
  }
}

/* ----------------- */

// Good Design
// Abstraction
interface MessageService {
  sendMessage(message: string): void;
}

// Low-Level Module (Detail)
class EmailService1 implements MessageService {
  sendMessage(message: string): void {
    console.log(`Sending email: ${message}`);
  }
}

// Low-Level Module (Detail)
class SMSService implements MessageService {
  sendMessage(message: string): void {
    console.log(`Sending SMS: ${message}`);
  }
}

// High level module
class Notification1 {
  private messageService: MessageService;

  constructor(messageService: MessageService) {
    this.messageService = messageService;
  }

  send(message: string): void {
    this.messageService.sendMessage(message);
  }
}

// Usage
const emailService = new EmailService1(); // Low-Level Module
const notificationService = new Notification1(emailService); // High-Level Module depends on Abstraction
notificationService.send('Hello, this is a notification!');

const smsService = new SMSService(); // Another Low-Level Module
const smsNotificationService = new Notification1(smsService); // High-Level Module depends on Abstraction
smsNotificationService.send('Hello, this is an SMS notification!');

export {};

/* 
Explanation
  High-Level Module: NotificationService
    Contains business logic for sending notifications.
    Depends on the MessageSender abstraction.

  Low-Level Module: EmailService and SmsService
    Implement the MessageSender interface.
    Provide the specific details of how messages are sent.
  
    Abstraction: MessageSender
    Defines the contract for sending messages.
    Allows NotificationService to be decoupled from specific implementations.
  
    Details: Implementations of MessageSender (EmailService and SmsService)
      Provide the concrete behavior for sending messages as defined by the abstraction.
  
  By structuring the code in this way, you ensure that the high-level module (NotificationService) is not tightly coupled to the low-level modules (EmailService or SmsService). This makes the system more flexible and easier to maintain or extend.
*/
