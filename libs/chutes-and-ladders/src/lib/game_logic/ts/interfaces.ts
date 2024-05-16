export class Color {
  // static UNDEFINED = 'UNDEFINED'; //this breaks down to string
  static RED = 1; // this breaks down to number
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
  location: ISpace;
  color: Color;
}

export interface ISpace {
  value: string;
  type: SpaceType;
  next: ISpace;
  back: ISpace;
  special: ISpace | null;
  avatars: IAvatar[];

  land(avatar: IAvatar): void;
}

export interface IBoard {
  start: ISpace;
  finish: ISpace;
  total_spaces_array: ISpace[];
  unlinked_total_spaces: ISpace[];
  specialArray: ISpace[];
  totalSpaces: number;
}

export interface IDie {
  roll(): unknown;
  Sides: number;
}

export interface ISummedRoll {
  Sum: number;
  Numbers: number[];
}

export interface IPlayer {
  Name: string;
  Order: number;
  Avatar: IAvatar;
}
