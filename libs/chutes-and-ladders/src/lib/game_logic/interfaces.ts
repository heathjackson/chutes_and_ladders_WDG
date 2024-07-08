export enum Color {
  UNDEFINED = 0,
  RED = 1,
  BLACK = 2,
  BROWN = 3,
  BLUE = 4,
  GREEN = 5,
  PURPLE = 6,
  WHITE = 7,
  YELLOW = 8,
  ORANGE = 9,
  PINK = 10,
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
