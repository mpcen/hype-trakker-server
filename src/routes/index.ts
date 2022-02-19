import { PrismaClient } from '@prisma/client';
import { Router } from 'express';
import { getAuthRoutes } from './auth';

import { getProjectRoutes } from './project';
import { getUserRoutes } from './user';

const projectRouter = Router();
const userRouter = Router();
const authRouter = Router();

export function getApiRoutes(apiRouter: Router, prisma: PrismaClient) {
    apiRouter.use('/projects', getProjectRoutes(projectRouter, prisma));
    apiRouter.use('/users', getUserRoutes(userRouter, prisma));
    apiRouter.use('/auth', getAuthRoutes(authRouter, prisma));

    return apiRouter;
}
