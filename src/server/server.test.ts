import sampleGames from './sampleGames.json';
import sampleUsers from './sampleUsers.json';
import prisma from './prismaClient';
import request from 'supertest';
import app from './server';
import { beforeAll, afterAll, test, describe, expect } from 'vitest';

const initTestDatabase = async () => {
  await prisma.$transaction([
    prisma.game.createMany({
      data: sampleGames
    }),
    prisma.user.createMany({
      data: sampleUsers
    })
  ]);
};

const clearTestDatabase = async () => {
  await prisma.$transaction([
    prisma.game.deleteMany(),
    prisma.user.deleteMany(),
    prisma.userGameFavorites.deleteMany()
  ]);
}

beforeAll(async () => {
  await initTestDatabase();
});

afterAll(async () => {
  await clearTestDatabase();
});

test('GET /games', async () => {
  const response = await request(app).get('/games')
  expect(response.body.map((x: any) => x.description)).toEqual(sampleGames.map(x => x.description));
});

describe('GET /games/:id', () => {
  test('Get existent game', async () => {
    const response = await request(app).get(`/games/${sampleGames[2].id}`);
    expect(response.body).toEqual({ ...sampleGames[2], id: sampleGames[2].id });
  });
  test('Get nonexistent game', async () => {
    const response = await request(app).get('/games/42069420');
    expect(response.status).toBe(404);
  })
});

describe('POST /games/:id/addFavorite', () => {
  test('Add to user 2\'s favorites', async () => {
    const response = await request(app).post('/games/4/addFavorite').send({ userId: 2 });
    expect(response.status).toBe(200);
  });
  test('Add to nonexistent user\'s favorites', async () => {
    const response = await request(app).post('/games/4/addFavorite').send({ userId: 42069 });
    expect(response.status).toBe(404);
  });
  test('Add nonexistent game to user 2\'s favorites', async () => {
    const response = await request(app).post('/games/42069/addFavorite').send({ userId: 2 });
    expect(response.status).toBe(404);
  });
});