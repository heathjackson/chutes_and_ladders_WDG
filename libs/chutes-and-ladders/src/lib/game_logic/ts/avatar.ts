import { Color, IAvatar, ISpace, SpaceType } from './interfaces';

export class Avatar implements IAvatar {
  winner: boolean;
  location!: ISpace;
  color: Color;

  /**
   *
   * @param color the color of the avatar
   */
  constructor(color: string) {
    this.winner = false;
    this.color = color;
    this.location;
  }

  get Location() {
    return this.location;
  }

  set Location(location: ISpace) {
    this.location = location;
  }

  toggleWinner() {
    this.winner = !this.winner;
  }

  move(numberOfSpaces: number) {
    //If the number of spaces rolled is a positive number, then move the avatar
    //forward that number of spaces.  If the avatar is moved to the finish space the avatar is landed.

    let currentLocation = this.Location;
    while (numberOfSpaces > 0 && currentLocation.type !== SpaceType.FINISH) {
      currentLocation = currentLocation.next;
      numberOfSpaces--;
    }

    this.Location = currentLocation;
    this.location.land(this);
  }
}
