import { Game, IGame } from "./model";

export const ChutesAndLadders: IGame =
        new Game()
                .setId("1")
                .setDescription("chutes and ladders game")
                .setName("Chutes and Ladders")
                .setRules("chutes and ladders", "play game")
                .build()





