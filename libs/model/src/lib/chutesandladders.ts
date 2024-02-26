import { Game, IGame } from "./model";

export const ChutesAndLadders: IGame =
        new Game()
                .setId("1")
                .setDescription("chutes and ladders game")
                .setName("Chutes and Ladders")
                .addRule("players", "no more than 4 players")
                .addRule("roll", "each player must roll the dice")
                .build()





