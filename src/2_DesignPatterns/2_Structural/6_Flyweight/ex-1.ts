/* 
The Flyweight pattern is a structural design pattern that enables you to share common parts of object states among multiple objects. It helps reduce memory usage by sharing as much data as possible with similar objects. This pattern is particularly useful when you need to create a large number of objects.

Real-Time Application Example in TypeScript
Let's consider an example of a text editor application where we need to display a large number of characters on the screen. Each character can be represented as an object with intrinsic (shared) and extrinsic (non-shared) states.
*/

// Step 1: Define the Flyweight Interface and Concrete Flyweight
// Flyweight interface
interface Character {
  render(positionX: number, positionY: number): void;
}

// Concrete Flyweight
class CharacterFlyweight implements Character {
  private symbol: string;
  private font: string;

  constructor(symbol: string, font: string) {
    this.symbol = symbol;
    this.font = font;
  }

  render(positionX: number, positionY: number): void {
    console.log(
      `Rendering character '${this.symbol}' in font '${this.font}' at (${positionX}, ${positionY})`
    );
  }
}

// Step 2: Create the Flyweight Factory
// The Flyweight Factory ensures that flyweights are shared properly. It maintains a pool of flyweight objects and returns existing objects when possible.
class FlyweightFactory {
  private flyweights: { [key: string]: CharacterFlyweight } = {};

  getFlyweight(symbol: string, font: string): CharacterFlyweight {
    const key = symbol + font;
    if (!this.flyweights[key]) {
      this.flyweights[key] = new CharacterFlyweight(symbol, font);
      console.log(
        `Creating new flyweight for character '${symbol}' with font '${font}'`
      );
    }
    return this.flyweights[key];
  }

  getFlyweightCount(): number {
    return Object.keys(this.flyweights).length;
  }
}

// Step 3: Use the Flyweight Pattern
// Now, we can use the Flyweight pattern to render characters in a text editor.
// Client code
class CharacterContext {
  private flyweight: CharacterFlyweight;
  private positionX: number;
  private positionY: number;

  constructor(
    flyweight: CharacterFlyweight,
    positionX: number,
    positionY: number
  ) {
    this.flyweight = flyweight;
    this.positionX = positionX;
    this.positionY = positionY;
  }

  render(): void {
    this.flyweight.render(this.positionX, this.positionY);
  }
}

// Usage
const factory = new FlyweightFactory();

const characters = [
  { symbol: 'A', font: 'Arial', x: 10, y: 20 },
  { symbol: 'B', font: 'Arial', x: 20, y: 20 },
  { symbol: 'A', font: 'Times', x: 30, y: 20 },
  { symbol: 'A', font: 'Arial', x: 40, y: 20 },
  { symbol: 'B', font: 'Times', x: 50, y: 20 },
];

const contexts: CharacterContext[] = characters.map((char) => {
  const flyweight = factory.getFlyweight(char.symbol, char.font);
  return new CharacterContext(flyweight, char.x, char.y);
});

contexts.forEach((context) => context.render());

console.log(`Total flyweights created: ${factory.getFlyweightCount()}`);

// Output:
// Creating new flyweight for character 'A' with font 'Arial'
// Rendering character 'A' in font 'Arial' at (10, 20)
// Creating new flyweight for character 'B' with font 'Arial'
// Rendering character 'B' in font 'Arial' at (20, 20)
// Creating new flyweight for character 'A' with font 'Times'
// Rendering character 'A' in font 'Times' at (30, 20)
// Rendering character 'A' in font 'Arial' at (40, 20)
// Creating new flyweight for character 'B' with font 'Times'
// Rendering character 'B' in font 'Times' at (50, 20)
// Total flyweights created: 4
