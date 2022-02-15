import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

import { createUserProject } from './user-projects-create';
import { requireAuth } from '../../middleware/requireAuth';

export function getUserProjectRoutes(router: Router, prisma: PrismaClient) {
    router.use(requireAuth);
    router.post('/', createUserProject(prisma));

    return router;
}
