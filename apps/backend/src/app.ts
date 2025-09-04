import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { errorMiddleware, requestLogger } from './utils/middlewares';
import apiV1Routes from './api/v1/routes';
import { CORS_ORIGIN } from './utils/config';

const app = express();

app.use(helmet());
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());
app.use(requestLogger);

app.get('/health', (_req, res) => {
  let status = 200;
  let message = 'OK';

  res.status(status).send(message);
});

app.use('/api/v1', apiV1Routes);

app.use(errorMiddleware);

export default app;
