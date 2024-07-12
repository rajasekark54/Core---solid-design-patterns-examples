import { IBasicCalculator } from './BasicCalculator';

export interface IScientificCalculator extends IBasicCalculator {
  sin(value: number): number;
  cos(value: number): number;
  tan(value: number): number;
  log(value: number): number;
}
