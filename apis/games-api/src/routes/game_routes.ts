import { Router, Request, Response } from 'express';
import { ChutesAndLadders, PlayChutesAndLadders, TicTacToe } from '@hjackson/model';
import { mapArr, map2 } from '../data/maps';

const listGames = (req: Request, resp: Response) => {
  resp.json([ChutesAndLadders, TicTacToe]);
}

const game = (req: Request, resp: Response) => {
  resp.json(PlayChutesAndLadders);
}

const map1 = (req: Request, resp: Response) => {
  resp.json(mapArr);
}

const map2Data = (req: Request, resp: Response) => {
  resp.json(map2);
}


export class GameRoutes {
  constructor (router: Router) {
    router.get('/games', listGames);
    router.get('/games/:id', game);
    router.get('/games/:id/map1', map1);
    router.get('/games/:id/map2', map2Data);
  }
}