import { IGameBuilder } from '@hjackson/model';
import { CompleteChutesAndLadders } from '@hjackson/model';

const map1 = new Map<string, IGameBuilder>()
const map2 = new Map<number, Array<string>>() //number = date Array = array of all the uuids

const timeConversion = 60000 // 60000 milliseconds in a minute will convert Date.now() from milliseconds to minutes

const deletedGames: Array<Array<string>> = []

const gameMap1 = (completeGame: IGameBuilder) => {
  map1.set(completeGame.uuid, completeGame)
}

const minus_minutes = (minutes: number) => {
  const time = Math.round((Date.now() / timeConversion) - minutes)
  return time
}

const deleteOldGames = (minutes: number) => {
  const dayPrior: number = minus_minutes(minutes)

  for (const [key, value] of map2) {
    if (key < dayPrior) {
      deletedGames.push(value)
      map2.delete(key)
    }
  }
}

gameMap1(CompleteChutesAndLadders)

deleteOldGames(1440)




