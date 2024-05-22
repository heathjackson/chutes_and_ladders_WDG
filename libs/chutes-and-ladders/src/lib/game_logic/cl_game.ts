import { Space } from './space';
import { Board } from './board';
import { Player } from './player';
import { Avatar } from './avatar';
import { Die } from './die';
import { SpaceType, ISpace, IBoard, IPlayer, Color, IDie } from './interfaces';
import { randomNumber } from './utils';

export class Chutes_and_ladders {
  LADDERS: number;
  CHUTES: number;
  MAX_PLAYERS = 4;
  MIN_PLAYERS = 2;
  TOTAL = 100;
  SPAN = 40;
  COLUMNS = 10;
  availableAvatars = [Color.GREEN, Color.BLUE, Color.PURPLE, Color.RED];
  specialSpacesArray: ISpace[];
  // allGameSpacesArray: ISpace[];
  uniqueValues: Array<number>;
  registeredPlayers!: IPlayer[];
  // board: IBoard;
  dice: IDie;
  currentPlayer: number;
  startSpace: ISpace;

  constructor(ladders: number, chutes: number) {
    this.LADDERS = ladders;
    this.CHUTES = chutes;
    this.specialSpacesArray = [];
    this.registeredPlayers = [];
    this.uniqueValues = [];
    this.currentPlayer = 0;
    this.createChutesAndLadders();
    this.startSpace = new Board(
      this.specialSpacesArray,
      this.TOTAL
    ).createAllSpaces();
    // this.allGameSpacesArray = this.board.allGameSpacesArray;
    this.dice = new Die(6);
  }

  chooseColor(color: Color) {
    this.availableAvatars = this.availableAvatars.filter(
      (col) => col !== color
    );
  }

  createSpace(value: string, type: SpaceType) {
    return new Space(value, type);
  }

  isUniqueValue(array: number[], value: number): boolean {
    return array.indexOf(value) === -1;
  }

  isWithinSpan(specialStartValue: number, specialEndValue: number) {
    return Math.abs(specialStartValue - specialEndValue) < this.SPAN;
  }

  calculateEnd(type: SpaceType, start: number) {
    return type === SpaceType.LADDER
      ? start + this.COLUMNS
      : start - this.COLUMNS;
  }

  createSpecialSpaces(
    startMin: number,
    startMax: number,
    type: SpaceType,
    total: number
  ) {
    let i = 0;
    while (i < total) {
      const specialStart = randomNumber(startMin, startMax);
      const endMin = this.calculateEnd(type, specialStart);
      const endMax = this.calculateEnd(type, specialStart);
      const specialEnd = randomNumber(endMin, endMax);

      if (
        this.isWithinSpan(specialStart, specialEnd) &&
        this.isUniqueValue(this.uniqueValues, specialStart) &&
        this.isUniqueValue(this.uniqueValues, specialEnd)
      ) {
        const specialS = this.createSpace(`${specialStart}`, type);
        const specialE = this.createSpace(`${specialEnd}`, SpaceType.NORMAL);
        specialS.special = specialE;
        this.specialSpacesArray.push(specialS, specialE);
        this.uniqueValues.push(specialStart, specialEnd);
        i++;
      }
    }
  }

  createChutesAndLadders() {
    this.createSpecialSpaces(
      2,
      this.TOTAL - this.COLUMNS,
      SpaceType.LADDER,
      this.LADDERS
    );
    this.createSpecialSpaces(
      this.COLUMNS + 1,
      this.TOTAL - 1,
      SpaceType.CHUTE,
      this.CHUTES
    );
  }

  displayGameBoard() {
    const space: Space = this.startSpace;
    const gameBoardValues: string[][] = [];
    const row: string[] = [];
  }

  registerPlayer(playerName: string, color: number) {
    let playerRegistered = false;
    if (this.registeredPlayers.length < this.MAX_PLAYERS) {
      const player = new Player(
        playerName,
        this.registeredPlayers.length,
        new Avatar(color)
      );
      this.registeredPlayers.push(player);
      this.chooseColor(color);
      playerRegistered = true;
    } else {
      console.log(`${playerName}, a max of four players are allowed`);
    }
    return playerRegistered;
  }

  setUpGame() {
    if (this.registeredPlayers.length >= this.MIN_PLAYERS) {
      this.registeredPlayers.forEach((player) => {
        // this.board.start.land(player.avatar);
        player.avatar.winner = false;
      });
    } else {
      console.log('You need more players');
    }
  }

  resetGame() {
    this.specialSpacesArray = [];
    this.uniqueValues = [];
    this.createChutesAndLadders();
    // this.board = new Board(this.specialSpacesArray, this.TOTAL);
    this.switchTurns();
    this.setUpGame();
  }

  rollDice() {
    return this.dice.roll();
  }

  switchTurns() {
    // this.registeredPlayers.push(this.registeredPlayers.shift());
    this.rotatePlayers();
  }

  rotatePlayers() {
    this.currentPlayer++;
    if (this.currentPlayer === this.registeredPlayers.length) {
      this.currentPlayer = 0;
    }
  }

  playTurn(roll: number) {
    const player = this.registeredPlayers[this.currentPlayer];
    player.avatar.move(roll);
    if (this.checkForWinner(player)) {
      this.resetGame();
    } else {
      this.switchTurns();
    }
  }

  checkForWinner(player: IPlayer) {
    return player.avatar.winner;
  }
}
const g = new Chutes_and_ladders(5, 5);

console.log(g.startSpace.next);
