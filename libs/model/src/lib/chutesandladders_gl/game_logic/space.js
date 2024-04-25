export class SpaceType {
  static START = 0;
  static NORMAL = 1;
  static CHUTE = 2;
  static LADDER = 3;
  static FINISH = 4;
}

Object.freeze(SpaceType);

export class Space {
  #Value = '';
  #Type = SpaceType.NORMAL;
  #Next = null;
  #Back = null;
  #Special = null;
  #Avatars = [];

  constructor(value, type) {
    this.#Value = value;
    this.#Type = type;
  }

  /**
   * Is a method to be invoked when an avatar leaves a space
   */
  leave() {
    this.#Avatars.pop();
  }

  /**
   *
   * @return {string}
   */
  get value() {
    return this.#Value;
  }

  /**
   *
   * @return {number}
   */
  get type() {
    return this.#Type;
  }

  /**
   *
   * @return {Space | null}
   */
  get next() {
    return this.#Next;
  }

  /**
   *
   * @param location {Space}
   * @return {Space} the current space
   */
  set next(space) {
    this.#Next = space;
  }

  get back() {
    return this.#Back;
  }

  set back(space) {
    this.#Back = space;
  }

  /**
   *
   * @return {Space | null}
   */
  get special() {
    return this.#Special;
  }

  /**
   *
   * @param location
   * @return {Space} the current space
   */
  set special(space) {
    this.#Special = space;
  }

  /**
   *
   * @return {*[]} a copy of the array of players
   */
  get avatars() {
    // returns a copy of the players
    return [...this.#Avatars];
  }
  /**
   * @return boolean true if the space has players, false otherwise
   */

  occupied() {
    return this.#Avatars.length > 0;
  }

  /**
   * Is a method to be invoked when an avatar lands (or stops) on a space.
   * @param avatar
   **/

  land(avatar) {
    if (this.occupied() && this.#Type !== SpaceType.START) {
      this.#Avatars[0].move(1);
      this.leave();
    } else if (this.#Special !== null) {
      avatar.location = this.#Special;
      avatar.location.#Avatars.push(avatar);
    } else if (this.#Type === SpaceType.FINISH) {
      avatar.location = this;
      avatar.toggleWinner();
    } else {
      avatar.location = this;
      this.#Avatars.push(avatar);
    }
  }
}
