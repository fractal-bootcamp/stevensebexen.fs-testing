import axios, { AxiosResponse } from 'axios';
import constants from '../constants';

export async function fetchGamesFromServer(): Promise<AxiosResponse> {
  return axios.get(`${constants.SERVER_URL}/games`);
}