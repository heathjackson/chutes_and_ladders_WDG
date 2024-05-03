import { Router, Request, Response, NextFunction } from 'express';
import {
  ChutesAndLaddersRules,
  tic_tac_toe,
  CompleteChutesAndLadders,
  Complete_tic_tac_toe,
  IGameInfo,
  IGameBuilder,
} from '@hjackson/model';

const map1 = new Map();

const path_method = (req: Request, resp: Response, next: NextFunction) => {
  console.log(req.path, req.method);
  next();
};

const listGames = (req: Request, resp: Response) => {
  resp.json([ChutesAndLaddersRules.name, tic_tac_toe.name]);
};

const gameInfo = (req: Request, resp: Response) => {
  const selectedGameInfo = req.params.id;

  if (selectedGameInfo === 'chutes_and_ladders') {
    resp.json([ChutesAndLaddersRules as IGameInfo]);
  } else {
    resp.json([tic_tac_toe as IGameInfo]);
  }
}; //change this to variable

const gameID = (req: Request, resp: Response) => {
  let gameCreated: IGameBuilder;
  const selectedGame = req.params.id;
  if (selectedGame === 'chutes_and_ladders') {
    gameCreated = CompleteChutesAndLadders;
  } else {
    gameCreated = Complete_tic_tac_toe;
  }
  //map is used as a database to save the game uuid with the game created object which includes the instance of game
  map1.set(gameCreated.uuid, gameCreated);
  resp.json(gameCreated.uuid);
};

const register = (req: Request, resp: Response) => {
  const body = req.body;
  const uuid = body.uuid;
  const game = map1.get(uuid) as IGameBuilder;

  //register player using their name and avatar chosen
  game.gameInstance.registerPlayer(body.userName, body.avatar);
  const board = game.gameInstance.getUnlinkedArray();
  console.log(`api board = ${JSON.stringify(board)}`);
  resp.json(board);
};

export class GameRoutes {
  constructor(router: Router) {
    router.use(path_method);
    router.get('/games', listGames);
    router.get('/games/:id', gameInfo);
    router.post('/games/:id', gameID);
    router.post('/games/:id/register', register);
  }
}
