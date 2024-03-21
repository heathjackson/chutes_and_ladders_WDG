import { Router, Request, Response, NextFunction } from 'express';
import {
  ChutesAndLaddersRules,
  TicTacToe,
  CompleteChutesAndLadders,
  IGameBuilder,
  CompleteTicTacToe,
} from '@hjackson/model';
import gameMaps from '../data/maps';

const createMaps = gameMaps();

const path_method = (req: Request, resp: Response, next: NextFunction) => {
  console.log(req.path, req.method);
  next();
};

const listGames = (req: Request, resp: Response) => {
  resp.json([ChutesAndLaddersRules, TicTacToe]);
};

const gameInfo = (req: Request, resp: Response) => {
  const selectedGameInfo = req.params.id;
  if (selectedGameInfo === 'Chutes and Ladders') {
    resp.json(ChutesAndLaddersRules);
  } else {
    resp.json(TicTacToe);
  }
};

const playableGame = (req: Request, resp: Response) => {
  const selectedGame = req.params.id;
  let game: IGameBuilder;
  if (selectedGame === 'Chutes and Ladders') {
    game = CompleteChutesAndLadders as IGameBuilder;
  } else {
    game = CompleteTicTacToe as IGameBuilder;
  }

  createMaps.gameMap1(game);
  const map1 = createMaps.getMap1();
  const map2 = createMaps.getMap2();

  resp.json({ map1, map2 });
};

export class GameRoutes {
  constructor(router: Router) {
    router.use(path_method);
    router.get('/games', listGames);
    router.get('/games/:id', gameInfo);
    router.post('/games/:id', playableGame);
  }
}
