import { Router, Request, Response } from 'express';
import { PlayChutesAndLadders, TicTacToe } from '@hjackson/model';

const listGames = (req: Request, resp: Response) => {
  resp.json([PlayChutesAndLadders, TicTacToe]);
}

const playGame = (req: Request, resp: Response) => {
  resp.json(req.params.id);
}

export class GameRoutes {
  constructor (router: Router) {
    router.get('/games', listGames);
    router.get('/games/:id', playGame)
  }
}