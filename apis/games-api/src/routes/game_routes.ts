import { Router, Request, Response } from 'express';
import {
  ChutesAndLaddersRules,
  IGameBoard,
  tic_tac_toe,
} from '@hjackson/model';
import { Chutes_and_ladders } from '@hjackson/chutes-and-ladders';
import { randomUUID } from 'crypto';
//put get here in front of constants
const sendListGames = (req: Request, resp: Response) => {
  resp.json([ChutesAndLaddersRules, tic_tac_toe]);
};

const sendGameID = (req: Request, resp: Response) => {
  const gameInstanceId = randomUUID().toString() as string;
  const gameInstanceMap = req.app.get('gameInstanceMap');
  //map is used as a database to save the game uuid with the game created object which includes the instance of game

  const game = new Chutes_and_ladders(5, 5);
  gameInstanceMap.set(gameInstanceId, game);
  resp.json({ gameID: gameInstanceId });
};

const registerAndSendGameBoard = (req: Request, resp: Response) => {
  const { userName, color, gameInstanceId } = req.body;
  const gameInstanceMap = req.app.get('gameInstanceMap');

  const game = gameInstanceMap.get(gameInstanceId as string);
  const gameSpaceValues: IGameBoard = game.displayBoard();

  //register the player and their avatar
  game.registerPlayer(userName, color);
  console.log(gameInstanceMap);
  resp.json({ gameSpaceValues: gameSpaceValues });
};

export class GameRoutes {
  constructor(router: Router) {
    router.get('/games', sendListGames);
    router.post('/games/:id', sendGameID);
    router.patch('/games/:id/register', registerAndSendGameBoard);
  }
}
