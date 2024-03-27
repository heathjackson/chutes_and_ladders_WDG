import { Router, Request, Response, NextFunction } from 'express';
import {
  ChutesAndLaddersRules,
  tic_tac_toe,
  CompleteChutesAndLadders,
  Complete_tic_tac_toe,
  IPlayGame,
  IGameInfo,
  gameMaps,
} from '@hjackson/model';

//maps go here and act like a database
//instantiate new game here
const newGameMaps = gameMaps();

const path_method = (req: Request, resp: Response, next: NextFunction) => {
  console.log(req.path, req.method);
  next();
};

const listGames = (req: Request, resp: Response) => {
  resp.json([ChutesAndLaddersRules, tic_tac_toe]);
};

const gameInfo = (req: Request, resp: Response) => {
  const selectedGameInfo = req.params.id;
  if (selectedGameInfo === 'chutes_and_ladders') {
    resp.json(ChutesAndLaddersRules as IGameInfo);
  } else {
    resp.json(tic_tac_toe as IGameInfo);
  }
};

const playableGame = (req: Request, resp: Response) => {
  let gameCreated;
  const selectedGame = req.params.id;
  if (selectedGame === 'chutes_and_ladders') {
    gameCreated = CompleteChutesAndLadders as IPlayGame;
  } else {
    gameCreated = Complete_tic_tac_toe as IPlayGame;
  }
  newGameMaps.gameMap1(gameCreated);
  // console.log(newGameMaps.getMap1());
  resp.json(gameCreated);
};

export class GameRoutes {
  constructor(router: Router) {
    router.use(path_method);
    router.get('/games', listGames);
    router.get('/games/:id', gameInfo);
    router.post('/games/:id', playableGame);
  }
}
