import { IBoard, ISpace, SpaceType } from './interfaces';
import { Space } from './space';

export class Board implements IBoard {
  start!: ISpace;
  finish!: ISpace;
  specialSpacesArray: ISpace[];
  totalAmountOfSpaces: number;
  constructor(specialArray: ISpace[], totalSpaces: number) {
    this.specialSpacesArray = specialArray as ISpace[];
    this.totalAmountOfSpaces = totalSpaces;
  }

  spaceMaker(value: string, type: SpaceType): Space {
    return new Space(value, type);
  }

  createAllSpaces() {
    let space: ISpace = this.spaceMaker(`1`, SpaceType.START);
    const start = space;
    for (let i = 2; i < this.totalAmountOfSpaces; i++) {
      const special = this.specialSpacesArray.find((e) => e.value === `${i}`);
      space.next = special
        ? special
        : this.spaceMaker(`${i}`, SpaceType.NORMAL);
      space.back = space;
      space = space.next;
    }
    space.next = this.spaceMaker('100', SpaceType.FINISH);
    space.back = space;
    space = space.next;
    return start;
  }
}
