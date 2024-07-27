import {Request, Response, Router} from 'express'
import {prismaClient} from '@prsima/client'

const router = Router()
const prisma = new PrismaClient()

router.get('/artist', async (req: Request, resp: Response) => (
  const allArtists = await prisma.artist.findMany
  // need to get more code here
))