class Database {
  static instance: Database;
  private connection: any;

  // Private constructor to prevent direct instantiation.
  private constructor() {
    this.connection = this.createConnection();
  }

  // Method to create a new database connection
  private createConnection() {
    console.log('Database connection created.');
    return new Date();
  }

  // Static method to provide access to the single instance.
  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public getConnection() {
    return this.connection;
  }

  public closeConnection() {
    // this.connection.end(); // or other relevant close method
    console.log('Database connection closed.');
  }
}

// Usage
const db1 = Database.getInstance();
const db2 = Database.getInstance();

console.log('Are both database instances the same?', db1 === db2); // Output: true

// Using the connection
const connection1 = db1.getConnection();
const connection2 = db2.getConnection();
console.log(
  'Are both database connections are same?',
  connection1 === connection2
); // Output: true

db1.closeConnection();
