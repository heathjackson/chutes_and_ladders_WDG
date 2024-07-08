/* eslint-disable */

import axios from 'axios';

module.exports = async function () {
  // Configure axios for tests to use.
  const host = process.env.HOST ?? 'localhost';
  const port = process.env.PORT ?? '3000';
  axios.defaults.baseURL = `http://${host}:${port}`;
};

describe('#getListGames', () => {
  test.skip('gets a list of games playable', async () => {
    const res = await axios.get('http://localhost:3333/api/v1/games');

    const gameList = res.data;
    expect(gameList).toBeTruthy();
  });
});
