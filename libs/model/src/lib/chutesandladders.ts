import { GameInfoBuilder, IGameBuilder, IGameInfo, GameBuilder } from './model';
// import { Chutes_and_ladders } from './chutesandladders_gl/game_logic/cl_game';

// const chutesAndLadders = new Chutes_and_ladders(5, 5);

export const ChutesAndLaddersRules: IGameInfo = new GameInfoBuilder()
  .setID('1')
  .setName('chutes_and_ladders')
  .setDescription('A virtual game of chutes_and_ladders')
  .setImageURL('/chutes_and_ladders.jpg')
  .addRule('amount of players', 'more than 2 and no more than 4')
  .buildGameInfo();

export const CompleteChutesAndLadders: IGameBuilder = new GameBuilder()
  .setId('1')
  // .addMethods('choose color', chutesAndLadders.chooseColor())
  // // .addMethods('register player', chutesAndLadders.registerPlayer)
  // // .addMethods('register player', chutesAndLadders.registerPlayer)
  // // .addMethods('start game', chutesAndLadders.setUpGame)
  // // .addMethods('reset game', chutesAndLadders.resetGame)
  // // .addMethods('roll dice', chutesAndLadders.rollDice)
  // // .addMethods('play turn', chutesAndLadders.playTurn)
  .buildNewGame();
