export class SpaceType {
  static START = 0;
  static NORMAL = 1;
  static CHUTE = 2;
  static LADDER = 3;
  static FINISH = 4;
}

Object.freeze(SpaceType);

export class Space {
  value = '';
  type = SpaceType.NORMAL;
  next = null;
  back = null;
  special = null;
  avatars = [];

  constructor(value, type) {
    this.value = value;
    this.type = type;
  }

  /**
   * Is a method to be invoked when an avatar leaves a space
   */
  leave() {
    this.avatars.pop();
  }

  next(space) {
    if (this.type !== 4) {
      this.next = space;
    } else {
      this.next = null;
    }
  }

  back(space) {
    if (this.type !== 0) {
      this.back = space;
    } else {
      this.next = null;
    }
  }

  special(space) {
    if (this.type === 2 || this.type === 3) {
      this.special = space;
    } else {
      this.special = null;
    }
  }

  occupied() {
    return this.avatars.length > 0;
  }

  land(avatar) {
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
