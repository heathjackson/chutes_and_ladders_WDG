import { SpaceType, Space } from './space.js';

export class Board {
  start;
  finish;
  total_spaces_array = [];
  unlinked_total_spaces = [];
  constructor(specialArray, totalSpaces) {
    this.specialArray = specialArray;
    this.totalSpaces = totalSpaces;
    this.getSpaceArray();
    this.connectSpaces();
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
          ? this.total_spaces_array.push(found) &&
            console.log(`found = ${JSON.stringify(found)}`)
          : this.total_spaces_array.push(this.spaceMaker(i, SpaceType.NORMAL));
      }
    }
  };

  getSpaceArray = () => {
    this.createAllSpaces();

    console.log(
      `total space array = ${JSON.stringify(this.total_spaces_array)}`
    );
    this.total_spaces_array.map((space) => {
      let newSpace = space.clone;
      if (newSpace.special !== null) {
        newSpace.special = newSpace.special.value;
      }
      this.unlinked_total_spaces.push({
        value: newSpace.value,
        type: newSpace.type,
        special: newSpace.special,
        avatars: newSpace.avatars,
      });
    });
    console.log(
      `inlinked spaces = ${JSON.stringify(this.unlinked_total_spaces)}`
    );
  };

  connectSpaces = () => {
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
