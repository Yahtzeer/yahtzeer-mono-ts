import http from 'http';
import { Server } from 'socket.io';
import app from './src/app';
import { PORT } from './src/utils/config';
import logger from './src/utils/logger';
import initializeSocket from './src/utils/socket';
import {
  ClientToServerEvents,
  InterServerEvents,
  ServerToClientEvents,
  SocketData,
} from './src/types/Sockets';

const httpServer = http.createServer(app);

const io = new Server<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>(httpServer);

initializeSocket(io);

httpServer.listen(PORT, () => logger.info(`App running on a port ${PORT}`));
