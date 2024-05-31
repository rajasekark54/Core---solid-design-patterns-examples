/* 
Interface Segregation Principle (ISP)
Definition:
  Clients should not be forced to depend on interfaces they do not use.
*/

// Bad Design
interface SmartDevice {
  turnOn(): void;
  turnOff(): void;
  playMusic(): void;
}

class SmartLight implements SmartDevice {
  turnOn(): void {
    console.log('Light turned on');
  }

  turnOff(): void {
    console.log('Light turned off');
  }

  playMusic(): void {
    throw new Error("Lights can't play music");
  }
}

/* ----------------- */

// Good Design

interface Switchable {
  turnOn(): void;
  turnOff(): void;
}

interface MusicPlayer {
  playMusic(): void;
}

class SmartLight1 implements Switchable {
  turnOn(): void {
    console.log('Light turned on');
  }

  turnOff(): void {
    console.log('Light turned off');
  }
}

class SmartSpeaker implements Switchable, MusicPlayer {
  turnOn(): void {
    console.log('Speaker turned on');
  }

  turnOff(): void {
    console.log('Speaker turned off');
  }

  playMusic(): void {
    console.log('Playing music');
  }
}
