import { Router, Request, Response } from 'express';
import { ChutesAndLaddersRules, tic_tac_toe } from '@hjackson/model';
import { Chutes_and_ladders } from '@hjackson/chutes-and-ladders';
import { ISpace } from '@hjackson/chutes-and-ladders';
import { randomUUID } from 'crypto';
//put get here in front of constants
const listGames = (req: Request, resp: Response) => {
  resp.json([ChutesAndLaddersRules, tic_tac_toe]);
};

const gameID = (req: Request, resp: Response) => {
  const gameID = randomUUID().toString() as string;
  const gameInstanceMap = req.app.get('gameInstanceMap');
  //map is used as a database to save the game uuid with the game created object which includes the instance of game

  const game = new Chutes_and_ladders(5, 5);
  gameInstanceMap.set(gameID, game);
  resp.json({ gameID: gameID });
};

const register = (req: Request, resp: Response) => {
  const body = req.body;
  const uuid = body.gameInstanceId as string;
  const gameInstanceMap = req.app.get('gameInstanceMap');

  const game = gameInstanceMap.get(uuid as string);

  const gameSpaceValues = game.allGameSpacesArray.map((el: ISpace) => {
    if (el.special === null) {
      return {
        value: el.value,
        type: el.type,
      };
    } else {
      return {
        value: el.value,
        type: el.type,
        special: el.special.value,
        specialType: el.special.type,
      };
    }
  });
  console.log(gameSpaceValues);
  resp.json({ 'game spaces values': gameSpaceValues });
};

export class GameRoutes {
  constructor(router: Router) {
    router.get('/games', listGames); //listGames function is the controller
    router.post('/games/:id', gameID);
    router.post('/games/:id/register', register);
  }
}
