import { CompleteChutesAndLadders, IGameBuilder } from '@hjackson/model';

export default function gameMaps() {
  // 60000 milliseconds in a minute will convert Date.now() from milliseconds to minutes
  const timeConversion = 60000;

  //map uuid to game being played
  //map date and time to uuid so games can be deleted at intervals
  const map1 = new Map<string, IGameBuilder>();

  //number = date Array = array of all the uuids
  const map2 = new Map<number, Array<string>>();

  const deletedGames: Array<Array<string>> = [];

  const gameMap1 = (completeGame: IGameBuilder) => {
    map1.set(completeGame.uuid, completeGame);
  };

  const minus_minutes = (minutes: number) => {
    const time = Math.round(Date.now() / timeConversion - minutes);
    return time;
  };

  const deleteOldGames = (minutes: number) => {
    const dayPrior: number = minus_minutes(minutes);

    for (const [key, value] of map2) {
      if (key < dayPrior) {
        deletedGames.push(value);
        map2.delete(key);
      }
    }
  };

  const getMap1 = () => map1;

  const getMap2 = () => map2;

  return { gameMap1, deleteOldGames, getMap1, getMap2 };
}

gameMaps().gameMap1(CompleteChutesAndLadders);
console.log(gameMaps().getMap1());
console.log(gameMaps().getMap2());
