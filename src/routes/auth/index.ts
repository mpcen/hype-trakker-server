import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

import { auth } from './auth';

export function getAuthRoutes(router: Router, prisma: PrismaClient) {
    router.post('/', auth(prisma));

    return router;
}
