import { IPlayGame } from '@hjackson/model';
import { PlayChutesAndLadders } from '@hjackson/model';

const map1 = new Map<string, IPlayGame>()
const map2 = new Map<number, Array<string>>()
const timeConversion = 60000 // 60000 milliseconds in a minute will convert Date.now() from milliseconds to minutes
const deletedGames: Array<Array<string>> = []

const gameMap1 = (gamePlaying: IPlayGame) => {
  map1.set(gamePlaying.uuid, gamePlaying)
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

gameMap1(PlayChutesAndLadders)

deleteOldGames(1440)




