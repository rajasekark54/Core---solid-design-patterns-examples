/* 
It allows an object to change its behavior when its internal state changes. The object will appear to change its class. This pattern is particularly useful when an object must change its behavior at runtime depending on its state.

Why and When to Use the State Pattern
  * State-Dependent Behavior: When an object's behavior depends on its state and it must change behavior at runtime according to that state.
  * Avoiding Conditional Logic: When you have a lot of conditional statements (if-else or switch-case) related to state changes, the State pattern can simplify the code by eliminating these conditionals.
  * State Encapsulation: To encapsulate state-specific behavior and state transitions, making the code more maintainable and flexible.

Benefits of the State Pattern
  * Simplifies State Transitions: Makes state transitions explicit and manageable.
  * Encapsulation: Encapsulates state-specific behavior, making the system more modular and easier to maintain.
  * Eliminates Conditionals: Reduces the need for complex conditional logic by delegating state-specific behavior to individual state classes.
  * Flexibility: Makes it easy to add new states and transitions without modifying existing code.
*/

// Real-Time Application Example: Traffic Light System
// Let's consider a traffic light system where the traffic light can be in one of three states: Red, Yellow, or Green. Each state has its own behavior and transitions to the next state.

// Step 1: Define the State Interface
// State interface
interface TrafficLightState {
  changeLight(trafficLight: TrafficLight): void;
  display(): void;
}

// Step 2: Create Concrete State Classes
// Concrete state classes
class RedLight implements TrafficLightState {
  changeLight(trafficLight: TrafficLight): void {
    console.log('Changing from Red to Green');
    trafficLight.setState(new GreenLight());
  }

  display(): void {
    console.log('Traffic Light is Red');
  }
}

class GreenLight implements TrafficLightState {
  changeLight(trafficLight: TrafficLight): void {
    console.log('Changing from Green to Yellow');
    trafficLight.setState(new YellowLight());
  }

  display(): void {
    console.log('Traffic Light is Green');
  }
}

class YellowLight implements TrafficLightState {
  changeLight(trafficLight: TrafficLight): void {
    console.log('Changing from Yellow to Red');
    trafficLight.setState(new RedLight());
  }

  display(): void {
    console.log('Traffic Light is Yellow');
  }
}

// Step 3: Create the Context Class
// Context class
class TrafficLight {
  private currentState: TrafficLightState;

  constructor(initialState: TrafficLightState) {
    this.currentState = initialState;
  }

  setState(state: TrafficLightState): void {
    this.currentState = state;
  }

  changeLight(): void {
    this.currentState.changeLight(this);
  }

  display(): void {
    this.currentState.display();
  }
}

// Step 4: Use the State Pattern
// Client code
const trafficLight = new TrafficLight(new RedLight());

trafficLight.display(); // Output: Traffic Light is Red
trafficLight.changeLight();

trafficLight.display(); // Output: Traffic Light is Green
trafficLight.changeLight();

trafficLight.display(); // Output: Traffic Light is Yellow
trafficLight.changeLight();

trafficLight.display(); // Output: Traffic Light is Red

/* 
Explanation
  State Interface (TrafficLightState): Defines methods for state-specific behavior (changeLight and display).
  Concrete State Classes (RedLight, YellowLight, GreenLight): Implements the TrafficLightState interface, defining the behavior and transitions for each state.
  Context Class (TrafficLight): Maintains an instance of a state object that defines the current state and delegates state-specific behavior to this object.
  Client Code: Creates a TrafficLight instance with an initial state and changes the light to demonstrate state transitions and behavior changes.
Summary
  The State pattern allows an object to change its behavior when its internal state changes, encapsulating state-specific behavior and transitions. This traffic light system example demonstrates how to use the State pattern to manage state-dependent behavior in a TypeScript application, simplifying the code and making it more maintainable.
*/
