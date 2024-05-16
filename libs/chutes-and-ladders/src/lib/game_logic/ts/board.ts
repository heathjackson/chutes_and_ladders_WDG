import { IBoard, ISpace, SpaceType } from './interfaces';
import { Space } from './space';

export class Board implements IBoard {
  start!: ISpace;
  finish!: ISpace;
  total_spaces_array!: ISpace[];
  unlinked_total_spaces!: ISpace[];
  specialArray: ISpace[];
  totalSpaces: number;
  constructor(specialArray: ISpace[], totalSpaces: number) {
    this.specialArray = specialArray as ISpace[];
    this.totalSpaces = totalSpaces;
    this.connectSpaces();
  }

  spaceMaker(value: string, type: SpaceType): Space {
    return new Space(value, type);
  }

  createAllSpaces = () => {
    for (let i = 1; i <= this.totalSpaces; i++) {
      if (i === 1) {
        this.total_spaces_array.push(this.spaceMaker(`${i}`, SpaceType.START));
      } else if (i === this.totalSpaces) {
        this.finish = this.spaceMaker(`${i}`, SpaceType.FINISH);
        this.total_spaces_array.push(this.finish);
      } else {
        const found = this.specialArray.find((e) => e.value === `${i}`);
        found
          ? this.total_spaces_array.push(found)
          : this.total_spaces_array.push(
              this.spaceMaker(`${i}`, SpaceType.NORMAL)
            );
      }
    }
  };

  // unlinkSpaceArray = () => {
  //   this.createAllSpaces();

  //   this.total_spaces_array.map((space) => {
  //     if (space.special) {
  //       space.special = space.special.value;
  //     }

  //     this.unlinked_total_spaces.push({
  //       value: space.value,
  //       type: space.type,
  //       special: space.special,
  //     });
  //   });
  // };

  connectSpaces = () => {
    // this.unlinkSpaceArray();
    const totalArray = this.total_spaces_array;
    this.start = totalArray[0];
    let cur = this.start;

    for (let i = 1; i < totalArray.length; i++) {
      const nextSpace = totalArray[i];
      cur.next = nextSpace;
      nextSpace.back = cur;
      cur = nextSpace;
    }
  };

  getUnlinkedSpacesArray() {
    return this.unlinked_total_spaces;
  }
}
