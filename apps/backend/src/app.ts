import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { requestLogger } from './utils/middlewares';
import apiV1Routes from './api/v1/routes';
import { CORS_ORIGIN } from './utils/config';

const app = express();

app.use(helmet());
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());
app.use(requestLogger);

app.use('/api/v1', apiV1Routes);

export default app;
