import { Color, IAvatar, ISpace, SpaceType } from './interfaces';

export class Avatar implements IAvatar {
  winner: boolean;
  location!: ISpace;
  color: Color;

  constructor(color: number) {
    this.winner = false;
    this.color = color;
    this.location;
  }

  toggleWinner() {
    this.winner = !this.winner;
  }

  move(numberOfSpaces: number) {
    //If the number of spaces rolled is a positive number, then move the avatar
    //forward that number of spaces.  If the avatar is moved to the finish space the avatar is landed.

    let currentLocation = this.location;

    while (
      numberOfSpaces > 0 &&
      currentLocation.next !== null &&
      currentLocation.type !== SpaceType.FINISH
    ) {
      currentLocation = currentLocation.next;
      numberOfSpaces--;
    }
    currentLocation.land(this);
  }
}
