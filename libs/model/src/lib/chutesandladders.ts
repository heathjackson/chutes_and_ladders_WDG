import { GameInfoBuilder, IGameInfo } from './model';

const gib = new GameInfoBuilder();

export const ChutesAndLaddersRules: IGameInfo = gib
  .setID('1')
  .setName('chutes_and_ladders')
  .setDescription('A virtual game of chutes_and_ladders')
  .setImageURL('/chutes_and_ladders.jpg')
  .addRule('amount of players', 'more than 2 and no more than 4')
  .addRule('roll dice', 'each player takes turns rolling the dice')
  .buildGameInfo();
