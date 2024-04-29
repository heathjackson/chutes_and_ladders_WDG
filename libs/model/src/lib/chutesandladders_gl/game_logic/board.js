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

  getSpaceArray() {
    this.createAllSpaces();
    this.unlinked_total_spaces = [...this.total_spaces_array];
  }

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

  // // Actual clone method which returns head
  // // reference of cloned linked list.
  // clone() {
  //   // Initialize two references, one with
  //   // original list's head.
  //   let origCurr = this.start;
  //   let cloneCurr = null;

  //   // Hash map which contains node to node
  //   // mapping of original and clone linked list.
  //   let map = new Map();

  //   // Traverse the original list and make a
  //   // copy of that in the clone linked list.
  //   while (origCurr != null) {
  //     cloneCurr = new Space(origCurr.data);
  //     map.set(origCurr, cloneCurr);
  //     origCurr = origCurr.next;
  //   }

  //   // Adjusting the original list reference
  //   // again.
  //   origCurr = this.start;

  //   // Traversal of original list again to
  //   // adjust the next and random references
  //   // of clone list using hash map.
  //   while (origCurr != null) {
  //     cloneCurr = map.get(origCurr);
  //     cloneCurr.next = map.get(origCurr.next);
  //     cloneCurr.back = map.get(origCurr.back);
  //     origCurr = origCurr.next;
  //   }

  //   // Return the head reference of the
  //   // clone list.
  //   this.unlinked_total_spaces.push(map.get(this.start));
  // }

  // unlink() {
  //   let unlinked = this.unlinked_total_spaces;
  //   while (unlinked.start !== null) {
  //     let newSpecial = unlinked.start.special;
  //     if (newSpecial !== null) {
  //       newSpecial = unlinked.start.special.value;
  //     }

  //     let spaceObject = {
  //       value: unlinked.start.value,
  //       type: unlinked.start.type,
  //       special: newSpecial,
  //       avatars: unlinked.start.avatars,
  //     };
  //     unlinked.push(spaceObject);
  //     unlinked.start = unlinked.start.next;
  //   }
  // }

  clear() {
    this.start = null;
  }
}

const newBoard = new Board([], 10);
