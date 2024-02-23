import { GameBuilder } from "./model";

export const TicTacToe =
  new GameBuilder()
    .addRule("total players", "only 2")
    .addRule("test1", "value-test1")
    .buildGame()