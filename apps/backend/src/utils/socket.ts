import { Server } from 'socket.io';
import {
  ClientToServerEvents,
  InterServerEvents,
  ServerToClientEvents,
  SocketData,
} from '../types/Sockets';
import { getUserFromToken } from './auth';
import { createGame } from '../api/v1/serivces/game';

const initializeSocket = (
  io: Server<
    ClientToServerEvents,
    ServerToClientEvents,
    InterServerEvents,
    SocketData
  >
) => {
  io.use((socket, next) => {
    const token = socket.handshake.auth.token;

    const user = getUserFromToken(token);

    if (!user) {
      return next(new Error('Authentication error'));
    }

    socket.data.user = user;

    next();
  });

  io.on('connection', (socket) => {
    const { user } = socket.data;

    socket.on('createGame', async () => {
      try {
        const game = await createGame(user.id);

        socket.join(game.slug);

        socket.emit('gameCreated', game);
      } catch (error) {
        socket.emit('error', 'Failed to create game');
      }
    });

    socket.on('joinGame', async (slug) => {
      try {
      } catch (error) {
        socket.emit('error', 'Failed to join a game');
      }
    });
  });
};

export default initializeSocket;
