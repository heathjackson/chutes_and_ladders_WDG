import { Board } from './chutesandladders_gl/game_logic/board';
import { Chutes_and_ladders } from './chutesandladders_gl/game_logic/cl_game';
import { GameInfoBuilder, IGameInfo, IGameBuilder, GameBuilder } from './model';

const gib = new GameInfoBuilder();

export const ChutesAndLaddersRules: IGameInfo = gib
  .setID('1')
  .setName('chutes_and_ladders')
  .setDescription('A virtual game of chutes_and_ladders')
  .setImageURL('/chutes_and_ladders.jpg')
  .addRule('amount of players', 'more than 2 and no more than 4')
  .addRule('roll dice', 'each player takes turns rolling the dice')
  .buildGameInfo();

// export const CompleteChutesAndLadders: IGameBuilder = new GameBuilder()
//   .setId('1')
//   .setGameInstance(new Chutes_and_ladders(5, 5))
//   .buildNewGame();
