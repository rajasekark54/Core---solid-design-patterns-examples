import { IAnimal } from './animal.interface';
import { IAnimalThatRun } from './animal-that-run.interface';
import { IAnimalThatHunt } from './animal-that-hunt.interface';

export class Lion implements IAnimal, IAnimalThatRun, IAnimalThatHunt {
  sleep(): void {
    console.log('Lion is sleeping.');
  }

  move(): void {
    console.log('Lion is moving.');
  }

  walk(): void {
    console.log('Lion is walking.');
  }

  run(): void {
    console.log('Lion is running.');
  }

  hunt(): void {
    console.log('Lion is hunting.');
  }
}