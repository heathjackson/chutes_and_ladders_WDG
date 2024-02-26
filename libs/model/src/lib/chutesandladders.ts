import { randomUUID } from "crypto";
import { BuildGame, IGame, IPlayGame, PlayGame } from "./model";


export const ChutesAndLadders: IGame =
        new BuildGame()
                .setId("1")
                .setDescription("chutes and ladders game")
                .setName("Chutes and Ladders")
                .addRule("players", "no more than 4 players")
                .addRule("roll", "each player must roll the dice")
                .buildGame()


export const PlayChutesAndLadders: IPlayGame =
        new PlayGame()
                .setUUID(randomUUID())
                .setDateCreated(new Date())
                .setDateModified(new Date())
                .buildPlay()





