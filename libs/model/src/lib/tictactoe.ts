import { GameInfoBuilder, IGameBuilder, IGameInfo, GameBuilder } from './model';

export const tic_tac_toe: IGameInfo = new GameInfoBuilder()
  .setID('2')
  .setName('Tic Tac Toe')
  .setDescription('A virtual game of Tic Tac Toe')
  .setImageURL('/tic_tac_toe.jpg')
  .addRule('amount of players', 'only 2')
  .buildGameInfo();

export const Complete_tic_tac_toe: IGameBuilder = new GameBuilder()
  .setId('2')
  .buildNewGame();
