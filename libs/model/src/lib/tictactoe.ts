import { Game, IGame } from "./model";

export const TicTacToe: IGame =
        new Game()
                .setId("2")
                .setDescription("Tic Tac Toe")
                .setName("Tic Tac Toe")
                .addRule("Tic Tac Toe", "play Tic Tac Toe")
                .build()