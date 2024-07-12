import { IScientificCalculator } from '../interface/ScientificCalculator';
import { BasicCalculator } from './BasicCalculator';

class ScientificCalculator
  extends BasicCalculator
  implements IScientificCalculator
{
  sin(value: number): number {
    return Math.sin(value);
  }

  cos(value: number): number {
    return Math.cos(value);
  }

  tan(value: number) {
    return Math.tan(value);
  }

  log(value: number): number {
    if (value <= 0) throw new Error('Logarithm of non-positive number');
    return Math.log(value);
  }
}

export { ScientificCalculator };
