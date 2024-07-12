import { IAnimal } from './animal.interface';
import { IAnimalThatRun } from './animal-that-run.interface';
import { IAnimalThatSwim } from './animal-that-swim.interface';

export class Duck implements IAnimal, IAnimalThatRun, IAnimalThatSwim {
  sleep(): void {
    console.log('Duck is sleeping.');
  }

  move(): void {
    console.log('Duck is moving.');
  }

  walk(): void {
    console.log('Duck is walking.');
  }

  run(): void {
    console.log('Duck is running.');
  }

  swim(): void {
    console.log('Duck is swimming.');
  }
}