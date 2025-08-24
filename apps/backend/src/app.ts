import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { requestLogger } from './utils/middlewares';
import apiV1Routes from './api/v1/routes';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.use('/api/v1', apiV1Routes);

export default app;
