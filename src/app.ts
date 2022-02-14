import express, { Router } from 'express';
import { urlencoded, json } from 'body-parser';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

import { getApiRoutes } from './routes';

const app = express();
const apiRouter = Router();
const prisma = new PrismaClient();

app.use(cors());

app.use(urlencoded({ extended: true }));
app.use(json());

app.use('/api', getApiRoutes(apiRouter, prisma));

export { app };
