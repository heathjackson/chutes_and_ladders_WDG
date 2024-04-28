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
    this.unlink();
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
    return this.total_spaces_array;
  };

  connectSpaces = () => {
    let totalArray = this.createAllSpaces();
    this.start = totalArray[0];
    let cur = this.start;

    for (let i = 1; i < totalArray.length; i++) {
      let nextSpace = totalArray[i];
      cur.next = nextSpace;
      nextSpace.back = cur;
      cur = nextSpace;
    }
  };

  unlink() {
    while (this.start !== null) {
      let spaceObject = {
        value: this.start.value,
        type: this.start.type,
        next: this.start.next,
        back: this.start.back,
        special: this.start.special,
        avatars: this.start.avatars,
      };
      this.unlinked_total_spaces.push(spaceObject);
      this.start = this.start.next;
    }
  }

  clear() {
    this.start = null;
  }
}

const newBoard = new Board([], 10);
newBoard.unlink();
console.log(newBoard.unlinked_total_spaces);
console.log(newBoard.total_spaces_array);
