import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const welcome = (req: Request, resp: Response) => {
  resp.status(200).send({ message: 'Welcome to data-api!' });
};

const artists = async (req: Request, resp: Response) => {
  const allArtists = await prisma.artist.findMany();
  resp.status(200).json(allArtists);
};

const getArtist = async (req: Request, resp: Response) => {
  const { name } = req.body;

  const findArtist = await prisma.artist.findMany({
    where: {
      name: name,
    },
  });
  resp.status(200).json(findArtist);
};

const addArtist = async (req: Request, resp: Response) => {
  const { name } = req.body;
  const newArtist = await prisma.artist.create({
    data: {
      name,
    },
  });

  resp.status(201).json(newArtist);
};

const updateArtist = async (req: Request, resp: Response) => {
  const { id, name } = req.body;

  const changedArtist = await prisma.artist.update({
    where: {
      artist_id: id,
    },
    data: {
      name: name,
    },
  });

  console.log(
    `The artist has been changed to ${JSON.stringify(changedArtist)}`
  );
  resp.status(204).json(changedArtist);
};

const deleteArtist = async (req: Request, resp: Response) => {
  const { id } = req.body;

  const artistDeleted = await prisma.artist.delete({
    where: {
      artist_id: id,
    },
  });
  resp.status(204).json(artistDeleted);
};

export class ArtistRoutes {
  constructor(router: Router) {
    router.get('/', welcome);
    router.get('/artists', artists);
    router.get('/artists/:name', getArtist);
    router.post('/artists', addArtist);
    router.put('/artists/:name', updateArtist);
    router.delete('/artists/:id', deleteArtist);
  }
}
