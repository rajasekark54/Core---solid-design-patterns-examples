import { IAnimal } from './animal.interface';
import { IAnimalThatGraze } from './animal-that-graze.interface';
import { IAnimalThatRun } from './animal-that-run.interface';

export class Horse implements IAnimal, IAnimalThatRun, IAnimalThatGraze {
  sleep(): void {
    console.log('Horse is sleeping.');
  }

  move(): void {
    console.log('Horse is moving.');
  }

  walk(): void {
    console.log('Horse is walking.');
  }

  run(): void {
    console.log('Horse is running.');
  }

  graze(): void {
    console.log('Horse is grazing.');
  }
}