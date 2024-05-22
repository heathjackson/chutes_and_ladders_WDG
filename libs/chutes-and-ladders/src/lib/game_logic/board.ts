import { IBoard, ISpace, SpaceType } from './interfaces';
import { Space } from './space';

export class Board implements IBoard {
  start!: ISpace;
  finish!: ISpace;
  allGameSpacesArray: ISpace[];
  specialSpacesArray: ISpace[];
  totalAmountOfSpaces: number;
  constructor(specialArray: ISpace[], totalSpaces: number) {
    this.specialSpacesArray = specialArray as ISpace[];
    this.totalAmountOfSpaces = totalSpaces;
    this.allGameSpacesArray = [] as ISpace[];
    // this.connectSpaces();
  }

  spaceMaker(value: string, type: SpaceType): Space {
    return new Space(value, type);
  }

  createAllSpaces() {
    let space: ISpace = this.spaceMaker(`1`, SpaceType.START);
    const start = space;
    for (let i = 2; i < this.totalAmountOfSpaces; i++) {
      // if (i === 1) {
      // space
      // this.AllGameSpacesArray.push(this.spaceMaker(`${i}`, SpaceType.START));
      // } else if (i === this.totalAmountOfSpaces) {
      // this.finish = this.spaceMaker(`${i}`, SpaceType.FINISH);
      // this.AllGameSpacesArray.push(this.finish);
      // } else {
      // const found = this.specialSpacesArray.find((e) => e.value === `${i}`);
      // found
      //   ? this.AllGameSpacesArray.push(found)
      //   : this.AllGameSpacesArray.push(
      //       this.spaceMaker(`${i}`, SpaceType.NORMAL)
      //     );

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

/*  connectSpaces = () => {
    this.createAllSpaces();
    const totalArray = this.AllGameSpacesArray;
    this.start = totalArray[0];
    let cur = this.start;

    for (let i = 1; i < totalArray.length; i++) {
      const nextSpace = totalArray[i];
      cur.next = nextSpace;
      nextSpace.back = cur;
      cur = nextSpace;
    }
  };

  set AllGameSpacesArray(array: ISpace[]) {
    this.allGameSpacesArray = array;
  }

  get AllGameSpacesArray() {
    return this.allGameSpacesArray;
  }
}
  */
