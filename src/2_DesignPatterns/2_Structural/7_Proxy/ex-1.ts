/* 
The Proxy pattern is a structural design pattern that provides a surrogate or placeholder for another object to control access to it. This can be useful for various purposes such as controlling access rights, logging, caching, or lazy initialization. Let's explore a real-time application example of using a proxy to control access to sensitive data in a user authentication system.

Example: User Authentication Proxy
Let's imagine a scenario where we have a UserAuthentication service that handles user authentication and authorization. We want to restrict access to sensitive user data unless the user is authenticated. We can use a Proxy to control access to this sensitive data.
*/

// Step 1: Define the Service Interface
interface UserAuthentication {
  login(username: string, password: string): boolean;
  getUserData(username: string): string;
}

// Step 2: Create the Real Service
class RealUserAuthentication implements UserAuthentication {
  private users: { [key: string]: string } = {
    alice: 'password123',
    bob: 'pass456',
  };
  private userData: { [key: string]: string } = {
    alice: "Alice's sensitive data",
    bob: "Bob's sensitive data",
  };

  login(username: string, password: string): boolean {
    const storedPassword = this.users[username];
    return storedPassword === password;
  }

  getUserData(username: string): string {
    return this.userData[username];
  }
}

// Step 3: Create the Proxy
class AuthenticationProxy implements UserAuthentication {
  private realService: RealUserAuthentication;
  private authenticatedUser: string | null = null;

  constructor(realService: RealUserAuthentication) {
    this.realService = realService;
  }

  login(username: string, password: string): boolean {
    const isAuthenticated = this.realService.login(username, password);
    if (isAuthenticated) {
      this.authenticatedUser = username;
    }
    return isAuthenticated;
  }

  getUserData(username: string): string {
    if (this.authenticatedUser === username) {
      return this.realService.getUserData(username);
    } else {
      throw new Error('Unauthorized access to user data');
    }
  }
}

// Step 4: Use the Proxy
// Client code
const realService = new RealUserAuthentication();
const proxy = new AuthenticationProxy(realService);

proxy.login('alice', 'password123'); // Logs in successfully

console.log(proxy.getUserData('alice')); // Accesses Alice's sensitive data
// Output: Alice's sensitive data

console.log(proxy.getUserData('bob')); // Throws unauthorized access error
// Output: Error: Unauthorized access to user data

/* 
Explanation
  Service Interface (UserAuthentication): Defines the methods that both the real service and proxy will implement.

  Real Service (RealUserAuthentication): Represents the actual user authentication service. It stores user credentials and sensitive user data.

  Proxy (AuthenticationProxy): Acts as a surrogate for the real service. It intercepts requests to access sensitive data and ensures that only authenticated users can access it.

  Client Code: Uses the proxy to interact with the user authentication system. The proxy controls access to sensitive user data based on the user's authentication status.

Benefits of Using Proxy Pattern
  Security: Helps control access to sensitive resources or data.
  Flexibility: Allows for additional functionality such as logging, caching, or lazy initialization without modifying the real service.
  Performance: Can optimize access to resources by implementing caching or lazy loading.
  This example demonstrates how the Proxy pattern can be used in a real-time application, such as a user authentication system, to control access to sensitive data and ensure security.
*/
