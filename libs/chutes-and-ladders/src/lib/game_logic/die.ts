import { IDie } from './interfaces';
import { SummedRoll } from './summed_roll';

const minSides = 4;

export class Die implements IDie {
  sides: number;

  constructor(sides: number) {
    this.sides = sides;

    if (this.sides < minSides)
      throw new Error(`sides must be greater than or equal to ${minSides}`);
  }

  // Should return a number of sides
  get Sides() {
    return this.sides;
  }

  // returns a random number between one and the total sides
  roll() {
    return Math.floor(Math.random() * this.Sides) + 1;
  }

  //return sum of rolls when number of rolls is indicated
  sumOfRolls(numberOfRolls: number) {
    const array = [];
    for (let i = 0; i < numberOfRolls; i++) {
      array.push(this.roll());
    }

    const summedRolls = new SummedRoll(array);
    return summedRolls.sum;
  }
}
