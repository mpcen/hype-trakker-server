import express from 'express';
import { urlencoded, json } from 'body-parser';

import { apiRouter } from './routes';

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

app.use('/api', apiRouter);

export { app };
