import { PrismaClient } from '@prisma/client';
import { Router } from 'express';

import { getProjectRoutes } from './project';
import { getUserRoutes } from './user';

const projectRouter = Router();
const userRouter = Router();

export function getApiRoutes(router: Router, prisma: PrismaClient) {
    router.use('/projects', getProjectRoutes(projectRouter, prisma));
    router.use('/users', getUserRoutes(userRouter, prisma));

    return router;
}
