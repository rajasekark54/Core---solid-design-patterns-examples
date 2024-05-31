/* 
lets assume our web application that supports different database systems like MySQL and MongoDB. Using the Abstract Factory pattern, we can create families of related database operations (e.g., connection, queries) without specifying their concrete classes.
*/

// Abstract Product: DatabaseConnection
interface DatabaseConnection {
  connect(): void;
  disconnect(): void;
}

// Abstract Product: DatabaseQuery
interface DatabaseQuery {
  execute(query: string): any;
}

/* ------ */

// Concrete Product: MySQLConnection
class MySQLConnection implements DatabaseConnection {
  connect() {
    console.log('Connecting to MySQL database.');
  }

  disconnect() {
    console.log('Disconnecting from MySQL database.');
  }
}

// Concrete Product: MySQLQuery
class MySQLQuery implements DatabaseQuery {
  execute(query: string) {
    console.log(`Executing MySQL query: ${query}`);
    return {};
  }
}

/* ------ */

// Concrete Product: MongoDBConnection
class MongoDBConnection implements DatabaseConnection {
  connect() {
    console.log('Connecting to MongoDB database.');
  }

  disconnect() {
    console.log('Disconnecting from MongoDB database.');
  }
}

// Concrete Product: MongoDBQuery
class MongoDBQuery implements DatabaseQuery {
  execute(query: string) {
    console.log(`Executing MongoDB query: ${query}`);
    return {};
  }
}

/* ------ */

// Abstract Factory
interface DatabaseFactory {
  createConnection(): DatabaseConnection;
  createQuery(): DatabaseQuery;
}

/* ------ */

// Concrete Factory: MySQLFactory
class MySQLFactory implements DatabaseFactory {
  createConnection(): DatabaseConnection {
    return new MySQLConnection();
  }

  createQuery(): DatabaseQuery {
    return new MySQLQuery();
  }
}

/* ------ */

// Concrete Factory: MongoDBFactory
class MongoDBFactory implements DatabaseFactory {
  createConnection(): DatabaseConnection {
    return new MongoDBConnection();
  }

  createQuery(): DatabaseQuery {
    return new MongoDBQuery();
  }
}

/* ------ */

function clientCode(factory: DatabaseFactory) {
  const connection = factory.createConnection();
  const query = factory.createQuery();

  connection.connect();
  const result = query.execute('SELECT * FROM users');
  console.log(result);
  connection.disconnect();
}

// Usage
const mysqlFactory = new MySQLFactory();
const mongoFactory = new MongoDBFactory();

console.log('Client: Using MySQL factory...');
clientCode(mysqlFactory);
// Output:
// Connecting to MySQL database.
// Executing MySQL query: SELECT * FROM users
// {}
// Disconnecting from MySQL database.

console.log('Client: Using MongoDB factory...');
clientCode(mongoFactory);
// Output:
// Connecting to MongoDB database.
// Executing MongoDB query: SELECT * FROM users
// {}
// Disconnecting from MongoDB database.

export {};
