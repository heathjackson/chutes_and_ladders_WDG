import { IAvatar, ISpace, SpaceType } from './interfaces';

export class Space implements ISpace {
  value: string;
  type: SpaceType;
  next!: ISpace;
  back!: ISpace;
  special: ISpace | null;
  avatars: IAvatar[];

  constructor(value: string, type: SpaceType) {
    this.value = value;
    this.type = type;
    this.special = null;
    this.avatars = [];
  }

  //clone space so a linked list can be created, while creating the same spaces that are unlinked for passing back and forth through JASON

  get clone() {
    return new Space(this.value, this.type);
  }
  /**
   * Is a method to be invoked when an avatar leaves a space
   */
  leave() {
    this.avatars.pop();
  }

  setNext(space: ISpace) {
    if (this.type !== 4) {
      this.next = space;
    }
  }

  setBack(space: ISpace) {
    if (this.type !== 0) {
      this.back = space;
    }
  }

  setSpecial(space: ISpace) {
    if (this.type === 2 || this.type === 3) {
      this.special = space;
    } else {
      this.special = null;
    }
  }

  occupied() {
    return this.avatars.length > 0;
  }

  land(avatar: IAvatar) {
    if (this.occupied() && this.type !== SpaceType.START) {
      this.avatars[0].move(1);
      this.leave();
    } else if (this.special !== null) {
      avatar.location = this.special;
      avatar.location.avatars.push(avatar);
    } else if (this.type === SpaceType.FINISH) {
      avatar.location = this;
      avatar.toggleWinner();
    } else {
      avatar.location = this;
      this.avatars.push(avatar);
    }
  }
}
