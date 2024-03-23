import { Router, Request, Response, NextFunction } from 'express';
import {
  ChutesAndLaddersRules,
  tic_tac_toe,
  CompleteChutesAndLadders,
  IGameBuilder,
  Complete_tic_tac_toe,
} from '@hjackson/model';

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
    resp.json(ChutesAndLaddersRules);
  } else {
    resp.json(tic_tac_toe);
  }
};

const playableGame = (req: Request, resp: Response) => {
  const selectedGame = req.params.id;
  if (selectedGame === 'chutes_and_ladders') {
    resp.json(CompleteChutesAndLadders as IGameBuilder);
  } else {
    resp.json(Complete_tic_tac_toe as IGameBuilder);
  }
};

export class GameRoutes {
  constructor(router: Router) {
    router.use(path_method);
    router.get('/games', listGames);
    router.get('/games/:id', gameInfo);
    router.post('/games/:id', playableGame);
  }
}
