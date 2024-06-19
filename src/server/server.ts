import express from 'express';
import { getSpecificGame, getAllGames, addFavorite } from './controller';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/games/:id', getSpecificGame);
app.get('/games', getAllGames);

app.post('/games/:id/addFavorite', addFavorite);

export default app;