import sampleData from './sampleData.json';
import prisma from './prismaClient';
import request from 'supertest';
import app from './server';

const testGameIds: Array<number> = [];

const initTestDatabase = async () => {
  const gameIds = await prisma.game.createManyAndReturn({
    data: sampleData,
    select: {
      id: true
    }
  });

  return gameIds.map(x => x.id);
};

const clearTestDatabase = async () => {
  await prisma.game.deleteMany({
    where: {
      id: {
        in: testGameIds
      }
    }
  });
}

beforeAll(async () => {
  const gameIds = await initTestDatabase();
  testGameIds.push(...gameIds);
});

afterAll(async () => {
  await clearTestDatabase();
});

test('GET /games', async () => {
  const response = await request(app).get('/games')
  console.log(sampleData.map(x => x.description));
  console.log(response.body.map((x: any) => x.description));
  expect(response.body.map((x: any) => x.description)).toEqual(sampleData.map(x => x.description));
});