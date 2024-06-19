import { test, expect } from 'vitest';
import { fetchGamesFromServer } from './functions/server';
import sampleGames from '../server/sampleGames.json';

test('Get all games', async () => {
  const response = await fetchGamesFromServer();
  expect(response.data).toEqual(sampleGames);
});