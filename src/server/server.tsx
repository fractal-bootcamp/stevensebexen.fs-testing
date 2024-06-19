import express, { Request, Response } from 'express';
import prisma from './prismaClient';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

const app = express();

// Responds with an array of games.
const getAllGames = async (_: Request, res: Response) => {
  const games = await prisma.game.findMany();
  console.log('Handled request on /games.');
  res.json(games);
};
// Gets details for a specific game.
const getSpecificGame = async (req: Request, res: Response) => {
  const _gameId = req.params.id;
  if (!_gameId) {
    console.log('Bad request to /games/:id missing ID.');
    res.status(400).json({ message: 'ID is a required field.' });
    return;
  }
  const gameId = parseInt(_gameId);

  const game = await prisma.game.findUnique({
    where: {
      id: gameId
    }
  });

  if (!game) {
    console.log(`Bad request to /games/:id ID ${gameId} not found.`);
    res.status(404).json({ message: `Game with ID ${gameId} not found.`});
  } else {
    console.log(`Handled request at /games/${gameId}.`);
    res.json(game);
  }
};
// Creates a new UserGameFavorite entry from the gameId in the URL and userId in the body.
const addFavorite = async (req: Request, res: Response) => {
  const _gameId = req.params.id;
  if (!_gameId) {
    console.log('Request to /games/:id/addFavorite missing ID.');
    res.status(400).json({ message: 'ID is a required field.' });
    return;
  }
  const gameId = parseInt(_gameId);

  const userId = req.body.userId;
  if (!userId) {
    console.log(`Request to /games/${gameId}/addFavorite missing body.userId.`);
    res.status(400).json({ message: 'Missing userId in request body.' });
    return;
  }

  try {
    await prisma.userGameFavorites.create({
      data: {
        gameId,
        userId
      }
    });
  } catch (e) {
    if (e instanceof PrismaClientKnownRequestError) {
      console.log(`Attempt to create favorite with user(${userId}) and game(${gameId}) failed. Nonexistent id.`);
      res.status(404).json({ message: `Attempt to add game ${gameId} to user ${userId}'s favorites failed. One or both IDs are invalid.`});
      return;
    }
  }

  console.log(`Created new favorite: game(${gameId}) user(${userId}).`);
  res.json({ message: 'Success!' });
}

app.use(express.json());

app.get('/games/:id', getSpecificGame);
app.get('/games', getAllGames);

app.post('/games/:id/addFavorite', addFavorite);

export default app;