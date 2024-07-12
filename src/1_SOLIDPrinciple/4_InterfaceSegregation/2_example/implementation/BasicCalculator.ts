import { IBasicCalculator } from '../interface/BasicCalculator';

class BasicCalculator implements IBasicCalculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiple(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    if (b === 0) throw new Error('Division by zero');

    return a / b;
  }
}

export { BasicCalculator };
