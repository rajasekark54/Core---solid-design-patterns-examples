/* 
Let's consider a real-time application example of a notification system where we can send notifications through various channels (Email, SMS, and Push Notifications). We want to be able to decorate notifications with additional behaviors such as logging and saving to a database.
*/

// Step 1: Define the Component Interface
// Component interface
interface Notifier {
  send(message: string): void;
}

// Step 2: Create Concrete Components
// Concrete Component for Email notifications
class EmailNotifier implements Notifier {
  send(message: string): void {
    console.log(`Sending Email: ${message}`);
  }
}

// Concrete Component for SMS notifications
class SMSNotifier implements Notifier {
  send(message: string): void {
    console.log(`Sending SMS: ${message}`);
  }
}

// Concrete Component for Push notifications
class PushNotifier implements Notifier {
  send(message: string): void {
    console.log(`Sending Push Notification: ${message}`);
  }
}

// Step 3: Create Base Decorator Class
// Base Decorator class
class NotifierDecorator implements Notifier {
  protected notifier: Notifier;

  constructor(notifier: Notifier) {
    this.notifier = notifier;
  }

  send(message: string): void {
    this.notifier.send(message);
  }
}

// Concrete Decorator for logging
class LoggingDecorator extends NotifierDecorator {
  send(message: string): void {
    console.log(`Logging: ${message}`);
    super.send(message);
  }
}

// Concrete Decorator for saving to a database
class DatabaseDecorator extends NotifierDecorator {
  send(message: string): void {
    console.log(`Saving to database: ${message}`);
    super.send(message);
  }
}

// Now, we can use these classes to send notifications through different channels with additional behaviors like logging and saving to a database.

// Client code
const emailNotifier = new EmailNotifier();
const smsNotifier = new SMSNotifier();
const pushNotifier = new PushNotifier();

// Using EmailNotifier with Logging
const loggedEmailNotifier = new LoggingDecorator(emailNotifier);
loggedEmailNotifier.send('Hello via Email!');
// Output: Logging: Hello via Email!
// Output: Sending Email: Hello via Email!

// Using SMSNotifier with Logging and Database saving
const loggedAndSavedSMSNotifier = new DatabaseDecorator(
  new LoggingDecorator(smsNotifier)
);
loggedAndSavedSMSNotifier.send('Hello via SMS!');
// Output: Saving to database: Hello via SMS!
// Output: Logging: Hello via SMS!
// Output: Sending SMS: Hello via SMS!

// Using PushNotifier with Database saving
const savedPushNotifier = new DatabaseDecorator(pushNotifier);
savedPushNotifier.send('Hello via Push Notification!');
// Output: Saving to database: Hello via Push Notification!
// Output: Sending Push Notification: Hello via Push Notification!

export {};
