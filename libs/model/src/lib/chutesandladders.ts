import { GameBuilder } from "./model";

export const ChutesAndLadders = 
        new GameBuilder()
                .addRule("total players", "between 2 to 4 players")
                .addRule("test1", "value-test1")
                .buildGame()
        
