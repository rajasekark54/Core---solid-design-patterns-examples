/* 
The Chain of Responsibility pattern is a behavioral design pattern that allows an object to pass a request along a chain of potential handlers until the request is handled. Each handler in the chain either processes the request or passes it to the next handler.

Real-Time Application Example: Logging System
Let's consider a logging system where we have different log levels: Info, Debug, and Error. Each level of logging can process specific types of log messages and pass the rest to the next handler in the chain.
*/

// Step 1: Define the Handler Interface
// Handler interface
interface Logger {
  setNext(logger: Logger): Logger;
  log(message: string, level: LogLevel): void;
}

// Log levels enum
enum LogLevel {
  INFO = 'INFO',
  DEBUG = 'DEBUG',
  ERROR = 'ERROR',
}

// Step 2: Create Concrete Handlers
// Abstract logger class to handle setting the next logger
abstract class AbstractLogger implements Logger {
  protected nextLogger: Logger | null = null;

  setNext(logger: Logger): Logger {
    this.nextLogger = logger;
    return logger;
  }

  log(message: string, level: LogLevel): void {
    if (this.nextLogger) {
      this.nextLogger.log(message, level);
    }
  }
}

// Info logger
class InfoLogger extends AbstractLogger {
  log(message: string, level: LogLevel): void {
    if (level === LogLevel.INFO) {
      console.log(`INFO: ${message}`);
    }
    super.log(message, level);
  }
}

// Debug logger
class DebugLogger extends AbstractLogger {
  log(message: string, level: LogLevel): void {
    if (level === LogLevel.DEBUG) {
      console.log(`DEBUG: ${message}`);
    }
    super.log(message, level);
  }
}

// Error logger
class ErrorLogger extends AbstractLogger {
  log(message: string, level: LogLevel): void {
    if (level === LogLevel.ERROR) {
      console.log(`ERROR: ${message}`);
    }
    super.log(message, level);
  }
}

// Step 3: Set Up the Chain of Responsibility
// Client code to set up the chain of responsibility
const infoLogger = new InfoLogger();
const debugLogger = new DebugLogger();
const errorLogger = new ErrorLogger();

infoLogger.setNext(debugLogger).setNext(errorLogger);

// Example usage
infoLogger.log('This is an informational message.', LogLevel.INFO);
infoLogger.log('This is a debug message.', LogLevel.DEBUG);
infoLogger.log('This is an error message.', LogLevel.ERROR);
infoLogger.log('This is a debug message.', LogLevel.DEBUG);

/* 
// Output
INFO: This is an informational message.
DEBUG: This is a debug message.
ERROR: This is an error message.
DEBUG: This is a debug message.
*/
