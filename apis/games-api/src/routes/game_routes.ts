import { Router, Request, Response, NextFunction } from 'express';
import {
  ChutesAndLaddersRules,
  tic_tac_toe,
  Chutes_and_ladders,
} from '@hjackson/model';
import { randomUUID } from 'crypto';

const path_method = (req: Request, resp: Response, next: NextFunction) => {
  console.log(req.path, req.method);
  next();
};

const listGames = (req: Request, resp: Response) => {
  resp.json([ChutesAndLaddersRules, tic_tac_toe]);
};

const gameID = (req: Request, resp: Response) => {
  console.log('called as well');
  const gameID = randomUUID().toString() as string;
  const gameInstanceMap = req.app.get('gameInstanceMap');
  //map is used as a database to save the game uuid with the game created object which includes the instance of game

  const game = new Chutes_and_ladders(5, 5);
  gameInstanceMap.set(gameID, game);
  console.log(gameID);

  resp.json({ gameID: gameID });
};

const register = (req: Request, resp: Response) => {
  const body = req.body;
  const uuid = body.gameInstanceId as string;
  const gameInstanceMap = req.app.get('gameInstanceMap');

  // console.log('in register', gameInstanceMap);

  // console.log(gameInstanceMap.entries());
  const game = gameInstanceMap.get(uuid as string);
  console.log('in map in register', game);

  //register player using their name and avatar chosen
  // game.gameInstance.registerPlayer(body.userName, body.avatar);
  // const board = game.gameInstance.getUnlinkedArray();

  // resp.json(board);
  resp.json({ message: 'message' });
};

export class GameRoutes {
  constructor(router: Router) {
    router.use(path_method);
    router.get('/games', listGames); //listGames function is the controller
    router.post('/games/:id', gameID);
    router.post('/games/:id/register', register);
  }
}
