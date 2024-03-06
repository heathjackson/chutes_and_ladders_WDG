import { IPlayGame } from "./model";

export const Maps = () => {

  const map1 = new Map<IPlayGame, string>()

  const setMap1 = (game: IPlayGame, uuid: string) => {
    map1.set(game, uuid)
    return map1
  }

  const map2 = new Map<number, Array<string>>()

  const setMap2 = (date: number, arrUUID: Array<string>) => {
    map2.set(date, arrUUID)
    return map2
  }
  return { setMap1, setMap2 }
}



