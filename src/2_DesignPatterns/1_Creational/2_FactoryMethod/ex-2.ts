export {}; // ts will consider this as module

interface Shape {
  draw(): void;
}
class Circle implements Shape {
  draw() {
    console.log('Drawing Circle.');
  }
}
class Square implements Shape {
  draw() {
    console.log('Drawing Square.');
  }
}
class Triangle implements Shape {
  draw() {
    console.log('Drawing Triangle.');
  }
}

interface ShapeFactory {
  createShape(): Shape;
}
class CircleFactory implements ShapeFactory {
  createShape() {
    return new Circle();
  }
}
class SquareFactory implements ShapeFactory {
  createShape() {
    return new Square();
  }
}
class TriangleFactory implements ShapeFactory {
  createShape() {
    return new Triangle();
  }
}

function clientCode(factory: ShapeFactory) {
  const shape = factory.createShape();
  shape.draw();
}

clientCode(new CircleFactory()); // Output: Drawing Circle.
clientCode(new SquareFactory()); // Output: Drawing Square.
clientCode(new TriangleFactory()); // Output: Drawing Triangle.
