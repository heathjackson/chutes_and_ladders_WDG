import { IAvatar, IPlayer } from './interfaces';

export class Player implements IPlayer {
  name: string;
  order: number;
  avatar: IAvatar;
  constructor(name: string, order: number, avatar: IAvatar) {
    this.name = name;
    this.order = order;
    this.avatar = avatar;
  }
}
