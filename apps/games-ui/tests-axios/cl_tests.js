// import { Board } from '../../../libs/model/src/lib/chutesandladders_gl/game_logic/board';

import axios from 'axios';

describe('#getGameList', () => {
  test('gets a list of games playable', async () => {
    const res = await axios.get('http://localhost:3333/api/v1/games');

    const gameList = res.data;
    expect(gameList).toBeTruthy();
  });
});

// describe('Play a game of Chutes and Ladders', () => {
//   const gameID = 'CL1';

//   let gameBoard = new Board([], 100);

// });
