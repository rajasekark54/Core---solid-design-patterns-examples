/* 
No code should be forced to depend on methods it does not use. 
*/

import { BasicCalculator } from './implementation/BasicCalculator';
import { ScientificCalculator } from './implementation/ScientificCalculator';

const basicCalculator = new BasicCalculator();
console.log(console.log('Basic Calculator'));
console.log(basicCalculator.add(10, 5));
console.log(basicCalculator.subtract(10, 5));
console.log(basicCalculator.multiple(10, 5));
console.log(basicCalculator.divide(10, 5));

const scientificCalculator = new ScientificCalculator();

console.log('Scientific Calculator');

console.log(scientificCalculator.add(10, 5));
console.log(scientificCalculator.subtract(10, 5));
console.log(scientificCalculator.multiple(10, 5));
console.log(scientificCalculator.divide(10, 5));
console.log(scientificCalculator.sin(Math.PI / 2)); // 1
console.log(scientificCalculator.cos(Math.PI)); // -1
console.log(scientificCalculator.tan(Math.PI / 4)); // 1
console.log(scientificCalculator.log(Math.E)); // 1
