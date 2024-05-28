/* 
Dependency Inversion Principle (DIP)
Definition:
  High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions.
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
interface MessageService {
  sendMessage(message: string): void;
}

class EmailService1 implements MessageService {
  sendMessage(message: string): void {
    console.log(`Sending email: ${message}`);
  }
}

class SMSService implements MessageService {
  sendMessage(message: string): void {
    console.log(`Sending SMS: ${message}`);
  }
}

class Notification1 {
  private messageService: MessageService;

  constructor(messageService: MessageService) {
    this.messageService = messageService;
  }

  send(message: string): void {
    this.messageService.sendMessage(message);
  }
}

export {};
