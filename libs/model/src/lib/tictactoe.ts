import { GameInfoBuilder, IGameInfo } from "./model";

export const TicTacToe: IGameInfo =
        new GameInfoBuilder()
                .setID("2")
                .setName("Tic Tac Toe")
                .setDescription("A virtual game of Tic Tac Toe")
                .setImageURL("/tic_tac_toe.jpg")
                .addRule("amount of players", "only 2 players")
                .buildGameInfo()