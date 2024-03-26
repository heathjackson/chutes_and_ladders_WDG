import { IPlayGame } from '../model';

export function gameMaps() {
  let uuidArray = new Array<string>();
  const map1 = new Map<string, IPlayGame>();
  const map2 = new Map<number, Array<string>>();
  const minutes = 1440; //1440 minutes in a day used to subtract a day from the current time
  // 60000 milliseconds in a minute will convert Date.now() from milliseconds to minutes
  const timeConversion = 60000;
  const currentTime = Math.round(Date.now() / timeConversion);

  //map uuid to game being played
  //map date and time to uuid so games can be deleted at intervals

  //number = date Array = array of all the uuids

  const deletedGames: Array<Array<string>> = [];

  const gameMap1 = (completeGame: IPlayGame) => {
    //convert date created to time conversion chosen above
    completeGame.dateCreated = currentTime;
    map1.set(completeGame.uuid, completeGame);
    uuidArray.push(completeGame.uuid);
  };

  const setGameMap2 = () => {
    map2.set(currentTime, uuidArray);
    uuidArray = [];
  };

  const minus_minutes = () => {
    const time = Math.round(Date.now() / timeConversion - minutes);
    return time;
  };

  const deleteOldGames = () => {
    const dayPrior: number = minus_minutes();

    for (const [key, value] of map2) {
      if (key < dayPrior) {
        deletedGames.push(value);
        map2.delete(key);
      }
    }
  };

  const getMap1 = () => {
    // eslint-disable-next-line prefer-const
    return [...map1.entries()];
  };

  const getMap2 = () => {
    // eslint-disable-next-line prefer-const
    return [...map2.entries()];
  };

  return { gameMap1, deleteOldGames, getMap1, getMap2, setGameMap2 };
}
