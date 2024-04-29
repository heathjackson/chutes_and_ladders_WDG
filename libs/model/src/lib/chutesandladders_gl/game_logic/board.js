import { SpaceType, Space } from './space.js';

export class Board {
  start;
  finish;
  total_spaces_array = [];
  unlinked_total_spaces = [];
  constructor(specialArray, totalSpaces) {
    this.specialArray = specialArray;
    this.totalSpaces = totalSpaces;
    this.connectSpaces();
    // this.unlink();
  }

  spaceMaker(startValue, type) {
    return new Space(startValue, type);
  }

  createAllSpaces = () => {
    for (let i = 1; i <= this.totalSpaces; i++) {
      if (i === 1) {
        this.total_spaces_array.push(this.spaceMaker(i, SpaceType.START));
      } else if (i === this.totalSpaces) {
        this.finish = this.spaceMaker(i, SpaceType.FINISH);
        this.total_spaces_array.push(this.finish);
      } else {
        let found = this.specialArray.find((e) => e.value === i);
        found
          ? this.total_spaces_array.push(found)
          : this.total_spaces_array.push(this.spaceMaker(i, SpaceType.NORMAL));
      }
    }
  };

  getSpaceArray = () => {
    this.createAllSpaces();
    this.total_spaces_array.map((space) => {
      let newSpecial = space.special;
      if (newSpecial !== null) {
        newSpecial = space.special.value;
      }
      this.unlinked_total_spaces.push({
        ...space,
        special: newSpecial,
      });
    });
  };

  connectSpaces = () => {
    this.getSpaceArray();
    let totalArray = this.total_spaces_array;
    this.start = totalArray[0];
    let cur = this.start;

    for (let i = 1; i < totalArray.length; i++) {
      let nextSpace = totalArray[i];
      cur.next = nextSpace;
      nextSpace.back = cur;
      cur = nextSpace;
    }
  };

  clear() {
    this.start = null;
  }
}
