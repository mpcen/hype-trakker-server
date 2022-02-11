import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

import { projectRouter } from './project';

const router = Router();

router.use('/projects', projectRouter);

export { router as apiRouter };
