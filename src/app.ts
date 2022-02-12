import express, { Router } from 'express';
import { urlencoded, json } from 'body-parser';
import { PrismaClient } from '@prisma/client';

import { api } from './routes';

const app = express();
const router = Router();
const prisma = new PrismaClient();

app.use(urlencoded({ extended: true }));
app.use(json());

app.use('/api', api(router, prisma));

export { app };
