import http from 'http';
import app from './src/app';
import { PORT } from './src/utils/config';
import logger from './src/utils/logger';

const httpServer = http.createServer(app);

httpServer.listen(PORT, () => logger.info(`App running on a port ${PORT}`));
