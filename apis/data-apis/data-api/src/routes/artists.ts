import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const welcome = (req: Request, resp: Response) => {
  resp.send({ message: 'Welcome to data-api!' });
};

const artists = async (req: Request, resp: Response) => {
  const allArtists = await prisma.artist.findMany();
  resp.status(200).json(allArtists);
};

export class ArtistRoutes {
  constructor(router: Router) {
    router.get('/', welcome);
    router.get('/artists', artists);
  }
}
