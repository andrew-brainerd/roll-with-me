import { prop } from 'ramda';
import { client } from './tools';
import { SOLO_GAME } from '../constants/game';

export const createGame = async (type = SOLO_GAME, createdBy = 'System') => {
  const response = await client.post('/games', { type, createdBy })
    .then(prop('data'))
    .catch(err => console.error(err));

  return response;
};

export const loadPlayerGames = async playerId => {
  const response = await client.get('/games', { params: { playerId } })
    .then(prop('data'))
    .catch(err => console.error(err));

  return response;
};

export const loadGame = async gameId => {
  const response = await client.get(`/games/${gameId}`)
    .then(prop('data'))
    .catch(err => console.error(err));

  return response;
};

export const deleteGame = async gameId => {
  const response = client.delete(`/games/${gameId}`);

  return prop('data', response);
};

export const getPlayers = async gameId => {
  const response = await client.get(`/games/${gameId}/players`);

  return prop('data', response);
};

export const addPlayer = async (gameId, playerId) => {
  const response = await client.patch(`/games/${gameId}/players`, { playerId });

  return prop('data', response);
};

export const saveGame = async (gameId, game) => {
  const response = await client.patch(`/games/${gameId}`, { game });

  return prop('data', response);
};
