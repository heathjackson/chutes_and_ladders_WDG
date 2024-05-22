/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import cors from 'cors';
import express from 'express';
import * as path from 'path';
import { GameRoutes } from './routes/game_routes';

const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();

//middleware used in Net Ninja MERN tutorial - not sure if I'll need it here
app.use(express.json());

const router = express.Router();
const gameInstanceMap = new Map<string, unknown>();

app.set('gameInstanceMap', gameInstanceMap);
app.use(
  '/assets',
  cors(corsOptions),
  express.static(path.join(__dirname, 'assets'))
);
app.use('/api/v1', cors(corsOptions), router);
new GameRoutes(router);

const port = process.env.PORT || 3333; //should this go in env file?
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api/v1`);
});
server.on('error', console.error);
