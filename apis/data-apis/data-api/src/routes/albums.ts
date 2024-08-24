import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const albums = async (req: Request, resp: Response) => {
  const allAlbums = await prisma.album.findMany();
  resp.status(200).json(allAlbums);
};

const getAlbum = async (req: Request, resp: Response) => {
  const { title } = req.params;

  const findAlbum = await prisma.album.findMany({
    where: {
      title
    },
  });
  resp.status(200).json(findAlbum);
};

const addAlbum = async (req: Request, resp: Response) => {
  const { title, artist_id } = req.body;

  const newAlbum = await prisma.album.create({
    data: {
      title,
      artist_id
    },
  });
  resp.status(200).json(newAlbum);
};

const updateAlbum = async (req: Request, resp: Response) => {
  const { album_id, title } = req.body;

  const changedAlbum = await prisma.album.update({
    where: {
      album_id
    },
    data: {
      title
    },
  });

  console.log(
    `The title has been changed to ${changedAlbum.title}`
  );
  resp.status(200).json(changedAlbum);
};

const deleteAlbum = async (req: Request, resp: Response) => {
  const {id} = req.params;
  console.log(`albums.ts id = ${id}`)


  const deleted = await prisma.album.delete({
    where: {
      album_id: Number(id)
    }
  });

  console.log(`deleted = ${JSON.stringify(deleted)}`)
  resp.status(200).json(deleted);
};

export class AlbumRoutes {
  constructor(router: Router) {
    router.get('/albums', albums);
    router.get('/albums/:title', getAlbum);
    router.post('/albums', addAlbum);
    router.put('/albums/:id', updateAlbum);
    router.delete('/albums/:id', deleteAlbum);
  }
}