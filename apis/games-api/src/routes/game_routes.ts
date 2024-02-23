import {Router, Request, Response} from 'express';
import { ChutesAndLadders, TicTacToe } from '@hjackson/model';

const listGames = (req: Request, resp: Response) => {
  resp.json([ChutesAndLadders, TicTacToe])
}

export class GameRoutes {
  constructor(router: Router) {
    router.get('/games', listGames);
  }
}