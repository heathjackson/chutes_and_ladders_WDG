import { GameInfoBuilder, IGameInfo, IGameBuilder, GameBuilder } from './model';

// const chutesAndLadders = new Chutes_and_ladders(5, 5);

export const ChutesAndLaddersRules: IGameInfo = new GameInfoBuilder()
  .setID('1')
  .setName('chutes_and_ladders')
  .setDescription('A virtual game of chutes_and_ladders')
  .setImageURL('/chutes_and_ladders.jpg')
  .addRule('amount of players', 'more than 2 and no more than 4')
  .addRule('roll dice', 'each player takes turns rolling the dice')
  .buildGameInfo();

// const chutesAndLaddersGame = new Game(Chutes_and_ladders);
// export const CompleteChutesAndLadders = new chutesAndLaddersGame.GameClass()
//   .setId('1')
//   .buildNewGame();

export const CompleteChutesAndLadders: IGameBuilder = new GameBuilder()
  .setId('1')
  .buildNewGame();
