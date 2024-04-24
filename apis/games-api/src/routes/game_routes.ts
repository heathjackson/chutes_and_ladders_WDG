import { Router, Request, Response, NextFunction } from 'express';
import {
  ChutesAndLaddersRules,
  gameMaps,
  tic_tac_toe,
  CompleteChutesAndLadders,
  Complete_tic_tac_toe,
  IGameInfo,
  IGameBuilder,
  Chutes_and_ladders,
} from '@hjackson/model';

const map1 = new Map();
const map2 = new Map();

const mapLogic = gameMaps(map1, map2);

const gameLogic = new Chutes_and_ladders(5, 5);

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

  console.log(`gameCreated = ${JSON.stringify(gameCreated)}`);
  console.log(`uuid = ${gameCreated.uuid}`);

  mapLogic.gameMap1(gameCreated);
  // map1.set(gameCreated.uuid, gameCreated);

  for (const game of map1) {
    console.log(`game = ${game[0]}, ${game[1].dateCreated}`);
  }
  resp.json(gameCreated);
};

const register = (req: Request, resp: Response) => {
  const body = req.body;
  const reg = gameLogic.registerPlayer(body.userName, body.avatar);
  gameLogic.registerPlayer('Heather', 'blue');
  resp.json(reg);
};

export class GameRoutes {
  constructor(router: Router) {
    router.use(path_method);
    router.get('/games', listGames);
    router.get('/games/:id', gameInfo);
    router.post('/games/:id', gameID);
    router.put('/games/:id/register', register);
  }
}
