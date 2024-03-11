import { Router, Request, Response } from 'express';
import { ChutesAndLaddersRules, TicTacToe } from '@hjackson/model';

const listGames = (req: Request, resp: Response) => {
  resp.json([ChutesAndLaddersRules, TicTacToe]);
}

export class GameRoutes {
  constructor (router: Router) {
    router.get('/games', listGames);
  }
}