import { GameInfoBuilder, IGameInfo, IPlayGame, PlayGame } from "./model";


export const ChutesAndLaddersRules: IGameInfo =
        new GameInfoBuilder()
                .setID("1")
                .setName("Chutes and Ladders")
                .setDescription("A virtual game of Chutes and Ladders")
                .setImageURL("/chutes_and_ladders.jpg")
                .addRule("amount of players", "more than 2 and no more than 4")
                .buildGameInfo()

export const PlayChutesAndLadders: IPlayGame =
        new PlayGame()







