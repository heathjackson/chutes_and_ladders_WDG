import { IAvatar, IPlayer } from './interfaces';

export class Player implements IPlayer {
  Name: string;
  Order: number;
  Avatar: IAvatar;
  constructor(name: string, order: number, avatar: IAvatar) {
    this.Name = name;
    this.Order = order;
    this.Avatar = avatar;
  }
}
