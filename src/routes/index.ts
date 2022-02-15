import { PrismaClient } from '@prisma/client';
import { Router } from 'express';

import { getProjectRoutes } from './project';
import { getUserRoutes } from './user';
import { getAuthRoutes } from './auth';
import { getUserProjectRoutes } from './user-projects';

const projectRouter = Router();
const userRouter = Router();
const authRouter = Router();
const userProjectsRouter = Router();

export function getApiRoutes(apiRouter: Router, prisma: PrismaClient) {
    apiRouter.use('/projects', getProjectRoutes(projectRouter, prisma));
    apiRouter.use('/users', getUserRoutes(userRouter, prisma));
    apiRouter.use('/auth', getAuthRoutes(authRouter, prisma));
    apiRouter.use('/userprojects', getUserProjectRoutes(userProjectsRouter, prisma));

    return apiRouter;
}
