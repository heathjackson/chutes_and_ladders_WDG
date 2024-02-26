import { Router, Request, Response } from 'express';
import { ChutesAndLadders, PlayChutesAndLadders, TicTacToe } from '@hjackson/model';

const listGames = (req: Request, resp: Response) => {
  resp.json([ChutesAndLadders, TicTacToe])
}

const playChutesAndLadders = (req: Request, resp: Response) => {
  resp.json(PlayChutesAndLadders)
}

export class GameRoutes {
  constructor (router: Router) {
    router.get('/games', listGames);
    router.get('/games/chutesandladders', playChutesAndLadders)
  }
}