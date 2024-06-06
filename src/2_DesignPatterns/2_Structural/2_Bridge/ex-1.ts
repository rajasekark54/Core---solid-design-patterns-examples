/* 
The Bridge pattern is a structural design pattern that decouples an abstraction from its implementation, allowing the two to vary independently. It is particularly useful when both the abstraction and implementation may change over time.

Example: Remote Control for Different Devices
  In this example, we want to create a remote control that can operate different devices. We can have different types of remotes (basic and advanced) and different types of devices (TV and Radio).
*/

// Step 1: Define the Abstraction and Implementation Interfaces
// Implementor interface
interface Device {
  powerOn(): void;
  powerOff(): void;
  setChannel(channel: number): void;
}

// Concrete Implementors
class TV implements Device {
  powerOn(): void {
    console.log('TV is ON');
  }

  powerOff(): void {
    console.log('TV is OFF');
  }

  setChannel(channel: number): void {
    console.log(`TV channel set to ${channel}`);
  }
}

class Radio implements Device {
  powerOn(): void {
    console.log('Radio is ON');
  }

  powerOff(): void {
    console.log('Radio is OFF');
  }

  setChannel(channel: number): void {
    console.log(`Radio channel set to ${channel}`);
  }
}

// Abstraction
abstract class RemoteControl {
  protected device: Device;

  constructor(device: Device) {
    this.device = device;
  }

  abstract turnOn(): void;
  abstract turnOff(): void;
  abstract setChannel(channel: number): void;
}

// Refined Abstractions
class BasicRemoteControl extends RemoteControl {
  turnOn(): void {
    this.device.powerOn();
  }

  turnOff(): void {
    this.device.powerOff();
  }

  setChannel(channel: number): void {
    this.device.setChannel(channel);
  }
}

class AdvancedRemoteControl extends RemoteControl {
  turnOn(): void {
    this.device.powerOn();
    console.log('Performing additional setup for advanced remote');
  }

  turnOff(): void {
    this.device.powerOff();
    console.log('Performing additional teardown for advanced remote');
  }

  setChannel(channel: number): void {
    this.device.setChannel(channel);
    console.log('Additional channel setup for advanced remote');
  }

  mute(): void {
    console.log('Device is muted');
  }
}

// Step 2: Use the Bridge Pattern
// Now, we can use these classes to control different devices with different remotes without changing the existing code structure.
// Client code
const tv = new TV();
const radio = new Radio();

const basicRemoteForTV = new BasicRemoteControl(tv);
const advancedRemoteForTV = new AdvancedRemoteControl(tv);

const basicRemoteForRadio = new BasicRemoteControl(radio);
const advancedRemoteForRadio = new AdvancedRemoteControl(radio);

basicRemoteForTV.turnOn(); // Output: TV is ON
basicRemoteForTV.setChannel(10); // Output: TV channel set to 10
basicRemoteForTV.turnOff(); // Output: TV is OFF

advancedRemoteForTV.turnOn(); // Output: TV is ON, Performing additional setup for advanced remote
advancedRemoteForTV.setChannel(20); // Output: TV channel set to 20, Additional channel setup for advanced remote
advancedRemoteForTV.mute(); // Output: Device is muted
advancedRemoteForTV.turnOff(); // Output: TV is OFF, Performing additional teardown for advanced remote

basicRemoteForRadio.turnOn(); // Output: Radio is ON
basicRemoteForRadio.setChannel(30); // Output: Radio channel set to 30
basicRemoteForRadio.turnOff(); // Output: Radio is OFF

advancedRemoteForRadio.turnOn(); // Output: Radio is ON, Performing additional setup for advanced remote
advancedRemoteForRadio.setChannel(40); // Output: Radio channel set to 40, Additional channel setup for advanced remote
advancedRemoteForRadio.mute(); // Output: Device is muted
advancedRemoteForRadio.turnOff(); // Output: Radio is OFF, Performing additional teardown for advanced remote

/* 
Explanation
  Implementor Interface (Device): Defines the interface for different devices. In this case, it's Device with methods powerOn, powerOff, and setChannel.
  Concrete Implementors (TV, Radio): Implement the Device interface and provide specific logic for TV and Radio.
  Abstraction (RemoteControl): Defines the interface for remotes and maintains a reference to the Device implementor.
  Refined Abstractions (BasicRemoteControl, AdvancedRemoteControl): Extend the RemoteControl abstraction and implement the control methods, using the Device implementor to perform actions.
Benefits of Using Bridge Pattern
  Decoupling: Separates the abstraction (remote control) from its implementation (device), allowing them to vary independently.
  Scalability: Makes it easy to add new devices or remote types without modifying existing code.
  Flexibility: Enables the combination of different remotes and devices at runtime.
  This example shows how the Bridge pattern can be used to manage variations in both the abstraction (remote control) and the implementation (device), providing a flexible and scalable design.
*/
