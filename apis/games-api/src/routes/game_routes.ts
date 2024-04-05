import { Router, Request, Response, NextFunction } from 'express';
import {
  ChutesAndLaddersRules,
  tic_tac_toe,
  CompleteChutesAndLadders,
  Complete_tic_tac_toe,
  IGameInfo,
  gameMaps,
  IGameBuilder,
  Chutes_and_ladders,
} from '@hjackson/model';

//maps go here and act like a database
const gameLogic = new Chutes_and_ladders(5, 5);
const newGameMaps = gameMaps();

const path_method = (req: Request, resp: Response, next: NextFunction) => {
  console.log(req.path, req.method);
  next();
};

const listGames = (req: Request, resp: Response) => {
  resp.json([ChutesAndLaddersRules.name, tic_tac_toe.name]);
};

const gameInfo = (req: Request, resp: Response) => {
  const selectedGameInfo = req.params.id;
  console.log(selectedGameInfo);
  if (selectedGameInfo === 'chutes_and_ladders') {
    resp.json([ChutesAndLaddersRules as IGameInfo]);
  } else {
    resp.json([tic_tac_toe as IGameInfo]);
  }
}; //change this to variable

const playableGame = (req: Request, resp: Response) => {
  let gameCreated;
  const selectedGame = req.params.id;
  if (selectedGame === 'chutes_and_ladders') {
    gameCreated = CompleteChutesAndLadders as IGameBuilder;
  } else {
    gameCreated = Complete_tic_tac_toe as IGameBuilder;
  }
  newGameMaps.gameMap1(gameCreated);
  console.log(`map1 = ${newGameMaps.getMap1()}`);
  resp.json(gameCreated);
};

const register = (req: Request, resp: Response) => {
  const body = req.body;
  const reg = gameLogic.registerPlayer(body.userName, body.avatar);
  resp.json(reg);
};

export class GameRoutes {
  constructor(router: Router) {
    router.use(path_method);
    router.get('/games', listGames);
    router.get('/games/:id', gameInfo);
    router.post('/games/:id/playGame', playableGame);
    router.put('/games/:id/register', register);
  }
}
