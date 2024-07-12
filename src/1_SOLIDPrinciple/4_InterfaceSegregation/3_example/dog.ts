import { IAnimal } from './animal.interface';
import { IAnimalThatRun } from './animal-that-run.interface';

export class Dog implements IAnimal, IAnimalThatRun {
  sleep(): void {
    console.log('Dog is sleeping.');
  }

  move(): void {
    console.log('Dog is moving.');
  }

  walk(): void {
    console.log('Dog is walking.');
  }

  run(): void {
    console.log('Dog is running.');
  }
}