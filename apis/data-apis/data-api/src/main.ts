/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import cors from 'cors';
import express from 'express';
import * as path from 'path';
import { ArtistRoutes } from './routes/artists';

const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();
app.use(express.json());
const router = express.Router();

app.use(
  '/assets',
  cors(corsOptions),
  express.static(path.join(__dirname, 'assets'))
);
app.use('/api/v2', cors(corsOptions), router);
new ArtistRoutes(router);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

