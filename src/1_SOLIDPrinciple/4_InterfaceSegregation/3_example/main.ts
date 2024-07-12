// main.ts
import { Crow } from './crow';
import { Dog } from './dog';
import { Duck } from './duck';
import { Horse } from './horse';
import { Lion } from './lion';

const crow: Crow = new Crow();
crow.fly();

const dog: Dog = new Dog();
dog.run();

const duck: Duck = new Duck();
duck.swim();

const horse: Horse = new Horse();
horse.walk();
horse.graze();
horse.run();
horse.graze();
horse.sleep();

const lion: Lion = new Lion();
lion.walk();
lion.run();
lion.hunt();
lion.sleep();

/* Interface Segregation Principle - Many client-specific interfaces are better than one
  general-purpose interface. Here, the idea is split the ‘big’ interface to the smaller
  interface until client of the interface will only know about the methods that are related to them.
*/
