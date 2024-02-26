import { BuildGame, IGame } from "./model";

export const TicTacToe: IGame =
        new BuildGame()
                .setId("2")
                .setDescription("Tic Tac Toe")
                .setName("Tic Tac Toe")
                .addRule("Tic Tac Toe", "play Tic Tac Toe")
                .buildGame()