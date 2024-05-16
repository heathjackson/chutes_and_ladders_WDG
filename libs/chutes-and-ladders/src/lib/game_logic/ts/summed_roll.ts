import { ISummedRoll } from './interfaces';

export class SummedRoll implements ISummedRoll {
  Sum: number;
  Numbers: number[];

  constructor(array: number[]) {
    this.Numbers = [...array];
    this.Sum = array.reduce((a, b) => a + b);
  }

  // Should return an array of numbers
  get numbers() {
    return this.Numbers;
  }
  // Should return a sum of all the roles as a number value
  get sum() {
    return this.Sum;
  }
}
