export class Color {
  static UNDEFINED = 0;
  static RED = 1;
  static BLACK = 2;
  static BROWN = 3;
  static BLUE = 4;
  static GREEN = 5;
  static PURPLE = 6;
  static WHITE = 7;
  static YELLOW = 8;
  static ORANGE = 9;
  static PINK = 10;
}

export enum SpaceType {
  START = 0,
  NORMAL = 1,
  CHUTE = 2,
  LADDER = 3,
  FINISH = 4,
}

export interface IAvatar {
  toggleWinner(): void;
  move(numberOfSpaces: number): void;
  winner: boolean;
  color: Color;
  location: ISpace;
}

export interface ISpace {
  value: string;
  type: SpaceType;
  next: ISpace | null;
  back: ISpace | null;
  special: ISpace | null;
  avatars: IAvatar[];

  land(avatar: IAvatar): void;
}

export interface IBoard {
  start: ISpace;
  finish: ISpace;
  specialSpacesArray: ISpace[];
  totalAmountOfSpaces: number;
}

export interface IDie {
  roll(): unknown;
  sides: number;
}

export interface ISummedRoll {
  Sum: number;
  Numbers: number[];
}

export interface IPlayer {
  name: string;
  order: number;
  avatar: IAvatar;
}
