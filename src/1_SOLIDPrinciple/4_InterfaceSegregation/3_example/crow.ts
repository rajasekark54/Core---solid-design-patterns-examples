import { IAnimal } from './animal.interface';
import { IAnimalThatFly } from './animal-that-fly.interface';

export class Crow implements IAnimal, IAnimalThatFly {
  sleep(): void {
    console.log('Crow is sleeping.');
  }

  move(): void {
    console.log('Crow is moving.');
  }

  walk(): void {
    console.log('Crow is walking.');
  }

  fly(): void {
    console.log('Crow is flying.');
  }
}